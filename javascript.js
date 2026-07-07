const servicios = [
    {
        titulo: "Aplanados y Yeso",
        fotos: ["IMG_4872.jpeg", "IMG_4873.jpeg", "IMG_4874.jpeg", "IMG_4875.jpeg", "IMG_4877.jpeg"]
    },
    {
        titulo: "Pintura y Texturizados",
        fotos: ["IMG_4878.jpeg", "IMG_4879.jpeg", "IMG_4880.jpeg", "IMG_4881.jpeg"]
    }
];

const container = document.getElementById('catalogo');

function renderizarCatalogo() {
    servicios.forEach(servicio => {
        const carruselHTML = servicio.fotos
            .map(foto => `<img src="${foto}" alt="${servicio.titulo}" class="carrusel-img">`)
            .join('');

        const card = `
            <article class="card">
                <h3>${servicio.titulo}</h3>
                <div class="carrusel">${carruselHTML}</div>
                <a href="https://wa.me/528188683570" class="btn-cotizar" target="_blank">Cotizar por WhatsApp</a>
            </article>
        `;
        
        container.insertAdjacentHTML('beforeend', card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarCatalogo);
