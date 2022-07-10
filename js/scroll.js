const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// $("#starters_class, #a1_class, #a2_class, #b1_class, #child_class, #adult_class, #talking, #theatre, #olimp").click(function() { // ID откуда кливаем
//     $('html, body').animate({
//         scrollTop: $(".courses").offset().top // класс объекта к которому приезжаем
//     }, 1000); // Скорость прокрутки
// });