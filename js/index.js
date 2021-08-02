const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $back10s = document.querySelector('#back10s')
const $next10s = document.querySelector('#next10s')

$play.addEventListener('click', handlePlay )
function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pausa.hidden = false;
}
$pausa.addEventListener('click', handlePausa )
function handlePausa(){
    $pausa.hidden = true;
    $play.hidden = false;
    $video.pause();
}

$back10s.addEventListener('click',handlerBack)
function handlerBack(){
    $video.currentTime -= 10;
    console.log("atras 10s",$video.currentTime)
}
$next10s.addEventListener('click',handlerNext)
function handlerNext(){
    $video.currentTime += 10;
    console.log("adelante 10s",$video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleLoaded)
function handleLoaded(){
    $progress.max = $video.duration
    console.log("cargo el video",$video.duration)
}
$video.addEventListener('timeupdate',handleTimeUpdate)
function handleTimeUpdate(){
    $progress.value = $video.currentTime
   // console.log("Tiempo aactual: ",$video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log("Tiempo en el que esta: ", $progress.value)
}