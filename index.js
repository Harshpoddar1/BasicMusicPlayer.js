var arr = [
  {songName : "Jale 2",url:"./songs/jale 2.mp3",img:"./pohoto/jale.jpg" },
  {songName : "Arjan Vailly Ne",url:"./songs/Arjan Vailly Ne.mp3",img:"./pohoto/animal.jpg"},
  {songName : "Pehle bhi main ",url:"./songs/pehle bhi mai.mp3",img:"./pohoto/animal.jpg"},
  {songName : "Ram Siya Ram",url:"./songs/Ram Siya Ram.mp3",img:"./pohoto/ram.jpg"},
]
var allSongs = document.querySelector("#all-songs");

var poster   = document.querySelector("#left");

var play = document.querySelector("#play");

var backward = document.querySelector("#backward");

var forward = document.querySelector("#forward");

var audio = new Audio();

var seletedsong = 0;

function mainFunction(){
  var clutter = "";

arr.forEach(function(elem,index){
  clutter += `<div class="song-card" id = ${index}>
          <div class="part1">
            <img src=${elem.img} alt="animal poster">
            <h2>${elem.songName}</h2>
          </div>
          <h6>3:56</h6>
        </div>`;
})
allSongs.innerHTML = clutter;
audio.src = arr[seletedsong].url 
poster.style.backgroundImage = `url(${arr[seletedsong].img})`;
}

mainFunction();


allSongs.addEventListener("click",function(harsh){
  seletedsong = harsh.target.id
  mainFunction();
  play.innerHTML = `<i class="ri-pause-line"></i>`
  flag = 1;
  audio.play();

})
var flag = 0;

play.addEventListener("click",function(){
  if(flag==0){
    play.innerHTML = `<i class="ri-pause-line"></i>`
    mainFunction()
    audio.play()
    flag = 1
  }
  else{
    play.innerHTML = `<i class="ri-play-line"></i>`
    mainFunction()
    audio.pause()
    flag = 0
  }
})

forward.addEventListener("click",function(){
  if(seletedsong < arr.length - 1){
    seletedsong++
    mainFunction();
    audio.play();
  }
  else{
    forward.style.opacity = 0.4;
  }
})

backward.addEventListener("click",function(){
  if(seletedsong > 0){
    seletedsong--
    mainFunction();
    audio.play();
  }
  else{
    backward.style.opacity = 0.4;
  }
})