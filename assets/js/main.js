window.onload = () => {
    document.oncontextmenu = () => false;
    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/spring talent show.mp3",
    "media/antichrist.mp3",
    "media/better.mp3",
    "media/circle small.mp3",
    "media/comfortable.mp3",
    "media/do somethink new.mp3",
    "media/emo plugg.mp3",
    "media/i can't keep anything in place.mp3",
    "media/its hard.mp3",
    "media/msg.mp3",
    "media/qpid.mp3",
    "media/sheaskedwhatmylifeislike.mp3",
];

var songLinks = [
	"https://soundcloud.com/mental/better",
	"https://soundcloud.com/wido123456789/just-enjoy-okei",
	"https://soundcloud.com/ericdoa/sawmlil",
	"https://soundcloud.com/kiryano/fade-w-kket-draft-1",
	"https://soundcloud.com/emotegi/talent-show",
	"https://soundcloud.com/funeral/ickaip",
	"https://soundcloud.com/kketamine/circle-small-w-kiryano-prod",
	"https://soundcloud.com/oaf1/smile",
	"https://soundcloud.com/saturn27/qpid",
	"https://soundcloud.com/funeral/antichrist",
	"https://soundcloud.com/whereisnomu/comfortable",
	"https://soundcloud.com/kiryano/nvme-prodd-winter",
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