function enterHouse() {
  document.getElementById("house").classList.remove("hidden");
}

function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

const text = "Loving you feels like soft pink walls and safe brown arms. Like quiet evenings and green eyes that see me gently.";
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
  "Because your green eyes feel like peace.",
  "Because you are soft and strong at the same time.",
  "Because beige suits you like destiny.",
  "Because you feel like home.",
  "Because I choose you always."
];

function generateReason() {
  const random = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reason").innerText = random;
}

function unlock() {
  const pass = document.getElementById("password").value;
  if(pass === "sparks"){
    document.getElementById("secretMessage").classList.remove("hidden");
  } else {
    alert("Not quite 🤍");
  }
}

document.addEventListener("keydown", function(event){
  if(event.key === "j" || event.key === "J"){
    alert("You pressed J. That means I love you.");
  }
});
