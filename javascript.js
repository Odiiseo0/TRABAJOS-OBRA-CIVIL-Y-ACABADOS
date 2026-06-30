const secciones = [
    {
        nombre: "Acabados",
        servicios: ["Aplanados de yeso y mortero", "Pasta y texturizados", "Pintura vinílica, esmalte e industrial", "Pintura térmica", "Impermeabilización", "Instalación de tablaroca, plafones y cielos falsos", "Piso cerámico, Porcelanato, Loseta", "Piso SPC, vinílico y laminado", "Zoclos", "Azulejo para baños y cocinas", "Fachadas, Cantera y piedra natural", "Selladores y juntas", "Carpintería", "Cancelería de aluminio, Cristales y espejos", "Herrería y Soldadura", "Instalación de puertas y ventanas"]
    },
    {
        nombre: "Instalaciones",
        servicios: ["Instalaciones eléctricas", "Instalaciones hidráulicas", "Instalaciones sanitarias"]
    },
    {
        nombre: "Obra Civil",
        servicios: ["Losas de concreto", "Firmes de concreto", "Banquetas y guarniciones", "Pavimentos de concreto", "Muros de block y ladrillo", "Castillos, cadenas y dalas", "Columnas y trabes", "Estructuras de concreto", "Demoliciones", "Obra civil en general"]
    }
];

const main = document.getElementById('catalogo');
secciones.forEach(sec => {
    let html = `<div class="seccion"><h2 class="titulo-seccion">${sec.nombre}</h2><div class="grid-servicios">`;
    sec.servicios.forEach(s => {
        html += `
            <div class="card">
                <img src="IMG_4888.jpeg" alt="${s}">
                <h3>${s}</h3>
                <a href="https://wa.me/5281XXXXXXXX" class="btn-cotizar">Cotizar por WhatsApp</a>
            </div>
        `;
    });
    html += `</div></div>`;
    main.innerHTML += html;
});
