function openSidebar (){

  var devWidth = $(window).width();

  if (devWidth > 1400) {
    $('.wrapper').removeClass('menu-open');
    $('.sidebar-toggle').click(function (){
      $('.wrapper').toggleClass('menu-close');
    })
  }
  if (devWidth < 1400){
    $('body').css({
      'overflow-x': 'hidden',
    });
    $('.wrapper').removeClass('menu-close');
    $('.sidebar-toggle').click(function (){
      $('.wrapper').toggleClass('menu-open');
    })
  }

}

$(window).on('load resize', openSidebar);
