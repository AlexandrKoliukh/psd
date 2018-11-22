$(window).load(function () {
  $('.flexslider').flexslider({
    animation: "slide"
  });
 // $('#formMain').on('submit', send);
});

$(function () {
  var menu = $('nav ul');
  var count = 0;
  $('#nav').on('click', function () {
    menu.slideToggle();
    $("#fix").css("display", "grid");
    if (count % 2 == 0) {
      $('#nav').css('margin-top', '10px');
      $('.social-block').css('display', 'flex');
    } else {
      $('#nav').css('margin-top', '0');
      $('.social-block').css('display', 'grid');
    }
    count += 1;
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
$(window).scroll(function () {
  $('#section-1, #section-2').each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 400) {
      $(this).addClass("slideUp");
    }
  });
});
$('#section-4 form span').on('click', function () {
  $('#section-4 form span').removeClass('active');
  $(this).toggleClass('active');
  if ($('#all').hasClass('active')) $('div[target="web_design"], .section-4 div[target="web_development"]').css('opacity', '1');
  else if ($('#web_design').hasClass('active')) {
    $('div[target="web_design"]').css('opacity', '1');
    $('div[target="web_development"]').css('opacity', '0');
  } else if ($('#web_development').hasClass('active')) {
    $('div[target="web_design"]').css('opacity', '0');
    $('div[target="web_development"]').css('opacity', '1');
  }
});
// $(function(){
//       var p=window.location.hash;
//       alert(p);
//   });
function refresh_shoutbox() {
  var data = 'refresh=1';
  $.ajax({
    type: "POST",
    url: "./php/shout.php",
    data: data,
    success: function (html) {
      $("#shout").html(html);
    }
  });
}
refresh_shoutbox();


// $(document).ready(function(){
//   var container_left=1;
//   var container_right=2;
//   $('#rts').on('click',function(){
//     if(container_right==1) $('.container-'+1).removeClass('nondisplay2');
//     else   $('.container-'+1).addClass('nondisplay2');
//   $('.container-'+10).addClass('nondisplay');
//   $('.container-'+container_left).addClass('nondisplay');
//   $('.container-'+container_right).removeClass('nondisplay');
//   console.log(container_left);
//   console.log(container_right);
//   container_right++;
//   container_left++;
//   if (container_right==11) {
//     $('.container-'+container_left).addClass('nondisplay');
//     container_right=1;
//     container_left=0;
//     $('.container-'+10).removeClass('nondisplay');
//   }
//   });
//   $('#lts').on('click',function(){
//       if(container_left==1) {
//         $('.container-'+1).addClass('nondisplay2');
//         container_left=10;
//         container_right=1;
//       }
//       if(container_right==0) container_right=10;
//       $('.container-'+container_left).removeClass('nondisplay');
//       $('.container-'+container_right).addClass('nondisplay');
//       console.log(container_left);
//       console.log(container_right);
//       container_right--;
//       container_left--;
//   });
// });
$(document).ready(function(){
  var cont=0;
  var i;
    $('#rts').on('click',function(){
      if(cont==0) cont=1;
      for(i=1;i<=10;i++){
        $('.container-'+i).addClass('nondisplay');
        $('.container-'+i).addClass('nondisplay2');
      }
      cont++;
      if(cont>10) cont=1;
      $('.container-'+cont).removeClass('nondisplay');
      $('.container-'+cont).removeClass('nondisplay2');
    });
    $('#lts').on('click',function(){
        for(i=1;i<=10;i++){
          $('.container-'+i).addClass('nondisplay');
          $('.container-'+i).addClass('nondisplay2');
        }
        cont--;
        if(cont<1) cont=10;
        $('.container-'+cont).removeClass('nondisplay');
        $('.container-'+cont).removeClass('nondisplay2');
    });
  });
  // function send(e){
  //   console.log(e);
  //   return false;
  // }