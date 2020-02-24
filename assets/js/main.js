window.onload = () => {
    document.getElementById("slider").defaultValue = 100;
    music.volume = document.getElementById("slider").value / 1000;

    document.oncontextmenu = () => false;

    const songs = [
        "media/alright (prod. by kid pretzel).mp3",
        "media/knots(kir).mp3",
        "media/familymart (Xangang).mp3",
        "media/Facelift ft. dolly [prod. kiryano].mp3",
        "media/3 checks (prod. maknae).mp3", 
        "media/Paradise Kiss (Prod. mixed matches).mp3",
        "media/kurtains x whitetrash - devil cry (prod. kurtains).mp3",
        "media/maxwell (prod. pitfall + tempuraroll + lotchek).mp3",
        "media/mbn.mp3",
        "media/gone (prod. maknae).mp3",
        "media/BANKAI (卍解) (ft. sholoh).mp3",
    ];
   
    let playing = Math.floor(Math.random() * songs.length - 1);

    document.getElementById("music").addEventListener('ended', (e) => {
        playing = (playing + 1) % songs.length;
        document.getElementById("played").src = songs[playing];
        e.srcElement.load();
        e.srcElement.play();
    }, false);
}
function toggle(el) {
    if (el.className=="button fas fa-play")
    {
        music.play();
        el.className="button fas fa-pause";
    }
    else
    {
        music.pause();
        el.className="button fas fa-play";
    }
    return false;
}
window.changeVolume = function(val) {
    music.volume = val / 1000;
}