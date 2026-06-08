/* CHAT */

const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

let step = 0;

function sendMessage(){

const text = chatInput.value.trim();

if(text === "") return;

const userMsg = document.createElement("div");

userMsg.className = "msg user";

userMsg.innerHTML = text;

chatBox.appendChild(userMsg);

chatInput.value = "";

setTimeout(()=>{

const botMsg = document.createElement("div");
botMsg.className = "msg bot";

if(step === 0){

botMsg.innerHTML = "apakabar nabilaaaa sayangg??";
step++;

}else if(step === 1){

botMsg.innerHTML = "akuuuuuuuuu beruntungggg punyaaa mantannn kayaaa kamuuuuu,thanksss yaaaaa,loveyouu🤍🤍";
step++;

}else if(step === 2){

botMsg.innerHTML = "aku masih mencintaimu...sampai sekarang, perasaan itu nggak pernah benar-benar pergi, bahkan setelah semua yang terjadi, setelah kepergian kamu kemarin, setelah semua yang udah berubah, rasa ini tetap ada, tetap utuh, tetap dalam, aku pikir waktu bakal bantu aku melupakan kamu, aku pikir dengan kesibukan bisa bikin aku berhenti mikirin kamu aku pikir semua ini cuma fase yang nantinya akan hilang dengan sendirinya, tapi nyatanya ngga, kamu masih tinggal di sini, di hati aku, di sudut yang paling nggak bisa aku sentuh, dan sekeras apa pun aku berusaha untuk melupakan, kamu selalu berhasil muncul lagi. entah lewat mimpi, ataupun lewat kenangan kecil, semuanya masih terekam jelas. setelah kamu pergi, hidup aku berubah, bukan cuma karena aku kehilangan seseorang, tapi karena aku kehilangan bagian dari diriku sendiri.. kamu bukan cuma seseorang yang pernah hadir, kamu adalah seseorang yang pernah jadi bagian dari segalanya, kamu pernah jadi alasan aku bangun pagi dengan semangat, jadi alasan aku tersenyum tanpa alasan, jadi alasan aku merasa cukup, meskipun dunia lagi berat-beratnya dan sekarang, setelah kamu pergi, aku jadi orang yang berbeda aku belajar pura-pura bahagia, aku belajar berpura-pura kuat, aku belajar menyembunyikan luka di balik tawa, karena aku tau, ngga semua orang peduli, dan nggak semua orang mengerti, orang-orang cuma lihat";
}
    
    
chatBox.appendChild(botMsg);
chatBox.scrollTop = chatBox.scrollHeight;

},700);

}

sendBtn.onclick = sendMessage;

chatInput.addEventListener("keydown",(e)=>{

if(e.key === "Enter"){
sendMessage();
}

});

/* MENU */

const chatMenu = document.getElementById("chatMenu");
const galleryMenu = document.getElementById("galleryMenu");
const musicMenu = document.getElementById("musicMenu");

const chatScreen = document.getElementById("chatScreen");
const galleryScreen = document.getElementById("galleryScreen");
const musicScreen = document.getElementById("musicScreen");

const menuBtns = document.querySelectorAll(".menu-btn");

function removeMenu(){

menuBtns.forEach(btn=>{

btn.classList.remove("active-menu");

});

}

chatMenu.onclick = ()=>{

chatScreen.classList.add("active-slide");
galleryScreen.classList.remove("active-slide");
musicScreen.classList.remove("active-slide");

removeMenu();

chatMenu.classList.add("active-menu");

};

galleryMenu.onclick = ()=>{

galleryScreen.classList.add("active-slide");
chatScreen.classList.remove("active-slide");
musicScreen.classList.remove("active-slide");

removeMenu();

galleryMenu.classList.add("active-menu");

};

musicMenu.onclick = ()=>{

musicScreen.classList.add("active-slide");
chatScreen.classList.remove("active-slide");
galleryScreen.classList.remove("active-slide");

removeMenu();

musicMenu.classList.add("active-menu");

};

/* FOTO VIDEO TAB */

const fotoTab = document.getElementById("fotoTab");
const videoTab = document.getElementById("videoTab");

const fotoGallery = document.getElementById("fotoGallery");
const videoGallery = document.getElementById("videoGallery");

fotoTab.onclick = ()=>{

fotoGallery.classList.add("active-gallery");
videoGallery.classList.remove("active-gallery");

fotoTab.classList.add("active-tab");
videoTab.classList.remove("active-tab");

};

videoTab.onclick = ()=>{

videoGallery.classList.add("active-gallery");
fotoGallery.classList.remove("active-gallery");

videoTab.classList.add("active-tab");
fotoTab.classList.remove("active-tab");

};

/* MUSIC */

const audioPlayer = document.getElementById("audioPlayer");

const playPause = document.getElementById("playPause");

const prevMusic = document.getElementById("prevMusic");

const nextMusic = document.getElementById("nextMusic");

const volumeSlider = document.getElementById("volumeSlider");

const musicLight = document.getElementById("musicLight");

const musicCards = document.querySelectorAll(".music-card");

const songs = [

{
src:"lagu/lagu1.mp3"
},

{
src:"lagu/lagu2.mp3"
},

{
src:"lagu/lagu3.mp3"
},

{
src:"lagu/lagu4.mp3"
},

{
src:"lagu/lagu5.mp3"
}

];

let currentSong = 0;

let isPlaying = false;

audioPlayer.src = songs[currentSong].src;

function updateSong(){

musicCards.forEach(card=>{

card.classList.remove("active-song");

});

musicCards[currentSong].classList.add("active-song");

}

function playSong(index){

currentSong = index;

audioPlayer.src = songs[currentSong].src;

audioPlayer.play();

playPause.innerHTML = "⏸";

musicLight.classList.add("active-light");

isPlaying = true;

updateSong();

}

musicCards.forEach((card,index)=>{

card.onclick = ()=>{

playSong(index);

};

});

playPause.onclick = ()=>{

if(isPlaying){

audioPlayer.pause();

playPause.innerHTML = "▶";

musicLight.classList.remove("active-light");

isPlaying = false;

}else{

audioPlayer.play();

playPause.innerHTML = "⏸";

musicLight.classList.add("active-light");

isPlaying = true;

}

};

nextMusic.onclick = ()=>{

currentSong++;

if(currentSong >= songs.length){
currentSong = 0;
}

playSong(currentSong);

};

prevMusic.onclick = ()=>{

currentSong--;

if(currentSong < 0){
currentSong = songs.length - 1;
}

playSong(currentSong);

};

volumeSlider.oninput = ()=>{

audioPlayer.volume = volumeSlider.value / 100;

};

/* VIEWER */

const viewer = document.getElementById("viewer");

const viewerContent = document.getElementById("viewerContent");

const mediaItems = [

{
type:"img",
src:"images/foto1.jpg"
},

{
type:"img",
src:"images/foto2.jpg"
},

{
type:"img",
src:"images/foto3.jpg"
},

{
type:"img",
src:"images/foto4.jpg"
},

{
type:"video",
src:"video/video1.mp4"
},

{
type:"video",
src:"video/video2.mp4"
},

{
type:"video",
src:"video/video3.mp4"
},

{
type:"video",
src:"video/video4.mp4"
}

];

let currentMedia = 0;

function showMedia(index){

currentMedia = index;

viewer.style.display = "flex";

const item = mediaItems[index];

if(item.type === "img"){

viewerContent.innerHTML = `
<img src="${item.src}">
`;

}else{

viewerContent.innerHTML = `
<video controls autoplay>
<source src="${item.src}">
</video>
`;

}

}

function closeViewer(){

viewer.style.display = "none";

viewerContent.innerHTML = "";

}

function nextMedia(){

currentMedia++;

if(currentMedia >= mediaItems.length){
currentMedia = 0;
}

showMedia(currentMedia);

}

function prevMedia(){

currentMedia--;

if(currentMedia < 0){
currentMedia = mediaItems.length - 1;
}

showMedia(currentMedia);

}

// --- Navigasi Slider Baru ---
function showSlide(type) {
    const screens = ['chat', 'gallery', 'music', 'notes', 'clock', 'game'];
    screens.forEach(s => {
        document.getElementById(s + 'Screen').classList.remove('active-slide');
    });
    document.getElementById(type + 'Screen').classList.add('active-slide');
    
    // Update Active Menu Button
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active-menu'));
    event.currentTarget.classList.add('active-menu');
}

// --- Digital Clock & Countdown ---
function updateClock() {
    const now = new Date();
    document.getElementById('digitalClock').innerText = now.toLocaleTimeString('id-ID');
    
    // Contoh target ultah: 17 Agustus
    const target = new Date(now.getFullYear(), 7, 17); 
    if (now > target) target.setFullYear(target.getFullYear() + 1);
    
    const diff = target - now;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById('mins').innerText = Math.floor((diff / 1000 / 60) % 60);
}
setInterval(updateClock, 1000);

// --- Game Pesawat Simple ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let score = 0, gameRunning = false;
let player = { x: 120, y: 170, w: 20, h: 20 };
let enemies = [];

function drawPlayer() {
    ctx.fillStyle = '#5da9ff';
    ctx.fillRect(player.x, player.y, player.w, player.h);
}

function spawnEnemy() {
    if (Math.random() < 0.05) {
        enemies.push({ x: Math.random() * (canvas.width - 20), y: 0, w: 20, h: 20 });
    }
}

function updateGame() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    
    enemies.forEach((en, i) => {
        en.y += 2;
        ctx.fillStyle = 'red';
        ctx.fillRect(en.x, en.y, en.w, en.h);
        
        // Cek Tabrakan
        if (player.x < en.x + en.w && player.x + player.w > en.x &&
            player.y < en.y + en.h && player.y + player.h > en.y) {
            gameRunning = false;
            document.getElementById('game-over-msg').innerText = "itss okayy sayangg kamuu udahh berjuangg ❤️";
        }
        if (en.y > canvas.height) { enemies.splice(i, 1); score++; }
    });
    
    document.getElementById('game-info').innerText = "Skor: " + score;
    requestAnimationFrame(updateGame);
    spawnEnemy();
}

document.getElementById('start-game-btn').onclick = () => {
    score = 0; enemies = []; gameRunning = true;
    document.getElementById('game-over-msg').innerText = "";
    updateGame();
};

// Kontrol Game (Klik Kiri/Kanan di layar game)
canvas.onclick = (e) => {
    let rect = canvas.getBoundingClientRect();
    let root = e.clientX - rect.left;
    if (root < canvas.width/2) player.x -= 20;
    else player.x += 20;
};