## Music-Player

Introducing the Ultimate Music Player – Your Gateway to Sonic Bliss!

Welcome to the future of music enjoyment with our cutting-edge Music Player project. Packed with features and a growing library of incredible tunes, this is your go-to source for immersive audio experiences. Although we currently offer four phenomenal songs, stay tuned because our collection is continually expanding to elevate your musical journey!


### songs in the music player
-Take Care
-Fetch Your Life
-Sky Walker
-Famous

### function to play the song
The function runs to play any of the three songs
``` javascript
// Play Song
function playSong() {
musicContainer.classList.add("play");
playBtn.querySelector("i.fa").classList.remove("fa-play");
playBtn.querySelector("i.fa").classList.add("fa-pause");
audio.play();
}
```
### function to pause the song

Below is a javascript function used to play the song.
``` javascript

function pauseSong() {
musicContainer.classList.remove("play");
playBtn.querySelector("i.fa").classList.add("fa-play");
playBtn.querySelector("i.fa").classList.remove("fa-pause");
audio.pause();
}
```
