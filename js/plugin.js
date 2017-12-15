$( document ).ready(function() {
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
});
$(window).on('resize', function(){
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
});

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});