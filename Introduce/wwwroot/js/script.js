$(document).ready(function() {
      $('.p').addClass('slideInDown animated slow');
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();

       if(pos_body>0){
         $('#about').addClass('fadeInUp animated slow');
      }
      else{
         $('#about').removeClass('fadeInUp animated');
      }

      if(pos_body>350){
         $('.timeline').addClass('fadeInUp animated slow');
      }
      else{
         $('.timeline').removeClass('fadeInUp animated');
      }

       if(pos_body>1000){
         $('.basic-skill').addClass('fadeInUp animated slow');
         $(".basic-skill").css("display", "block");
      }
      else{
         $('.basic-skill').removeClass('fadeInUp animated');
         $(".basic-skill").css("display", "none");
      }
      if(pos_body>1000){
         $('.pro-skill').addClass('fadeInUp animated slow');
         $(".pro-skill").css("display", "block");
      }
      else{
         $('.pro-skill').removeClass('fadeInUp animated');
         $(".pro-skill").css("display", "none");
      }
      if(pos_body>1300){
         $('.interests').addClass('fadeInUp animated slow');
      }
      else{
         $('.interests').removeClass('fadeInUp animated');
      }
      if(pos_body>1800){
         $('.footer').addClass('fadeInUp animated slow');
      }
      else{
         $('.footer').removeClass('fadeInUp animated');
      }
   });
});
 