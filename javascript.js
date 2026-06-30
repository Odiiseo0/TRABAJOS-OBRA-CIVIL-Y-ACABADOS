const secciones = [
    {
        titulo: "Acabados Residenciales y Comerciales",
        items: ["Aplanados de yeso y mortero", "Pasta y texturizados", "Pintura vinílica y esmalte", "Pintura industrial y térmica", "Impermeabilización", "Tablaroca, Plafones y Cielos falsos", "Piso cerámico, Porcelanato y Loseta", "Piso SPC, vinílico y laminado", "Zoclos", "Azulejo para baños y cocinas", "Fachadas, Cantera y piedra", "Selladores y juntas", "Carpintería", "Cancelería de aluminio, Cristales y espejos", "Herrería y Soldadura", "Instalación de puertas y ventanas"]
    },
    {
        titulo: "Instalaciones Especializadas",
        items: ["Instalaciones eléctricas", "Instalaciones hidráulicas", "Instalaciones sanitarias"]
    },
    {
        titulo: "Obra Civil y Estructuras",
        items: ["Losas y Firmes de concreto", "Banquetas y guarniciones", "Pavimentos", "Muros de block y ladrillo", "Castillos, cadenas y dalas", "Columnas y trabes", "Estructuras de concreto", "Demoliciones y Obra civil general"]
    }
];

const catalogo = document.getElementById('catalogo');

secciones.forEach(sec => {
    let htmlItems = sec.items.map(item => `
        <div class="card">
            <img src="IMG_4888.jpeg" alt="${item}">
            <p>${item}</p>
            <a href="https://wa.me/5281XXXXXXXX" class="btn-wpp">Cotizar</a>
        </div>
    `).join('');

    catalogo.innerHTML += `
        <div class="categoria">
            <div class="cat-titulo">${sec.titulo}</div>
            <div class="lista-servicios">${htmlItems}</div>
        </div>
    `;
});
