window.onload = () => {
    document.oncontextmenu = () => false;

    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}
var songs = [
    "media/alright (prod. by kid pretzel).mp3",
    "media/knots(kir).mp3",
    "media/familymart (Xangang).mp3",
    "media/Facelift ft. dolly [prod. kiryano].mp3",
    "media/3 checks (prod. maknae).mp3",
    "media/Paradise Kiss (Prod. mixed matches).mp3",
    "media/kurtains x whitetrash - devil cry (prod. kurtains).mp3",
    "media/maxwell (prod. pitfall + tempuraroll + lotchek).mp3",
    "media/pretty lies (prod. kiryano).mp3",
    "media/blurry (prod. tomekk & baslle).mp3",
    "media/tonight (prod. winter).mp3",
    "media/DREAM OF U (prod. SCARY X OPAL).mp3",
    "media/mbn.mp3",
    "media/gone (prod. maknae).mp3",
    "media/BANKAI (卍解) (ft. sholoh).mp3",
    "media/goodbye (lovbug).mp3",
];

var songLinks = [
    "https://soundcloud.com/guardinmusic/alright-prod-by-lil-pretzel",
    "https://soundcloud.com/kiryano/knots-kiryano",
    "https://soundcloud.com/sglily/familymart-xangang",
    "https://soundcloud.com/1yr/facelift-dolly-kiryano",
    "https://soundcloud.com/kketamine/3-checks-prod-maknae",
    "https://soundcloud.com/braxtonknight/paradisekiss",
    "https://soundcloud.com/iconicompound/kurtains-x-whitetrash-devil-cry-prod-kurtains", 
    "https://soundcloud.com/saturn27/maxwell",
    "https://soundcloud.com/luvbackpack/pretty-lies-prod-kiryano",
    "https://soundcloud.com/kketamine/blurry-prod-tommek-baslle",
    "https://soundcloud.com/chach404/2nite",
    "https://soundcloud.com/loveboy00/dream-of-u-prod-scary-x-opal",
    "https://soundcloud.com/p4rkr/it-depends",
    "https://soundcloud.com/1fns/gone",
    "https://soundcloud.com/prodelxnce/bankai-1",
    "https://soundcloud.com/lilkiteshawty/goodbye-lovbug",
];

function initializePlayer() {
    player.addEventListener('ended', (e) => {
    playing = Math.floor(Math.random() * songs.length - 1);
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