// Scroll olayı
window.addEventListener("scroll", function () {
    const ustBilgilerDiv = document.querySelector(".üst_bilgiler");
    const scrollY = window.scrollY; // Sayfanın kaydırıldığı piksel miktarı
    
    // Eğer sayfa belli bir miktar kaydırılmışsa arka plan rengini ekle
    if (scrollY > 50) { // 50 piksel kaydırıldıktan sonra
        ustBilgilerDiv.classList.add("scrolled");
    } else {
        ustBilgilerDiv.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.blgler');
    links.forEach(link => {
        link.style.textDecoration = 'none'; // Alt çizgi yok
    });
});
const track = document.querySelector('.slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // Mevcut resim indeksi
const totalSlides = document.querySelectorAll('.slider-track a').length; // Toplam resim sayısı

// Sağ ok butonuna tıklama
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Sonraki yoksa başa dön
    }
    updateSlider();
});

// Sol ok butonuna tıklama
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Önceki yoksa sona dön
    }
    updateSlider();
});

// Slider konumunu güncelle
function updateSlider() {
    const slideWidth = document.querySelector('.pano_içerik').offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
