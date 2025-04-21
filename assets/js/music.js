window.addEventListener('DOMContentLoaded', () => {
    document.oncontextmenu = () => false;
    initializePlayer();
});

var songs = [
    "media/ssppllaasshhiinn.mp3",
    "media/gemini.mp3",
    "media/go 4evr.mp3",
    "media/sonic.mp3",
    "media/jolly ranchers.mp3"
];

var songLinks = [
    "https://soundcloud.com/oliverxfrancis/ssppllaasshhiinn",
    "https://soundcloud.com/oliverxfrancis/gemini-1",
    "https://soundcloud.com/oliverxfrancis/go-4ever",
    "https://soundcloud.com/oliverxfrancis/sonic-1",
    "https://soundcloud.com/oliverxfrancis/jolly-ranchers"
];

const playPause = () => {
    if (player.src == '') {
        playSong(window.currentSongIndex);
    }
    player.paused ? player.play() : player.pause();
}

const playSong = (index) => {
    if (index < 0) {
        window.currentSongIndex = songs.length - 1;
    } else if (window.currentSongIndex > songs.length - 1) {
        window.currentSongIndex = 0;
    }

    index = window.currentSongIndex;
    player.src = songs[index];

    console.log('Index requested:', index)
    console.log('Playing', songs[index])

    player.addEventListener('canplay', () => {
        player.play();
        updateMarquee();
    });
}

const updateMarquee = () => {
    songIndex = window.currentSongIndex;
    nowPlaying.innerHTML = String(songs[songIndex].substring(6, songs[songIndex].length - 4));
    nowPlaying.href = songLinks[songIndex];
    nowPlaying.target = "_blank";
}

const setPlayerEvents = () => {
    player.addEventListener('playing', () => {
        playPauseBtn.classList.replace("fa-play", "fa-pause");
        // player.volume = 0;
        // fadeIn = setInterval(() => {
        //     if (player.volume < volumeSlider.value / 1000) {
        //         player.volume += 0.01;
        //         console.log('Fading in', player.volume);
        //     }
        // }, 10);
        // // clearInterval(fadeIn);
    });

    player.addEventListener('pause', () => {
        playPauseBtn.classList.replace("fa-pause", "fa-play");
        // let fadeOut = setInterval(() => {
        //     if (player.volume > 0) {
        //         player.volume -= 0.01;
        //         console.log('Fading out', player.volume);
        //     }
        // }, 10);
        // clearInterval(fadeOut);
    });

    player.addEventListener('ended', () => {
        playSong(++currentSongIndex);
    });

    playPrevBtn.addEventListener('click', () => {
        playSong(--window.currentSongIndex);
    });

    playPauseBtn.addEventListener('click', () => {
        playPause();
    });

    playNextBtn.addEventListener('click', () => {
        playSong(++window.currentSongIndex);
    });

    volumeSlider.addEventListener('change', (e) => {
        player.volume = e.target.value / 1000;
    });
}

const initializePlayer = () => {
    setPlayerEvents();
    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    window.currentSongIndex = Math.floor(Math.random() * songs.length - 1);
    console.log(songs.join('\n'));
    console.log('Random index:', window.currentSongIndex)
}
