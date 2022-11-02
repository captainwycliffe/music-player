# music-player
simple music player using html and javascript


## songs in the music player
-ukulele
-jazzyfrenchy
-happyrock

## function to play the song
The fucntion runs to play any of the three songs
// Play Song
function playSong() {
musicContainer.classList.add("play");
playBtn.querySelector("i.fa").classList.remove("fa-play");
playBtn.querySelector("i.fa").classList.add("fa-pause");
audio.play();
}
## function to pause the song

Below is a javascript function used to play the song.

function pauseSong() {
musicContainer.classList.remove("play");
playBtn.querySelector("i.fa").classList.add("fa-play");
playBtn.querySelector("i.fa").classList.remove("fa-pause");
audio.pause();
}
