(function() {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin: 0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })


    $(window).bind("load resize", function() {

    if($(window).width() < 600) {
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

    $(document).scroll(function() {
    $('.menu').removeClass('menu--open');
    $('.menu').css('dispplay', 'none');;
     setTimeout(function(){
          $('.aside-panel').addClass('mobile');
        }, 500);
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
