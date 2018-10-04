// Toggle Class on color selection

$('.product-color .product-item-color').each(function() {
  $(this).on('click', function() {
    $(this).find('i').toggleClass('fa-check');
  });
});

// Quantity
var count = 0;
$('.plus').on('click', function() {
  if (count < 15) {
    count++;
    $('.quantity').text('quantity(' + count + ')');
  }
});

$('.minus').on('click', function() {
  if (count > 0) {
    count--;
    $('.quantity').text('quantity(' + count + ')');
  }
});

// Select size
$('.dropdown-menu').find('a').click(function() {
  $('.dropdown-toggle').html($(this).html());
});

// Active class carousel for mobile
$(window).resize(function() {
  var screenSize = document.body.clientWidth;
  if (screenSize < 576) {
    $('.mobile-carousel').removeClass('visible');
  } else if (screenSize >= 576) {
    $('.mobile-carousel').addClass('visible');
  };
});
