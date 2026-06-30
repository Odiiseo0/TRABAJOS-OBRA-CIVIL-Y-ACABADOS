const servicios = [
    {
        cat: "Acabados",
        items: [
            { nombre: "Aplanados y Yeso", fotos: ["IMG_4872.jpeg", "IMG_4873.jpeg", "IMG_4874.jpeg"] },
            { nombre: "Pintura y Texturizados", fotos: ["IMG_4875.jpeg", "IMG_4877.jpeg", "IMG_4878.jpeg"] },
            { nombre: "Pisos y Azulejos", fotos: ["IMG_4879.jpeg", "IMG_4880.jpeg", "IMG_4881.jpeg"] }
        ]
    }
];

const container = document.getElementById('catalogo');

servicios.forEach(sec => {
    let html = `<div class="categoria-box"><div class="cat-titulo">${sec.cat}</div><div class="carrusel">`;
    
    sec.items.forEach(item => {
        html += `
            <div class="card">
                <img src="${item.fotos[0]}" alt="${item.nombre}">
                <p>${item.nombre}</p>
                <a href="https://wa.me/5281XXXXXXXX" class="btn-cotizar">Cotizar</a>
            </div>
        `;
    });
    
    html += `</div></div>`;
    container.innerHTML += html;
});
