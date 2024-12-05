const stations = [
    {
        id: 1,
        name: "Radio Isanganiro",
        url: "https://isanganiro.ice.infomaniak.ch/isanganiro-64.mp3",
        logoUrl: "https://radioenlignefrance.com/storage/radios/6834/8801/conversions/1nv4hxxxqJetEoR8S42sOycSQgl2sg-metaSXNhbmdhbmlyb2JkaS5qcGc=--lg.webp", 
        country: "Burundi",
        description: "Radio Isanganiro - La voix de la réconciliation",
        genre: "Actualités",
        language: "Kirundi,Français"
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
        language: "Kirundi,Français"
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
    language: "Kirundi,Kinyarwanda"
},
{

    id: 14,
    name: "Antenna de Gitega",
    url: "https://italiavera.radioca.st/stream",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/134246.v3.png",
    country: "Burundi", 
    description: "Gitega, Antenna web gitega",
    genre: "Musique",
    language: "Kirundi,Italian",
},
   
{

    id: 15,
    name: "Radio Izere FM",
    url: "http://5.189.189.39:8000/stream",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/3/80073.v8.png",
    country: "Burundi", 
    description: "Rumonge; Radio Izere FM",
    genre: "Musique",
    language: "Kirundi"
},

{

    id: 16,
    name: "Radio Inkinzo",
    url: "https://stream-175.zeno.fm/x3ktdppgx98uv",
    logoUrl: "https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/_FdVwRWExsR5NKdwjP9Q36FUiEaPeQwLtimF2vW_QhA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHcwdmJoendrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHc0cXVibFFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTcxODU4NDQ0MTAwMA.webp",
    country: "Burundi", 
    description: "Kurwanya ikinyoma nihonyabwoko",
    genre: "Musique",
    language: "Kirundi"
},


{

    id: 17,
    name: "TzGospel Burundi",
    url: "https://stream-158.zeno.fm/nxdpssc3tchvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/134236.v2.png",
    country: "Burundi", 
    description: "Swahili gospel",
    genre: "Musique",
    language: "Kiswahili"
},
{

    id: 18,
    name: "Radio voix d'espoir",
    url: "https://stream4.rcast.net/65428",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2xvYkD9Po-ChBUejOLPevZgneNt7JZCxKRBN2cwrKunDb-L7yhLhy5Tr__G5pFaeiJU&usqp=CAU",
    country: "Burundi", 
    description: "Ijwi riremesha",
    genre: "Actualités",
    language: "Kirundi"
},
{

    id: 19,
    name: "Bdusa Media",
    url: "https://stream-174.zeno.fm/0fpegrf70fctv",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhol3947SVr1xu3NXAh8wiLOV_aw2qQpouIw&s",
    country: "Burundi", 
    description: "Burundan Diaspora in The United States of America, BDUSA COMPANY",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 20,
    name: "B.A.A MEDIA FM",
    url: "https://stream-158.zeno.fm/nxdpssc3tchvv",
    logoUrl: "https://images.zeno.fm/m8VOZY3pv4m_mYPVHQOUIktZbEnSlSbWm2SWLVdaakc/rs:fit:268:268/g:ce:0:0/aHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSURnd2NTbDNna01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUR3eWEzMzhRc01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE3MjcxMDA4NTEwMDA_dT01NzU4Njkw.webp",
    country: "Burundi", 
    description: "Radio B.A.A MEDIA FM",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 21,
    name: "Menya live",
    url: "https://stream-154.zeno.fm/fq6c2xsn0c9uv",
    logoUrl: "https://images.zeno.fm/AcPGa8ODQyPVx4T4JKhVSrxQyQ5OWBSEabQpnY-FI9E/rs:fit:500:500/g:ce:0:0/aHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSURnd2NTbDNna01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUR3aWR2SzZBZ01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE3MjQ3NjkzMDIwMDA_dT01NzQ5NjIw.webp",
    country: "Burundi", 
    description: "A group of Artists and musicians from Burundi",
    genre: "Actualités",
    language: "Kirundi"
},
{

    id: 22,
    name: "NRG BURUNDI",
    url: "https://stream.zeno.fm/p5nkyyxnt4uvv",
    logoUrl: "https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/MaMTqNCnBHj_6cH9B0sogMjwg8ZK-kf4G3V5mTZHyYI/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNGZkYTdjMDAtNTcyNy00ZDViLWE1NDAtZjYzMWE3NzM2N2IxL2ltYWdlLz91PTE2OTQwMDQyODUwMDA.webp",
    country: "Burundi", 
    description: "NRG",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 23,
    name: "EAGLE SPORTS FM",
    url: "https://audio.bfmtv.com/rmcradio_128.mp3",
    logoUrl: "https://static-media.streema.com/media/cache/b9/40/b9406d0b0b7cdfb197d56c3342faba76.png",
    country: "Burundi", 
    description: "MAKAMBA,Eagle Sport FM Radio broadcasts at 88.0 Mhz and 88.6 Mhz",
    genre: "Sports",
    language: "Kirundi"
},

{

    id: 24,
    name: "Regional Vibez Media",
    url: "https://bissau.radio/listen/12182",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/9/95839.v6.png",
    country: "Burundi", 
    description: "Regional Vibez Media is an Online Broadcast Radio Television based in Burundi which provides regional trending news and promotes East African Culture",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 25,
    name: "ATOCO Media",
    url: "https://stream-153.zeno.fm/g4x4bb7uxd0uv",
    logoUrl: "https://yt3.googleusercontent.com/4wP4fFNGYEUsPxuXXeaWqyuBewa6GXWcfyACEbfZP8euKx2hSxSBUhRaBZjk9j96I8lH28sh7g=s900-c-k-c0x00ffffff-no-rj",
    country: "Burundi", 
    description: "ATOCO MEDIA - a radio station from Burundi providing sport and other programs.",
    genre: "Sports",
    language: "Kirundi"
},
{

    id: 26,
    name: "Radio Intare Karemera",
    url: "https://stream-176.zeno.fm/lvkkazg0faguv",
    logoUrl: "https://zeno.fm/_ipx/f_webp&q_85&fit_cover&s_144x144/https://images.zeno.fm/pj9c80RNnDSPq3W1k0Jqmp09qYU4XAwTokGeGMz8PnM/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYjZjODhhYjYtYjQzZS00NWQwLWFkMTYtNzllMGIzYThiMDUxL2ltYWdlLz91PTE2ODM0OTUwMDQwMDA.webp",
    country: "Burundi", 
    description: "Kaze tuyage kahise k'u Burundi",
    genre: "Actualités",
    language: "Kirundi"
},

{

    id: 27,
    name: "RADIO PATRIOT FM",
    url: "https://stream-176.zeno.fm/91m701amxxhvv",
    logoUrl: "https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/0KNpUkvSZG9td1ApYozXcT6Puzj5G6-uI3OgT0AK4_I/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJREludWVXbHdvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRElfbzZzcFFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTc4NjM4ODAwMA.webp",
    country: "Burundi", 
    description: "your favorite hits and variety of music and entertainment.",
    genre: "Musique",
    language: "Kirundi"
},
{

    id: 28,
    name: "Radio Rwanda",
    url: "http://listen.rba.co.rw:8000/;?type=http&nocache=1102",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/3/47373.v5.png",
    country: "Rwanda", 
    description: "Radio Rwanda (Radiyo Rwanda) is a broadcast radio station in Kigali, Rwanda, providing News, Talk and Information as part of the Rwandan Office of Information (ORINFOR), a government information agency.",
    genre: "National",
    language: "Kinyarwanda"
},
{

    id: 29,
    name: "Magic FM",
    url: "http://listen.rba.co.rw:8080/;?type=http&nocache=72236",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/47415.v6.png",
    country: "Rwanda", 
    description: "Magic FM is the unique youthful Infotainment radio in Rwanda.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 30,
    name: "Radio Isango Star",
    url: "http://80.241.215.175:8000/;?type=http&nocache=1287",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/1/47491.v5.png",
    country: "Rwanda", 
    description: "Kigali, 91.5 MHz FM.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 31,
    name: "Flash FM",
    url: "http://80.241.215.175:7410/;?type=http&nocache=3105",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/4/47494.v11.png",
    country: "Rwanda", 
    description: "Radio Flash FM 89.2 is a broadcast Radio station from Kigali, Rwanda, providing news, current affairs, informative jounalism on local, national and international matters, sports and the best mix of music..",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 32,
    name: "KT Radio",
    url: "http://197.243.1.130:8006/k2dlivemp3",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/9/47649.v5.png",
    country: "Rwanda", 
    description: "KT Radio is an independent news, information and entertainment radio station, Kigali, 96.7-107.9 MHz FM.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 33,
    name: "Radio Maria Rwanda",
    url: "http://dreamsiteradiocp2.com:8098/stream",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/2/47642.v5.png",
    country: "Rwanda", 
    description: "Une voix chretienne qui vous accompagne",
    genre: "Religion",
    language: "Kinyarwanda,Français"
},
{

    id: 34,
    name: "Fine FM",
    url: "https://stream.zeno.fm/f9gdpnf1bg0uv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/1/98231.v7.png",
    country: "Rwanda", 
    description: "Radio Of Your Choice.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 35,
    name: "Radio 10",
    url: "https://radio10rwanda-atunwadigital.streamguys1.com/Radio10Rwanda",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/47495.v1.png",
    country: "Rwanda", 
    description: "Kigali, 87.6 MHz FM.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 36,
    name: "Royal FM",
    url: "http://80.241.215.175:3000/;?type=http&nocache=1094",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/47648.v5.png",
    country: "Rwanda", 
    description: "94.3 ROYAL FM,Better information,the best Music",
    genre: "Musique",
    language: "Kinyarwanda,English"
},
{

    id: 37,
    name: "Energy Radio",
    url: "https://eu7.fastcast4u.com/proxy/energy",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/77686.v11.png",
    country: "Rwanda", 
    description: "Ruhengeri, 88.8 MHz FM",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 38,
    name: "Radio Inteko",
    url: "http://listen.rba.co.rw:7000/;?type=http&nocache=314",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/47405.v5.png",
    country: "Rwanda", 
    description: "Kigali, 101.5 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 39,
    name: "Radio Rusizi",
    url: "https://streaming.shoutcast.com/radio-rusizi",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/7/109027.v6.png",
    country: "Rwanda", 
    description: "Kigali, 89.8 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 40,
    name: "Radio Musanze",
    url: "http://listen.rba.co.rw:5000/;?type=http&nocache=1402",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/109025.v6.png",
    country: "Rwanda", 
    description: "Ruhengeri, 98.4 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 41,
    name: "Radio Huye",
    url: "http://listen.rba.co.rw:5050/;?type=http&nocache=218",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/109026.v8.png",
    country: "Rwanda", 
    description: "Huye, 100.4 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 42,
    name: "Radio Rubavu",
    url: "http://listen.rba.co.rw:4000/;?type=http&nocache=276",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/1/47451.v3.png",
    country: "Rwanda", 
    description: "Kigali, 95.1 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 43,
    name: "Radio Nyagatare",
    url: "http://listen.rba.co.rw:3050/rcnyagatare",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/109028.v5.png",
    country: "Rwanda", 
    description: "Nyagatare, 95.5 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},

{

    id: 44,
    name: "City Radio",
    url: "https://stream-172.zeno.fm/hdwjyvwyrietv",
    logoUrl: "https://cityradio.rw/img/logo.a7064ef3.svg",
    country: "Rwanda", 
    description: "Incuti ya bose 88.3 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},

{

    id: 45,
    name: "Kiss FM 102.3",
    url: "https://kissfm-atunwadigital.streamguys1.com/kissfm",
    logoUrl: "https://static-media.streema.com/media/cache/9c/37/9c3703e6be2f5d5c9fcf5ac02ffa7551.jpg",
    country: "Rwanda", 
    description: "Kigali's no1 Hit music station",
    genre: "Musique",
    language: "Kinyarwanda"
},

{

    id: 46,
    name: "Radio8",
    url: "https://stream-153.zeno.fm/w54dstn6dkhvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/2/113552.v3.png",
    country: "Rwanda", 
    description: "Radio8, feel good station! Rwandan radio station based on informative educative with express entertainment all day",
    genre: "Musique",
    language: "Kinyarwanda"
},

{

    id: 47,
    name: "Radio Ijwi rya gare",
    url: "https://stream-176.zeno.fm/uqfn3kdxxwzuv",
    logoUrl: "https://online-radio.eu/logo/110/110358.jpg",
    country: "Rwanda", 
    description: "Radio Ijwi Rya Gare is a broadcast Radio in Park station and online from Kigali, Rwanda, providing news, national and international matters, sports and the best mix of musi",
    genre: "Actualités",
    language: "Kinyarwanda"
},


{

    id: 48,
    name: "Polo Radio FM 90.8",
    url: "https://stream-172.zeno.fm/mwqqavavdhruv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/9/82269.v11.png",
    country: "Rwanda", 
    description: "Tubagezaho inkuru zurukundo ibyo bita 'LOVE STORY' tukazibabwira muri Episode ,tubagezaho umuziki ukunzwe yaba izo murwanda cyangwa hanze",
    genre: "Love stories",
    language: "Kinyarwanda"
},

{

    id: 49,
    name: "Inezastar Radio",
    url: "https://stream-154.zeno.fm/3mn8c2zhv4jvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/135908.v4.png",
    country: "Rwanda", 
    description: "captivating music, engaging discussions, and entertaining shows.",
    genre: "Musique",
    language: "Kinyarwanda"
},

{

    id: 50,
    name: "BIG FM KIGALI",
    url: "https://stream-172.zeno.fm/go62rqbvsjruv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/136095.v3.png",
    country: "Rwanda", 
    description: "Bringing you the freshest beats and hottest tracks",
    genre: "Musique",
    language: "Kinyarwanda"
},

{

    id: 51,
    name: "Biryogo Radio",
    url: "https://stream-172.zeno.fm/2s9n4rwjlyuvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/3/127293.v3.png",
    country: "Rwanda", 
    description: "Radio station for all",
    genre: "Musique",
    language: "Kinyarwanda"
},


];

//genres: actualités,national,musique, sports,Religion

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
            countryFilter: document.getElementById('countryFilter'),
            genreFilter: document.getElementById('genreFilter'), 
            languageFilter: document.getElementById('languageFilter'),
            loadMoreBtn: document.getElementById('loadMore'),
            mic: document.getElementById('start'),
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
        this.elements.errorMessage = document.getElementById('status');
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
        userCountry.selected
    }
}

populateFilter(select, values) {
    values.sort().forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}


setupEventListeners() {
    // Recherche
    this.elements.searchInput.addEventListener('input', () => this.handleSearch());
  

    // Filtres (pays, genre, langue)
    ['countryFilter', 'genreFilter', 'languageFilter'].forEach(id => {
        this.elements[id].addEventListener('change', (e) => this.handleFilterChange(e));
    });

    // Bouton "Charger plus"
    this.elements.loadMoreBtn.addEventListener('click', () => this.loadMore());

    // Contrôle du volume
    this.elements.volumeSlider.addEventListener('input', (e) => this.handleVolumeChange(e));

    // Gestion des événements du lecteur audio
    this.elements.audioPlayer.addEventListener('playing', () => {
        this.isPlaying = true;
        this.hasError = false;
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
        this.handlePlaybackError(e.target.error || new Error("Erreur inconnue lors de la lecture."));
    });

    // Gestion de la connexion Internet
    window.addEventListener('online', () => {
        this.handleOnline();
    });

    window.addEventListener('offline', () => {
        this.handleOffline();
    });
}

async initialize() {
    await this.preloadImages();
    this.displayStations();
    this.displayFavorites();

    // Lecture de la dernière station si disponible
    if (this.lastPlayedStation) {
        await this.playStation(this.lastPlayedStation, true);
    }
}

setLoadingState(isLoading) {
    this.isLoading = isLoading;

  
         this.elements.playerStatus.textContent = "Cliquer pour ecouter."


    if (isLoading) {
        // Lorsque le lecteur est en cours de chargement
        this.elements.playPauseIcon.classList.remove('fa-play', 'fa-pause');
        this.elements.playPauseIcon.classList.add('fa-spinner', 'fa-spin');
        this.elements.playerStatus.textContent = 'Chargement en cours...';

    } else if (this.hasError) {
        // En cas d'erreur
        this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin', 'fa-pause');
        this.elements.playPauseIcon.classList.add('fa-play');
        this.elements.playerStatus.textContent = "Erreur de lecture, Actualisez sinon choisissez l'autre station.";
        //masquer le recordeur
        this.elements.mic.style.display="none"
    } else if (this.isPlaying) {
        // Lorsque le lecteur est en lecture
        this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin');
        this.elements.playPauseIcon.classList.add('fa-pause');
        this.elements.playerStatus.textContent = 'Live...';
         //afficher le recordeur
        this.elements.mic.style.display="block"
    } else {
        // Lorsque le lecteur est en pause
        this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin');
        this.elements.playPauseIcon.classList.add('fa-play');
        this.elements.playerStatus.textContent = 'Mis en pause.';
  
    }
}

handlePlaybackError(error) {
    this.isPlaying = false;
    this.hasError = true;
    this.setLoadingState(false);

    let errorMessage;

    // Détecter si l'utilisateur est hors ligne
    if (!navigator.onLine) {
        errorMessage = 'Pas de connexion Internet. Vérifiez votre réseau.';
    } 
    // Gestion des erreurs audio spécifiques
    else if (error instanceof MediaError) {
        switch (error.code) {
            case MediaError.MEDIA_ERR_ABORTED:
                errorMessage = "La lecture a été interrompue. Veuillez réessayer.";
                break;
            case MediaError.MEDIA_ERR_NETWORK:
                errorMessage = "Erreur réseau : impossible de charger la station.";
                break;
            case MediaError.MEDIA_ERR_DECODE:
                errorMessage = "Erreur de lecture : le fichier audio est corrompu ou incompatible.";
                break;
            ///case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
               // errorMessage = "Cette station n'est pas disponible. Essayez une autre station.";
              //  break;
            default:
                errorMessage = "";
                break;
        }
    } 
    // Autres erreurs générales
    else if (error.message) {
        errorMessage = error.message;
    } else {
        errorMessage = "Une erreur inconnue est survenue.";
    }

    // Afficher le message d'erreur
    this.elements.errorMessage.textContent = errorMessage;
    this.elements.errorMessage.style.display = 'block';
    this.updatePlayState();
    console.error('Playback error:', errorMessage, error);
}

async playStation(station, forcePlay = false) {
    try {
        if (!navigator.onLine) {
            throw new Error('Pas de connexion Internet. Impossible de lire la station.');
        }

        this.currentStation = station;
        localStorage.setItem('lastPlayedStation', JSON.stringify(station));

        // Mettre à jour les informations de la station
        this.elements.currentStationName.textContent = station.name;
        this.elements.currentStationLogo.src = station.logoUrl;
        this.elements.currentStationInfo.textContent = `${station.country} - ${station.genre}`;

        this.setLoadingState(true);
        this.elements.errorMessage.style.display = 'none';

        // Forcer la lecture ou détecter si le lecteur est en pause
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

handleOnline() {
    this.elements.errorMessage.style.display = 'none'; // Cacher les messages d'erreur précédents
    if (this.currentStation) {
        this.playStation(this.currentStation);
    }
}

handleOffline() {
    const errorMessage = 'Pas de connexion Internet. Vous ne pouvez pas écouter de stations.';
    this.elements.errorMessage.textContent = errorMessage;
    this.elements.errorMessage.style.display = 'block';
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




