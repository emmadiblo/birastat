const stations = [
    {
        id: 1,
        name: "Radio Isanganiro",
        url: "https://isanganiro.ice.infomaniak.ch/isanganiro-64.mp3",
        logoUrl: "https://radioenlignefrance.com/storage/radios/6834/8801/conversions/1nv4hxxxqJetEoR8S42sOycSQgl2sg-metaSXNhbmdhbmlyb2JkaS5qcGc=--lg.webp", 
        country: "Burundi",
        description: "Radio Isanganiro - La voix de la réconciliation",
        genre: "Actualités",
        language: "Kirundi/Français"
    },
    {
        id: 2,
        name: "Radio Agakiza",
        url: "https://cast6.asurahosting.com/proxy/radioaga/stream",
        logoUrl: "https://play-lh.googleusercontent.com/CUW7ncVsF-infUI-Toc9i1CIPbuOPpJG2tahO-BC3BGghjE2J7ePgL8_8l1LKUIiq9E=w240-h480-rw",
        country: "Burundi", 
        description: "Radio chrétienne",
        genre: "Religion",
        language: "Kirundi"
    },
    {
        id: 3,
        name: "Radio Maria Burundi",
        url: "http://dreamsiteradiocp2.com:8082/stream",
        logoUrl: "https://www.radiomaria.bi/wp-content/themes/radiomaria/img/maria-footer.jpg",
        country: "Burundi", 
        description: "Ijwi ry'Imana iwanyu, ijwi ry'Imana iwacu",
        genre: "Religion",
        language: "Kirundi"
    },
    {
        id: 4,
        name: "Radio Scolaire Nderagakura",
        url: "https://eu10.fastcast4u.com/nderagakura",
        logoUrl: "https://static2.mytuner.mobi/media/tvos_radios/y2f4sebqq534.jpg",
        country: "Burundi", 
        description: "Radio scolaire",
        genre: "Scolaire",
        language: "Kirundi/Français"
    },
    {
        id: 5,
        name: "Radio Bonesha",
        url: "http://a9.asurahosting.com:8950/radio.mp3",
        logoUrl: "https://pbs.twimg.com/profile_images/498881934148112384/Y6c6B-qC_400x400.jpeg",
        country: "Burundi", 
        description: "Bonesha FM",
        genre: "Actualités",
        language: "Kirundi"
    },
    {
        id: 6,
        name: "Iteka FM",
        url: "https://streams.radio.co/sd1bcd1376/listen",
        logoUrl: "https://cdn.onlineradiobox.com/img/l/9/110699.v3.png",
        country: "Burundi", 
        description: "Iteka Music",
        genre: "Musique",
        language: "Kirundi"
    },
    {
        id: 7,
        name: "Rema FM",
        url: "https://stream.zeno.fm/hefiobzkki3uv",
        logoUrl: "https://pbs.twimg.com/profile_images/1447129089/logo_rema_200x200.gif",
        country: "Burundi", 
        description: "Rema",
        genre: "Actualités",
        language: "Kirundi"
    },
    {
        id: 8,
        name: "Radio TV Buntu",
        url: "https://stream2.rcast.net/62581",
        logoUrl: "https://radiotvbuntu.org/wp-content/uploads/2020/01/cropped-radiotvlogosite.jpg",
        country: "Burundi", 
        description: "Radio Television Buntu",
        genre: "Actualités",
        language: "Kirundi"
    },
    {

    id: 9,
    name: "Radio Peace FM",
    url: "https://stream-176.zeno.fm/s0244utefg8uv",
    logoUrl: "https://radiopeacefm.com/images/logo1.png",
    country: "Burundi", 
    description: "Radio la voix des jeunes",
    genre: "Actualités",
    language: "Kirundi"
},

{

    id: 10,
    name: "Irebe FM",
    url: "https://stream-174.zeno.fm/5wjpe2wxzdeuv?",
    logoUrl: "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FbgwW9a1W7X4axC--YuTrF0Y7-huPChdVvayrNbml_I0%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2YyMTcyYjVmLWY2MjktNGJkNi05NWJmLTMwMThjZWQ3YWQzNS9pbWFnZS8_dXBkYXRlZD0xNjk2MzM3NTcyMDAwP3U9NTc1ODYwMA.webp&w=3840&q=100",
    country: "Burundi", 
    description: "Irebe Fm , umunezero wacu",
    genre: "Actualités",
    language: "Kirundi"
},
{

    id: 11,
    name: "Radio Intwali FM",
    url: "https://stream-172.zeno.fm/f4btyyc18vzuv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/2/86852.v4.png",
    country: "Burundi", 
    description: "Bujumbura, 102.9 MHz FM",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 12,
    name: "Hero Radio (burundi)",
    url: "https://a2.asurahosting.com:6790/burundi.mp3",
    logoUrl: "https://online-radio.eu/logo/145/145203.jpg",
    country: "Burundi", 
    description: "Radio la voix des jeunes",
    genre: "Musique",
    language: "Kirundi"
},

{

    id: 13,
    name: "Ijwi ry'amerika",
    url: "https://n0e.radiojar.com/hzcgfqas92quv",
    logoUrl: "https://www.radiyoyacuvoa.com/Content/responsive/VOA/rw-RW/img/logo.svg",
    country: "Burundi/Rwanda", 
    description: "Radio ijwi ry'amerika",
    genre: "Actualités",
    language: "Kirundi/Kinyarwanda"
},
{

    id: 14,
    name: "Antenna de Gitega",
    url: "https://italiavera.radioca.st/stream",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/134246.v3.png",
    country: "Burundi", 
    description: "Gitega, Antenna web gitega",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 15,
    name: "Radio Inkinzo",
    url: "https://stream-175.zeno.fm/x3ktdppgx98uv",
    logoUrl: "https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/_FdVwRWExsR5NKdwjP9Q36FUiEaPeQwLtimF2vW_QhA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHcwdmJoendrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHc0cXVibFFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTcxODU4NDQ0MTAwMA.webp",
    country: "Burundi", 
    description: "Kurwanya ikinyoma nihonyabwoko",
    genre: "Musique",
    language: "Kirundi"
},

];

//actualités,national,musique

class RadioApp {
    constructor() {
        this.ITEMS_PER_PAGE = 15;
        this.currentPage = 1;
        this.favorites = this.loadFromStorage('favorites', []);
        this.lastPlayedStation = this.loadFromStorage('lastPlayedStation', null);
        this.currentVolume = this.loadFromStorage('volume', 100);
        this.isPlaying = false;
        this.currentStation = null;
        this.currentSearchQuery = '';
        this.currentFilters = {
            country: '',
            genre: '',
            language: ''
        };

        this.initializeElements();
        this.initializeFilters();
        this.setupEventListeners();
        this.initialize();

        this.isLoading = false;
        this.hasError = false;
        this.errorMessage = '';
    }

    initializeElements() {
        // Récupérer tous les éléments DOM nécessaires
        this.elements = {
            audioPlayer: document.getElementById('audioPlayer'),
            stationsContainer: document.getElementById('stations'), 
            favoritesContainer: document.getElementById('favorites'),
            searchInput: document.getElementById('search'),
            clearSearch: document.getElementById('clearSearch'),
            countryFilter: document.getElementById('countryFilter'),
            genreFilter: document.getElementById('genreFilter'), 
            languageFilter: document.getElementById('languageFilter'),
            loadMoreBtn: document.getElementById('loadMore'),
            volumeBtn: document.getElementById('volumeBtn'),
            volumeSlider: document.getElementById('volumeSlider'),
           
            stationCount: document.getElementById('stationCount'),
            favoritesCount: document.getElementById('favoritesCount'),
            noFavorites: document.getElementById('noFavorites'),
            player: document.getElementById('player'),
            currentStationName: document.getElementById('currentStationName'),
            currentStationLogo: document.getElementById('currentStationLogo'),
            currentStationInfo: document.getElementById('currentStationInfo'),
            
        };

        this.elements.volumeSlider.value = this.currentVolume;
        this.elements.audioPlayer.volume = this.currentVolume / 100;

        this.elements.playPauseIcon = document.getElementById('playPauseIcon');
        this.elements.playerStatus = document.getElementById('playerStatus');
        this.elements.errorMessage = document.getElementById('errorMessage');
    }

    initializeFilters() {
    const countries = [...new Set(stations.map(s => s.country))];
    const genres = [...new Set(stations.map(s => s.genre))];
    const languages = [...new Set(stations.map(s => s.language))];

    this.populateFilter(this.elements.countryFilter, countries);
    this.populateFilter(this.elements.genreFilter, genres);
    this.populateFilter(this.elements.languageFilter, languages);

    this.getUserCountry().then(userCountry => {
        if (userCountry) {
            this.selectUserCountry(userCountry, this.elements.countryFilter);
        }
    });
}

async getUserCountry() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                    const data = await response.json();
                    resolve(data.countryName); // Renvoie le nom du pays
                },
                error => {
                    console.error("Error getting location: ", error);
                    resolve(null); // Si l'utilisateur refuse la géolocalisation
                    console.log('vous avez refusé la localisation')
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            resolve(null);
        }
    });
}

selectUserCountry(userCountry, select) {
    const optionExists = [...select.options].some(option => option.value === userCountry);
    if (optionExists) {
        select.value = userCountry; // Sélectionne le pays s'il existe
    }
}

populateFilter(select, values) {
    select.innerHTML = '<option value="">Tous</option>';
    values.sort().forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}


    setupEventListeners() {
        this.elements.searchInput.addEventListener('input', () => this.handleSearch());
        this.elements.clearSearch.addEventListener('click', () => this.clearSearch());

        ['countryFilter', 'genreFilter', 'languageFilter'].forEach(id => {
            this.elements[id].addEventListener('change', (e) => this.handleFilterChange(e));
        });

        this.elements.loadMoreBtn.addEventListener('click', () => this.loadMore());

        this.elements.volumeSlider.addEventListener('input', (e) => this.handleVolumeChange(e));

        this.elements.audioPlayer.addEventListener('playing', () => {
            this.isPlaying = true;
            this.updatePlayState();
        });

        this.elements.audioPlayer.addEventListener('pause', () => {
            this.isPlaying = false; 
            this.updatePlayState();
        });



        this.elements.audioPlayer.addEventListener('waiting', () => {
            this.setLoadingState(true);
        });

        this.elements.audioPlayer.addEventListener('playing', () => {
            this.setLoadingState(false);
            this.isPlaying = true;
            this.hasError = false;
            this.updatePlayState();
        });

        this.elements.audioPlayer.addEventListener('pause', () => {
            this.setLoadingState(false);
            this.isPlaying = false;
            this.updatePlayState();
        });

        this.elements.audioPlayer.addEventListener('error', (e) => {
            this.handlePlaybackError(e);
        });

        // Vérifie la connexion internet
        window.addEventListener('online', () => {
            if (this.currentStation) {
                this.playStation(this.currentStation);
            }
        });

        window.addEventListener('offline', () => {
            this.handlePlaybackError({ type: 'network', message: 'Pas de connexion Internet' });
        });
    }

    async initialize() {
        await this.preloadImages();
        this.displayStations();
        this.displayFavorites();
        
        // Force la lecture de la dernière station
        if (this.lastPlayedStation) {
            await this.playStation(this.lastPlayedStation, true);
        }
    }

    setLoadingState(isLoading) {
        this.isLoading = isLoading;
        if (isLoading) {
            this.elements.playPauseIcon.classList.remove('fa-play', 'fa-pause');
            this.elements.playPauseIcon.classList.add('fa-spinner', 'fa-spin');
            this.elements.playerStatus.textContent = 'Chargement...';
        } else {
            this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin');
            this.elements.playPauseIcon.classList.add(this.isPlaying ? 'fa-pause' : 'fa-play');
            this.elements.playerStatus.textContent = this.isPlaying ? 'En lecture' : 'En pause';
        }
    }

    handlePlaybackError(error) {
        this.isPlaying = false;
        this.hasError = true;
        this.setLoadingState(false);
        
        let errorMessage = 'Une erreur est survenue';
        
        if (!navigator.onLine) {
            errorMessage = 'Pas de connexion Internet';
        } else if (error.type === 'network') {
            errorMessage = error.message;
        } else {
            switch (this.elements.audioPlayer.error?.code) {
                case 1:
                    errorMessage = 'Lecture interrompue';
                    break;
                case 2:
                    errorMessage = 'Erreur réseau';
                    break;
                case 3:
                    errorMessage = 'Erreur de décodage';
                    break;
                case 4:
                    errorMessage = 'Source non disponible';
                    break;
            }
        }

        this.errorMessage = errorMessage;
        this.elements.errorMessage.textContent = errorMessage;
        this.elements.errorMessage.style.display = 'block';
        this.updatePlayState();
    }

    async playStation(station, forcePlay = false) {
        try {
            if (!navigator.onLine) {
                throw new Error('Pas de connexion Internet');
            }

            this.currentStation = station;
            localStorage.setItem('lastPlayedStation', JSON.stringify(station));

            this.elements.currentStationName.textContent = station.name;
            this.elements.currentStationLogo.src = station.logoUrl;
            this.elements.currentStationInfo.textContent = `${station.country} - ${station.genre}`;

            this.setLoadingState(true);
            this.elements.errorMessage.style.display = 'none';

            if (forcePlay || this.elements.audioPlayer.paused) {
                this.elements.audioPlayer.src = station.url;
                await this.elements.audioPlayer.play();
            }
        } catch (error) {
            console.error('Error playing station:', error);
            this.handlePlaybackError(error);
        }
    }

    updatePlayState() {
        if (this.isLoading) {
            this.elements.player.classList.add('loading');
            this.elements.player.classList.remove('playing', 'error');
        } else if (this.hasError) {
            this.elements.player.classList.add('error');
            this.elements.player.classList.remove('playing', 'loading');
        } else if (this.isPlaying) {
            this.elements.player.classList.add('playing');
            this.elements.player.classList.remove('loading', 'error');
        } else {
            this.elements.player.classList.remove('playing', 'loading', 'error');
        }
    }

    async preloadImages() {
        const promises = stations.map(station => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = img.onerror = resolve;
                img.src = station.logoUrl;
            });
        });
        await Promise.all(promises);
    }

    handleSearch() {
        this.currentSearchQuery = this.elements.searchInput.value;
        this.elements.clearSearch.style.display = this.currentSearchQuery ? 'block' : 'none';
        this.resetAndDisplay();
    }

    clearSearch() {
        this.elements.searchInput.value = '';
        this.currentSearchQuery = '';
        this.elements.clearSearch.style.display = 'none';
        this.resetAndDisplay();
    }

    handleFilterChange(event) {
        const filterType = event.target.id.replace('Filter', '');
        this.currentFilters[filterType] = event.target.value;
        this.resetAndDisplay();
    }

    resetAndDisplay() {
        this.currentPage = 1;
        this.displayStations();
        this.updateCounts();
    }

    filterStations() {
        return stations.filter(station => {
            const matchesSearch = !this.currentSearchQuery || 
                Object.values(station).some(value => 
                    String(value).toLowerCase().includes(this.currentSearchQuery.toLowerCase())
                );

            const matchesFilters = Object.entries(this.currentFilters).every(([key, value]) => 
                !value || station[key] === value
            );

            return matchesSearch && matchesFilters;
        });
    }


    displayStations() {
    const filteredStations = this.filterStations();
    const stationsToShow = filteredStations.slice(0, this.currentPage * this.ITEMS_PER_PAGE);
    
    // Créer un fragment pour éviter les re-rendus multiples
    const fragment = document.createDocumentFragment();

    // Créer des cartes pour les stations à afficher
    stationsToShow.forEach(station => {
        const card = this.createStationCard(station);
        fragment.appendChild(card);
    });

    // Vider et mettre à jour le conteneur en une seule fois
    requestAnimationFrame(() => {
        this.elements.stationsContainer.innerHTML = ''; // Vider le conteneur une fois
        this.elements.stationsContainer.appendChild(fragment);

        this.elements.loadMoreBtn.style.display = 
            stationsToShow.length < filteredStations.length ? 'block' : 'none';
    });
}

    displayFavorites() {
        this.elements.favoritesContainer.innerHTML = '';
        if (this.favorites.length === 0) {
            this.elements.noFavorites.style.display = 'block';
            return;
        }

        this.elements.noFavorites.style.display = 'none';
        this.favorites.forEach(station => {
            const card = this.createStationCard(station, true);
            this.elements.favoritesContainer.appendChild(card);
        });
    }

    createStationCard(station, isFavorite = false) {
        const card = document.createElement('div');
        card.className = 'station-card';
        
        card.innerHTML = `
            <img src="${station.logoUrl}" alt="${station.name}" onerror="this.src='https://th.bing.com/th/id/R.6bee3273e3aad8a819a0768d46de7147?rik=dYE1FItmXMZscw&pid=ImgRaw&r=0'">
            <h3>${station.name}</h3>
            <button class="favorite-btn">${this.favorites.some(f => f.id === station.id) ? '❤️' : '🤍'}</button>
            <div class="station-info">
                  <h5 class="description">${station.description}</h5>
              Pays:  <p>${station.country}</p>
        
               Genre: <p>${station.genre}</p>
              Langue(s):  <p>${station.language}</p>
            </div>
        `;

        card.querySelector('.favorite-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(station);
        });

        card.addEventListener('click', () => this.playStation(station));

        return card;
    }

    async playStation(station) {
        try {
            this.currentStation = station;
            localStorage.setItem('lastPlayedStation', JSON.stringify(station));

            this.elements.currentStationName.textContent = station.name;
            this.elements.currentStationLogo.src = station.logoUrl;
            this.elements.currentStationInfo.textContent = `${station.country} - ${station.genre}`;

            this.elements.audioPlayer.src = station.url;
            await this.elements.audioPlayer.play();
            
            this.isPlaying = true;
            this.updatePlayState();
        } catch (error) {
            console.error('Error playing station:', error);
        }
    }

    toggleFavorite(station) {
        const index = this.favorites.findIndex(f => f.id === station.id);
        
        if (index === -1) {
            this.favorites.push(station);
        } else {
            this.favorites.splice(index, 1);
        }
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.displayFavorites();
        this.displayStations();
        this.updateCounts();
    }

    toggleMute() {
        this.elements.audioPlayer.muted = !this.elements.audioPlayer.muted;
        this.elements.volumeBtn.textContent = this.elements.audioPlayer.muted ? '🔈' : '🔊';
    }

    handleVolumeChange(event) {
        const volume = event.target.value;
        this.elements.audioPlayer.volume = volume / 100;
        this.currentVolume = volume;
        localStorage.setItem('volume', volume);
    }

    loadMore() {
        this.currentPage++;
        this.displayStations();
    }

    updatePlayState() {
        if (this.isPlaying) {
            this.elements.player.classList.add('playing');
        } else {
            this.elements.player.classList.remove('playing');
        }
    }

    updateCounts() {
        const filteredCount = this.filterStations().length;
        this.elements.stationCount.textContent = `(${filteredCount})`;
        this.elements.favoritesCount.textContent = `(${this.favorites.length})`;
    }

    loadFromStorage(key, defaultValue) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    }
}



// Initialisation de l'application
const app = new RadioApp();  