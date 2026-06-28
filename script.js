// Loading
window.onload = function () {
    document.getElementById("loading").style.display = "none";
};

// Elemen
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");
const opening = document.getElementById("opening");
const main = document.getElementById("main");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");
const next = document.getElementById("next");
const finish = document.getElementById("finish");

// Sembunyikan halaman
main.style.display = "none";
gallery.style.display = "none";
ending.style.display = "none";

// Tombol Open
openBtn.onclick = () => {

    opening.style.display = "none";
    main.style.display = "flex";

    music.play();

    typeWriter();

};

// Ucapan
const text = `Happy birthday ya, Ra!

Aku tahu kok kita udah nggak sedekat dulu, tapi bukan berarti aku nggak ngucapin hari spesial kamu ini.

Kayaknya udah jadi tradisi deh saling ngucapin dari kelas 7.

Maaf ya aku gabisa ucapin ini secara langsung karena lagi libur.

Bahagia terus ya.

Semoga semua wishlist kamu di tahun ini bisa terwujud.

Kamu keren banget udah bisa sampai ke titik sejauh ini.

Aku bangga sama kamu.

Makasih ya udah hadir di hidup aku.

Semoga di usia kamu yang ke-14 ini selalu dikelilingi orang-orang baik.

Semoga selalu ada alasan buat bahagia dan senyum.

You're always special to me 🤍`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

// Foto
const photos = [

"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg"

];

let index = 0;

next.onclick = ()=>{

    main.style.display="none";
    gallery.style.display="flex";

};

setInterval(()=>{

    index++;

    if(index>=photos.length){

        index=0;

    }

    document.getElementById("slide").src=photos[index];

},3000);

finish.onclick=()=>{

    gallery.style.display="none";
    ending.style.display="flex";

};
