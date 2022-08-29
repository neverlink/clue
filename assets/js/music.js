window.onload = () => {
    document.oncontextmenu = () => false;
    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/my toy.mp3",
    "media/i hate you i love you.mp3",
    "media/your name.mp3",
    "media/autumn wind.mp3",
    "media/von.mp3"
];

var songLinks = [
    "https://soundcloud.com/wazmusic/dvrst-my-toy",
    "https://soundcloud.com/wazmusic/dvrst-i-hate-you-i-love-you",
    "https://soundcloud.com/wazmusic/your-name",
    "https://soundcloud.com/wazmusic/autumn-wind",
    "https://www.youtube.com/watch?v=FTmWnjNtvc8"
];

var playing = Math.floor(Math.random() * songs.length - 1);

function initializePlayer() {
	incrementCurrentSong(0)
    player.addEventListener('ended', (e) => {
	    incrementCurrentSong(1)
	    playSong();
    }, false);
}

function changeVolume (val) {
    player.volume = val / 1000;
}

function playPause(el) {
    if (el.className == "button fas fa-play")
    {
        playSong();
        el.className = "button fas fa-pause";
    }
    else
    {
        player.pause();
        el.className = "button fas fa-play";
    }
    return false;
}

function incrementCurrentSong(count) {
    playing = (playing + count) % songs.length;
    if (playing < 0) { playing = songs.length - 1 }
    music.src = songs[playing];
    player.load();
}

function playSong() {
	player.play();
	updateMarquee();
}

function updateMarquee() {
    nowPlaying.innerHTML = String(songs[playing].substring(6, songs[playing].length - 4));
    nowPlaying.href = songLinks[playing];
    nowPlaying.target = "_blank"; 
}