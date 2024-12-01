class AudioRecorder {
    constructor(audioSource) {
      this.audioSource = audioSource;
      this.audioElement = document.getElementById('audioPlayer');
      this.startButton = document.getElementById('start');
      this.stopButton = document.getElementById('stop');
      this.refresh =document.getElementById('refreshButton');
     
      this.statusElement = document.getElementById('status');
      this.downloadContainer = document.getElementById('downloadLinkContainer');
  
      this.mediaRecorder = null;
      this.audioChunks = [];
      this.audioContext = null;
      this.destinationNode = null;
      this.sourceNode = null;
  
      this.setupAudioSource();
      this.initializeEventListeners();
    }
  
    setupAudioSource() {
      if (this.audioSource) {
        this.audioElement.src = this.audioSource;
        this.audioElement.crossOrigin = 'anonymous';
      }
    }
  
    initializeEventListeners() {
      this.startButton.addEventListener('click', () => this.toggleRecording());
      this.stopButton.addEventListener('click', () => this.stopRecording());
      this.audioElement.addEventListener('error', (e) => this.handleAudioError(e));
    }
  
    updateStatus(message, isError = false) {
        if (!this.statusElement) return;
    
        // Mettre à jour le message et la classe
        this.statusElement.textContent = message;
        this.statusElement.className = isError ? 'error' : 'success';
        this.statusElement.style.display = 'block'; // Afficher le message
    
        // Si c'est une erreur, ajouter un gestionnaire d'événements pour masquer le message au clic
        if (isError) {
            const hideMessage = () => {
                this.statusElement.style.display = 'none'; // Masquer le message
                document.removeEventListener('click', hideMessage); // Supprimer l'écouteur
            };
    
            // Écouter le clic sur le document pour masquer le message d'erreur
            document.addEventListener('click', hideMessage);
        }
    }
    
    async closeAudioContext() {
      if (this.audioContext) {
        this.destinationNode?.disconnect();
        this.sourceNode?.disconnect();
        await this.audioContext.close();
        this.audioContext = null;
        this.sourceNode = null;
        this.destinationNode = null;
      }
    }
  
    async toggleRecording() {
      if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
        this.stopRecording();
      } else {
        await this.startRecording();
      }
    }
  
    async startRecording() {
      try {
        this.updateStatus('');
        this.downloadContainer.style.display = 'none';
        this.audioChunks = []; // Reset audio chunks
    
        // Ensure the audio element is ready
        if (this.audioElement.src === '') {
          this.updateStatus('Choisissez la station à enregistrer', true);
          return;
        }
    
        await this.closeAudioContext(); // Ensure previous context is closed
    
        // Create a new AudioContext and MediaStreamDestination
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.destinationNode = this.audioContext.createMediaStreamDestination();
        this.sourceNode = this.audioContext.createMediaElementSource(this.audioElement);
    
        // Connect the source node to the destination
        this.sourceNode.connect(this.destinationNode);
        this.sourceNode.connect(this.audioContext.destination); // Keep the audio playing
    
        // Start the recording timer
        this.recordingStartTime = Date.now();
        this.recordingTimer = setInterval(() => {
          const elapsedTime = Math.floor((Date.now() - this.recordingStartTime) / 1000);
          const minutes = Math.floor(elapsedTime / 60);
          const seconds = elapsedTime % 60;
          this.updateStatus(`Enregistrement en cours... ${minutes}:${seconds.toString().padStart(2, '0')}`, false);
        }, 1000);
    
        // Create MediaRecorder with the destination stream
        this.mediaRecorder = new MediaRecorder(this.destinationNode.stream, {
          mimeType: 'audio/webm',
        });
    
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };
    
        this.mediaRecorder.onstop = () => {
          // Clear the recording timer
          clearInterval(this.recordingTimer);
          
          // Create a blob from recorded chunks
          const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
          
          // Convert to MP3
          this.convertToMP3(audioBlob);
        };
    
        // Play the audio without interruption
        await this.audioElement.play();
        this.mediaRecorder.start();
    
        this.startButton.classList.add('rec-effect');
        this.stopButton.style.display = 'block';
      } catch (error) {
        console.error('Error starting recording:', error);
        this.updateStatus('Erreur lors du démarrage de l\'enregistrement', true);
        this.startButton.style.display = 'none';
      }
    }
    
    stopRecording() {
      if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
        // Clear the recording timer
        if (this.recordingTimer) {
          clearInterval(this.recordingTimer);
        }
    
        // Stop the recording
        this.mediaRecorder.stop();
        
        // Ensure status is updated with a more descriptive message
        this.updateStatus('Enregistrement arrêté. Préparation de votre audio en cours...', false);
        
        // Hide buttons
        this.startButton.style.display = 'none';
        this.stopButton.style.display = 'none';
        
        // Remove recording effect
        this.startButton.classList.remove('rec-effect');
      }
    }
    
    convertToMP3(blob) {
      // Immediately show preparation status
      this.updateStatus('Démarrage de la préparation de l\'audio...', false);
    
      // Create a progress container with more robust error handling
      const progressContainer = document.createElement('div');
      progressContainer.className = 'progress-container';
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressContainer.appendChild(progressBar);
      this.downloadContainer.innerHTML = ''; // Clear previous content
      this.downloadContainer.appendChild(progressContainer);
    
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const arrayBuffer = reader.result;
          const audioContext = new AudioContext();
    
          audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
            if (typeof lamejs === 'undefined') {
              this.updateStatus('Erreur : Bibliothèque MP3 non chargée', true);
              progressContainer.remove();
              return;
            }
    
            const samples = audioBuffer.getChannelData(0);
            const int16Samples = new Int16Array(samples.map(sample => sample < 0 ? sample * 32768 : sample * 32767));
    
            const mp3Encoder = new lamejs.Mp3Encoder(1, audioBuffer.sampleRate, 128);
            const mp3Data = [];
            const sampleBlockSize = 1152;
            const totalBlocks = Math.ceil(int16Samples.length / sampleBlockSize);
    
            const encodeNextBlock = (currentBlock) => {
              // Utiliser setInterval au lieu de requestAnimationFrame
              const encodingInterval = setInterval(() => {
                if (currentBlock >= totalBlocks) {
                  clearInterval(encodingInterval);
                  
                  // Finalize encoding
                  const mp3buf = mp3Encoder.flush();
                  if (mp3buf.length > 0) {
                    mp3Data.push(mp3buf);
                  }
    
                  const mp3Blob = new Blob(mp3Data, { type: 'audio/mp3' });
                  const url = URL.createObjectURL(mp3Blob);
    
                  const downloadLink = document.createElement('a');
                  downloadLink.href = url;
                  downloadLink.download = `Birastat_Record.${new Date().toLocaleString('fr-FR').replace(/:/g, '_')}.mp3`;
                  downloadLink.innerHTML = '<i class="fas fa-download"></i>';
                  downloadLink.className = 'download-link';
    
                  downloadLink.addEventListener('click', () => {
                    setTimeout(() => {
                      this.downloadContainer.style.display = 'none';
                      this.updateStatus('');
                      this.updateStatus("Actualiser la page pour pouvoir enregistrer", true);
                      this.refresh.style.display = 'block';
                      this.startButton.style.display = 'none';
                    }, 500);
                  });
    
                  // Clear previous content and add download link
                  this.downloadContainer.innerHTML = '';
                  this.downloadContainer.appendChild(downloadLink);
                  
                  this.updateStatus('Audio bien enregistré. Vous pouvez télécharger.', false);
                  this.downloadContainer.style.display = 'block';
                  
                  // Remove progress bar
                  progressContainer.remove();
    
                  return;
                }
    
                // Encode a block of samples
                const sampleChunk = int16Samples.slice(
                  currentBlock * sampleBlockSize, 
                  (currentBlock + 1) * sampleBlockSize
                );
                const mp3buf = mp3Encoder.encodeBuffer(sampleChunk);
                
                if (mp3buf.length > 0) {
                  mp3Data.push(mp3buf);
                }
    
                // Update progress bar
                const progress = ((currentBlock + 1) / totalBlocks) * 100;
                progressBar.style.width = `${progress}%`;
                
                // Ensure a visible status update
                this.updateStatus(`Préparation de l'audio : ${Math.round(progress)}%`, false);
    
                // Move to next block
                currentBlock++;
              }, 0); // Utiliser un intervalle minimal pour permettre d'autres opérations
    
            };
    
            // Start the encoding process
            encodeNextBlock(0);
          }, (error) => {
            console.error('Error decoding audio:', error);
            this.updateStatus('Oops! La préparation de votre audio a échoué', true);
            progressContainer.remove();
          });
        } catch (error) {
          console.error('Unexpected error in convertToMP3:', error);
          this.updateStatus('Erreur inattendue lors de la préparation', true);
          progressContainer.remove();
        }
      };
    
      reader.onerror = (error) => {
        console.error('FileReader error:', error);
        this.updateStatus('Erreur de lecture du fichier audio', true);
      };
    
      reader.readAsArrayBuffer(blob);
    }
  }