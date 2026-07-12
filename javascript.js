/*==========================
        SERVICIOS GALERÍA
===========================*/


const servicios = [

{

titulo:"Aplanados y Yeso",

fotos:[

"IMG_4872.jpeg",
"IMG_4873.jpeg",
"IMG_4874.jpeg",
"IMG_4875.jpeg",
"IMG_4877.jpeg"

]

},


{

titulo:"Pintura y Texturizados",

fotos:[

"IMG_4878.jpeg",
"IMG_4879.jpeg",
"IMG_4880.jpeg",
"IMG_4881.jpeg"

]

}

];




/*==========================
        CATALOGO
===========================*/


const catalogo=document.getElementById("catalogo");



function cargarCatalogo(){


if(!catalogo) return;



catalogo.innerHTML="";



servicios.forEach(servicio=>{


let imagenes="";



servicio.fotos.forEach(foto=>{


imagenes+=`

<img src="${foto}"
class="carrusel-img"
alt="${servicio.titulo}">


`;



});





catalogo.innerHTML+=`


<div class="card">


<h3>${servicio.titulo}</h3>



<div class="carrusel">

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
    SERVICIOS DESPLEGABLES
===========================*/


function mostrarServicio(elemento){



document.querySelectorAll(".servicio").forEach(servicio=>{


if(servicio !== elemento){


servicio.classList.remove("activo");


}


});




elemento.classList.toggle("activo");



}
/*==========================
      HEADER SCROLL
===========================*/


const header=document.querySelector(".header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 80){


header.style.background="#1F3F7F";

header.style.padding="12px 8%";

header.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";



}else{


header.style.background="rgba(0,0,0,.35)";

header.style.padding="18px 8%";

header.style.boxShadow="none";



}



});







/*==========================
    ANIMACIÓN SCROLL
===========================*/



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";



}



});



});






document.querySelectorAll("section").forEach(sec=>{



sec.style.opacity="0";


sec.style.transform="translateY(70px)";


sec.style.transition=".9s";



observer.observe(sec);



});
/*==========================
      IMAGEN GRANDE
===========================*/


document.addEventListener("click",(e)=>{


if(e.target.classList.contains("carrusel-img")){


const fondo=document.createElement("div");



fondo.style.position="fixed";

fondo.style.top="0";

fondo.style.left="0";

fondo.style.width="100%";

fondo.style.height="100%";

fondo.style.background="rgba(0,0,0,.9)";

fondo.style.display="flex";

fondo.style.justifyContent="center";

fondo.style.alignItems="center";

fondo.style.cursor="pointer";

fondo.style.zIndex="9999";





const imagen=document.createElement("img");



imagen.src=e.target.src;



imagen.style.maxWidth="90%";

imagen.style.maxHeight="90%";

imagen.style.borderRadius="20px";





fondo.appendChild(imagen);



document.body.appendChild(fondo);





fondo.onclick=()=>{


fondo.remove();


}



}



});








/*==========================
    BOTON VOLVER ARRIBA
===========================*/



const arriba=document.createElement("button");



arriba.innerHTML="⬆";



arriba.style.position="fixed";

arriba.style.bottom="25px";

arriba.style.right="95px";

arriba.style.width="55px";

arriba.style.height="55px";

arriba.style.borderRadius="50%";

arriba.style.border="none";

arriba.style.background="#1F3F7F";

arriba.style.color="white";

arriba.style.fontSize="22px";

arriba.style.cursor="pointer";

arriba.style.display="none";

arriba.style.zIndex="999";





document.body.appendChild(arriba);







window.addEventListener("scroll",()=>{



if(window.scrollY>500){


arriba.style.display="block";



}else{


arriba.style.display="none";


}



});







arriba.onclick=()=>{



window.scrollTo({


top:0,


behavior:"smooth"



});



};
