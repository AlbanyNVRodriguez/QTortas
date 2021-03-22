/*VENTANA MODAL*/
let article = document.querySelectorAll(".art-catalogo");
let modalBg = document.querySelector(".modal-bg");
let modalG = document.querySelectorAll(".modal-g");
var modalIMG = document.querySelectorAll(".modal-img");
let cerrar = document.querySelectorAll(".cerrar");
const html = document.getElementsByTagName("html")[0];

for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("click", function (e) {
        if (modalBg.className == ("modal-bg")) {
            modalBg.classList.add("activa");
            modalG[i].classList.add("activa");
            html.onkeypress = function () {
                return false;
            };
            if (modalIMG[i].className == ("modal-img casera")) {
                modalBg.style.background = "rgba(100,0,0,.5)";
            } else {
                modalBg.style.background = "rgba(0,0,200,.5)";
            }

        }
        cerrar[i].addEventListener("click", function (e) {
            modalBg.classList.remove("activa");
            modalG[i].classList.remove("activa");
        });
        modalBg.addEventListener("click", function (e) {
            modalBg.classList.remove("activa");
            modalG[i].classList.remove("activa");
        })
    });
}
/*-----------------------------------------------------------------------*/

/*MENU RESPONSIVE*/
const toggle_btn = document.querySelector(".toggle-btn");
let redesFlotantes = document.querySelector(".redes-flotantes");
toggle_btn.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
    if (document.getElementById("sidebar").className == ("active")) {
        redesFlotantes.style.bottom = "-35px";
        redesFlotantes.style.transition = "all 200ms linear";
    } else {
        redesFlotantes.style.bottom = "0";
        redesFlotantes.style.transition = "all 300ms linear";
    }
})
/*-----------------------------------------------------------------------*/
/*SCROLL DEL MENU PC*/
let menu = document.querySelector(".header .menu");

window.onscroll = function () {
    if (window.pageYOffset > 5) {
        menu.classList.add("scroll");
        toggle_btn.classList.add("scroll");
        if (document.getElementById("sidebar").className == ("active")) {
            redesFlotantes.style.bottom = "-35px";
            redesFlotantes.style.transition = "all 200ms linear";
        }else{
            redesFlotantes.style.bottom = "0";
            redesFlotantes.style.transition = "all 300ms linear";
        }

    } else{
        toggle_btn.classList.remove("scroll");
        menu.classList.remove("scroll");
        redesFlotantes.style.bottom = "-35px";
        redesFlotantes.style.transition = "all 200ms linear";
    }
}
/*-----------------------------------------------------------------------*/



/*ESTILO ACORDEON DE LAS PREGUNTAS DEL FOOTER*/
let btnItems = document.querySelectorAll(".item .btn-item");
for (let i = 0; i < btnItems.length; i++) {
    btnItems[i].addEventListener("click", function (e) {
        btnItems[i].classList.toggle("active");
    });
}
/*-----------------------------------------------------------------------*/
