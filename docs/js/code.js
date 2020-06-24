

//

let boton = document.getElementById("icono");
let btn = document.getElementById("cerrar");
let enlaces = document.getElementById("enlaces");
let contador = 0;


btn.addEventListener("click",function(){
    document.getElementById("icono").style = "opacity: none; transition: 0.3s;";
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

boton.addEventListener("click",function(){
    document.getElementById("icono").style = "opacity: 0; transition: 0.3s;";
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
    }
})


//////////////////////////
// $(document).ready(function() {
 
//     // Fakes the loading setting a timeout
//       setTimeout(function() {
//           $('body').addClass('loader');
//       }, 3500);
   
//   });

// cargando
$(document).ready(function () {
    setTimeout(function () {
        $(".content").css({visibility:"hidden",opacity:"0"})
    }, 1000);
});

// $(window).on('load', function () {
//       setTimeout(function () {
//     $(".content").css({visibility:"hidden",opacity:"0"})
//   }, 2000);
// });

////////////////// efecto portafolio    

$(function() {
    // var $filters = $('.f');
    var selectedClass = "";

    $("h4").click(function(){
    selectedClass = $(this).attr("data-rel");

    $('h4').removeClass('active');
    $(this).addClass('active')

    $("#portfolio").fadeTo(100, 0.1);

    $("#portfolio div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
        $("."+selectedClass).fadeIn();
        $("#portfolio").fadeTo(500, 1);
    }, 500);
    
    });
});

////////////////// modal
$(document).ready(function () {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});



//// aos
$(document).ready(function () {
    AOS.init({
        duration: 2800,
    });
});


/// menu dos
// $(document).ready(function () {
//     $('.menu-burger, .menu-items').on('click', function() {
//         $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
//         $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
//         $('.menu-bg').removeClass('opacity').addClass('opacity');

//         // $('.menu-bg').addClass('opacity');
//     });

// });



// $('.open-overlay').click(function() {
//     var overlay_navigation = $('.overlay-navigation'),
//       nav_item_1 = $('nav li:nth-of-type(1)'),
//       nav_item_2 = $('nav li:nth-of-type(2)'),
//       nav_item_3 = $('nav li:nth-of-type(3)'),
//       nav_item_4 = $('nav li:nth-of-type(4)'),
//       nav_item_5 = $('nav li:nth-of-type(5)'),
//       top_bar = $('.bar-top'),
//       middle_bar = $('.bar-middle'),
//       bottom_bar = $('.bar-bottom');
  
//     overlay_navigation.toggleClass('overlay-active');
//     if (overlay_navigation.hasClass('overlay-active')) {
  
//       top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
//       middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
//       bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
//       overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
//       nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
//       nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
//       nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
//       nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
//       nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
//     } else {
//       top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
//       middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
//       bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
//       overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
//       nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
//       nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
//       nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
//       nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
//       nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
//     }
//   })


// $(document).ready(function() {      
//     var wrapperMenu = document.querySelector('.wrapper-menu');

//     wrapperMenu.addEventListener('click', function(){
//       wrapperMenu.classList.toggle('open');  
//     })
//  });
 
 
// $('#toggle').click(function() {
//     $(this).toggleClass('active');
//     $('#overlay').toggleClass('open');
//    });


// $(".hamburger-menu").on("click", function() {
//     $(this).toggleClass("active");
//     // No need to use code below =)
//     // $("body").append("<h1>Yayy</h1>");
//     // setTimeout(function(){
//     //   $("h1").fadeOut("fast", function(){
//     //     $(this).remove();
//     //   });
//     // }, 500);
//   });
  
//   document.addEventListener("touchstart", function(){}, true);



// var hambugerIcon = document.querySelector('.hamburger-icon')
// var rect1 = document.querySelector('.hamburger-icon rect:nth-child(1)')
// var rect2 = document.querySelector('.hamburger-icon rect:nth-child(2)')
// var rect3 = document.querySelector('.hamburger-icon rect:nth-child(3)')

// var tl = new TimelineLite({paused:true})
// tl.to([rect1, rect3], 0.3, {attr:{y:46}, ease: Power1.easeInOut})
// tl.to(rect2, 0.1, {opacity:0})
// tl.to(rect1, 0.2, {rotation:45, transformOrigin:'center center', ease: Power1.easeInOut}, 'crossRotation')
// tl.to(rect3, 0.2, {rotation:-45, transformOrigin:'center center', ease: Power1.easeInOut}, 'crossRotation')
// hambugerIcon.addEventListener('click', function () {
//   hambugerIcon.classList.toggle('active')
//   if (hambugerIcon.classList.contains('active')) {
//     tl.play()
//   } else {
//     tl.reverse()
//   }
// })



// $(document).ready(function() {      
//     var hambugerIcon = document.querySelector('.hamburger-icon')
// var rect1 = document.querySelector('.hamburger-icon rect:nth-child(1)')
// var rect2 = document.querySelector('.hamburger-icon rect:nth-child(2)')
// var rect3 = document.querySelector('.hamburger-icon rect:nth-child(3)')

// var tl = new TimelineLite({paused:true})
// tl.to([rect1, rect3], 0.3, {attr:{y:46}, ease: Power1.easeInOut})
// tl.to(rect2, 0.1, {opacity:0})
// tl.to(rect1, 0.2, {rotation:45, transformOrigin:'center center', ease: Power1.easeInOut}, 'crossRotation')
// tl.to(rect3, 0.2, {rotation:-45, transformOrigin:'center center', ease: Power1.easeInOut}, 'crossRotation')
// hambugerIcon.addEventListener('click', function () {
//   hambugerIcon.classList.toggle('active')
//   if (hambugerIcon.classList.contains('active')) {
//     tl.play()
//   } else {
//     tl.reverse()
//   }
// })
//  });
 

const burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
    burger.classList.toggle("open");
});

///////
