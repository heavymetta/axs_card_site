(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

1.CUSTOM PRE DEFINE FUNCTION
2.APPMAX MENU SOOMTH SCROLL JS
 2.1. APPMAX MENU TOGGLE ON CLICK
3.APPMAX POPUP JS
4.APPMAX PRICING TABLE JS
5. FEATURE SLIDER INITI
6.APPMAX SWIPER SLIDER JS
7.APPMAX SWIPER USER REVIEW SLIDER JS
8.APPMAX SUBSCRIBE DYNAMIC JS
9.APPMAX CONTACT FORM DYNAMIC JS
10.APPMAX STICKU MENU
11.APPMAX PRELOADER JS
12. APPMAX COUNTER JS
13. APPMAX WOW ANIMATION JS


-------------------------------------------------------------------*/

/*--------------------------------------------------------------
1.CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){

/*--------------------------------------------------------------
2.APPMAX MENU SOOMTH SCROLL JS
--------------------------------------------------------------*/
var $header_menu_link = $('.appmax-header-menu ul li a');
if ($header_menu_link.is_exist()) {

  $header_menu_link.on('click', function(e){
    var href = $(this).attr("href");
    if (/#/.test(this.href)) {
      if ( $(href).length ) {
        var offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('body , html').stop().animate({
          scrollTop: offsetTop,
        }, 500);
        e.preventDefault();
        return false;
      }
    }
  });

}

/*--------------------------------------------------------------
 2.1. APPMAX MENU TOGGLE ON CLICK
--------------------------------------------------------------*/
$(document).on("click", ".menu-toggle", function(){
  $(".appmax-header-menu").slideToggle(500);
  return false;
});



/*--------------------------------------------------------------
 3.APPMAX POPUP JS
------------------------------------------------------------*/
var $youtube_popup = $('.popup-youtube');
if ($youtube_popup.is_exist()) {
  $youtube_popup.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });
}


/*--------------------------------------------------------------
 4.APPMAX PRICING TABLE JS
------------------------------------------------------------*/
$(document).on('click', '.pricing-table-btn', function(e){
	e.preventDefault();

	var $self = $(this),
		$package = $self.attr('data-pckage-name'),
    $yearly = $('.appmax-pricing-table-1'),
    $monthly = $('.appmax-pricing-table-2');

	$self.addClass('pricing_active').siblings().removeClass('pricing_active');

	$('.appmax-pricing-table-box[data-package="'+$package+'"]').addClass('package_active').removeClass('not_active').siblings().removeClass('package_active').addClass('not_active');

  if ( $yearly.hasClass('not_active') ) {

    $yearly.animate({
      left: "-=170",
    }, 500, function() {

      $yearly.animate({  left: '20px', 'z-index' : '0' }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateY(-50%) scale(0.9)'); 
            $(this).css('transform','translateY(-50%) scale(0.9)'); 
          },
          duration:'slow'
      });
    });

  } else {

    $yearly.animate({
      left: "-=170",
      'z-index' : '1'
    }, 500, function() {

      $yearly.animate({  left: '40px', 'z-index' : '1' }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateY(-50%) scale(1)'); 
            $(this).css('transform','translateY(-50%) scale(1)'); 
          },
          duration:'slow'
      });
    });
  }

  if ( $monthly.hasClass('package_active') ) {

    $monthly.animate({
      'z-index' : '1'
    }, 500, function() {
      $monthly.animate({  'z-index' : '1' }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','translateY(-50%) scale(1)'); 
            $(this).css('transform','translateY(-50%) scale(1)'); 
          },
          duration:'slow'
      });
    });

  } else {
    $monthly.animate({  'z-index' : '0' }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','translateY(-50%) scale(0.9)'); 
          $(this).css('transform','translateY(-50%) scale(0.9)'); 
        },
        duration:'slow'
    });
  }
	return false;
});



/*--------------------------------------------------------------
 5. FEATURE SLIDER INITI
--------------------------------------------------------------*/
var $featureSlider = $('.appmax-feature-animate-slider');
if ( $featureSlider.is_exist() ) {
  $featureSlider.owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      // autoplay: true,
      autoplayTimeout: 2500,
      dots:false,
      items: 1,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 'URLHash'
  });

  $('.appmax-feature-single-item').hover(function() {
      var $self = $(this),
          $index = $self.attr('data-index');

      $featureSlider.trigger('to.owl.carousel', $index);
  });
}
  

/*--------------------------------------------------------------
 6.APPMAX SWIPER SLIDER JS
------------------------------------------------------------*/
if($('.swiper-container').is_exist()) {

  var swiper = new Swiper('.swiper-container', {
  	effect: 'coverflow',
  	loop: true,
  	centeredSlides: true,
  	slidesPerView: 4,
  	initialSlide: 4,
  	keyboardControl: true,
  	mousewheelControl: false,
  	lazyLoading: true,
  	preventClicks: false,
  	preventClicksPropagation: false,
  	lazyLoadingInPrevNext: true,
  	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  	coverflow: {
    	rotate: 0,
    	stretch: 0,
    	depth: 250,
    	modifier: .5,
    	slideShadows : false,
  	},
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
       767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 5,
      }
    }
});


}

/*--------------------------------------------------------------
7.APPMAX SWIPER USER REVIEW SLIDER JS
------------------------------------------------------------*/
if($('.swiper-container-user-view').is_exist()) {

    var swiper = new Swiper('.swiper-container-user-view', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      nextButton: '.swiper-btn-next',
      prevButton: '.swiper-btn-prev',
    });

}



/*--------------------------------------------------------------
 8.APPMAX BANNER SCREENSHOT SLIDER JS
------------------------------------------------------------*/
if($('.banner-swiper-screenshot').is_exist()) {

  var swiper = new Swiper('.banner-swiper-screenshot', {
    effect: 'coverflow',
    loop: true,
    slidesPerView: 2.4,
    spaceBetween: 0,
    centeredSlides: true,
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 600,
      modifier: .5,
      slideShadows : true,
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
       767: {
        slidesPerView: 1,
      }
    }
  });


}

if($('#appmax-welcome-slider').is_exist()) {
var owl = $('#appmax-welcome-slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    // autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});

}


/*--------------------------------------------------------------
8.APPMAX SUBSCRIBE DYNAMIC JS
--------------------------------------------------------------*/
var $mc_form = $('#mc-form');
if($mc_form.is_exist()) {
   $mc_form.ajaxChimp({
      url: '//pixiefy.us13.list-manage.com/subscribe/post?u=1c19cb3fd3c3c6c56177c50ea&amp;id=967a07b6cc'
   });
}


/*--------------------------------------------------------------
9.APPMAX CONTACT FORM DYNAMIC JS
--------------------------------------------------------------*/
var $appmax_cf = $('#appmax-contactForm');
if($appmax_cf.is_exist()) {
   $appmax_cf.on( "submit", function( e ) {
      e.preventDefault();
      
      // Variable declaration
      var error       = false,
        name          = $('#appmax_name').val(),
        email         = $('#appmax_email').val(),
        mail_fail     = $('#mail_fail'),
        mail_success  = $('#mail_success'),
        submit_btn    = $('#appmax_submit_btn');
      
    // Form field validation
      if(name.length <= 1){
          var error = true;
          $('#appmax_name').parent().addClass('filed_error');
      }else{
          $('#appmax_name').parent().removeClass('filed_error');
      }
      if(email.length <= 6 || email.indexOf('@') == '-1'){
          var error = true;
          $('#appmax_email').parent().addClass('filed_error');
      }else{
          $('#appmax_email').parent().removeClass('filed_error');
      }
      if (error == true) {
        $(mail_success).fadeOut(500);
        $(mail_fail).slideDown(800);
      };

      // If there is no validation error, next to process the mail function
      if(error == false){

          $('i.appmax-submit-spinner').fadeIn(350);
          $(mail_success).hide();
          $(mail_fail).hide();
          $.ajax({
          url: $(this).attr('action'),
          data: $(this).serialize(),
          type: 'POST',
          success: function(response) {
            console.log(response);
            $(mail_fail).fadeOut(500);
            $(mail_success).slideDown(800);
            $('.appmax-input-item input, .appmax-input-item textarea').val('');
            $('.filed_error').removeClass('filed_error');
            $('.filed_ok').removeClass('filed_ok');
            $('i.appmax-submit-spinner').fadeOut('fast');
          },
          error: function() {
            $(mail_success).fadeOut(500);
            $(mail_fail).slideDown(800);
            $('i.appmax-submit-spinner').fadeOut('fast');
          }
          });
      }

      return false;
  }); 

}


/* init Jarallax */
var $appmax_jarallax = $('.jarallax');
if($appmax_jarallax.is_exist()) {

  jarallax(document.querySelectorAll('.jarallax'));
  jarallax(document.querySelectorAll('.jarallax-keep-img'), {
      keepImg: true,
  });
  
}

var $appmax_hovellax = $('.appmax_hover_animation');
if($appmax_hovellax.is_exist()) {
  $('.appmax_hover_animation').parallax();
}




// APPMAX SKEWED Apps Screen
  function showpanel() {
    $('.appscraft-screen-container').removeClass('startup');
    $('.ball').addClass('active').delay(2000).queue(function(next) {
      $(this).removeClass('active');
      next();
    });
  }
  
  $('.ball').click(function() {
    $(this).toggleClass('active');
  });


  $('i').click(function() {
    $('.ball').addClass('expand');
    $('.back').addClass('show');
  });

  $('.back').click(function() {
    $(this).removeClass('show');
    $('.ball').removeClass('expand');
    $('.appscraft-screen-container').addClass('shake').delay(500).queue(function(next) {
      $(this).removeClass('shake');
      next();
    });
  });
  
 setTimeout(showpanel, 1800);

});/*End document ready*/


/*--------------------------------------------------------------
  -- WINDOW LOAD EVENT --
------------------------------------------------------------*/

$(window).on("load" ,function(){
/*--------------------------------------------------------------
10.APPMAX STICKU MENU
------------------------------------------------------------*/
var $banner_promo = $('.appmax-banner-promo-section');
if($banner_promo.is_exist()) {
  var stickyHeaderTop = $banner_promo.offset().top;
    $(window).on('scroll', function(){
     if( $(window).scrollTop() > stickyHeaderTop ) {
       $('.appmax-header-area').addClass('appmax-sticky-menu');
    } else {
       $('.appmax-header-area').removeClass('appmax-sticky-menu');
    }
  });
}


/*--------------------------------------------------------------
 11.APPMAX PRELOADER JS
 ------------------------------------------------------------*/
$("#preloader").fadeOut(500);


// Loaded Class Add
$('body').addClass('appmax--loaded');

}); // End window LODE


/*--------------------------------------------------------------
12. APPMAX COUNTER JS
--------------------------------------------------------------*/
var $counter = $('#counter');
if($counter.is_exist()) {
    var a = 0;
    $(window).scroll(function() {

      var oTop = $counter.offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-result').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-percentage');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {
              duration: 4000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }

    });

}


/*--------------------------------------------------------------
13. APPMAX WOW ANIMATION JS
------------------------------------------------------------*/
var wow = new WOW({
  mobile: false,
  tablet:false
});
wow.init();

  

})(jQuery);

