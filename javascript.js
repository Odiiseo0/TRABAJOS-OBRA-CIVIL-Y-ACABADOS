const servicios = [
    {
        titulo: "Aplanados y Yeso",
        fotos: ["IMG_4872.jpeg", "IMG_4873.jpeg", "IMG_4874.jpeg", "IMG_4875.jpeg", "IMG_4877.jpeg"]
    },
    {
        titulo: "Pintura y Texturizados",
        fotos: ["IMG_4878.jpeg", "IMG_4879.jpeg", "IMG_4880.jpeg", "IMG_4881.jpeg", "IMG_4872.jpeg"]
    }
];

const container = document.getElementById('catalogo');

servicios.forEach(s => {
    // Creamos el carrusel de imágenes
    let carruselHTML = s.fotos.map(foto => `<img src="${foto}" class="carrusel-img">`).join('');
    
    container.innerHTML += `
        <div class="card">
            <h3>${s.titulo}</h3>
            <div class="carrusel">${carruselHTML}</div>
            <a href="https://wa.me/5281XXXXXXXX" class="btn-cotizar">Cotizar</a>
        </div>
    `;
});
