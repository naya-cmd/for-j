function toggleMusic(){
let music=document.getElementById("music");
music.paused?music.play():music.pause();
}

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
setTimeout(()=>heart.remove(),800);
});

const reasons=[
"Your green eyes.",
"Your brown curls.",
"Your calm energy.",
"The way you protect me.",
"Because you are J."
];

function generateReason(){
document.getElementById("reasonText").innerText=
reasons[Math.floor(Math.random()*reasons.length)];
}

let anniversary=new Date("2025-06-01");
function updateCountdown(){
let now=new Date();
let diff=anniversary-now;
let days=Math.floor(diff/(1000*60*60*24));
document.getElementById("countdown").innerText=
days+" days until another year together 🤍";
}
updateCountdown();

let stage=0;
function growPlant(){
stage++;
let plant=document.getElementById("plant");
if(stage===1)plant.innerText="🌿";
if(stage===2)plant.innerText="🌷";
if(stage>=3)plant.innerText="🌳";
}

let score=0;
function startGame(){
score=0;
document.getElementById("score").innerText="Score: 0";
let area=document.getElementById("gameArea");
area.innerHTML="";
for(let i=0;i<15;i++){
let heart=document.createElement("span");
heart.innerHTML="💗";
heart.style.position="absolute";
heart.style.left=Math.random()*260+"px";
heart.style.top=Math.random()*260+"px";
heart.onclick=function(){
score++;
document.getElementById("score").innerText="Score: "+score;
heart.remove();
};
area.appendChild(heart);
}
}

function proposal(){
document.getElementById("proposalText").innerText=
"One day, under pink skies and beige sunsets, it will be forever.";
}

function unlockSecret(){
if(document.getElementById("secretInput").value==="sparks"){
document.getElementById("secretMessage").classList.remove("hidden");
}else{
alert("Not quite 🤍");
}
}
