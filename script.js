function enterHouse() {
  document.getElementById("house").classList.remove("hidden");
}

function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

const text = "Loving you feels like pink skies and beige mornings. Like safety. Like home.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

const reasons = [
  "Your green eyes.",
  "Your soft brown curls.",
  "Your calm energy.",
  "The way you love me.",
  "Because you are J."
];

function generateReason() {
  document.getElementById("reason").innerText =
    reasons[Math.floor(Math.random()*reasons.length)];
}

function quizCorrect() {
  document.getElementById("quizResult").innerText = "Correct. Obviously.";
}

function quizWrong() {
  document.getElementById("quizResult").innerText = "Wrong. Try again 🤍";
}

function unlock() {
  if(document.getElementById("password").value === "sparks"){
    document.getElementById("secretMessage").classList.remove("hidden");
  } else {
    alert("Not quite 🤍");
  }
}

function createHeartExplosion(){
  for(let i=0;i<20;i++){
    let heart = document.createElement("span");
    heart.innerHTML="💗";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*3+3)+"s";
    document.querySelector(".hearts-container").appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  }
}

let startDate = new Date("2024-01-01");
function updateLoveCounter(){
  let now = new Date();
  let diff = now - startDate;
  let days = Math.floor(diff/(1000*60*60*24));
  document.getElementById("loveCounter").innerText = days + " days 🤍";
}
updateLoveCounter();

let plantStage = 0;
function growFuture(){
  const plant = document.getElementById("futurePlant");
  plantStage++;
  if(plantStage===1) plant.innerText="🌿";
  if(plantStage===2) plant.innerText="🌷";
  if(plantStage>=3) plant.innerText="🌳";
}

document.addEventListener("mousemove", function(e){
  const cursor=document.querySelector(".cursor");
  cursor.style.left=e.pageX+"px";
  cursor.style.top=e.pageY+"px";
});
function toggleMode(){
document.body.classList.toggle("dark-mode");
}

document.addEventListener("click",function(e){
let heart=document.createElement("div");
heart.innerHTML="💖";
heart.style.position="absolute";
heart.style.left=e.pageX+"px";
heart.style.top=e.pageY+"px";
heart.style.fontSize="20px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),1000);
});

function proposal(){
document.getElementById("proposalText").innerText=
"One day, in a beige house with pink sunsets, it will be forever.";
}

let anniversary=new Date("2025-06-01");
function updateCountdown(){
let now=new Date();
let diff=anniversary-now;
let days=Math.floor(diff/(1000*60*60*24));
document.getElementById("countdownTimer").innerText=
days+" days until another year of loving you.";
}
updateCountdown();

let score=0;
function startGame(){
let game=document.getElementById("gameArea");
game.innerHTML="";
for(let i=0;i<10;i++){
let heart=document.createElement("span");
heart.innerHTML="💗";
heart.style.position="absolute";
heart.style.left=Math.random()*300+"px";
heart.style.top=Math.random()*300+"px";
heart.onclick=function(){
score++;
document.getElementById("score").innerText="Score: "+score;
heart.remove();
};
game.appendChild(heart);
}
}
