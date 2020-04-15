window.onload = () => {
    document.oncontextmenu = () => false;

    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/valentine +pitfall (maknae).mp3",
    "media/distant( glo sg37).mp3",
    "media/defense + pitfall, midwxst (pr1ze kuru).mp3",
    "media/focus (prod. ddertbag x sg37).mp3",
    "media/swear (ft. uknoxoxo) [opal_sg37].mp3",
    "media/in my sights(prod. thr6x).mp3",
    "media/for you (kir).mp3",
    "media/control [prod odel + shigitori].mp3",
    "media/takee my trueys off,, buhbae ++ shojirose.mp3",
    "media/doll feat. blxty, mental.mp3",
    "media/Heaven over NY & Quanzhou.mp3",
];

var songLinks = [
    "https://soundcloud.com/gnde/valentine",
    "https://soundcloud.com/kiryano/distant-glo-sg-37",
    "https://soundcloud.com/kevinsavior/defense-pitfall-midwxst-pr1ze-kuru",
    "https://soundcloud.com/luvbackpack/focus-prod-ddertbag-x-sg37",
    "https://soundcloud.com/loveboy00/swear-ft-uknoxoxo-opalsg37",
    "https://soundcloud.com/kketamine/in-my-sightsprod-thr6x",
    "https://soundcloud.com/kiryano/kiryano-for-you-prod-kiryano",
    "https://soundcloud.com/4ambhx/control",
    "https://soundcloud.com/i9bonsai/trueys-off",
    "https://soundcloud.com/blackwinterwells/doll",
    "https://soundcloud.com/outby16/honyq"
];

var playing = Math.floor(Math.random() * songs.length - 1);

function initializePlayer() {
    player.addEventListener('ended', (e) => {
    music.src = songs[playing];
    player.load();
    player.play();
    updateMarquee();
    }, false);
}
function changeVolume (val) {
    player.volume = val / 1000;
}
function playPause(el) {
    if (el.className == "button fas fa-play")
    {
        player.play();
        el.className = "button fas fa-pause";
    }
    else
    {
        player.pause();
        el.className = "button fas fa-play";
    }
    return false;
}
function changeSong(count) {
    playing = (playing + count) % songs.length;
    music.src = songs[playing];
    player.load();
    player.play();
    updateMarquee();
}
function updateMarquee() {
    nowPlaying.innerHTML = playing + 1 + ". " + songs[playing].substring(6, songs[playing].length - 4);
    nowPlaying.href = songLinks[playing];
    nowPlaying.target = "_blank"; 
}