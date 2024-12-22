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
        url: "https://dreamsiteradiocp2.com:8082/stream",
        logoUrl: "https://nz.radio.net/300/radiomariaitalia.png?version=68ee5439df84e672599a4f4649675913",
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
        genre: "Education",
        language: "Kirundi,Français"
    },
    {
        id: 5,
        name: "Radio Bonesha",
        url: "https://a9.asurahosting.com:8950/radio.mp3",
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
    url: "https://5.189.189.39:8000/stream",
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
    url: "http://listen.rba.co.rw:8000/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/3/47373.v5.png",
    country: "Rwanda", 
    description: "Radio Rwanda hafi yawe.",
    genre: "National",
    language: "Kinyarwanda"
},
{

    id: 29,
    name: "Magic FM",
    url: "http://listen.rba.co.rw:8080/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/47415.v6.png",
    country: "Rwanda", 
    description: "Magic FM is the unique youthful Infotainment radio in Rwanda.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 30,
    name: "Radio Isango Star",
    url: "http://80.241.215.175:8000/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/1/47491.v5.png",
    country: "Rwanda", 
    description: "Kigali, 91.5 MHz FM.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 31,
    name: "Flash FM",
    
    url: "http://80.241.215.175:7410/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/4/47494.v11.png",
    country: "Rwanda", 
    description: "Radio Flash FM 89.2 is a broadcast Radio station from Kigali, Rwanda, providing news, current affairs, informative jounalism on local, national and international matters, sports and the best mix of music..",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 32,
    name: "KT Radio",
    url: "https://197.243.1.130:8006/k2dlivemp3",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/9/47649.v5.png",
    country: "Rwanda", 
    description: "KT Radio is an independent news, information and entertainment radio station, Kigali, 96.7-107.9 MHz FM.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 33,
    name: "Radio Maria Rwanda",
    url: "https://dreamsiteradiocp2.com:8098/stream",
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
    url: "http://80.241.215.175:3000/;stream.nsv",
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
    url: "http://listen.rba.co.rw:7000/;stream.nsv",
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
    url: "http://listen.rba.co.rw:5000/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/109025.v6.png",
    country: "Rwanda", 
    description: "Ruhengeri, 98.4 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 41,
    name: "Radio Huye",
    url: "http://listen.rba.co.rw:5050/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/109026.v8.png",
    country: "Rwanda", 
    description: "Huye, 100.4 MHz FM",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 42,
    name: "Radio Rubavu",
    url: "http://listen.rba.co.rw:4000/;stream.nsv",
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

{

    id: 52,
    name: "Radio5 Rwanda",
    url: "http://listen.rba.co.rw:8000/;stream.nsv",
    logoUrl: "https://station-images.prod.radio-api.net/300/radio5rwandax3.jpeg?version=1d09c898fdb55c7b51bef0ac87d7f697",
    country: "Rwanda", 
    description: "The best music",
    genre: "Musique",
    language: "Kinyarwanda,English"
},
{

    id: 53,
    name: "Power FM",
    url: "https://stream-154.zeno.fm/mcecy240vhhvv",
    logoUrl: "https://static2.mytuner.mobi/media/tvos_radios/qbnJPzHzGc.jpg",
    country: "Rwanda", 
    description: "104.1 Power FM",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 54,
    name: "BTN Radio",
    url: "https://stream-176.zeno.fm/0a2rkwhxwd0uv",
    logoUrl: "https://static2.mytuner.mobi/media/tvos_radios/aj3aaqfzvwmk.png",
    country: "Rwanda", 
    description: "BIG TELEVISION NETWORK RADIO is a Rwanda's leading Informative, Business and Entertainment",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 55,
    name: "Best FM Radio Rwanda",
    url: "https://stream-176.zeno.fm/gqe8kcdawp8uv",
    logoUrl: "https://static2.mytuner.mobi/media/tvos_radios/rvx9kmhkxlsn.png",
    country: "Rwanda", 
    description: "Best FM Radio Rwanda is an entertainment ,business, music & Religional radio",
    genre: "Religion",
    language: "Kinyarwanda"
},
{

    id: 56,
    name: "Ikosora Radio",
    url: "https://stream-176.zeno.fm/apzbkv76zf9uv",
    logoUrl: "https://static2.mytuner.mobi/media/tvos_radios/UwKcFXtf6L.jpg",
    country: "Rwanda", 
    description: "Turi Ikosora",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 57,
    name: "Radio1",
    url: "http://80.241.215.175:5000/;stream.nsv",
    logoUrl: "https://static2.mytuner.mobi/media/tvos_radios/pf4a3ad8seg8.jpg",
    country: "Rwanda", 
    description: "Radio 1",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 58,
    name: "Nufashwa Yafasha Radio",
    url: "https://stream-172.zeno.fm/b6n0aqzvdhruv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/4/82514.v4.png",
    country: "Rwanda", 
    description: "Our Community radio station provides a new voice for hundreds of local communities across the Rwanda.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 59,
    name: "KU Bright FM",
    url: "https://stream-175.zeno.fm/00dfaapsmd0uv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/1/94811.v3.png",
    country: "Rwanda", 
    description: "Kigali Updates",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 60,
    name: "Umucyo Radio",
    url: "http://80.241.215.175:4000/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/2/47492.v6.png",
    country: "Rwanda", 
    description: "Umucyo radio is the first Christian radio station in Rwanda.",
    genre: "Religion",
    language: "Kinyarwanda"
},
{

    id: 61,
    name: "Favor Radio",
    url: "https://a10.asurahosting.com:7660/rwanda.mp3",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/139426.v7.png",
    country: "Rwanda", 
    description: "non-denominational radio",
    genre: "Religion",
    language: "Kiswahili"
},
{

    id: 62,
    name: "Capital Fm Kigali",
    url: "https://stream-175.zeno.fm/wmf5p1176juvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/4/121244.v5.png",
    country: "Rwanda", 
    description: "A youth oriented station playing Hit Music.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 63,
    name: "Ibyiringiro Byacu",
    url: "https://stream-153.zeno.fm/zwav88by1ehvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/4/132294.v2.png",
    country: "Rwanda", 
    description: "Ibyiringiro Byacu Radio/tv.",
    genre: "Religion",
    language: "Kinyarwanda"
},
{

    id: 64,
    name: "CNM Station",
    url: "https://stream-153.zeno.fm/ewcnhntrbq8uv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/7/101847.v4.png",
    country: "Rwanda", 
    description: "We exist to be “Carriers of His Love, Revealers of His Compassion and Healers to the Nations“.",
    genre: "Religion",
    language: "English"
},
{

    id: 65,
    name: "Hose Radio",
    url: "https://stream-173.zeno.fm/ys02hune31zuv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/1/89591.v2.png",
    country: "Rwanda", 
    description: "It's all about entertainment.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 66,
    name: "Kigali yacu",
    url: "https://stream-173.zeno.fm/1m29g6tg308uv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/9/105639.v2.png",
    country: "Rwanda", 
    description: "kigali yacu online Radio.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 67,
    name: "Kigali Groove Radio",
    url: "https://stream-175.zeno.fm/wmf5p1176juvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/139746.v1.png",
    country: "Rwanda", 
    description: "Feel the Beat of Kigali, Embrace the Journey",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 68,
    name: "MenyaTips Radio",
    url: "https://stream-174.zeno.fm/hgezozdttrrvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/120468.v5.png",
    country: "Rwanda", 
    description: "The best station to maximize your needs.",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 69,
    name: "Ubuvumbuzi Radio",
    url: "https://stream-175.zeno.fm/xrx74pv20f9uv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/124055.v8.png",
    country: "Rwanda", 
    description: "helps people enjoy and feel comfortable day per day.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 70,
    name: "Classic Fm Kigali",
    url: "https://stream-173.zeno.fm/4yvxkrz7sjpvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/2/125792.v2.png",
    country: "Rwanda", 
    description: "CLASSIC FM, Feel the Music of a Generation African best Radio station",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 71,
    name: "Dreams Radio",
    url: "https://stream-175.zeno.fm/necesdv59ehvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/112228.v1.png",
    country: "Rwanda", 
    description: "Informing, Educating, And most of the times is for Entertaining people",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 72,
    name: "Umwezi Radio 95.3 FM",
    url: "http://80.241.215.175:7480/;stream.nsv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/2/138382.v2.png",
    country: "Rwanda", 
    description: "We talk Politics, Sports, Heath; with hot hit music for entertainment",
    genre: "Actualités",
    language: "Kinyarwanda"
},
{

    id: 73,
    name: "High Line Fm",
    url: "https://stream-154.zeno.fm/rkzws6xemuwuv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/139768.v1.png",
    country: "Rwanda", 
    description: "This radio is going to be publishing the news acrossing the world including sport, entertainement, music and politic as well.",
    genre: "Musique",
    language: "Kinyarwanda"
},
{

    id: 74,
    name: "ANGELS Radio",
    url: "https://stream-173.zeno.fm/z8yz4hfdwg0uv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/0/107420.v5.png",
    country: "Rwanda", 
    description: "ANGELS Radio is a radio station from Rwanda providing a big variety of music",
    genre: "Musique",
    language: "Kinyarwanda,English"
},
{

    id: 75,
    name: "SBN Gospel",
    url: "https://stream-174.zeno.fm/yyvcrpnqnujtv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/6/140716.v1.png",
    country: "Rwanda", 
    description: "SBN Gospel providing big variety of music",
    genre: "Religion",
    language: "Kinyarwanda,English"
},
{

    id: 76,
    name: "94.5 KEY FM",
    url: "https://stream-153.zeno.fm/xvdahws8w6rtv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/5/137245.v5.png",
    country: "Rwanda", 
    description: " brings you the finest selection of music and entertainment from around the world",
    genre: "Musique",
    language: "Kinyarwanda,English"
},

{

    id: 77,
    name: "Shima FM",
    url: "http://5.189.189.39:8000/zabujadotcom.mp3",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/3/128293.v3.png",
    country: "Burundi", 
    description: "Ijambo kuri bose; Kihwanya, Rumonge, Burundi",
    genre: "Actualités",
    language: "Kirundi"
},

{

    id: 78,
    name: "Radio Indundi culture",
    url: "http://63.250.40.39:8008/indundiculture",
    logoUrl: "https://indundi.com/wp-content/uploads/2023/08/cropped-indundi-333-png-1-e1691275713185.png",
    country: "Burundi", 
    description: "FM 88.2 / 99.9 - Bujumbura",
    genre: "Actualités",
    language: "Kirundi"
},

{

    id: 79,
    name: "Radio Homewood",
    url: "https://stream-176.zeno.fm/b9zg6ceg5ehvv",
    logoUrl: "https://cdn.onlineradiobox.com/img/l/8/111958.v17.png",
    country: "Burundi", 
    description: "	Bujumbura,Ntahangwa kamenge,Twinyoni,11Av53 Iwabo w'abasigayz",
    genre: "Education",
    language: "Kirundi"
},

];

//genres: actualités,national,musique, sports,Religion,education 

class Birastat {
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
            player: document.getElementById('player-content'),
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
        select.dispatchEvent(new Event('change')); // Déclenche l'événement de changement
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

    this.elements.audioPlayer.addEventListener('ended', () => {
        // Recharger le flux en cas de fin inattendue
        this.playStation(this.currentStation, true);
    });
    
    this.elements.audioPlayer.addEventListener('stalled', () => {
        console.warn('Audio stalled, reloading stream...');
        // Redémarrer la lecture en cas de blocage
        this.playStation(this.currentStation, true);
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

    if (isLoading) {
        // Lors du chargement
        this.elements.playPauseIcon.classList.remove('fa-play', 'fa-pause');
        this.elements.playPauseIcon.classList.add('fa-spinner', 'fa-spin');
        this.elements.playerStatus.textContent = 'Chargement en cours...';
    } else if (this.hasError) {
        // En cas d'erreur
        this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin', 'fa-pause');
        this.elements.playPauseIcon.classList.add('fa-play');
        this.elements.playerStatus.textContent = "Erreur de lecture, Actualisez sinon choisissez l'autre station.";
        this.elements.mic.style.display = "none"; // Masquer le micro
    } else if (this.isPlaying) {
        // En lecture
        this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin');
        this.elements.playPauseIcon.classList.add('fa-pause');
        this.elements.playerStatus.textContent = 'En direct...';
        this.elements.mic.style.display = "block"; // Afficher le micro
    } else {
        // En pause
        this.elements.playPauseIcon.classList.remove('fa-spinner', 'fa-spin', 'fa-pause');
        this.elements.playPauseIcon.classList.add('fa-play');
        this.elements.playerStatus.textContent = 'Mis en pause.';
        this.elements.mic.style.display = "none"; // Masquer le micro
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
    this.elements.errorMessage.textContent =errorMessage;
    this.elements.errorMessage.style.display = 'block';
    this.updatePlayState();
    console.error('Playback error:', errorMessage, error);
}


// Mettre en place Mediasession pour lecture dans les notification
setupMediaSession(station) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: station.name,
            artist: station.country, 
            album: "Birastat radio", 
            artwork: [
                { src: station.logoUrl, sizes: '96x96', type: 'image/jpeg' }, 
                { src: station.logoUrl, sizes: '128x128', type: 'image/jpeg' },
                { src: station.logoUrl, sizes: '192x192', type: 'image/jpeg' },
                { src: station.logoUrl, sizes: '256x256', type: 'image/jpeg' },
                { src: station.logoUrl, sizes: '384x384', type: 'image/jpeg' },
                { src: station.logoUrl, sizes: '512x512', type: 'image/jpeg' }
            ],
        });

        navigator.mediaSession.setActionHandler('play', () => {
            this.elements.audioPlayer.play();
        });

        navigator.mediaSession.setActionHandler('pause', () => {
            this.elements.audioPlayer.pause();
        });

    } else {
        console.warn('Media Session API not supported in this browser.');
    }
}



async playStation(station, forceRefresh = false) {
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

        // Rafraîchir le flux si nécessaire
        if (forceRefresh || this.elements.audioPlayer.paused) {
            this.elements.audioPlayer.pause(); // Arrêter le flux en cours
            this.elements.audioPlayer.src = `https://birastat.glitch.me/proxy?url=${encodeURIComponent(station.url)}`;
            this.elements.audioPlayer.load(); // Recharger le flux
        }

        // Lecture
        await this.elements.audioPlayer.play();

        this.isPlaying = true;
        this.setLoadingState(false); // Arrêter l'état de chargement
        this.updatePlayState();
    } catch (error) {
        console.error('Error playing station:', error);
        this.handlePlaybackError(error);
    }
}


handlePlayPause() {
    if (this.isPlaying) {
        // Mettre en pause
        this.elements.audioPlayer.pause();
        this.isPlaying = false;
        this.updatePlayState();
    } else {
        // forcer le rafraîchissement pour lire le flux en temps réel
        this.playStation(this.currentStation, true);
    }
}



playStation(station) {
    try {
        this.currentStation = station;

        // Incrémenter le compteur de visites
        const visits = JSON.parse(localStorage.getItem('stationVisits')) || {};
        visits[station.id] = (visits[station.id] || 0) + 1;
        localStorage.setItem('stationVisits', JSON.stringify(visits));

        localStorage.setItem('lastPlayedStation', JSON.stringify(station));
        this.elements.currentStationName.textContent = station.name;
        this.elements.currentStationLogo.src = station.logoUrl;
        this.elements.currentStationInfo.textContent = `${station.country} - ${station.genre}`;

        this.elements.audioPlayer.src = `https://birastat.glitch.me/proxy?url=${encodeURIComponent(station.url)}`;
        this.setupMediaSession(station);
        this.elements.audioPlayer.play();

        this.isPlaying = true;
        this.updatePlayState();
    } catch (error) {
        console.error('Error playing station:', error);
    }
}







updatePlayState() {
    if (!this.elements.player) {
        console.warn("L'élément 'player' est introuvable. Vérifiez votre DOM.");
        return;
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
        const visits = JSON.parse(localStorage.getItem('stationVisits')) || {};
    
        return stations
            .filter(station => {
                const matchesSearch = !this.currentSearchQuery || 
                    Object.values(station).some(value => 
                        String(value).toLowerCase().includes(this.currentSearchQuery.toLowerCase())
                    );
    
                const matchesFilters = Object.entries(this.currentFilters).every(([key, value]) => 
                    !value || station[key] === value
                );
    
                return matchesSearch && matchesFilters;
            })
            .sort((a, b) => {
                if (!this.currentFilters.country && !this.currentFilters.genre && !this.currentFilters.language) {
                    return (visits[b.id] || 0) - (visits[a.id] || 0);
                }
                return 0; // Pas de tri spécifique si des filtres sont appliqués
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
const app = new Birastat();  
