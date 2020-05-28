window.onload = () => {
    document.oncontextmenu = () => false;

    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/go down.mp3",
    "media/life is pain.mp3",
    "media/nthn.mp3",
    "media/trendsetta.mp3",
    "media/utilize.mp3",
    "media/head on my shoulders.mp3",
    "media/decide between me and the moon.mp3",
    "media/she chose the moon.mp3",
    "media/3D.mp3",
    "media/walmart.mp3",
    "media/fly or fall.mp3",
    "media/trying++cry4help.mp3",
];

var songLinks = [
	"https://soundcloud.com/wido123456789/whaaat-whttt",
	"https://soundcloud.com/1glaive/life-is-pain",
	"https://soundcloud.com/i9bonsai/nthn",
	"https://soundcloud.com/slowsilver03/trendsetta",
	"https://soundcloud.com/7serene/kiryano-emotionals3k-miso-maknae-psst",
	"https://soundcloud.com/sglily/shoulder",
	"https://soundcloud.com/okoloarchive/decide-between-me-and-da-moon",
	"https://soundcloud.com/okoloarchive/okolo-she-chose-da-moon",
	"https://soundcloud.com/lilcloth/uknoxoxo-vs-misogi-3d-clairvoyant",
	"https://soundcloud.com/4ambhx/walmart",
	"https://soundcloud.com/sglily/fly",
	"https://soundcloud.com/funeral/cry4help",
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