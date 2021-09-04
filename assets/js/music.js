window.onload = () => {
    document.oncontextmenu = () => false;
    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/stay (shinjin).mp3",
    "media/at the end of time.mp3",
    "media/designer talk.mp3",
    "media/nothings fading.mp3",
    "media/met.mp3",
    "media/what u mean.mp3",
    "media/idk.mp3",
    "media/unhappy ending.mp3",
    "media/sense.mp3",
    "media/tycb.mp3",
    "media/dgaf.mp3"
];

var songLinks = [
    "https://soundcloud.com/ivvyleague/jb-x-shinjin",
    "https://soundcloud.com/7serene/at-the-end-of-time-wavypang",
    "https://soundcloud.com/polar333/designer-talk",
    "https://soundcloud.com/kiryano/nothings-fading-taylor-morgan-saint-tomorrow",
    "https://soundcloud.com/bydion/met",
    "https://soundcloud.com/roxas358/whatumean",
    "https://soundcloud.com/eruesudi/idkprodlyustradeliverthecrush",
    "https://soundcloud.com/kggn/unhappy-ending-dltzk",
    "https://soundcloud.com/misoo74/nch",
    "https://soundcloud.com/7serene/things-you-cant-believe",
    "https://soundcloud.com/kketamine/kketvict1m-dgafcashapp-prod-kket"
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
