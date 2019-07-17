import validWords from '../dist/assets/validWords.json';

class BackwardsHangman {
  constructor() {
    this.state = {
      word: '',
      validKeys: 'abcdefghijklmnopqrstuvwxyz',
      wrongCount: 0,
      correctCount: 0,
      wrongGuesses: [],
      correctGuesses: [],
      gameOver: false,
    };
  }

  // Init
  startGame() {
    $('#sfx-start')[0].play();
    // Generate a random word and display its letters.
    this.state.word = validWords[Math.round(Math.random() * validWords.length)];

    this.displayNewWord(this.state.word);
    this.startListener();
    $('#game').css('display', 'flex');
  }

  restartGame() {
    this.state = {
      word: validWords[Math.round(Math.random() * validWords.length)],
      validKeys: 'abcdefghijklmnopqrstuvwxyz',
      wrongCount: 0,
      correctCount: 0,
      wrongGuesses: [],
      correctGuesses: [],
      gameOver: false,
    };

    $('#end').hide();
    $('#retry').css('display', 'none');
    this.displayNewWord(this.state.word);
  }

  displayNewWord(word) {
    $('#word-letters').html(
      this.state.word.split('').map(letter => {
        const $div = $('<div>', { class: `letter letter-${letter}` });
        $div.text(letter);
        return $div;
      }),
    );

    // for (let i = 0; i < this.state.word.length; ++i) {
    //   const $div = $('<div>', { class: `letter letter-${this.state.word[i]}` });
    //   $div.text(word[i]);
    //   $('#word-letters').append($div);
    // }
  }

  startListener() {
    $(document).keypress(e => {
      if (!this.state.gameOver) {
        const pressedKey = e.key.toLowerCase();
        if (this.state.validKeys.includes(pressedKey)) {
          this.guessLetter(pressedKey);
        }
      }
    });
  }

  guessLetter(letter) {
    $('#sfx-guess')[0].play();

    // Display the guess
    $('#guess').text(letter);
    $('#guess').addClass('glow');
    window.setTimeout(() => $('#guess').text('').removeClass('glow'), 300);

    // Wait a beat then evaluate the guess
    window.setTimeout(
      () => (this.state.word.includes(letter) ? this.correctGuess(letter) : this.incorrectGuess(letter)),
      500,
    );
  }

  correctGuess(letter) {
    $('#sfx-correct')[0].play();
    if (!this.state.correctGuesses.includes(letter)) {
      this.state.correctGuesses.push(letter);
      $(`.letter-${letter}`).text('');
      ++this.state.correctCount;

      if (this.state.correctCount === this.state.word.length) this.win();
    }
  }

  incorrectGuess(letter) {
    // TODO: Move sound effects into helper fn.
    $('#sfx-wrong')[0].play();

    $('body').addClass('wrong');
    window.setTimeout(() => $('body').removeClass('wrong'), 300);

    this.state.wrongGuesses.push(letter);
    $('#used').text(this.state.wrongGuesses.join(''));
    if ($('#used-letters').is(':hidden')) $('#used-letters').show();
    ++this.state.wrongCount;

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
        $('rect#body').hide();
        break;
      case 6:
        $('path#head').hide();
        window.setTimeout(() => this.lose(), 300);
        break;
    }
  }

  win() {
    this.state.gameOver = true;

    // TODO: Figure out what happens from here
    $('#sfx-start')[0].play();
    $('body').addClass('win');
  }

  lose() {
    this.state.gameOver = true;

    $('#sfx-lose')[0].play();
    $('#end').addClass('lose');
    $('#end').show();

    // Wait a bit and show a retry button
    window.setTimeout(() => {
      $('#retry').css('display', 'block');
      $('#retry').on('click', () => this.restartGame());
    }, 500);
  }
}

window.onload = () => {
  $(document).keypress(e => {
    $(document).unbind("keypress");
    $('#welcome').hide();
    const Game = new BackwardsHangman();
    Game.startGame(); 
  });
};
