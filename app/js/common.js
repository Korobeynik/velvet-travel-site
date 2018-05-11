(function() {

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

(function(){
    $('.btn--menu').on('click', function() {
        alert("some");
        $(this).toggle();
        /* Act on the event */
    });
});