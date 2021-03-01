window.onload = () => {
	new Date().getHours() <= 12 ? background.src = "https://clu.ee/media/morning.mp4" : background.src = "https://clu.ee/media/afternoon.mp4"

    document.oncontextmenu = () => false;
    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/we did it... together.mp3",
    "media/repeat.mp3",
    "media/from the start.mp3",
    "media/gettingtomyhead.mp3",
    "media/pave low.mp3",
    "media/2022 my year fr.mp3",
    "media/professionals.mp3",
    "media/burglary.mp3",
    "media/head on my shoulders.mp3",
    "media/help me.mp3",
    "media/its all a waste.mp3",
    "media/make u feel.mp3",
    "media/impatient.mp3",
    "media/velvet.mp3",
    "media/angel.mp3",
    "media/seventeen.mp3"
];

var songLinks = [
    "https://soundcloud.com/wido123456789/wedidit",
    "https://soundcloud.com/mental/rep",
    "https://soundcloud.com/d1vwv/from-the-start-loveboy-prod-with3r",
    "https://soundcloud.com/funeral/gtmh",
    "https://soundcloud.com/kketamine/pave-low-w-kiryano-1",
    "https://soundcloud.com/saturn27/2022-my-year-fr",
    "https://soundcloud.com/prodpitfall/professionals-ft-tropes-dltzk",
    "https://soundcloud.com/novaganghellsing/burglary",
    "https://soundcloud.com/sglily/shoulder",
    "https://soundcloud.com/rosesleeves/helpme",
    "https://soundcloud.com/ericdoa/iaaw",
    "https://soundcloud.com/d1vwv/make-u-feel-prod-skressiankon",
    "https://soundcloud.com/rosesleeves/impatient",
    "https://soundcloud.com/lil4c/velvet",
    "https://soundcloud.com/n_o1se/kketamine-angel-ft-kiryano-prod-maknae",
    "https://soundcloud.com/dltzk/seventeen"
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