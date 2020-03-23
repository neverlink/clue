window.onload = () => {
    document.oncontextmenu = () => false;

    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/antisocial.mp3",
    "media/skit (shinjin).mp3",
    "media/stalkin me.mp3",
    "media/control (prod. shinjin).mp3",
    "media/because of me.mp3",
    "media/i need a break (prod. pitfall).mp3",
    "media/gross (prod. kiryano).mp3",
    "media/summoner [bizarius].mp3",
    "media/17 again [prod. ddertbAg].mp3",
    "media/dumb (prod. shinjin).mp3",
    "media/zee! - nobody ballad (prod.zee!).mp3",
    "media/stop trying right now.mp3",
];

var songLinks = [
    "https://soundcloud.com/whereisnomu/antisocial",
    "https://soundcloud.com/gnde/skit",
    "https://soundcloud.com/kketamine/stalkin-me-prodkket",
    "https://soundcloud.com/luvbackpack/control-prod-shinjin",
    "https://soundcloud.com/whereisnomu/because-of-me",
    "https://soundcloud.com/saturn27/i-need-a-break-prod-pitfall",
    "https://soundcloud.com/kketamine/gross-prod-kiryano", 
    "https://soundcloud.com/loveboy00/summoner-bizarius",
    "https://soundcloud.com/1yr/17-again-ddertbag",
    "https://soundcloud.com/luvbackpack/dumb-prod-shinjin",
    "https://soundcloud.com/1osersclub/zee-nobody-ballad-prodzee",
    "https://soundcloud.com/okolo02/stop-trying-right-now",
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