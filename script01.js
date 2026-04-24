// Product Data
const runningBamboo = [
    { id: "PHY-VIV-HUA", name: "Phyllostachys vivax 'Huanwenzhu'", hardy: "-21C", ht: "12m", price: "850 SEK", notes: "Green culm, yellow sulcus. Snöbrott risk." },
    { id: "PHY-VIV-MCC", name: "Phyllostachys vivax 'McClure'", hardy: "-21C", ht: "14m", price: "890 SEK", notes: "Classic green timber. Large leaves." },
    { id: "PHY-VIV-AUR", name: "Phyllostachys vivax 'Aureocaulis'", hardy: "-21C", ht: "12m", price: "950 SEK", notes: "Yellow culm, green stripes. High aesthetics." },
    { id: "PHY-PAR-NOM", name: "Phyllostachys parvifolia", hardy: "-25C", ht: "10m", price: "1100 SEK", notes: "Extremely hardy timber. Edible shoots." },
    { id: "PHY-ATR-INC", name: "Phyllostachys atrovaginata", hardy: "-23C", ht: "8m", price: "850 SEK", notes: "Air canals for wet soil. Scented." },
    { id: "PHY-AUR-NOM", name: "Phyllostachys aureosulcata", hardy: "-25C", ht: "7m", price: "650 SEK", notes: "Green culm, yellow sulcus. Zig-zag bases." },
    { id: "PHY-AUR-AUR", name: "Phyllostachys aureosulcata 'Aureocaulis'", hardy: "-25C", ht: "7m", price: "720 SEK", notes: "Solid yellow. Very hardy." },
    { id: "PHY-AUR-SPE", name: "Phyllostachys aureosulcata 'Spectabilis'", hardy: "-25C", ht: "7m", price: "750 SEK", notes: "Yellow culm, green sulcus. Red shoots." },
    { id: "PHY-AUR-ARG", name: "Phyllostachys aureosulcata 'Argus'", hardy: "-25C", ht: "7m", price: "790 SEK", notes: "Green stripes on yellow." },
    { id: "PHY-NIG-NOM", name: "Phyllostachys nigra", hardy: "-18C", ht: "5m", price: "850 SEK", notes: "Jet black culms. Needs shelter." },
    { id: "PHY-NIG-HEN", name: "Phyllostachys nigra 'Henonis'", hardy: "-23C", ht: "10m", price: "920 SEK", notes: "Giant grey timber. Very hardy." },
    { id: "PHY-NIG-PUN", name: "Phyllostachys nigra 'Punctata'", hardy: "-20C", ht: "7m", price: "850 SEK", notes: "Speckled black culms." },
    { id: "PHY-BIS-NOM", name: "Phyllostachys bissetii", hardy: "-26C", ht: "7m", price: "550 SEK", notes: "Best Swedish windbreak." },
    { id: "PHY-DEC-NOM", name: "Phyllostachys decora", hardy: "-22C", ht: "6m", price: "680 SEK", notes: "Drought tolerant runner." },
    { id: "PHY-NUD-NOM", name: "Phyllostachys nuda", hardy: "-26C", ht: "6m", price: "620 SEK", notes: "Early purple/black nodes." },
    { id: "SAS-KUR-NOM", name: "Sasa kurilensis", hardy: "-30C", ht: "2m", price: "450 SEK", notes: "Northernmost species. Large leaves." },
    { id: "BAS-QIN-NOM", name: "Bashania qingchengshanensis", hardy: "-20C", ht: "4m", price: "590 SEK", notes: "Strong, stiff culms." },
    { id: "SEM-FAS-NOM", name: "Semiarundinaria fastuosa", hardy: "-20C", ht: "8m", price: "820 SEK", notes: "Upright columnar habit." }
];

const clumpingBamboo = [
    { id: "FAR-NIT-OBE", name: "Fargesia nitida x murieliae 'Obelisk'", hardy: "-25C", ht: "4m", price: "750 SEK", notes: "Tallest upright columnar hedge." },
    { id: "FAR-MUR-RZB", name: "Fargesia murieliae 'Red Zebra'", hardy: "-23C", ht: "3m", price: "690 SEK", notes: "Dark red/green contrast stems." },
    { id: "FAR-NIT-SCH", name: "Fargesia nitida x murieliae 'Schensbossen'", hardy: "-26C", ht: "4m", price: "720 SEK", notes: "Exceptional hardiness." },
    { id: "FAR-SPP-RUF", name: "Fargesia sp. 'Rufa'", hardy: "-23C", ht: "2.5m", price: "580 SEK", notes: "Non-curling leaves. Early shoots." },
    { id: "FAR-ROB-CAM", name: "Fargesia robusta 'Campbell'", hardy: "-20C", ht: "5m", price: "850 SEK", notes: "Earliest shoots. White pattern." },
    { id: "FAR-NIT-JUR", name: "Fargesia nitida 'Jürgen'", hardy: "-26C", ht: "3.5m", price: "650 SEK", notes: "Upright, dark culms." },
    { id: "FAR-JIU-ONE", name: "Fargesia sp. Jiuzhaigou '1'", hardy: "-25C", ht: "3m", price: "680 SEK", notes: "Red Panda. Cherry stems in sun." },
    { id: "FAR-JIU-DPU", name: "Fargesia sp. Jiuzhaigou 'Deep Purple'", hardy: "-25C", ht: "3m", price: "780 SEK", notes: "Deepest purple culm color." },
    { id: "FAR-DEM-GER", name: "Fargesia demissa 'Gerry'", hardy: "-25C", ht: "3m", price: "890 SEK", notes: "Almost black culms." },
    { id: "FAR-DEN-XI2", name: "Fargesia denudata 'Xian 2'", hardy: "-22C", ht: "4m", price: "750 SEK", notes: "Cloud-like elegant habit." },
    { id: "FAR-SPP-KR5", name: "Fargesia sp. 'KR5287'", hardy: "-20C", ht: "4m", price: "1200 SEK", notes: "Rare collector blueish culms." }
];

// Page Navigation Logic
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    window.scrollTo(0, 0);
}

// Generate Product Cards
function renderProducts(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="https://placeholder.com{item.id}" alt="${item.name}">
            <div class="product-info">
                <h4>${item.name}</h4>
                <span class="price-tag">${item.price}</span>
                <div class="spec-list">
                    <p><strong>Hardy:</strong> ${item.hardy}</p>
                    <p><strong>Max Ht:</strong> ${item.ht}</p>
                    <p><em>${item.notes}</em></p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(runningBamboo, 'running-grid');
    renderProducts(clumpingBamboo, 'clumping-grid');

    // Simple Form Handling
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. Jeff will get back to you shortly.');
    });

    document.getElementById('subscribe-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to Emeraldine Bambusetum!');
    });
});
