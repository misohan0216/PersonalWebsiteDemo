// Hamburger Menu

function openMenu(){
    document.getElementById('navbar').style.width= "100%";
}

function closeMenu(){
    document.getElementById('navbar').style.width= "0%";
}

// Smmoth scroll

$(function(){
    $('.logo a,.menu-item a, .next-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);

        return false
    })
});

// WOW JS

new WOW().init();

// MixItUp

var mixer = mixitup('.work-grid');