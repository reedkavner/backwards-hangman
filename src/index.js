// List of playable words in order that they'll be played.
const PlayableWords = ['cow', 'ke$ha', 'curaçao', 'triscuit™', 'бык', '¯\\_(ツ)_/¯'];
//const PlayableWords = ['cow'];

// As you get closer to losing the delay between the letter disappearing and the
// "you're wrong" text appearing gets shorter
const extraDelays = [225, 100, 50, 0, 0, 0, 0];

const letterCanvas = document.getElementById('letter-canvas');
const letterCtx = letterCanvas.getContext('2d');
const fxCanvas = fx.canvas();

fxCanvas.id = 'fx-canvas';
document.getElementById('guess').appendChild(fxCanvas);

class BackwardsHangman {
  constructor() {
    this.state = {
      word: PlayableWords[0].split(''),
      level: 0,
      wrongCount: 0,
      correctCount: 0,
      wrongGuesses: [],
      correctGuesses: [],
      guessActive: false,
      gameOver: false,
    };
  }

  // Init
  startGame() {
    // set volume for all sounds
    $('audio').each(function () {
      $(this)[0].volume = .5;
    });

    $('#sfx-start')[0].play();
    // Generate a random word and display its letters.
    this.state.word = PlayableWords[0].split('');

    this.displayNewWord(this.state.word);
    this.startListener();
    $('#game').css('display', 'flex');

    window.win = () => {
      this.win();
    }
  }

  restartGame(win = false) {
    this.state = {
      word: win ? PlayableWords[this.state.level + 1].split('') : PlayableWords[0].split(''),
      level: win ? this.state.level + 1 : 0,
      wrongCount: 0,
      correctCount: 0,
      wrongGuesses: [],
      correctGuesses: [],
      guessActive: false,
      gameOver: false,
    };

    // Reshowing and rehiding various things.
    $('rect#Rleg').show();
    $('rect#Lleg').show();
    $('rect#Rarm').show();
    $('rect#Larm').show();
    $('rect#torso').show();
    $('path#head').show();
    $('#used').text('');
    $('#lose').hide();
    $('#face').hide();
    $('#used-letters').hide();
    $('#word-letters').show();
    $('#sun').hide();
    $('body').attr('class', '');
    $('#retry').css('display', 'none');
    this.displayNewWord(this.state.word);
    this.startListener();
  }

  displayNewWord(word) {
    $('#word-letters').html(
      word.map(letter => {
        const $div = $('<div>', { class: `letter` });
        $div.text(letter);
        return $div;
      }),
    );
  }

  startListener() {
    $(document).keypress(e => {
      if (this.state.guessActive) {
        return false; // Just reject it
      } else {
        this.state.guessActive = true;

        if (!this.state.gameOver) {
          console.log(e.code);
          if (e.charCode > 32) {
            this.guessLetter(e.key.toLowerCase());
          }
        }
      }
    });
  }

  guessLetter(letter) {
    $('#sfx-guess')[0].play();

    // Display the guess
    letterCanvas.width = innerWidth * 0.4;
    letterCanvas.height = innerWidth * 0.4;
    letterCtx.font = "40vw Helvetica,Arial,sans-serif";
    letterCtx.textBaseline = "middle";
    letterCtx.textAlign = "center";
    letterCtx.fillStyle = "#7389FF";
    letterCtx.strokeStyle = "#fff";
    letterCtx.lineWidth = innerWidth * 0.008;
    letterCtx.fillText(letter.toUpperCase(), letterCanvas.width / 2, letterCanvas.height / 2);
    letterCtx.strokeText(letter.toUpperCase(), letterCanvas.width / 2, letterCanvas.height / 2);

    // Draw the zoom blur
    const texture = fxCanvas.texture(letterCanvas);
    fxCanvas
      .draw(texture)
      .zoomBlur(letterCanvas.width / 2, letterCanvas.height / 2, 0.15)
      .update();

    texture.destroy();

    $('#fx-canvas').removeClass('fade');
    // Wait two frames
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      $('#fx-canvas').addClass('fade');
    }));

    window.setTimeout(
      () => {
        letterCtx.clearRect(0, 0, letterCanvas.width, letterCanvas.height);
      },
      300,
    );

    // Wait a beat then evaluate the guess, not allowing a guess in that meantime.
    window.setTimeout(() => {
      if (this.state.word.includes(letter) && !this.state.correctGuesses.includes(letter)) {
        this.correctGuess(letter);
      } else {
        this.incorrectGuess(letter);
      }
    }, 300 + extraDelays[this.state.wrongCount]);
  }

  correctGuess(letter) {
    this.state.guessActive = false;

    $('#sfx-correct')[0].play();

    this.state.correctGuesses.push(letter);
    ++this.state.correctCount;

    // Whatever index the letter is in the word is also the index of the parent dom collection
    const parentNodeList = $('#word-letters')
      .children()
      .toArray();

    parentNodeList.forEach(letterNode => {
      if (letterNode.innerText.toLowerCase() === letter) {
        letterNode.innerText = '';
      }
    });

    // If the correctCount is the same the sum of the unique characters in the word, win.
    const sumOfUniq = new Set(this.state.word).size;
    if (this.state.correctCount === sumOfUniq) this.win();
  }

  incorrectGuess(letter) {
    // TODO: Move sound effects into helper fn.
    $('#sfx-wrong')[0].play();

    $('body').addClass('wrong');

    this.state.wrongGuesses.push(letter);
    ++this.state.wrongCount;

    window.setTimeout(() => {
      $('body').removeClass('wrong');

      this.state.guessActive = false;

      $('#used').text(this.state.wrongGuesses.join(''));
      if ($('#used-letters').is(':hidden')) $('#used-letters').show();
    }, 300);


    switch (this.state.wrongCount) {
      case 0:
        console.error('incorrectGuess ran despite zero wrongCount?');
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
        $('rect#torso').hide();
        break;
      case 6:
        $('path#head').hide();
        window.setTimeout(() => this.lose(), 300);
        break;
    }
  }

  win() {
    console.log('Win!');
    this.state.gameOver = true;

    window.setTimeout(() => {
      if (this.state.level === PlayableWords.length - 1) {
        // User has won the whole game
        $('#word-letters').hide();
        $('#used-letters').hide();
        $('#face').show();
        $('#sun').show();
        $('body').addClass('win');
        $('#sfx-win')[0].play();
        window.setTimeout(() => {
          $('#retry').css('display', 'block');
          $(document).keypress(e => {
            $(document).unbind('keypress');
            this.restartGame(false);
          });
        }, 500);
      } else {
        // User has beaten level
        console.log("Level up!");
        $('#sfx-level')[0].play();
        $('body').addClass('level-up');
        window.setTimeout(() => {
          $('body').removeClass('level-up');
          this.restartGame(true);
        }, 830);
      }
    }, 200);
  }

  lose() {
    this.state.gameOver = true;

    $('#sfx-lose')[0].play();
    $('#lose').show();

    // Wait a bit and show a retry button
    window.setTimeout(() => {
      $('#retry').css('display', 'block');
      $(document).keypress(e => {
        $(document).unbind('keypress');
        this.restartGame(false);
      });
    }, 500);
  }
}

window.onload = () => {

  if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    $('#touchscreen').show();
  } else {
    $(document).keypress(e => {
      $(document).unbind('keypress');
      $('#welcome').hide();
      const Game = new BackwardsHangman();
      Game.startGame();
    });
  }
};
