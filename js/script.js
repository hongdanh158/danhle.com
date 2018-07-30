$(function() {
    //Mobile menu script
    var html = '<ul class="nav-mobile">' + $('.header .nav').html() + '</ul>';
    $('.mobile-wrap-menu .content').html(html);
    if ($('.nav-mobile').length) {
        headHmtl = '<div class="head"><span class="icon closeSub"><i class="fa fa-arrow-left"></i></span><span class="head-text"></span></div>';
        $(".nav-mobile li").each(function (index, obj) {
          if ($(this).has("ul").length) {
            $(this).find('ul').eq(0).wrap('<div class="sub-menu"></div>').before(headHmtl);
            var headText = $(this).find('a').eq(0).html();
            $(this).find('.head-text').html(headText);
            $(this).find('a').eq(0).addClass('hassub').attr('href', 'javascript:void(0)');
          };
        });
        $('.nav-mobile li a').click(function(event) {
            $(this).closest('li').find('div').eq(0).attr('visible', 'true');
        });
        $('.mobile-wrap-menu .closeSub, .sub-menu .head .head-text').click(function(event) {
            $(this).closest('.sub-menu').attr('visible', 'false');
        });
        $('.trigger-menu').click(function() {
            $('.three-bars-icon').addClass('close');
            $('.slidebar').addClass('show');
            addOverlay('body');
        });
        $('.closeSidebar').click(function(event) {
            closeSlidebar();
        });
        $('body').on('click', '.overlay', function(event) {
            event.preventDefault();
            closeSlidebar();
        });
    }
    function closeSlidebar() {
        if ($('.slidebar').hasClass('show')) {
            $('.slidebar').removeClass('show');
        }
        if ($('.three-bars-icon').hasClass('close')) {
            $('.three-bars-icon').removeClass('close');
        }
        $('.sub-menu').attr('visible', 'false');
        removeOverlay('body');
    }
    function addOverlay(parent) {
        if (!$(parent + ' .overlay').length) {
            $(parent).prepend('<div class="overlay"></div>');
        }
    }
    function removeOverlay(parent) {
        if ($(parent + ' .overlay').length) {
            $(parent + ' .overlay').remove();
        }
    }
    //End Mobile menu script
    $('.news-slider').slick({
        autoplay: true,
    	arrows: false,
    	dots: true,
        arrows: false,
    	dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
    });
    $('.news-focus-slider').slick({
    	arrows: false,
    	dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
    });
    initSlider();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})
$(window).resize(function() {
    initSlider();
})
function initSlider() {
    $('.header .bottom .left .news-slider .item .content').height($('.header .bottom .left .news-slider .item .content .thumbnail').height());
    if($(window).width() > 1024) {
        $('.header .bottom .left').width($(window).width() - $('.header .bottom .right').width());
    }
    else {
        $('.header .bottom .left').width($(window).width());
    }
}