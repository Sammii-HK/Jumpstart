$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });


/*
	var scrollTop = 0;
  $(window).scroll(function(){
	var scrollValue = $(this).scrollTop();
	if (scrollValue - scrollTop > 50){
		var navDisappear = $('.navbar').css('height');
		$('.navbar').animate({top: '-' + navDisappear}, 150);
		scrollTop = scrollValue;
	}   else if (scrollTop - scrollValue > 50) {
		$('.navbar').animate({top: '0px'}, 150);
		scrollTop = scrollValue;
	}
  });
});  */
	


  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });
}); 