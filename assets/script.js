const konten = [

    {
        foto: "assets/1.jpg",
        ucapan: "hallo sayangkuu, selamat ulang tahun. tidak terasa hari ini adalah hari yang sangat spesial, karena di hari inilah seseorang yang begitu berarti dalam hidupku dilahirkan.🤍✨🎉"
    },

    {
        foto: "assets/2.jpg",
        ucapan: "sa bersyukur bisa kenal kau, bisa dekat dengan kau, dan bisa jadi bagian dari perjalanan hidupmu sampai saat ini. semoga di usiamu yang baru ini, kamu selalu diberikan kebahagiaan, kesehatan, dan segala hal baik yang kamu impikan dapat tercapai. aminnn.🤲🏻🫶🏻✨"
    },

    {
        foto: "assets/3.png",
        ucapan: "di hari spesialmu ini, saya juga mau minta maaf atas segala kesalahanku. maaf kalau ada kata-kata atau sikapku yang pernah menyakiti hatimu atau mengecewakanmu. sa sadar sa belum sempurna, tapi sa akan terus berusaha menjadi lebih baik untukmu dan untuk hubungan kita.🥺🫶🏻🤍"
    },

    {
        foto: "assets/4.jpg",
        ucapan: "sa berharap semoga di setiap langkah yang kamu jalani ke depan, kamu selalu dikelilingi oleh hal-hal baik. semoga semua mimpi dan harapanmu dapat tercapai. kamu adalah perempuan yang kuat dan hebat, serta pantas mendapatkan kebahagiaan yang besar dalam hidupmu. aminnn🤲🏻🤍✨"
    },

    {
        foto: "assets/5.jpg",
        ucapan: "sekali lagi selamat ulang tahun, cintaku. semoga hari ini dipenuhi kebahagiaan dan doa-doa baik dari orang-orang yang menyayangimu. terima kasih sudah hadir dalam hidup saya dan menjadi bagian penting dalam setiap cerita saya. semoga kita bisa terus bersama dan menciptakan lebih banyak kenangan indah di masa depan. love you 🫶🏻🤍✨"
    }

];

const openBtn = document.querySelector(".open");
const container = document.querySelector(".container");

let index = 0;

openBtn.onclick = () => {

    const music = document.getElementById("bgMusic");
    music.play();

    openBtn.style.opacity = "0";

    setTimeout(() => {
        openBtn.style.display = "none";
        tampilKonten();
    }, 400);

};

function tampilKonten() {

    if (index >= konten.length) {
        tampilAkhir();
        return;
    }

    const data = konten[index];

    container.innerHTML = `

<div class="wrapper">

<div class="card-foto">
<img src="${data.foto}">
</div>

<div class="card-teks">
<p>${data.ucapan}</p>
</div>

<button class="next">Next</button>

</div>

`;

    document.querySelector(".next").onclick = () => {
        index++;
        tampilKonten();
    };

}

function tampilAkhir() {

    container.innerHTML = `

<div class="love-screen">

<img id="candleGif" class="candle" src="assets/menyala.gif">

<div class="blow-text" id="blowText">Tiup lilinnya dulu 🎂</div>

<button class="blow-btn" id="blowBtn">Tiup Lilin</button>

</div>

`;

    document.getElementById("blowBtn").onclick = () => {

        document.getElementById("candleGif").src = "assets/hore.gif";

        document.getElementById("blowText").innerHTML = "🎉 Happy Birthday Sayang 🎂";

        document.getElementById("blowBtn").style.display = "none";

        setTimeout(() => {

            container.innerHTML = `

<div class="love-screen">

<div class="big-love">I LOVE YOU 💗</div>

<div class="sub-love">💗💗Dari pacarmu(Yanuar)💗💗</div>

</div>

`;

        }, 4000);

    };

}
