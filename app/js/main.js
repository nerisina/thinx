
// Toggle Class on color selection

$( ".product-color .product-item-color" ).each(function() {
  $( this ).on('click', function(){
    $(this).find('i').toggleClass( "fa-check" );
  });
});
