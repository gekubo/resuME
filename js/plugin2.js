 var grid = new Muuri('.grid', {dragEnabled: true});

$(document).ready(function() { 
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
  // var elem = document.querySelector('.grid');
  // var msnry = new Masonry( elem, {
  //   // options
  //   itemSelector: '.grid-item',
  //   horizontalOrder: true,
  //   columnWidth: '.grid-sizer',
  //   percentPosition: true
  // });

  // var msnry = new Masonry( '.grid', {
  //   // options
  // });
});

$(window).on('resize', function(){
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
});



