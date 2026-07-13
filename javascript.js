/*==========================
        GALERÍA CARRUSEL
===========================*/


const serviciosGaleria = [

{

titulo:"Pisos y Recubrimientos",

fotos:[

"IMG_4872.jpeg",
"IMG_4873.jpeg",
"IMG_4874.jpeg",
"IMG_4875.jpeg",
"IMG_4877.jpeg"

]

},



{

titulo:"Pintura y Acabados",

fotos:[

"IMG_4878.jpeg",
"IMG_4879.jpeg",
"IMG_4880.jpeg",
"IMG_4881.jpeg",
"IMG_5385.jpeg"

]

},



{


        {
titulo:"Albañilería",

fotos:[

"IMG_5400.jpeg",
"IMG_5401.jpeg",
"IMG_5403.jpeg",
"IMG_5405.jpeg",
"IMG_5406.jpeg"

]

},


},



{
titulo:"Tablaroca y Plafones",

fotos:[

"IMG_5390.jpeg",
"IMG_5389.jpeg"

]

}

];





const catalogo = document.getElementById("catalogo");





function cargarCatalogo(){


if(!catalogo) return;



catalogo.innerHTML="";



serviciosGaleria.forEach((servicio,index)=>{


let imagenes="";



if(servicio.fotos.length > 0){


servicio.fotos.forEach((foto,i)=>{


imagenes += `

<img 
src="${foto}"
class="carrusel-img ${i===0 ? "activa":""}"
alt="${servicio.titulo}">


`;



});


}else{


imagenes=`

<p class="sin-fotos">

Fotos próximamente

</p>

`;

}



catalogo.innerHTML += `


<div class="card">


<h3>${servicio.titulo}</h3>



<div class="carrusel"
data-id="${index}">


${imagenes}


</div>




<a 

href="https://wa.me/528188683570"

target="_blank"

class="btn-cotizar">


<i class="fa-brands fa-whatsapp"></i>

Solicitar Cotización


</a>



</div>


`;



});



}



cargarCatalogo();



/*==========================
      IMAGEN GRANDE
===========================*/


document.addEventListener("click",(e)=>{


if(e.target.classList.contains("carrusel-img")){


const visor = document.createElement("div");


visor.className="visor-imagen";



const imagen = document.createElement("img");



imagen.src=e.target.src;



visor.appendChild(imagen);



document.body.appendChild(visor);



visor.onclick=()=>{


visor.remove();


};



}



});








/*==========================
   SERVICIOS DESPLEGABLES
===========================*/


function mostrarServicio(elemento){



const abierto = elemento.classList.contains("activo");



document.querySelectorAll(".servicio").forEach(servicio=>{


servicio.classList.remove("activo");


});



if(!abierto){


elemento.classList.add("activo");


}



}








/*==========================
       HEADER SCROLL
===========================*/


const header=document.querySelector(".header");



if(header){


window.addEventListener("scroll",()=>{


if(window.scrollY > 80){


header.style.background="#1F3F7F";


header.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";


}else{


header.style.background="rgba(15,15,15,.90)";


header.style.boxShadow="none";


}



});


}
/*==========================
     ANIMACIÓN SCROLL
===========================*/


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});




document.querySelectorAll("section").forEach(sec=>{


sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition=".8s ease";


observer.observe(sec);


});







/*==========================
      VISOR ANIMADO
===========================*/


const estiloVisor=document.createElement("style");


estiloVisor.innerHTML=`


.visor-imagen{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.92);

display:flex;

justify-content:center;

align-items:center;

z-index:9999;

cursor:pointer;

animation:aparecer .3s ease;

}



.visor-imagen img{

max-width:90%;

max-height:90%;

border-radius:20px;

animation:zoom .3s ease;

}



@keyframes aparecer{

from{

opacity:0;

}

to{

opacity:1;

}

}




@keyframes zoom{

from{

transform:scale(.8);

}

to{

transform:scale(1);

}

}



`;



document.head.appendChild(estiloVisor);







/*==========================
    BOTÓN SUBIR ARRIBA
===========================*/


const arriba=document.createElement("button");


arriba.innerHTML="⬆";


arriba.className="btn-arriba";


document.body.appendChild(arriba);





window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


arriba.classList.add("mostrar");


}else{


arriba.classList.remove("mostrar");


}



});






arriba.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};








const estiloBoton=document.createElement("style");


estiloBoton.innerHTML=`


.btn-arriba{


position:fixed;

right:95px;

bottom:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#1F3F7F;

color:white;

font-size:22px;

cursor:pointer;

z-index:999;

opacity:0;

pointer-events:none;

transition:.3s;

}




.btn-arriba.mostrar{


opacity:1;

pointer-events:auto;


}




.btn-arriba:hover{


transform:translateY(-5px);


}



`;



document.head.appendChild(estiloBoton);
