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
        this.downloadContainer.style.display='none';
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
  
        // Create MediaRecorder with the destination stream
        this.mediaRecorder = new MediaRecorder(this.destinationNode.stream, {
          mimeType: 'audio/webm',
        });
  
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };
  
        this.mediaRecorder.onstop = () => this.processRecording();
  
        // Play the audio without interruption
        await this.audioElement.play();
        this.mediaRecorder.start();
  
        this.startButton.classList.add('rec-effect');
        this.stopButton.style.display = 'block';
        this.updateStatus('Enregistrement...');
      } catch (error) {
        console.error('Error starting recording:', error);

        window.location.reload()
        this.startButton.style.display='none'
      }
    }
  
    stopRecording() {
      if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
        this.mediaRecorder.stop();
        this.updateStatus('Enregistrement arreté, preparation de votre audio...');
        this.startButton.style.display = 'none';
       
        this.stopButton.style.display = 'none';
      }
    }
  
    processRecording() {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
  
      if (audioBlob.size > 0) {
        this.convertToMP3(audioBlob);
      } else {
        this.updateStatus('Pas du flux enregistré', true);
      }
    }
  
    convertToMP3(blob) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        const audioContext = new AudioContext();
  
        audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
          if (typeof lamejs === 'undefined') {
            this.updateStatus('Error: MP3 library not loaded', true);
            return;
          }
  
          const samples = audioBuffer.getChannelData(0);
          const int16Samples = new Int16Array(samples.map(sample => sample < 0 ? sample * 32768 : sample * 32767));
  
          const mp3Encoder = new lamejs.Mp3Encoder(1, audioBuffer.sampleRate, 128);
          const mp3Data = [];
          const sampleBlockSize = 1152;
  
          for (let i = 0; i < int16Samples.length; i += sampleBlockSize) {
            const sampleChunk = int16Samples.slice(i, i + sampleBlockSize);
            const mp3buf = mp3Encoder.encodeBuffer(sampleChunk);
            if (mp3buf.length > 0) {
              mp3Data.push(mp3buf);
            }
          }
  
          const mp3buf = mp3Encoder.flush();
          if (mp3buf.length > 0) {
            mp3Data.push(mp3buf);
          }
  
          const mp3Blob = new Blob(mp3Data, { type: 'audio/mp3' });
          const url = URL.createObjectURL(mp3Blob);
  
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = `Birastat_${new Date().toISOString().replace(/:/g, '-')}.mp3`;
        downloadLink.innerHTML = '<i class="fas fa-download"></i>'
          downloadLink.className = 'download-link';
  
          downloadLink.addEventListener('click', () => {
            setTimeout(() => {
              this.downloadContainer.style.display='none';
              this.updateStatus('');
         this.updateStatus("Actualiser la page pour pouvoir enregistrer", true);
         this.refresh.style.display='block';
        this.startButton.style.display='none'
            }, 500);
          });
  
          this.downloadContainer.appendChild(downloadLink);
          this.updateStatus('Audio bien enregistré. Vous pouvez télécharger.');
          this.downloadContainer.style.display='block'
        }, (error) => {
          console.error('Error decoding audio:', error);
          this.updateStatus('La préparation de votre audio echoue', true);
        });
      };
      reader.readAsArrayBuffer(blob);
    }
  }