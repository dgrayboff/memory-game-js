// var el = $('.card');

  $('.card').on('click', function(){
    $(this).addClass('flip');
    var flipped = $('.flip');
    if(flipped.length === 2) { // recognizes the second click and flip
      var firstCard = flipped.first();
      var secondCard = flipped.last();
      // var aa = $('i').firstCard;
      // var bb = $('i').secondCard;
      // var array = $('.')
      // if (firstCard.hasClass('.i') == secondCard.hasClass('.i')) {
      // var array = $('i').attr('class').split('')[1];
      // remember you switched first class name in first two cards in HTML
      // if ($('i').attr('id') === $('i').attr('id')) {
      if (firstCard.val('.i') == secondCard.val('.i')) {
        console.log("it matches!");
      }
        else {
          console.log("doesn't match")
        }

    }

    // $('.card').toggleClass('back');
    // $('.card-icon').css('animation', 'hideicon');
    // $('.card-icon').toggleClass();
    // if()
    // if($('.i').first().is()
    //   $('.card').removeClass('face');
    console.log("hello");
  })

  // if($('.card').toggleClass('flip') === true) {
  //    $('.card-icon').toggleClass('front');
  // }
