
//---------fixed header-------
$(function(){
    let header = $("#header");
    let promo = $("#promo");
    let promoHeight = promo.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        promoHeight = promo.innerHeight();
        
        scrollPos = $(this).scrollTop();
        if( scrollPos > promoHeight){
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }
    })
})
//-----------nav_menu-----------
let nav = $("#nav")
let nav_menu = $('#nav_menu')

nav_menu.on('click', function(event){
    event.preventDefault();
    nav.toggleClass("show_menu")
})


//---------scroll-----------
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data('scroll')
    let elementOffset = $(elementId).offset().top

    nav.removeClass('show_menu')
    $("html, body").animate({
        scrollTop: elementOffset - 99
    }, 700)
})
//----- adding class--------- 
$(document).ready(function () {
    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
            elem1 = $(".items");
        elem2 = $(".change_right_to_left ");
        if (windowWidth < 1380) {
            elem1.removeClass('col-4');
            elem1.addClass('col');

        }
        else {
            elem1.removeClass('col');
            elem1.addClass('col-4');
        }
        if (windowWidth < 769) {
            elem2.removeClass('icon_right');
            elem2.addClass('icon_left');

        }
        else {
            elem2.removeClass('icon_left');
            elem2.addClass('icon_right');
        }
    }

    checkWidth();

    $(window).resize(function () {
        checkWidth();
    });
});
//===================slider==================

$('.slider').slick({
    speed: 1400,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1480,
            settings: {
                arrows: false,
                dots: true, 
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }

        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
})
//===================fetch====================
var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
e.preventDefault();
var name = document.getElementById('name').value;
var body = document.getElementById('body').value;

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: name,
        body: body
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
        var result = document.getElementById('result')
        result.innerHTML = `<p class="result">thanks for subscribe!</p>`
    })
})



