window.onload = () => {
    document.getElementById("slider").defaultValue = 20;
    audio.volume = document.getElementById("slider").value / 1000;
}
function toggle(el){
    if (el.className=="button fas fa-play")
    {
        audio.play();
        el.className="button fas fa-pause";
    }
    else
    {
        audio.pause();
        el.className="button fas fa-play";
    }
    return false;
}
window.changeVolume = function(val)
{
    audio.volume = val / 1000;
}