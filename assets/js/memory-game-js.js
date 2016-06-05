// var el = $('.card');




  $('.card').on('click', function(){
    $(this).addClass('flip');
    var flipped = $('.flip');
    if(flipped.length === 2) { // recognizes 2 cards are flipped
      var firstCard = flipped.first();
      var secondCard = flipped.last();

      if (firstCard.text() == secondCard.text()) {
        var bothCards = firstCard + secondCard;
        firstCard.addClass('flip');
        secondCard.addClass('flip');
        // setTimeout(function(){ $('.card').removeClass('face') }, 500);
        console.log("it matches!");
      } //
        else {
        // setTimeout(function(){ $('.card').toggleClass('flip') }, 1000);
        setTimeout(function(){ $('.flip').removeClass('flip'); }, 1200);}
        console.log("doesn't match");



    console.log("click works"); // test click for onclick function

  } // if equals 2
}) // click function

  // if($('.card').toggleClass('flip') === true) {
  //    $('.card-icon').toggleClass('front');
  // }
  // var aa = $('i').firstCard;
  // var bb = $('i').secondCard;
  // var array = $('.')
  // if (firstCard.hasClass('.i') == secondCard.hasClass('.i')) {
  // var array = $('i').attr('class').split('')[1];
  // remember you switched first class name in first two cards in HTML
  // if ($('i').attr('id') === $('i').attr('id')) {

      // $('.card').toggleClass('back');
      // $('.card-icon').css('animation', 'hideicon');
      // $('.card-icon').toggleClass();
      // if()
      // if($('.i').first().is()
      //   $('.card').removeClass('face');
