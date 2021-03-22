document.addEventListener('DOMContentLoaded', () => {


    const elementosCarousel = document.querySelectorAll('.carousel');


    M.Carousel.init(elementosCarousel, {
        duration: 120,
        dist: -30,
        shift: 5,
        padding: 5,
        indicators: true,
        noWrap: false
    });

    // custom function for autoplaying 
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = 7000,
        activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
            if (el.classList.contains(activeClass)) {
                sib = el.nextElementSibling;
                if (sib == null) {
                    indicatorItems[0].click();
                } else {
                    sib.click()
                }
            }
        });
    }, slideTime);

});

/*$(document).ready(function(){
     setInterval(function(){
         $(".carousel").carousel("next");
     },2000);
 });*/
