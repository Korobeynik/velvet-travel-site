
$(document).ready(function(){
    $('input').blur(function(){
        //console.log($(this).val().length)
      if ( $(this).val().length !==  0 ) {
            $(this).addClass('full');
      } else {
        $(this).removeClass('full');
      }
    });
});

(function() {

    $("html").niceScroll({
        cursorcolor: "#FF7A52", // change cursor color in hex
        cursoropacitymin: 0.5, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #FF7A52", // css definition for cursor border
        cursorborderradius: "10px", // border radius in pixel for cursor
        scrollspeed: 100,
        mousescrollstep: 50
    });

    $('#c-form').submit(function(event) {
       event.preventDefault();
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        items:1,
        loop:true,
        margin: 0,
        smartSpeed: 500,
        //autoplay: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: false
    }).on('translate.owl.carousel', function() {
       $(this).find('.composition-text').removeClass('animated fadeInUp');
    }).on('translated.owl.carousel', function() {
       $(this).find('.composition-text').addClass('animated fadeInUp');
    });

    $('.owl-carousel .composition-text').on('mouseleave',function(e){
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    })

    $('.owl-carousel .composition-text').on('mouseenter',function(e){
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
    })


    $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })


    $(window).bind("load resize", function() {

    if($(window).width() < 600) {

        $(document).scroll(function() {
            if (!$('.menu').hasClass('menu--open')) {
              //closeMenu();
              setTimeout(function(){
                  $('.aside-panel').addClass('mobile');
                }, 500);
            }

        });

        $("html").getNiceScroll().remove();
         setTimeout(function(){
              $('.aside-panel').addClass('mobile');
            }, 2000);
       } else {
         $('.aside-panel').removeClass('mobile');
       }
    });

    $('.aside-mobile').click(function(event) {
        $('.aside-panel').removeClass('mobile');
    });



  //   $(document).swipe( {
  //   //Generic swipe handler for all directions
  //   swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
  //     $('.aside-panel').removeClass('mobile'); 
  //   }
  // });
  
 
    $(document).swipe({
        swipeRight:function(event, direction) {
            $('.aside-panel').removeClass('mobile'); 
        }   
    });

    $(document).swipe({
        swipeLeft:function(event, direction) {
            $('.aside-panel').addClass('mobile'); 
        }
    });




    var navEl = document.querySelector('nav.menu'),
        revealer = new RevealFx(navEl),
        closeCtrl = navEl.querySelector('.btn--close');

    document.querySelector('.btn--menu').addEventListener('click', function() {
        //hideMenuButton();
        closeCtrl.style.display = "block";
        this.style.display = "none";
        revealer.reveal({
            bgcolor: '#FF633B',
            duration: 400,
            easing: 'easeInOutCubic',
            onCover: function(contentEl, revealerEl) {
                navEl.classList.add('menu--open');
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                closeCtrl.addEventListener('click', closeMenu);
            }
        });

    });

    function closeMenu() {
        closeCtrl.removeEventListener('click', closeMenu);
        navEl.classList.remove('menu--open');
        document.querySelector('.btn--menu').style.display = "block";
        revealer.reveal({
            bgcolor: '#FF633B',
            duration: 400,
            easing: 'easeInOutCubic',
            onCover: function(contentEl, revealerEl) {
                navEl.classList.remove('menu--open');
                contentEl.style.opacity = 0;
            }
        });
    }

})();


(function() {
    var modalEl = document.querySelector('.modal'),
        revealer = new RevealFx(modalEl),
        deleteCtrl = modalEl.querySelector('.btn--default'),
        closeCtrl = modalEl.querySelector('.btn--modal-close');

    document.querySelector('.btn--modal-open').addEventListener('click', function() {
        modalEl.classList.add('modal--open');
        revealer.reveal({
            bgcolor: '#FF633B',
            direction: 'tb',
            duration: 400,
            easing: 'easeOutCirc',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                closeCtrl.addEventListener('click', closeModal);
                //deleteCtrl.addEventListener('click', closeModal);
            }
        });
    });

    function closeModal(ev) {
        closeCtrl.removeEventListener('click', closeModal);
        modalEl.classList.remove('modal--open');
        revealer.reveal({
            bgcolor: ev.target.classList.contains('btn--modal-close') ? '#FF633B' : '#40f180',
            direction: 'bt',
            duration: ev.target.classList.contains('btn--modal-close') ? 200 : 400,
            easing: 'easeOutCirc',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 0;
            },
            onComplete: function() {
                modalEl.classList.remove('modal--open');
            }
        });
    }

    deleteCtrl.addEventListener('submit', function(event){
        event.preventDefault();
    });

    })();

