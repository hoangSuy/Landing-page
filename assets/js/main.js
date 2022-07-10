// Scrollspy
var spy = new Gumshoe('nav a');

// Burger

$('.burger').on('click', function(event) {
    $('.navigation-bar').slideToggle('200');
    $('.toggle-open').slideToggle('open');
    $('.toggle-close').slideToggle('close');
})

//sticky navbar
$(document).ready(function() {
    $(window).bind('scroll', function() {
        var navHeight = $('header').height();
        if ($(window).scrollTop() > navHeight) {
            $('header').addClass('fixed');
        }
        else {
        $('header').removeClass('fixed')
        }
    })
})

// scroll up
var btn = $('.scrollup');
$(window).scroll(function() {
    if ($(window).scrollTop()>500){
        btn.addClass('show')
    } else {
        btn.removeClass('show');
    }
})
btn.on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '5000');
})

//reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1500,
    reset: true
})
ScrollReveal().reveal('.col, .about-image',{origin: 'left'});
ScrollReveal().reveal('.aboutus-content, .home-image', { origin: 'right' });
ScrollReveal().reveal('.product-item, .brand, .newsletter-wrapper', { interval: 100 });