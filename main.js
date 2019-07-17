/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// List of playable words in order that they'll be played. These need to be lowercase.\r\nconst PlayableWords = ['cow', 'absolutely', 'ke$ha'];\r\n\r\nclass BackwardsHangman {\r\n  constructor() {\r\n    this.state = {\r\n      word: PlayableWords[0].split(''),\r\n      level: 0,\r\n      validKeys: 'abcdefghijklmnopqrstuvwxyz',\r\n      wrongCount: 0,\r\n      correctCount: 0,\r\n      wrongGuesses: [],\r\n      correctGuesses: [],\r\n      guessActive: false,\r\n      gameOver: false,\r\n    };\r\n  }\r\n\r\n  // Init\r\n  startGame() {\r\n    $('#sfx-start')[0].volume = 0.3;\r\n    $('#sfx-start')[0].play();\r\n    // Generate a random word and display its letters.\r\n    this.state.word = PlayableWords[0].split('');\r\n\r\n    this.displayNewWord(this.state.word);\r\n    this.startListener();\r\n    $('#game').css('display', 'flex');\r\n  }\r\n\r\n  restartGame(win = false) {\r\n    this.state = {\r\n      word: win ? PlayableWords[this.state.level + 1].split('') : PlayableWords[0].split(''),\r\n      level: win ? this.state.level + 1 : 0,\r\n      validKeys: 'abcdefghijklmnopqrstuvwxyz$',\r\n      wrongCount: 0,\r\n      correctCount: 0,\r\n      wrongGuesses: [],\r\n      correctGuesses: [],\r\n      guessActive: false,\r\n      gameOver: false,\r\n    };\r\n\r\n    // Reshowing and rehiding various things.\r\n    $('rect#Rleg').show();\r\n    $('rect#Lleg').show();\r\n    $('rect#Rarm').show();\r\n    $('rect#Larm').show();\r\n    $('rect#torso').show();\r\n    $('path#head').show();\r\n    $('#used').text('');\r\n    $('#lose').hide();\r\n    $('#face').hide();\r\n    $('#used-letters').hide();\r\n    $('#sun').hide();\r\n    $('body').attr('class', '');\r\n    $('#retry').css('display', 'none');\r\n    this.displayNewWord(this.state.word);\r\n    this.startListener();\r\n  }\r\n\r\n  displayNewWord(word) {\r\n    $('#word-letters').html(\r\n      word.map(letter => {\r\n        const $div = $('<div>', { class: `letter` });\r\n        $div.text(letter);\r\n        return $div;\r\n      }),\r\n    );\r\n  }\r\n\r\n  startListener() {\r\n    $(document).keypress(e => {\r\n      if (this.state.guessActive) {\r\n        return false; // Just reject it\r\n      } else {\r\n        this.state.guessActive = true;\r\n        window.setTimeout(() => (this.state.guessActive = false), 350);\r\n\r\n        if (!this.state.gameOver) {\r\n          const pressedKey = e.key.toLowerCase();\r\n          if (this.state.validKeys.includes(pressedKey)) {\r\n            this.guessLetter(pressedKey);\r\n          }\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  guessLetter(letter) {\r\n    $('#sfx-guess')[0].volume = 0.3;\r\n    $('#sfx-guess')[0].play();\r\n\r\n    // Display the guess\r\n    $('#guess').text(letter);\r\n    $('#guess').addClass('glow');\r\n    window.setTimeout(\r\n      () =>\r\n        $('#guess')\r\n          .text('')\r\n          .removeClass('glow'),\r\n      300,\r\n    );\r\n\r\n    // Wait a beat then evaluate the guess, not allowing a guess in that meantime.\r\n    if (this.state.word.includes(letter)) {\r\n      window.setTimeout(() => this.correctGuess(letter), 300);\r\n    } else window.setTimeout(() => this.incorrectGuess(letter), 300);\r\n  }\r\n\r\n  correctGuess(letter) {\r\n    $('#sfx-correct')[0].volume = 0.3;\r\n    $('#sfx-correct')[0].play();\r\n\r\n    if (!this.state.correctGuesses.includes(letter)) {\r\n      this.state.correctGuesses.push(letter);\r\n      ++this.state.correctCount;\r\n\r\n      // Whatever index the letter is in the word is also the index of the parent dom collection\r\n      const parentNodeList = $('#word-letters')\r\n        .children()\r\n        .toArray();\r\n\r\n      parentNodeList.forEach(letterNode => {\r\n        if (letterNode.innerText.toLowerCase() === letter) {\r\n          letterNode.innerText = '';\r\n        }\r\n      });\r\n\r\n      // If the correctCount is the same the sum of the unique characters in the word, win.\r\n      const sumOfUniq = new Set(this.state.word).size;\r\n      if (this.state.correctCount === sumOfUniq) this.win();\r\n    }\r\n  }\r\n\r\n  incorrectGuess(letter) {\r\n    // TODO: Move sound effects into helper fn.\r\n    $('#sfx-wrong')[0].volume = 0.3;\r\n    $('#sfx-wrong')[0].play();\r\n\r\n    $('body').addClass('wrong');\r\n    window.setTimeout(() => $('body').removeClass('wrong'), 300);\r\n\r\n    this.state.wrongGuesses.push(letter);\r\n    $('#used').text(this.state.wrongGuesses.join(''));\r\n    if ($('#used-letters').is(':hidden')) $('#used-letters').show();\r\n    ++this.state.wrongCount;\r\n\r\n    switch (this.state.wrongCount) {\r\n      case 0:\r\n        console.error('incorrectGuess ran despite zero wrongCount?');\r\n        break;\r\n      case 1:\r\n        $('rect#Rleg').hide();\r\n        break;\r\n      case 2:\r\n        $('rect#Lleg').hide();\r\n        break;\r\n      case 3:\r\n        $('rect#Rarm').hide();\r\n        break;\r\n      case 4:\r\n        $('rect#Larm').hide();\r\n        break;\r\n      case 5:\r\n        $('rect#torso').hide();\r\n        break;\r\n      case 6:\r\n        $('path#head').hide();\r\n        window.setTimeout(() => this.lose(), 300);\r\n        break;\r\n    }\r\n  }\r\n\r\n  win() {\r\n    console.log('Win!');\r\n    this.state.gameOver = true;\r\n\r\n    $('#sfx-win')[0].volume = 0.2;\r\n    $('#sfx-win')[0].play();\r\n    $('#face').show();\r\n    $('#sun').show();\r\n    $('body').addClass('win');\r\n    window.setTimeout(() => {\r\n      if (this.state.level === PlayableWords.length - 1) {\r\n        window.alert('You win!');\r\n        // TODO: What to show here?\r\n      } else {\r\n        $('#retry').css('display', 'block');\r\n        $(document).keypress(e => {\r\n          $(document).unbind('keypress');\r\n          this.restartGame(true);\r\n        });\r\n      }\r\n    }, 1000);\r\n  }\r\n\r\n  lose() {\r\n    this.state.gameOver = true;\r\n\r\n    $('#sfx-lose')[0].volume = 0.3;\r\n    $('#sfx-lose')[0].play();\r\n    $('#lose').show();\r\n\r\n    // Wait a bit and show a retry button\r\n    window.setTimeout(() => {\r\n      $('#retry').css('display', 'block');\r\n      $(document).keypress(e => {\r\n        $(document).unbind('keypress');\r\n        this.restartGame(false);\r\n      });\r\n    }, 500);\r\n  }\r\n}\r\n\r\nwindow.onload = () => {\r\n  $(document).keypress(e => {\r\n    $(document).unbind('keypress');\r\n    $('#welcome').hide();\r\n    const Game = new BackwardsHangman();\r\n    Game.startGame();\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });