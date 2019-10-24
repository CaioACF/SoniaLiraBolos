wow = new WOW({
    animateClass: 'animated',
    offset: 100
});

wow.init();

$(function(){ 
    var nav = $('#menu');
    $(window).scroll(function () {      
        if ($(this).scrollTop() > 150) {       
            nav.addClass("menu-fixo");      
        } else {       
            nav.removeClass("menu-fixo");      
        }    
    });    
}); 

$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
      