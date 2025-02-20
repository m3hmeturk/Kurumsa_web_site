document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.blgler');
    links.forEach(link => {
        link.style.textDecoration = 'none'; // Alt çizgi yok
    });
});