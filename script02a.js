const runningBamboo = [
    { id: "PHY-VIV-HUA", name: "Phyllostachys vivax 'Huanwenzhu'", hardy: "-21C", ht: "12m", price: "950 SEK", img: "images/vivax-huan.jpg", notes: "Green culm, yellow sulcus." }, // Source: wikimedia.org/File:Phyllostachys_vivax_Huangwenzhu.jpg
    { id: "PHY-VIV-MCC", name: "Phyllostachys vivax 'McClure'", hardy: "-21C", ht: "14m", price: "950 SEK", img: "images/vivax-mcclure.jpg", notes: "Classic green timber." }, // Source: powo.science.kew.org
    { id: "PHY-VIV-AUR", name: "Phyllostachys vivax 'Aureocaulis'", hardy: "-21C", ht: "12m", price: "950 SEK", img: "images/vivax-aureo.jpg", notes: "Yellow culm, green stripes." }, // Source: ://bbc.com
    { id: "PHY-PAR-NOM", name: "Phyllostachys parvifolia", hardy: "-25C", ht: "10m", price: "1200 SEK", img: "images/parvifolia.jpg", notes: "Extremely hardy timber." }, // Source: commons.wikimedia.org/File:Bamboo_shoot-phyllostachys_parvifolia-jx1241c.jpg
    { id: "PHY-ATR-INC", name: "Phyllostachys atrovaginata", hardy: "-23C", ht: "8m", price: "850 SEK", img: "images/atrovaginata.jpg", notes: "Incense bamboo, wet soil tolerant." },
    { id: "PHY-AUR-NOM", name: "Phyllostachys aureosulcata", hardy: "-25C", ht: "7m", price: "650 SEK", img: "images/aureosulcata.jpg", notes: "Yellow sulcus, zig-zag bases." },
    { id: "PHY-AUR-AUR", name: "Phyllostachys aureosulcata 'Aureocaulis'", hardy: "-25C", ht: "7m", price: "700 SEK", img: "images/aureo-aureo.jpg", notes: "Solid yellow stems." },
    { id: "PHY-AUR-SPE", name: "Phyllostachys aureosulcata 'Spectabilis'", hardy: "-25C", ht: "7m", price: "750 SEK", img: "images/spectabilis.jpg", notes: "Yellow with green sulcus." },
    { id: "PHY-AUR-ARG", name: "Phyllostachys aureosulcata 'Argus'", hardy: "-25C", ht: "7m", price: "800 SEK", img: "images/argus.jpg", notes: "Striped yellow canes." },
    { id: "PHY-NIG-NOM", name: "Phyllostachys nigra", hardy: "-18C", ht: "5m", price: "850 SEK", notes: "Jet black culms." },
    { id: "PHY-NIG-HEN", name: "Phyllostachys nigra 'Henonis'", hardy: "-23C", ht: "10m", price: "950 SEK", notes: "Grey-green timber." },
    { id: "PHY-NIG-PUN", name: "Phyllostachys nigra 'Punctata'", hardy: "-20C", ht: "7m", price: "850 SEK", notes: "Speckled black culms." },
    { id: "PHY-BIS-NOM", name: "Phyllostachys bissetii", hardy: "-26C", ht: "7m", price: "550 SEK", notes: "Ideal windbreak." },
    { id: "PHY-DEC-NOM", name: "Phyllostachys decora", hardy: "-22C", ht: "6m", price: "700 SEK", notes: "Drought tolerant." },
    { id: "PHY-NUD-NOM", name: "Phyllostachys nuda", hardy: "-26C", ht: "6m", price: "650 SEK", notes: "Hardy dark nodes." },
    { id: "SAS-KUR-NOM", name: "Sasa kurilensis", hardy: "-300C", ht: "2m", price: "450 SEK", notes: "Large leaf northern species." },
    { id: "BAS-QIN-NOM", name: "Bashania qingchengshanensis", hardy: "-20C", ht: "4m", price: "600 SEK", notes: "Stiff, strong culms." },
    { id: "SEM-FAS-NOM", name: "Semiarundinaria fastuosa", hardy: "-20C", ht: "8m", price: "850 SEK", notes: "Columnar habit." }
];

const clumpingBamboo = [
    { id: "FAR-NIT-OBE", name: "Fargesia 'Obelisk'", hardy: "-25C", ht: "4m", price: "750 SEK", img: "images/obelisk.jpg", notes: "Tallest upright hedge." },
    { id: "FAR-MUR-RZB", name: "Fargesia 'Red Zebra'", hardy: "-23C", ht: "3m", price: "700 SEK", img: "images/red-zebra.jpg", notes: "Red/green stem contrast." },
    { id: "FAR-NIT-SCH", name: "Fargesia 'Schensbossen'", hardy: "-26C", ht: "4m", price: "750 SEK", img: "images/schensbossen.jpg", notes: "Exceptional hardiness." },
    { id: "FAR-SPP-RUF", name: "Fargesia 'Rufa'", hardy: "-23C", ht: "2.5m", price: "550 SEK", img: "images/rufa.jpg", notes: "Early shoots, non-curling." },
    { id: "FAR-ROB-CAM", name: "Fargesia 'Campbell'", hardy: "-20C", ht: "5m", price: "850 SEK", img: "images/campbell.jpg", notes: "White patterns on stems." },
    { id: "FAR-NIT-JUR", name: "Fargesia 'Jürgen'", hardy: "-26C", ht: "3.5m", price: "680 SEK", notes: "Dark upright culms." },
    { id: "FAR-JIU-ONE", name: "Fargesia Jiuzhaigou '1'", hardy: "-25C", ht: "3m", price: "700 SEK", notes: "Red Panda bamboo." },
    { id: "FAR-JIU-DPU", name: "Fargesia Jiuzhaigou 'Deep Purple'", hardy: "-25C", ht: "3m", price: "800 SEK", notes: "Deepest purple color." },
    { id: "FAR-DEM-GER", name: "Fargesia demissa 'Gerry'", hardy: "-25C", ht: "3m", price: "900 SEK", notes: "Jet black stems." },
    { id: "FAR-DEN-XI2", name: "Fargesia denudata 'Xian 2'", hardy: "-22C", ht: "4m", price: "780 SEK", notes: "Elegant habit." },
    { id: "FAR-SPP-KR5", name: "Fargesia 'KR5287'", hardy: "-20C", ht: "4m", price: "1100 SEK", notes: "Blueish collector species." }
];

function showPage(id) {
    document.querySelectorAll('.page-content').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    window.scrollTo(0,0);
}

function render(data, gridId) {
    const grid = document.getElementById(gridId);
    data.forEach(p => {
        const item = document.createElement('div');
        item.className = 'card';
        // If image doesn't exist, it falls back to a placeholder color
        const imgSrc = p.img || `https://placeholder.com{p.id}`;
        item.innerHTML = `
            <img src="${imgSrc}" alt="${p.name}">
            <div class="card-body">
                <h4>${p.name}</h4>
                <span class="price">${p.price}</span>
                <div class="specs">
                    <p><strong>Hardy:</strong> ${p.hardy} | <strong>Max Ht:</strong> ${p.ht}</p>
                    <p><em>${p.notes}</em></p>
                </div>
            </div>
        `;
        grid.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    render(runningBamboo, 'running-grid');
    render(clumpingBamboo, 'clumping-grid');
});
