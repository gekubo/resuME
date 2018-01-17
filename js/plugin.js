$(document).ready(function() {
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
  window.shuffleInstance = new window.Shuffle(document.getElementById('grid'), {
  itemSelector: '.grid_brick',
  sizer: '.my-sizer-element',
  });
});

$(window).on('resize', function(){
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
});
