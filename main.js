$(document).ready(function() {
  // play welcome on page load
  function welcome() {
    start('cow');
    // TODO play 'backwards hangman' welcome w sound
  }

  // start game
  function start(word) {
    // init game
    const validKeys = 'abcdefghijklmnopqrstuvwxyz';
    var wrongCount = 0;
    var correctCount = 0;
    var wrongGuesses = '';
    var correctGuesses = '';
    var gameOver = false;

    //list out letters
    for (var i = 0; i <= word.length - 1; i++) {
      var $div = $('<div>', { class: 'letter letter-' + word[i] });
      $div.text(word[i]);
      $('#word-letters').append($div);
    }

    //listen for guesses
    $(document).keypress(function(e) {
      if (gameOver == false) {
        var guessKey = e.key.toLowerCase();
        if (validKeys.indexOf(guessKey) != -1) {
          guess(guessKey);
        }
      }
    });

    // handle use pressing a letter
    function guess(letter) {
      $('#sfx-guess')[0].play();

      //display the guess
      $('#guess').text(letter);
      setTimeout(function() {
        $('#guess').text('');
      }, 300);

      //wait a beat and evaluate the guess
      setTimeout(function() {
        if (word.indexOf(letter) == -1) {
          wrong(letter);
        } else {
          correct(letter);
        }
      }, 500);
    }

    // guess was wrong
    function wrong(letter) {
      $('#sfx-wrong')[0].play();

      //flash wrong bg color
      $('body').addClass('wrong');
      setTimeout(function() {
        $('body').removeClass('wrong');
      }, 300);

      wrongGuesses = wrongGuesses + letter;
      $('#used').text(wrongGuesses);
      $('#used-letters').show();
      wrongCount++;

      switch (wrongCount) {
        case 0:
          console.log('this should never happen');
          break;
        case 1:
          $('rect#Rleg').hide();
          break;
        case 2:
          $('rect#Lleg').hide();
          break;
        case 3:
          $('rect#Rarm').hide();
          break;
        case 4:
          $('rect#Larm').hide();
          break;
        case 5:
          $('rect#body').hide();
          break;
        case 6:
          $('path#head').hide();
          setTimeout(function() {
            lose();
          }, 300);
          break;
      }
    }

    // flash correct
    function correct(letter) {
      $('#sfx-correct')[0].play();
      if (correctGuesses.indexOf(letter) == -1) {
        correctGuesses = correctGuesses + letter;
        $('.letter-' + letter).text('');
        correctCount++;
        if (correctCount == word.length) {
          win();
        }
      }
    }

    // lose game
    function lose() {
      $('#sfx-lose')[0].play();
      gameOver = true;
      $('#end')
        .addClass('lose')
        .text('lose');
      $('#end').show();
    }

    // win game
    function win() {
      gameOver = true;
      // TODO what happens?????
      $('#sfx-start')[0].play();
      $('body').addClass('win');
    }
  }

  welcome();
});
