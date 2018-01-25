$(document).ready(function() {
  /* Circular progress bar */

  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
/*  window.shuffleInstance = new window.Shuffle(document.getElementById('grid'), {
  itemSelector: '.grid_brick',
  sizer: '.my-sizer-element',
  });*/

  $(window).on("resize", function(){
    $(".setsize").each(function() {
        $(this).height($(this).width());
    });
  });

/* Grid fixies */
  function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
  rowSpan = Math.ceil((item.querySelector(".content").getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
  };

  function resizeAllGridItems(){
    allItems = document.getElementsByClassName("item");
    for(x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
    }
  };

  function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
  };

  window.onload = resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);

  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
  };

}); // End of document.ready
