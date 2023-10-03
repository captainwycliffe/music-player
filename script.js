const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const volumeRange = document.getElementById("volume-range");

// Define your songs here with title and audio file paths
const songs = [
    {
        title: "Take Care",
        audioPath: "./Music/Drake - Take Care ft. Rihanna(M4A_128K).m4a",
        coverImage: "./Images/Take Care.jpeg"
    },
    {
        title: "Famous",
        audioPath: "./Music/French Montana - Famous (Official Video)(M4A_128K).m4",
        coverImage: "./Images/Famous.jpeg"
    },
    {
        title: "Sky Walker",
        audioPath: "./Music/Miguel - Sky Walker (Official Video) ft. Travis Scott(M4A_128K).m4a",
        coverImage: "./Images/Sky walker.jpeg"
    },
    {
        title: "Fetch Your Life",
        audioPath: "./Music/Prince Kaybee - Fetch Your Life ft. Msaki(M4A_128K).m4a",
        coverImage: "./Images/Fetch Your Life.jpeg"
    }
];

// Keep track of the current song index
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song.title;
    audio.src = song.audioPath;
    cover.src = song.coverImage;
}

// Play Song
function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play();
}

// Pause Song
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fa").classList.add("fa-play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
    audio.pause();
}

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Update Progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Update current time and duration display
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`;
    duration.textContent = `${durationMinutes}:${durationSeconds}`;
}

// Set Progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Volume control
volumeRange.addEventListener("input", () => {
    audio.volume = volumeRange.value;
});

// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change Song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/Song Update
audio.addEventListener("timeupdate", updateProgress);

// Click On progress Bar
progressContainer.addEventListener("click", setProgress);

// Song End (Replace with your own logic for handling song end)
audio.addEventListener("ended", () => {
    nextSong();
});
