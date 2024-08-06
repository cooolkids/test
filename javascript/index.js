var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      snapOnRelease: false,
    },
    on: {
      reachEnd: function () {
        const maxTranslate = swiper.maxTranslate();
        if (swiper.translate > maxTranslate) {
          swiper.setTranslate(maxTranslate); 
        }
      },
    },
  });

  $('.nav-wrap ul li').click(function(e){
    e.preventDefault()
    let idx=$(this).index()
    $('.nav-wrap ul li').removeClass('on')
    $(this).addClass('on')
  })


  $('.yum').mouseenter(function(e){
    e.preventDefault()
    $('.thum-wrap').addClass('on')
    $('.summary').hide()
    $('.recommand').show()
  })

  $('.yum').mouseleave(function(e){
    e.preventDefault()
    $('.thum-wrap').removeClass('on')
     $('.recommand').hide()
     $('.summary').show()
  })

  $('ul.channel-menu li').click(function(e){
    e.preventDefault()
    let idx=$(this).index()
    $('.channel-menu li').removeClass('on')
    $(this).addClass('on')
  })


