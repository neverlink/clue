window.onload = () => {
    bgVideo.volume = 0.05;
    document.oncontextmenu = () => false;
}
function toggle(el){
    if (el.className=="button fas fa-play")
    {
        el.className="button fas fa-pause";
        bgVideo.play();
    }
    else
    {
        bgVideo.pause();
        el.className="button fas fa-play";
    }
    return false;
}
window.changeSpeed = function(val)
{
    bgVideo.volume = val / 1000;
}