const runningBamboo = [
    { id: "PHY-VIV-HUA", name: "Phyllostachys vivax 'Huanwenzhu'", hardy: "-21C", ht: "12m", price: "950 SEK", img: "images/vivax-huanwenzhu.jpg", notes: "Green culm, yellow sulcus. Snöbrott risk." },
    { id: "PHY-VIV-MCC", name: "Phyllostachys vivax 'McClure'", hardy: "-21C", ht: "14m", price: "950 SEK", img: "images/vivax-mcclure.jpg", notes: "Classic green timber. Large leaves." },
    { id: "PHY-VIV-AUR", name: "Phyllostachys vivax 'Aureocaulis'", hardy: "-21C", ht: "12m", price: "950 SEK", img: "images/vivax-aureocaulis.jpg", notes: "Yellow culm, green stripes. High aesthetics." },
    { id: "PHY-PAR-NOM", name: "Phyllostachys parvifolia", hardy: "-25C", ht: "10m", price: "1200 SEK", img: "images/parvifolia.jpg", notes: "Extremely hardy timber. Edible shoots." },
    { id: "PHY-ATR-INC", name: "Phyllostachys atrovaginata", hardy: "-23C", ht: "8m", price: "850 SEK", img: "images/atrovaginata.jpg", notes: "Air canals for wet soil. Scented." },
    { id: "PHY-AUR-NOM", name: "Phyllostachys aureosulcata", hardy: "-25C", ht: "7m", price: "650 SEK", img: "images/aureosulcata-green.jpg", notes: "Green culm, yellow sulcus. Zig-zag bases." },
    { id: "PHY-AUR-AUR", name: "Phyllostachys aureosulcata 'Aureocaulis'", hardy: "-25C", ht: "7m", price: "720 SEK", img: "images/aureosulcata-aureocaulis.jpg", notes: "Solid yellow. Very hardy." },
    { id: "PHY-AUR-SPE", name: "Phyllostachys aureosulcata 'Spectabilis'", hardy: "-25C", ht: "7m", price: "750 SEK", img: "images/aureosulcata-spectabilis.jpg", notes: "Yellow culm, green sulcus. Red shoots." },
    { id: "PHY-AUR-ARG", name: "Phyllostachys aureosulcata 'Argus'", hardy: "-25C", ht: "7m", price: "800 SEK", img: "images/aureosulcata-argus.jpg", notes: "Green stripes on yellow." },
    { id: "PHY-NIG-NOM", name: "Phyllostachys nigra", hardy: "-18C", ht: "5m", price: "850 SEK", img: "images/nigra-black.jpg", notes: "Jet black culms. Needs shelter." },
    { id: "PHY-NIG-HEN", name: "Phyllostachys nigra 'Henonis'", hardy: "-23C", ht: "10m", price: "950 SEK", img: "images/nigra-henonis.jpg", notes: "Giant grey timber. Very hardy." },
    { id: "PHY-NIG-PUN", name: "Phyllostachys nigra 'Punctata'", hardy: "-20C", ht: "7m", price: "850 SEK", img: "images/nigra-punctata.jpg", notes: "Speckled black culms." },
    { id: "PHY-BIS-NOM", name: "Phyllostachys bissetii", hardy: "-26C", ht: "7m", price: "550 SEK", notes: "Best Swedish windbreak." },
    { id: "PHY-DEC-NOM", name: "Phyllostachys decora", hardy: "-22C", ht: "6m", price: "700 SEK", notes: "Drought tolerant runner." },
    { id: "PHY-NUD-NOM", name: "Phyllostachys nuda", hardy: "-26C", ht: "6m", price: "650 SEK", notes: "Early purple / black nodes." },
    { id: "SAS-KUR-NOM", name: "Sasa kurilensis", hardy: "-30C", ht: "2m", price: "450 SEK", notes: "Northernmost species. Large leaves." },
    { id: "BAS-QIN-NOM", name: "Bashania qingchengshanensis", hardy: "-20C", ht: "4m", price: "600 SEK", notes: "Strong, stiff culms." },
    { id: "SEM-FAS-NOM", name: "Semiarundinaria fastuosa", hardy: "-20C", ht: "8m", price: "850 SEK", notes: "Upright columnar habit." }
];

const clumpingBamboo = [
    { id: "FAR-NIT-OBE", name: "Fargesia nitida x murieliae 'Obelisk'", hardy: "-25C", ht: "4m", price: "750 SEK", img: "images/fargesia-obelisk.jpg", notes: "Tallest upright columnar hedge." },
    { id: "FAR-MUR-RZB", name: "Fargesia murieliae 'Red Zebra'", hardy: "-23C", ht: "3m", price: "700 SEK", img: "images/fargesia-red-zebra.jpg", notes: "Dark red / green contrast stems." },
    { id: "FAR-NIT-SCH", name: "Fargesia nitida x murieliae 'Schensbossen'", hardy: "-26C", ht: "4m", price: "750 SEK", img: "images/fargesia-schensbossen.jpg", notes: "Exceptional hardiness." },
    { id: "FAR-SPP-RUF", name: "Fargesia sp. 'Rufa'", hardy: "-23C", ht: "2.5m", price: "580 SEK", img: "images/fargesia-rufa.jpg", notes: "Non-curling leaves. Early shoots." },
    { id: "FAR-ROB-CAM", name: "Fargesia robusta 'Campbell'", hardy: "-20C", ht: "5m", price: "850 SEK", img: "images/fargesia-campbell.jpg", notes: "Earliest shoots. White pattern." },
    { id: "FAR-NIT-JUR", name: "Fargesia nitida 'Jürgen'", hardy: "-26C", ht: "3.5m", price: "650 SEK", img: "images/fargesia-jurgen.jpg", notes: "Upright, dark culms." },
    { id: "FAR-JIU-ONE", name: "Fargesia sp. Jiuzhaigou '1'", hardy: "-25C", ht: "3m", price: "700 SEK", img: "images/fargesia-jiuzhaigou-1.jpg", notes: "Red Panda. Cherry stems in sun." },
    { id: "FAR-JIU-DPU", name: "Fargesia sp. Jiuzhaigou 'Deep Purple'", hardy: "-25C", ht: "3m", price: "800 SEK", img: "images/fargesia-deep-purple.jpg", notes: "Deepest purple culm color." },
    { id: "FAR-DEM-GER", name: "Fargesia demissa 'Gerry'", hardy: "-25C", ht: "3m", price: "900 SEK", img: "images/fargesia-gerry.jpg", notes: "Almost black culms." },
    { id: "FAR-DEN-XI2", name: "Fargesia denudata 'Xian 2'", hardy: "-22C", ht: "4m", price: "780 SEK", img: "images/fargesia-xian-2.jpg", notes: "Cloud - like elegant habit." },
    { id: "FAR-SPP-KR5", name: "Fargesia sp. 'KR5287'", hardy: "-20C", ht: "4m", price: "1200 SEK", img: "images/fargesia-kr5287.jpg", notes: "Rare collector blueish culms." }
];

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    document.getElementById('nav-list').classList.remove('active');
    window.scrollTo(0, 0);
}

function renderProducts(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placeholder.com{item.id}'">
            <div class="card-body">
                <h4>${item.name}</h4>
                <span class="price">${item.price}</span>
                <div class="specs">
                    <p><strong>Hardiness:</strong> ${item.hardy}</p>
                    <p><strong>Max Height:</strong> ${item.ht}</p>
                    <p><em>${item.notes}</em></p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Validation & Mailing List Retention logic
function saveSubscriberLocally(email) {
    let subscribers = JSON.parse(localStorage.getItem('bamboo_mailing_list')) || [];
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('bamboo_mailing_list', JSON.stringify(subscribers));
        return true; // New subscriber added
    }
    return false; // Already exists
}

async function handleFormSubmit(event, subject) {
    event.preventDefault();
    const form = event.target;
    const newsletterArea = document.getElementById('newsletter-area');
    const originalNewsletterHTML = newsletterArea ? newsletterArea.innerHTML : null;
    
    const data = new FormData(form);
    const emailValue = data.get('email');
    data.append('_subject', subject);

    // If it's a newsletter, check local list first
    if (form.id === 'subscribe-form') {
        const isNew = saveSubscriberLocally(emailValue);
        if (!isNew) {
            newsletterArea.innerHTML = "<h3>Note</h3><p>You are already subscribed to our list!</p>";
            setTimeout(() => {
                newsletterArea.innerHTML = originalNewsletterHTML;
                document.getElementById('subscribe-form').addEventListener('submit', (e) => handleFormSubmit(e, 'Newsletter Subscription'));
            }, 4000);
            return; // Stop here, don't send to Formspree again
        }
    }

    try {
        // REPLACE "YOUR_FORM_ID_HERE" with your actual Formspree ID  https://formspree.io/f/mpqkkkep
        const response = await fetch("https://formspree.io/f/mpqkkkep", {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            if (form.id === 'subscribe-form') {
                newsletterArea.innerHTML = "<h3>Success!</h3><p>You have been added to our mailing list.</p>";
                setTimeout(() => {
                    newsletterArea.innerHTML = originalNewsletterHTML;
                    document.getElementById('subscribe-form').addEventListener('submit', (e) => handleFormSubmit(e, 'Newsletter Subscription'));
                }, 5000);
            } else {
                showPage('success-page');
            }
            form.reset();
        } else {
            alert("Submission error. Please try again.");
        }
    } catch (error) {
        alert("Connection error. Check your internet.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(runningBamboo, 'running-grid');
    renderProducts(clumpingBamboo, 'clumping-grid');
    
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    menuToggle.addEventListener('click', () => navList.classList.toggle('active'));

    document.getElementById('contact-form').addEventListener('submit', (e) => handleFormSubmit(e, 'New Contact Message'));
    document.getElementById('subscribe-form').addEventListener('submit', (e) => handleFormSubmit(e, 'Newsletter Subscription'));
});
