const bioButtons = document.querySelectorAll('.btn-learnmore');
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);


const bios = {
    "Kai Angel (ex. zavet)": {
        text: "Kai Angel (бывший zavet) — российский рэп-исполнитель, известный своими глубокими текстами и мрачным звучанием.",
        image: "https://pikuco.ru/upload/test_stable/2fd/2fd05c19bf2ea10072d92f51ae867f24.webp"
    },
    "Big Baby Tape": {
        text: "Big Baby Tape — один из главных представителей новой школы русского рэпа, известен хитами 'Million Dollar Happiness' и 'Bandana'.",
        image: "https://pikuco.ru/upload/test_stable/ca0/ca0fdc94bb26153332a6a19a7db039eb.webp"
    },
    "GONE.Fludd": {
        text: "GONE.Fludd — рэпер с уникальным стилем, сочетающим трэп, фанк и эмбиент. Лидер лейбла 'Monkey Money'.",
        image: "https://pikuco.ru/upload/test_stable/9a6/9a6e12f8a2cad4ca9bf8b90bcd92b3de.webp"
    }
};

bioButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const rapperName = button.closest('.card').querySelector('h2').textContent;
        const bio = bios[rapperName];
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img src="${bio.image}" alt="${rapperName}" class="modal-image">
                <h2>${rapperName}</h2>
                <p>${bio.text}</p>
                <a href="#" class="modal-link">Узнать больше →</a>
            </div>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });
});


modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const cards = document.querySelectorAll('.card');

const animateCards = () => {
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};


window.addEventListener('load', animateCards);
window.addEventListener('scroll', animateCards);


const socials = [
    { name: 'VK', url: 'https://vk.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png' },
    { name: 'Telegram', url: 'https://t.me', icon: 'https://proxys.io/files/blog/tg/logo.png' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png' }
];

const socialContainer = document.querySelector('.navbar');
socialContainer.innerHTML = `
    <div class="nav-item btn">Наши соцсети:</div>
    ${socials.map(social => `
        <div class="nav-item">
            <a href="${social.url}" target="_blank">
                <img src="${social.icon}" alt="${social.name}">
            </a>
        </div>
    `).join('')}
`;