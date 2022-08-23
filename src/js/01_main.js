function catalogSlider() {
    var swiper = new Swiper('.catalog .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 15,
        breakpoints:{
            320:{
                slidesPerView: "auto",
                spaceBetween: 15,
            },
            768:{
                spaceBetween: 30,
                slidesPerView: "auto",
            },
            1280:{
                slidesPerView: 4,
                spaceBetween: 15,
            }
        }
    })
}

function examplesSlider() {
    var swiper = new Swiper('.examples .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 15,
        breakpoints:{
            320:{
                spaceBetween: 15,
            },
            768:{
                spaceBetween: 30,
            }
        }
    })
}

catalogSlider()
examplesSlider()


let calcMinus = document.querySelectorAll(".cartcalc .ccalc-minus")
let calcPlus = document.querySelectorAll(".cartcalc .ccalc-plus")


function cartCalc() {

    calcMinus.forEach(el => {
        el.onclick = function() {
            let input = el.closest('.cartcalc').childNodes[3]
            let a = input.value;
            console.log(input.value);
            if (a > 1) {
                let b = +a - 1;
                input.value = b;
            } else {
                input.value = a;
            }
        }
    });

    calcPlus.forEach(el => {
        el.onclick = function() {
            let input = el.closest('.cartcalc').childNodes[3]
            let a = input.value;
            let b = +a + 1;
            input.value = b;
        }
    });

}

cartCalc()

$('input[type="tel"]').mask('+7 (999) 999 99 99', { autoclear: false });
