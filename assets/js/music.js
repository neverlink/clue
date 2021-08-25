window.onload = () => {
    document.oncontextmenu = () => false;
    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
<<<<<<< HEAD
    "media/end of time.mp3",
    "media/designer talk.mp3",
    "media/nothings fading.mp3",
    "media/met.mp3",
    "media/whatumean.mp3",
    "media/idk.mp3",
    "media/unhappy ending.mp3",
    "media/sense.mp3",
    "media/tycb.mp3",
    "media/seventeen.mp3",
    "media/unhappy ending.mp3",
    "media/jb x shinjin.mp3"
=======
    "media/let down.mp3",
    "media/winter.mp3",
    "media/letz 5hake.mp3",
    "media/shooting star.mp3",
    "media/infectuous.mp3",
    "media/biz.mp3",
    "media/alive.mp3",
    "media/smile.mp3",
    "media/emo plugg.mp3",
    "media/seventeen.mp3",
    "media/feels.mp3",
    "media/so it seems.mp3"
>>>>>>> 3551796b82551c316f25cbf9658c459a64f02e41
];

var songLinks = [
    "https://soundcloud.com/dltzk/let-down",
    "https://soundcloud.com/5vexe/winter-ft-ggravee-odece-northeast-lights",
    "https://soundcloud.com/saturn27/letz-5hake",
    "https://soundcloud.com/dltzk/1aa",
    "https://soundcloud.com/prodpitfall/infectious",
    "https://soundcloud.com/emotionals/biz",
    "https://soundcloud.com/winter/alive-3",
    "https://soundcloud.com/lov-bug/kiryano-smile-prod-lovbug-kiryano",
    "https://soundcloud.com/kiryano/fade-w-kket-draft-1",
    "https://soundcloud.com/winter/so-it-seems",
    "https://soundcloud.com/dltzk/seventeen",
    "https://soundcloud.com/7serene/feels"
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