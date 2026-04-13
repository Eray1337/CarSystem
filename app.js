function initTheme() {
    const isDark = localStorage.getItem('autoMarketDark') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-btn').innerText = '☀️';
    }
}
initTheme();

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('autoMarketDark', isDark);
    document.getElementById('theme-btn').innerText = isDark ? '☀️' : '🌙';
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Вместо пренасочване, само сменяме видимостта (по-безопасно)
        const loginSec = document.getElementById('login-section');
        const appSec = document.getElementById('app-section');

        if (loginSec) loginSec.style.display = 'none';
        if (appSec) appSec.style.display = 'block';

        // Смяна на бутоните
        const loginBtn = document.getElementById('login-nav-btn');
        const logoutBtn = document.getElementById('logout-nav-btn');

        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';

        alert('Успешен вход!');
    });
}

function showLogin() {
    const appSec = document.getElementById('app-section');
    const loginSec = document.getElementById('login-section');
    if (appSec && loginSec) {
        appSec.style.display = 'none';
        loginSec.style.display = 'flex';
    }
}
const defaultCars = [
    { id: 1, make: 'BMW', model: '320d', year: 2019, price: 17890, km: '145000', fuel: 'Дизел', trans: 'Автоматична', hp: '190 к.с.', image: 'IMG/BMW 320D.jpg', extras: 'Пълна сервизна история в BMW.' },
    { id: 2, make: 'Audi', model: 'A4', year: 2018, price: 16600, km: '122000', fuel: 'Бензин', trans: 'Автоматична', hp: '252 к.с.', image: 'IMG/audi2.jpg', extras: 'Quattro, S-line, Matrix LED.' },
    { id: 3, make: 'Toyota', model: 'Corolla', year: 2019, price: 19400, km: '89000', fuel: 'Хибрид', trans: 'CVT', hp: '122 к.с.', image: 'IMG/corola.avif', extras: 'Икономичен автомобил. Гаранция.' },
    { id: 4, make: 'Honda', model: 'Civic', year: 2017, price: 12780, km: '110000', fuel: 'Бензин', trans: 'Ръчна', hp: '182 к.с.', image: 'IMG/civic.jpeg', extras: 'VTEC Turbo двигател.' },
    { id: 5, make: 'Mercedes-Benz', model: 'C-Class', year: 2019, price: 26580, km: '95000', fuel: 'Дизел', trans: 'Автоматична', hp: '194 к.с.', image: 'IMG/mercedes-benz-c300-hero.webp', extras: 'AMG Line, Панорамен покрив.' },
    { id: 6, make: 'Volkswagen', model: 'Golf', year: 2020, price: 17380, km: '65000', fuel: 'Бензин', trans: 'DSG', hp: '150 к.с.', image: 'IMG/WH12990-4201-00-front-800x600.jpg', extras: 'Digital Cockpit, Адаптивно окачване.' },
    { id: 7, make: 'Tesla', model: 'Model 3', year: 2019, price: 33230, km: '78000', fuel: 'Електричество', trans: 'Автоматична', hp: '351 к.с.', image: 'IMG/images.jpg', extras: 'Long Range, Автопилот.' },
    { id: 8, make: 'Ford', model: 'Mustang', year: 2018, price: 29650, km: '55000', fuel: 'Бензин', trans: 'Ръчна', hp: '450 к.с.', image: 'IMG/images (1).jpg', extras: '5.0 V8 GT, Brembo спирачки.' },
    { id: 9, make: 'Porsche', model: '911', year: 2019, price: 94580, km: '22000', fuel: 'Бензин', trans: 'PDK', hp: '450 к.с.', image: 'IMG/images (2).jpg', extras: 'Carrera S, Sport Chrono пакет.' },
    { id: 10, make: 'Land Rover', model: 'Range Rover Velar', year: 2018, price: 38340, km: '115000', fuel: 'Дизел', trans: 'Автоматична', hp: '240 к.с.', image: 'IMG/2018-range-rover-velar1.avif', extras: 'R-Dynamic пакет, Въздушно окачване.' },
    { id: 11, make: 'Mazda', model: 'MX-5', year: 2019, price: 16360, km: '41000', fuel: 'Бензин', trans: 'Ръчна', hp: '184 к.с.', image: 'IMG/mazda-miata-30th-anniversary-001.webp', extras: 'Bilstein амортисьори.' },
    { id: 12, make: 'Volvo', model: 'XC90', year: 2019, price: 43460, km: '108000', fuel: 'Дизел', trans: 'Автоматична', hp: '235 к.с.', image: 'IMG/2018-Volvo-XC90-T6-AWD-123-1.avif', extras: 'Inscription ниво, 7 места.' },
    { id: 13, make: 'Nissan', model: 'Qashqai', year: 2018, price: 14310, km: '135000', fuel: 'Дизел', trans: 'Ръчна', hp: '130 к.с.', image: 'IMG/images (3).jpg', extras: 'Tekna изпълнение, 360 камери.' },
    { id: 14, make: 'Peugeot', model: '3008', year: 2018, price: 15330, km: '128000', fuel: 'Дизел', trans: 'Автоматична', hp: '130 к.с.', image: 'IMG/Peugeot_e-3008_Automesse_Ludwigsburg_2024_IMG_1537.jpg', extras: 'i-Cockpit, Масаж.' },
    { id: 15, make: 'Skoda', model: 'Octavia', year: 2018, price: 12270, km: '160000', fuel: 'Дизел', trans: 'Ръчна', hp: '150 к.с.', image: 'IMG/Skoda_Octavia_IV_liftback_(cropped).jpg', extras: 'Style пакет, Full LED.' },
    { id: 16, make: 'Renault', model: 'Clio', year: 2020, price: 11240, km: '52000', fuel: 'Бензин', trans: 'Ръчна', hp: '100 к.с.', image: 'IMG/images clio.jpg', extras: 'Intens оборудване, LED светлини.' },
    { id: 17, make: 'Kia', model: 'Sportage', year: 2019, price: 15850, km: '98000', fuel: 'Дизел', trans: 'Автоматична', hp: '136 к.с.', image: 'IMG/2019-Kia-Sportage-GTLine-01.webp', extras: 'GT-Line, 4x4 задвижване.' },
    { id: 18, make: 'Hyundai', model: 'Tucson', year: 2018, price: 14820, km: '112000', fuel: 'Бензин', trans: 'Ръчна', hp: '132 к.с.', image: 'IMG/2018_hyundai_tucson_4dr-suv_limited_fq_oem_4_1600.avif', extras: 'Premium ниво.' },
    { id: 19, make: 'Alfa Romeo', model: 'Giulia', year: 2018, price: 19940, km: '85000', fuel: 'Бензин', trans: 'Автоматична', hp: '200 к.с.', image: 'IMG/ALPHA.jpg', extras: 'Veloce пакет, Карбонов кардан.' },
    { id: 20, make: 'Jeep', model: 'Wrangler', year: 2019, price: 36810, km: '62000', fuel: 'Бензин', trans: 'Автоматична', hp: '272 к.с.', image: 'IMG/JEEP.webp', extras: 'Rubicon версия, Off-road гуми.' }
];

let cars = JSON.parse(localStorage.getItem('autoMarketCars')) || defaultCars;
let favorites = JSON.parse(localStorage.getItem('autoMarketFavs')) || [];
let recentViews = JSON.parse(localStorage.getItem('autoMarketRecent')) || [];
let compareList = [];
let currentCarPrice = 0;

function saveState() {
    localStorage.setItem('autoMarketCars', JSON.stringify(cars));
    localStorage.setItem('autoMarketFavs', JSON.stringify(favorites));
    localStorage.setItem('autoMarketRecent', JSON.stringify(recentViews));
}

function renderCars(carsToDisplay, containerId = 'cars-list') {
    const list = document.getElementById(containerId);
    list.innerHTML = ''; 
    if(containerId === 'cars-list') document.getElementById('results-count').innerText = carsToDisplay.length;

    carsToDisplay.forEach((car) => {
        const carDiv = document.createElement('div');
        carDiv.className = 'car-card';
        const isFav = favorites.includes(car.id);
        const isCompare = compareList.some(c => c.id === car.id);

        carDiv.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${car.id}, event)">
                ${isFav ? '❤️' : '🤍'}
            </button>
            <img src="${car.image}" class="car-image" onclick="showDetails(${car.id})">
            <div class="car-info">
                <div class="car-price" onclick="showDetails(${car.id})">${car.price.toLocaleString('de-DE')} €</div>
                <div class="car-title" onclick="showDetails(${car.id})">${car.make} ${car.model}</div>
                <div class="car-meta">
                    <span>${car.year} г.</span>
                    <span>${car.km} км.</span>
                </div>
                <div class="card-actions">
                    <button class="btn-primary btn-block" onclick="showDetails(${car.id})">Детайли</button>
                    <button class="${isCompare ? 'btn-primary' : 'btn-outline'} btn-block" onclick="toggleCompare(${car.id}, event)">
                        ${isCompare ? '✓ Избрана' : '⚖️'}
                    </button>
                </div>
            </div>
        `;
        list.appendChild(carDiv);
    });
}

function addToRecent(id) {
    recentViews = recentViews.filter(recentId => recentId !== id);
    recentViews.unshift(id); 
    if(recentViews.length > 4) recentViews.pop(); 
    saveState();
    renderRecent();
}

function renderRecent() {
    const section = document.getElementById('recent-views-section');
    if (recentViews.length === 0) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    renderCars(recentViews.map(id => cars.find(c => c.id === id)).filter(Boolean), 'recent-list');
}

function showDetails(id) {
    const car = cars.find(c => c.id === id);
    
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('about-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'block';

    document.getElementById('det-title').innerText = car.make + ' ' + car.model;
    document.getElementById('det-price').innerText = car.price.toLocaleString('de-DE') + ' €';
    document.getElementById('det-img').src = car.image;
    
    // БЕЗОПАСНО ЗАРЕЖДАНЕ НА ЛИНКА!
    const detLink = document.getElementById('det-link');
    if(detLink) detLink.href = car.image;

    document.getElementById('det-year').innerText = car.year;
    document.getElementById('det-km').innerText = (car.km || '0') + ' км.';
    document.getElementById('det-fuel').innerText = car.fuel || 'Н/А';
    document.getElementById('det-trans').innerText = car.trans || 'Н/А';
    document.getElementById('det-hp').innerText = car.hp || 'Н/А';
    document.getElementById('det-extras').innerText = car.extras;

    document.getElementById('contact-btn').onclick = function() {
        window.location.href = "tel:08" + (Math.floor(Math.random() * 2) + 7) + Math.floor(1000000 + Math.random() * 8000000);
    };
    
    currentCarPrice = car.price;
    calculateLeasing();
    addToRecent(id); 
    window.scrollTo(0,0);
}

function showAboutView() {
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('about-view').style.display = 'block';
    window.scrollTo(0,0);
}

function showMainView() {
    document.getElementById('about-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('main-view').style.display = 'block';
    renderRecent(); 
}

function openMatchmakerModal() { document.getElementById('matchmaker-modal').style.display = 'flex'; }
function closeMatchmakerModal() { document.getElementById('matchmaker-modal').style.display = 'none'; }

function findMatch() {
    const budget = parseInt(document.getElementById('match-budget').value);
    const purpose = document.getElementById('match-purpose').value;
    const fuel = document.getElementById('match-fuel').value;

    let candidates = cars.filter(c => c.price <= budget);
    if (candidates.length === 0) candidates = cars; 

    candidates.forEach(c => {
        c.matchScore = 0;
        const make = c.make;
        
        if (purpose === 'city' && (make==='Renault' || make==='Honda' || make==='Toyota' || make==='Volkswagen')) c.matchScore += 3;
        if (purpose === 'family' && (make==='Volvo' || make==='Skoda' || make==='Peugeot' || make==='Audi')) c.matchScore += 3;
        if (purpose === 'sport' && (make==='Porsche' || make==='Ford' || make==='Alfa Romeo' || make==='BMW')) c.matchScore += 3;
        if (purpose === 'offroad' && (make==='Jeep' || make==='Land Rover' || make==='Kia')) c.matchScore += 3;

        if (fuel === 'eco' && (c.fuel === 'Хибрид' || c.fuel === 'Електричество')) c.matchScore += 4;
        if (fuel === 'power' && parseInt(c.hp) >= 200) c.matchScore += 3;
        if (fuel === 'diesel' && c.fuel === 'Дизел') c.matchScore += 3;
    });

    candidates.sort((a, b) => b.matchScore - a.matchScore);
    const bestMatch = candidates[0];

    closeMatchmakerModal();
    
    setTimeout(() => {
        alert(`🤖 AI Асистентът избра за теб:\n\n${bestMatch.make} ${bestMatch.model} (${bestMatch.year})\n\nСтрахотен избор!`);
        showDetails(bestMatch.id);
    }, 300);
}

function smartSearch() {
    showMainView();
    document.getElementById('view-title').innerHTML = 'Резултати от търсенето: <span id="results-count" class="badge">0</span>';
    const input = document.getElementById('smart-search').value.toLowerCase();
    const searchTerms = input.split(' '); 
    const filtered = cars.filter(car => {
        const carDataString = `${car.make} ${car.model} ${car.year} ${car.price} ${car.fuel} ${car.trans} ${car.extras}`.toLowerCase();
        return searchTerms.every(term => carDataString.includes(term));
    });
    renderCars(filtered);
}

function resetFilters() {
    document.getElementById('view-title').innerHTML = 'Всички автомобили: <span id="results-count" class="badge">0</span>';
    document.getElementById('smart-search').value = '';
    showMainView();
    renderCars(cars);
}

function toggleFav(id, event) {
    event.stopPropagation();
    if (favorites.includes(id)) { favorites = favorites.filter(fId => fId !== id); } 
    else { favorites.push(id); }
    saveState();
    document.getElementById('fav-count').innerText = favorites.length;
    if (document.getElementById('view-title').innerText.includes('Любими')) showFavorites();
    else if (document.getElementById('smart-search').value) smartSearch();
    else renderCars(cars);
}

function showFavorites() {
    showMainView();
    document.getElementById('view-title').innerHTML = '❤️ Любими автомобили: <span id="results-count" class="badge">0</span>';
    document.getElementById('smart-search').value = '';
    renderCars(cars.filter(car => favorites.includes(car.id)));
}

function toggleCompare(id, event) {
    event.stopPropagation();
    const index = compareList.findIndex(c => c.id === id);
    if (index > -1) compareList.splice(index, 1);
    else {
        if (compareList.length >= 2) { alert('Максимум 2 коли!'); return; }
        compareList.push(cars.find(c => c.id === id));
    }
    const bar = document.getElementById('compare-bar');
    if (compareList.length > 0) {
        bar.style.display = 'flex';
        document.getElementById('compare-text').innerText = `Избрани: ${compareList.length}/2`;
    } else bar.style.display = 'none';
    if (document.getElementById('smart-search').value) smartSearch(); else renderCars(cars);
}

function clearCompare() {
    compareList = [];
    document.getElementById('compare-bar').style.display = 'none';
    resetFilters();
}

function openCompareModal() {
    if (compareList.length < 2) return alert('Изберете 2 коли!');
    const [c1, c2] = compareList;
    document.getElementById('compare-table').innerHTML = `
        <tr><th>Снимка</th><th><img src="${c1.image}" style="width:100%;border-radius:8px;"><br>${c1.make} ${c1.model}</th><th><img src="${c2.image}" style="width:100%;border-radius:8px;"><br>${c2.make} ${c2.model}</th></tr>
        <tr><td>Цена</td><td style="color:var(--primary-color)">${c1.price.toLocaleString('de-DE')} €</td><td style="color:var(--primary-color)">${c2.price.toLocaleString('de-DE')} €</td></tr>
        <tr><td>Година</td><td>${c1.year}</td><td>${c2.year}</td></tr>
        <tr><td>Пробег</td><td>${c1.km} км</td><td>${c2.km} км</td></tr>
        <tr><td>Гориво</td><td>${c1.fuel}</td><td>${c2.fuel}</td></tr>
    `;
    document.getElementById('compare-modal').style.display = 'flex';
}
function closeCompareModal() { document.getElementById('compare-modal').style.display = 'none'; }

const dInput = document.getElementById('calc-down'), mInput = document.getElementById('calc-months');
dInput.addEventListener('input', calculateLeasing); mInput.addEventListener('input', calculateLeasing);
function calculateLeasing() {
    document.getElementById('down-val').innerText = dInput.value; document.getElementById('months-val').innerText = mInput.value;
    const loan = currentCarPrice - (currentCarPrice * (Number(dInput.value) / 100));
    document.getElementById('monthly-payment').innerText = Math.round((loan + (loan * 0.06 * (Number(mInput.value) / 12))) / Number(mInput.value)).toLocaleString('de-DE');
}

document.getElementById('add-car-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newId = cars.length > 0 ? Math.max(...cars.map(c => c.id)) + 1 : 1; 
    cars.unshift({
        id: newId, make: document.getElementById('add-make').value, model: document.getElementById('add-model').value,
        year: document.getElementById('add-year').value, price: Number(document.getElementById('add-price').value),
        image: document.getElementById('add-image').value, km: '0', fuel: 'Н/А', trans: 'Н/А', hp: 'Н/А', extras: 'Нова обява.'
    });
    saveState(); this.reset(); resetFilters(); alert('Добавена!');
});

document.getElementById('fav-count').innerText = favorites.length;
resetFilters();
function showLogin() {
    document.getElementById('app-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'flex';
}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('login-section').style.display = 'none';
    document.getElementById('app-section').style.display = 'block';

    document.getElementById('login-nav-btn').style.display = 'none';
    document.getElementById('logout-nav-btn').style.display = 'inline-block';

    alert('Добре дошли в AutoMarket!');
});