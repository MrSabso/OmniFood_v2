$(document).ready(function(){

    /* For the stick navigation */
    var waypoint = new Waypoint({
        element: document.querySelector('.section-features'),
        handler: function(direction) {
          if(direction == "down"){
              $('nav').addClass('stick'); // document.querySelector('nav').classList.add('stick')
          }else{
              $('nav').removeClass('stick'); // document.querySelector('nav').classList.remove('stick')
          }
        },
        offset: 60
    });

        /* Mobile nav */
        $('.mobile-nav-icon').click(function(){
            var icon = document.querySelector('.mobile-nav-icon-btn');
    
            if (icon.name == 'menu') {
                document.querySelector(".main-nav").style.display = "flex"
                icon.name = 'close';
            }else{
                document.querySelector(".main-nav").style.display = "none"
                icon.name = 'menu';
            }
    
        });

            /* Button click */
    $('.js--btn-ghost').click(function(){
        $('html, body').animate({scrollTop: $('.section-features').offset().top - 50}, 1000);
    });
    $('.js--btn-full').click(function(){
        $('html, body').animate({scrollTop: $('.section-plans').offset().top - 50}, 1000);
    });

    /* ნავ ტეგის ნავიგაცია */
    $('.first').click(function(){
        $('html, body').animate({scrollTop: $('.section-features').offset().top - 50}, 1000);
    });
    $('.second').click(function(){
        $('html, body').animate({scrollTop: $('.section-steps').offset().top - 50}, 1000);
    });
    $('.third').click(function(){
        $('html, body').animate({scrollTop: $('.section-cities').offset().top - 50}, 1000);
    });
    $('.fourth').click(function(){
        $('html, body').animate({scrollTop: $('footer').offset().top - 50}, 1000);
    });

});