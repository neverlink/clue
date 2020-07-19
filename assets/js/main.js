window.onload = () => {
    document.oncontextmenu = () => false;

    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/missed.mp3",
    "media/distant.mp3",
    "media/B2W.mp3",
    "media/what am i gonna do.mp3",
    "media/upset.mp3",
    "media/clueless.mp3",
    "media/sour.mp3",
    "media/nk.mp3",
    "media/nineteen.mp3",
    "media/nothing lasts forever.mp3",
    "media/astrid.mp3",
    "media/never lose yr way.mp3",
];

var songLinks = [
	"https://soundcloud.com/7serene/missed-kir",
	"https://soundcloud.com/wido123456789/track-1-distant",
	"https://soundcloud.com/kketamine/b2w",
	"https://soundcloud.com/kggn/idk-bro",
	"https://soundcloud.com/prodelxnce/upset",
	"https://soundcloud.com/kggn/clueless-kurtains-valentine",
	"https://soundcloud.com/gnde/sour",
	"https://soundcloud.com/sglily/nklb",
	"https://soundcloud.com/4kure/nineteen-prod-lovbug",
	"https://soundcloud.com/d1vwv/nothing-lasts-forever-loveboy-prod-kashi",
	"https://soundcloud.com/1glaive/astrid",
	"https://soundcloud.com/ddertbag/never-lose-yr-way",
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