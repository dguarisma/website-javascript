  import MediaPlayer from '@dguarisma/videoplayer/lib/MediaPlayer';
import Autoplay from '@dguarisma/videoplayer/lib/plugins/Autoplay';
import AutoPause from '@dguarisma/videoplayer/lib/plugins/AutoPause';
import AdsPlugin from '@dguarisma/videoplayer/lib/plugins/Ads/';


const playButton: HTMLElement = document.querySelector("#playButton")
const muteButton: HTMLElement = document.querySelector("#muteButton")
const video = document.querySelector("video")

const player = new MediaPlayer({el : video, plugins:[ 
  new Autoplay(),
  new AutoPause(),
  new AdsPlugin(),
] });

playButton.onclick =() =>  player.togglePlay();
muteButton.onclick =() =>  player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error=>{
    console.log(error.message);
  })
}