const fortuneCookie = document.getElementById('fortune-cookie');
const fortuneText = document.getElementById('fortune-text');

const fortunes = [
    "A smile will open all doors.",
    "Your hard work will pay off in the near future.",
    "Good things come to those who wait.",
    "You will find happiness in unexpected places.",
    "A pleasant surprise is waiting for you.",
    "Your creativity will lead you to success.",
    "New opportunities will present themselves soon.",
    "Your kindness will be rewarded tenfold.",
    "Adventure awaits just around the corner.",
    "Your positive attitude will bring you great joy."
];

function getRandomFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

fortuneCookie.addEventListener('click', () => {
    if (fortuneCookie.classList.contains('open')) {
        fortuneText.textContent = getRandomFortune();
    } else {
        fortuneCookie.classList.add('open');
        fortuneText.textContent = getRandomFortune();
    }
});