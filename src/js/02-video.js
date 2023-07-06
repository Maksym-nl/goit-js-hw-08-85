import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player')

//1привязка плеера к iframe
const player = new Player(iframe);

//2
player.on('timeupdate',throttle(onTimeupdate, 1000))

function onTimeupdate(data){
    localStorage.setItem("videoplayer-current-time", data.seconds)
}

//3
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0)