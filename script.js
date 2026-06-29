const loading = document.getElementById("loading");
const main = document.getElementById("main");
const openBtn = document.getElementById("openBtn");
const birthdayPage = document.getElementById("birthdayPage");
const music = document.getElementById("music");
const slide = document.getElementById("slide");
const typing = document.getElementById("typing");

setTimeout(() => {
    loading.classList.add("hidden");
    main.classList.remove("hidden");
},3000);

const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg"
];

let index = 0;

function slideShow(){
    index++;

    if(index >= photos.length){
        index = 0;
    }

    slide.src = photos[index];
}

setInterval(slideShow,3000);

const text = "HAPPY BIRTHDAY, RAHMAH AZZAH
