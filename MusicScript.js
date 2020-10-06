console.log("its working")
music_name = "./files/faded.mp3";
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#pre");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img");
let music_title=document.querySelector("#music-title");
let music_poster=document.querySelector("#music-poster")
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
window.onload = playSong;
function playSong() {
    song.src = music_name;
    console.log(song)
    music_poster.src="./files/musiclogo.jpg";
    // song.play();
    play_btn.addEventListener('click', function () {
        if (!isPlaying) {
            music_title.innerHTML="Faded Alan_Walker.mp3";
            song.play();
            isPlaying = true;
            total_time = song.duration;
            console.log("this is duration", sonsg.duration);
            range.max = total_time;
            play_img.src = "./files/pause.png";
          
        }
        else {
            song.pause();
            isPlaying = false;
            play_img.src = "./files/play.png";
        }
        song.addEventListener('ended', function () {
            song.currentTime = 0;
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "./files/play.png"
        })
        song.addEventListener('timeupdate', function () {
            range.value = song.currentTime;
        })
        range.addEventListener('change', function () {
            song.currentTime = range.value;
        })
    })
}