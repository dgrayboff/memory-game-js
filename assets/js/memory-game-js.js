var el = $('.card');

$('.card').each(function(i, el) {
  $('.card').on('click', function(){
    $('.card').addClass('flip')
    console.log("hello");
  })
})
