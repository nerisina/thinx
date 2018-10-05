// Toggle Class on color selection
function selectColor() {
  $('.product-color .product-item-color').each(function() {
    $(this).on('click', function() {
      $(this).find('i').toggleClass('fa-check');
    });
  });
}

// Quantity
function quantity() {
  var count = 0;
  $('.plus').on('click', function(e) {
    e.preventDefault();
    if (count < 15) {
      count++;
      $('.quantity').text('quantity(' + count + ')');
    }
  });

  $('.minus').on('click', function(e) {
    e.preventDefault();

    if (count > 0) {
      count--;
      $('.quantity').text('quantity(' + count + ')');
    }
  });

}

// Select size
function dropdownMenu() {
  $('.dropdown-menu').find('a').click(function() {
    $('.dropdown-toggle').html($(this).html());
  });
}

// Active class carousel for mobile
function mobileCarousel() {
  var screenSize = document.body.clientWidth;
  var pimgc = $('.product-images-container');
  var i = 0;
  if (screenSize < 990) {
    $('.carousel').carousel('pause');
    $('.product-images-container').addClass('carousel slide');
    $('.product-images-container').attr('data-ride', 'carousel');
    $('.product-images-container').append('<ol class="carousel-indicators"></ol>');
    $('.product-images div').each(function() {
      $('.product-images-container ol').append('<li data-slide-to="' + i + '"></li>');
      i++;
    });
    $('.product-images').addClass('carousel-inner');
    $('.product-images div').addClass('carousel-item');
    $('.product-images div').first().addClass('active');
  }
}

// initialize all function

function init(){
  selectColor();
  quantity();
  dropdownMenu();
  mobileCarousel();
}

init();
