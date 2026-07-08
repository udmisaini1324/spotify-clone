let currentSongIndex = 0;

const songs = [
    {
        id: 1,
        title: "Haaye Re",
        artist: "Banjaare",
        cover: "https://picsum.photos/200?random=1",
        audio: "songs/Haaye Re.mp3"

    },
    {
        id: 2,
        title: "Na Jaiyo",
        artist: "Preet sorohi",
        cover: "https://picsum.photos/200?random=2",
        audio: "songs/Na Jaiyo.mp3"
    },
    {
        id: 3,
        title: "Aarzu",
        artist: "Abdul Hannan",
        cover: "https://picsum.photos/200?random=3",
        audio: "songs/Aarzu.mp3"
    },
    {
        id: 4,
        title: "Aankhon Se Batana",
        artist: "Gaurav Krishnan",
        cover: "https://picsum.photos/200?random=4",
        audio: "songs/Aankhon Se Batana.mp3"
    },
    {
        id: 5,
        title: "Baari",
        artist: "Bilal Sahid",
        cover: "https://picsum.photos/200?random=5",
        audio: "songs/Baari.mp3"
    },
    {
        id: 6,
        title: "Deewane",
        artist: "Aditya Yadav",
        cover: "https://picsum.photos/200?random=6",
        audio: "songs/Deewane.mp3"
    },
    {
        id: 7,
        title: "Bairan",
        artist: "Afsana Khan",
        cover: "https://picsum.photos/200?random=7",
        audio: "songs/Bairan.mp3"
    },
    {
        id: 8,
        title: "Aisa Banna Sawarna",
        artist: "Nusrat Fateh Ali Khan",
        cover: "https://picsum.photos/200?random=8",
        audio: "songs/Aisa Banna Sawarna.mp3"
    },
    {
        id: 9,
        title: "HALKA HALKA",
        artist: "Rahat Fateh Ali Khan",
        cover: "https://picsum.photos/200?random=9",
        audio: "songs/HALKA HALKA.mp3"
    },
    {
        id: 10,
        title: "Akhiyan Rahat Fateh Ali Khan",
        artist: "Rahat Fateh Ali Khan",
        cover: "https://picsum.photos/200?random=10",
        audio: "songs/Akhiyan Rahat Fateh Ali Khan.mp3"
    },
    {
        id: 11,
        title: "Pehli Nazar Mein",
        artist: "Atif Aslam",
        cover: "https://picsum.photos/200?random=11",
        audio: "songs/Pehli Nazar Mein.mp3"
    },
    {
        id: 12,
        title: "Shikayat",
        artist: "Aur",
        cover: "https://picsum.photos/200?random=12",
        audio: "songs/Shikayat.mp3"
    },
    {
        id: 13,
        title: "Te Amo",
        artist: "Ash King & Sunidhi Chauhan",
        cover: "https://picsum.photos/200?random=13",
        audio: "songs/Te Amo.mp3"
    },
    {
        id: 14,
        title: "Zulfein",
        artist: "Rahat Fateh Ali Khan",
        cover: "https://picsum.photos/200?random=14",
        audio: "songs/Zulfein.mp3"
    },
    {
        id: 15,
        title: "Saudebazi",
        artist: "Javed Ali",
        cover: "https://picsum.photos/200?random=15",
        audio: "songs/Saudebazi.mp3"
    },
    {
        id: 16,
        title: "Dhoonde Akhiyaan",
        artist: "Yasser Desai, Altamash Faridi",
        cover: "https://picsum.photos/200?random=16",
        audio: "songs/Dhoonde Akhiyaan.mp3"
    },
    {
        id: 17,
        title: "O Sanam",
        artist: "Lucky Ali",
        cover: "https://picsum.photos/200?random=17",
        audio: "songs/O Sanam.mp3"
    },
    {
        id: 18,
        title: "KITAB",
        artist: "The Siege",
        cover: "https://picsum.photos/200?random=18",
        audio: "songs/KITAB.mp3"
    },
    {
        id: 19,
        title: "DIL NU",
        artist: "AP Dhillon",
        cover: "https://picsum.photos/200?random=19",
        audio: "songs/DIL NU.mp3"
    },
    {
        id: 20,
        title: "Hum Tum",
        artist: "Alka Yagnik & Babul Supriyo",
        cover: "https://picsum.photos/200?random=20",
        audio: "songs/Hum Tum.mp3"
    },
    {
        id: 21,
        title: "AKHIYAN",
        artist: "Mitraz",
        cover: "https://picsum.photos/200?random=21",
        audio: "songs/AKHIYAN.mp3"
    },
    {
        id: 22,
        title: "Bol Na Halke Halke",
        artist: "Rahat Fateh Ali Khan & Mahalaxmi Iyer",
        cover: "https://picsum.photos/200?random=22",
        audio: "songs/Bol Na Halke Halke.mp3"
    },
    {
        id: 23,
        title: "LONG TIME NO SEE",
        artist: "Aditya Yadav",
        cover: "https://picsum.photos/200?random=23",
        audio: "songs/LONG TIME NO SEE.mp3"
    },
    {
        id: 24,
        title: "Midnight Call",
        artist: "Krrish Rao",
        cover: "https://picsum.photos/200?random=24",
        audio: "songs/Midnight Call.mp3"
    },
    {
        id: 25,
        title: "PHIR KABHI",
        artist: "Arijit Singh",
        cover: "https://picsum.photos/200?random=25",
        audio: "songs/PHIR KABHI.mp3"
    },
    {
        id: 26,
        title: "Khuda Jaane",
        artist: "KK & Shilpa Rao",
        cover: "https://picsum.photos/200?random=26",
        audio: "songs/Khuda Jaane.mp3"
    },
    {
        id: 27,
        title: "Soniyo",
        artist: "Sonu Nigam, Shreya Ghoshal & Neeraj Shridhar",
        cover: "https://picsum.photos/200?random=27",
        audio: "songs/Soniyo.mp3"
    },
    {
        id: 28,
        title: "With You",
        artist: "A.P Dhillon",
        cover: "https://picsum.photos/200?random=28",
        audio: "songs/With You.mp3"
    },
    {
        id: 29,
        title: "Tu Hi Mera",
        artist: "Shafqat Amanat Ali",
        cover: "https://picsum.photos/200?random=29",
        audio: "songs/Tu Hi Mera.mp3"
    },
    {
        id: 30,
        title: "SAJDE",
        artist: "Arijit Singh, Nihira Joshi & Gulzar",
        cover: "https://picsum.photos/200?random=30",
        audio: "songs/SAJDE.mp3"
    },
    {
        id: 31,
        title: "Zaalima",
        artist: "Arijit Singh",
        cover: "https://picsum.photos/200?random=31",
        audio: "songs/Zaalima.mp3"
    },
    {
        id: 32,
        title: "Pee Loon",
        artist: "Mohit Chauhan ",
        cover: "https://picsum.photos/200?random=32",
        audio: "songs/Pee Loon.mp3"
    },
    {
        id: 33,
        title: "Mere Bina",
        artist: "Nikhil D'Souza",
        cover: "https://picsum.photos/200?random=33",
        audio: "songs/Mere Bina.mp3"
    },
    {
        id: 34,
        title: "Rishte Naate",
        artist: "Rahat Fateh Ali Khan & Shreya Ghoshal",
        cover: "https://picsum.photos/200?random=34",
        audio: "songs/Rishte Naate.mp3"
    },
    {
        id: 35,
        title: "Ye Tune Kya Kiya",
        artist: "Pritam,Akshay Kumar",
        cover: "https://picsum.photos/200?random=35",
        audio: "songs/Ye Tune Kya Kiya.mp3"
    },
    {
        id: 36,
        title: "Tune Jo Na Kaha ",
        artist: "Mohit Chauhan ",
        cover: "https://picsum.photos/200?random=36",
        audio: "songs/Tune Jo Na Kaha.mp3"
    },
    {
        id: 37,
        title: "Humko Pyaar Hua",
        artist: " KK,Pritam",
        cover: "https://picsum.photos/200?random=37",
        audio: "songs/Humko Pyaar Hua.mp3"
    },
    {
        id: 38,
        title: "SHARMEELI",
        artist: "Frappe Ash & toorjo dey",
        cover: "https://picsum.photos/200?random=38",
        audio: "songs/SHARMEELI.mp3"
    },
    {
        id: 39,
        title: "By My Side",
        artist: "AP Dhillon & Shinda Kahlon",
        cover: "https://picsum.photos/200?random=39",
        audio: "songs/By My Side.mp3"
    },
    {
        id: 40,
        title: "First Love",
        artist: "Ishita Malik",
        cover: "https://picsum.photos/200?random=40",
        audio: "songs/First Love.mp3"
    },
    {
        id: 41,
        title: "Tu Na Samjhe",
        artist: "MaxxTurnn",
        cover: "https://picsum.photos/200?random=41",
        audio: "songs/Tu Na Samjhe.mp3"
    },
    {
        id: 42,
        title: "UDI UDI",
        artist: "Aneesh.Poojari & sarkarmusic",
        cover: "https://picsum.photos/200?random=42",
        audio: "songs/UDI UDI.mp3"
    }
];

const cardContainer = document.querySelector(".card-container");

const playerCover = document.getElementById("player-cover");

const playerTitle = document.getElementById("player-title");

const playerArtist = document.getElementById("player-artist");

const audioPlayer = document.getElementById("audio-player");

const prevBtn = document.getElementById("prev-btn");

const playBtn = document.getElementById("play-btn");

const nextBtn = document.getElementById("next-btn");

const progressBar = document.getElementById("progress-bar");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");

const playIcon = playBtn.querySelector("i");

const volumeSlider = document.getElementById("volume-slider");

const volumeIcon = document.getElementById("volume-icon");

const searchInput = document.getElementById("search-input");

let isPlaying = false;

audioPlayer.volume = 1;

let previousVolume = 1;

function updateActiveCard(index) {

    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.classList.remove("active");
    });

    allCards[index].classList.add("active");
}

function playSong(index) {

    const song = songs[index];

    currentSongIndex = index;

    updateActiveCard(index);

    playerCover.src = song.cover;
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;

    audioPlayer.src = song.audio;
    audioPlayer.play();

    isPlaying = true;

    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}

function renderSongs(songList) {

    cardContainer.innerHTML = "";

    songList.forEach((song, index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.dataset.index = songs.indexOf(song);

        card.innerHTML = `
    <div class="card-image">

        <img src="${song.cover}" alt="${song.title}">

        <button class="card-play">
            <i class="fa-solid fa-play"></i>
        </button>

    </div>

    <h3>${song.title}</h3>
    <p>${song.artist}</p>
    `;

        card.addEventListener("click", () => {
            playSong(songs.indexOf(song));
        });

        cardContainer.appendChild(card);
    });

}

renderSongs(songs);

// songs.forEach((song, index) => {

//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.dataset.index = index;

//     card.innerHTML = `
//         <img src="${song.cover}" alt="${song.title}">
//         <h3>${song.title}</h3>
//         <p>${song.artist}</p>
//     `;

//     card.addEventListener("click", () => {
//         playSong(index);
//     });

//     cardContainer.appendChild(card);
// });

prevBtn.addEventListener("click", () => {

    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    playSong(currentSongIndex);
});

playBtn.addEventListener("click", () => {

});

nextBtn.addEventListener("click", () => {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    playSong(currentSongIndex);

});

playBtn.addEventListener("click", () => {

    if (!audioPlayer.src) {
        return;
    }

    if (isPlaying) {
        audioPlayer.pause();

        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");

        isPlaying = false;
    } else {
        audioPlayer.play();

        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");

        isPlaying = true;
    }

});

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;

}

audioPlayer.addEventListener("timeupdate", () => {

    if (!audioPlayer.duration) return;

    const progress =
        (audioPlayer.currentTime / audioPlayer.duration) * 100;

    progressBar.value = progress;

    currentTime.textContent = formatTime(audioPlayer.currentTime);
    duration.textContent = formatTime(audioPlayer.duration);

});
progressBar.addEventListener("input", () => {

    const seekTime =
        (progressBar.value / 100) * audioPlayer.duration;

    audioPlayer.currentTime = seekTime;

});
audioPlayer.addEventListener("ended", () => {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    playSong(currentSongIndex);

});

volumeSlider.addEventListener("input", () => {

    audioPlayer.volume = volumeSlider.value / 100;

    if (audioPlayer.volume == 0) {

        volumeIcon.className = "fa-solid fa-volume-xmark";

    } else if (audioPlayer.volume < 0.5) {

        volumeIcon.className = "fa-solid fa-volume-low";

    } else {

        volumeIcon.className = "fa-solid fa-volume-high";

    }

});

volumeIcon.addEventListener("click", () => {

    if (audioPlayer.volume > 0) {

        previousVolume = audioPlayer.volume;

        audioPlayer.volume = 0;

        volumeSlider.value = 0;

    } else {

        audioPlayer.volume = previousVolume;

        volumeSlider.value = previousVolume * 100;

    }

});

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredSongs = songs.filter(song =>

        song.title.toLowerCase().includes(searchText) ||
        song.artist.toLowerCase().includes(searchText)

    );

    renderSongs(filteredSongs);

});

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
    greeting.textContent = "Good Morning";
}
else if (hour >= 12 && hour < 17) {
    greeting.textContent = "Good Afternoon";
}
else if (hour >= 17 && hour < 21) {
    greeting.textContent = "Good Evening";
}
else {
    greeting.textContent = "Good Night";
}