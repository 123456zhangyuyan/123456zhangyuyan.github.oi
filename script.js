document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let slideIndex = 0;
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('lottie-animation1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/0e7fb958-2fd4-4dcb-942d-ec37312be172/oju9U1fS9B.json'
});