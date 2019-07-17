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

/***/ "./dist/assets/validWords.json":
/*!*************************************!*\
  !*** ./dist/assets/validWords.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"other\\\",\\\"which\\\",\\\"their\\\",\\\"three\\\",\\\"small\\\",\\\"large\\\",\\\"spell\\\",\\\"follow\\\",\\\"change\\\",\\\"light\\\",\\\"house\\\",\\\"picture\\\",\\\"again\\\",\\\"animal\\\",\\\"point\\\",\\\"mother\\\",\\\"world\\\",\\\"build\\\",\\\"earth\\\",\\\"father\\\",\\\"place\\\",\\\"where\\\",\\\"after\\\",\\\"little\\\",\\\"round\\\",\\\"every\\\",\\\"under\\\",\\\"through\\\",\\\"sentence\\\",\\\"great\\\",\\\"think\\\",\\\"differ\\\",\\\"cause\\\",\\\"before\\\",\\\"right\\\",\\\"there\\\",\\\"about\\\",\\\"write\\\",\\\"would\\\",\\\"these\\\",\\\"thing\\\",\\\"could\\\",\\\"number\\\",\\\"sound\\\",\\\"people\\\",\\\"water\\\",\\\"first\\\",\\\"stand\\\",\\\"should\\\",\\\"country\\\",\\\"found\\\",\\\"answer\\\",\\\"school\\\",\\\"study\\\",\\\"still\\\",\\\"learn\\\",\\\"plant\\\",\\\"cover\\\",\\\"between\\\",\\\"state\\\",\\\"never\\\",\\\"thought\\\",\\\"cross\\\",\\\"start\\\",\\\"might\\\",\\\"story\\\",\\\"don’t\\\",\\\"while\\\",\\\"press\\\",\\\"close\\\",\\\"night\\\",\\\"north\\\",\\\"carry\\\",\\\"science\\\",\\\"friend\\\",\\\"began\\\",\\\"mountain\\\",\\\"horse\\\",\\\"watch\\\",\\\"color\\\",\\\"together\\\",\\\"white\\\",\\\"children\\\",\\\"begin\\\",\\\"example\\\",\\\"paper\\\",\\\"group\\\",\\\"always\\\",\\\"music\\\",\\\"those\\\",\\\"often\\\",\\\"letter\\\",\\\"until\\\",\\\"river\\\",\\\"second\\\",\\\"enough\\\",\\\"plain\\\",\\\"usual\\\",\\\"young\\\",\\\"ready\\\",\\\"above\\\",\\\"though\\\",\\\"family\\\",\\\"direct\\\",\\\"leave\\\",\\\"measure\\\",\\\"product\\\",\\\"black\\\",\\\"short\\\",\\\"numeral\\\",\\\"class\\\",\\\"question\\\",\\\"happen\\\",\\\"complete\\\",\\\"order\\\",\\\"south\\\",\\\"problem\\\",\\\"piece\\\",\\\"since\\\",\\\"whole\\\",\\\"street\\\",\\\"multiply\\\",\\\"nothing\\\",\\\"course\\\",\\\"wheel\\\",\\\"force\\\",\\\"object\\\",\\\"decide\\\",\\\"surface\\\",\\\"island\\\",\\\"system\\\",\\\"record\\\",\\\"common\\\",\\\"possible\\\",\\\"plane\\\",\\\"stead\\\",\\\"wonder\\\",\\\"laugh\\\",\\\"thousand\\\",\\\"check\\\",\\\"shape\\\",\\\"equate\\\",\\\"brought\\\",\\\"bring\\\",\\\"distant\\\",\\\"paint\\\",\\\"language\\\",\\\"among\\\",\\\"power\\\",\\\"certain\\\",\\\"machine\\\",\\\"figure\\\",\\\"field\\\",\\\"correct\\\",\\\"pound\\\",\\\"beauty\\\",\\\"drive\\\",\\\"stood\\\",\\\"contain\\\",\\\"front\\\",\\\"teach\\\",\\\"final\\\",\\\"green\\\",\\\"quick\\\",\\\"develop\\\",\\\"ocean\\\",\\\"minute\\\",\\\"strong\\\",\\\"special\\\",\\\"behind\\\",\\\"clear\\\",\\\"produce\\\",\\\"space\\\",\\\"heard\\\",\\\"better\\\",\\\"during\\\",\\\"hundred\\\",\\\"remember\\\",\\\"early\\\",\\\"ground\\\",\\\"interest\\\",\\\"reach\\\",\\\"listen\\\",\\\"table\\\",\\\"travel\\\",\\\"morning\\\",\\\"simple\\\",\\\"several\\\",\\\"vowel\\\",\\\"toward\\\",\\\"against\\\",\\\"pattern\\\",\\\"center\\\",\\\"person\\\",\\\"money\\\",\\\"serve\\\",\\\"appear\\\",\\\"govern\\\",\\\"notice\\\",\\\"voice\\\",\\\"energy\\\",\\\"probable\\\",\\\"brother\\\",\\\"believe\\\",\\\"perhaps\\\",\\\"sudden\\\",\\\"count\\\",\\\"square\\\",\\\"reason\\\",\\\"length\\\",\\\"represent\\\",\\\"subject\\\",\\\"region\\\",\\\"settle\\\",\\\"speak\\\",\\\"weight\\\",\\\"general\\\",\\\"matter\\\",\\\"circle\\\",\\\"include\\\",\\\"divide\\\",\\\"syllable\\\",\\\"grand\\\",\\\"heart\\\",\\\"present\\\",\\\"heavy\\\",\\\"dance\\\",\\\"engine\\\",\\\"position\\\",\\\"material\\\",\\\"fraction\\\",\\\"forest\\\",\\\"window\\\",\\\"store\\\",\\\"summer\\\",\\\"train\\\",\\\"sleep\\\",\\\"prove\\\",\\\"exercise\\\",\\\"catch\\\",\\\"mount\\\",\\\"board\\\",\\\"winter\\\",\\\"written\\\",\\\"instrument\\\",\\\"glass\\\",\\\"grass\\\",\\\"visit\\\",\\\"bright\\\",\\\"weather\\\",\\\"month\\\",\\\"million\\\",\\\"finish\\\",\\\"happy\\\",\\\"flower\\\",\\\"clothe\\\",\\\"strange\\\",\\\"trade\\\",\\\"melody\\\",\\\"office\\\",\\\"receive\\\",\\\"mouth\\\",\\\"exact\\\",\\\"symbol\\\",\\\"least\\\",\\\"trouble\\\",\\\"shout\\\",\\\"except\\\",\\\"wrote\\\",\\\"suggest\\\",\\\"clean\\\",\\\"break\\\",\\\"blood\\\",\\\"touch\\\",\\\"brown\\\",\\\"garden\\\",\\\"equal\\\",\\\"choose\\\",\\\"collect\\\",\\\"control\\\",\\\"decimal\\\",\\\"quite\\\",\\\"broke\\\",\\\"middle\\\",\\\"moment\\\",\\\"scale\\\",\\\"spring\\\",\\\"observe\\\",\\\"child\\\",\\\"straight\\\",\\\"consonant\\\",\\\"nation\\\",\\\"dictionary\\\",\\\"speed\\\",\\\"method\\\",\\\"organ\\\",\\\"section\\\",\\\"dress\\\",\\\"cloud\\\",\\\"surprise\\\",\\\"quiet\\\",\\\"stone\\\",\\\"climb\\\",\\\"design\\\",\\\"experiment\\\",\\\"bottom\\\",\\\"single\\\",\\\"stick\\\",\\\"twenty\\\",\\\"smile\\\",\\\"crease\\\",\\\"eight\\\",\\\"village\\\",\\\"raise\\\",\\\"solve\\\",\\\"metal\\\",\\\"whether\\\",\\\"seven\\\",\\\"paragraph\\\",\\\"third\\\",\\\"shall\\\",\\\"describe\\\",\\\"floor\\\",\\\"either\\\",\\\"result\\\",\\\"century\\\",\\\"consider\\\",\\\"coast\\\",\\\"phrase\\\",\\\"silent\\\",\\\"temperature\\\",\\\"finger\\\",\\\"industry\\\",\\\"value\\\",\\\"fight\\\",\\\"excite\\\",\\\"natural\\\",\\\"sense\\\",\\\"capital\\\",\\\"won’t\\\",\\\"chair\\\",\\\"danger\\\",\\\"fruit\\\",\\\"thick\\\",\\\"soldier\\\",\\\"process\\\",\\\"operate\\\",\\\"practice\\\",\\\"separate\\\",\\\"difficult\\\",\\\"doctor\\\",\\\"please\\\",\\\"protect\\\",\\\"modern\\\",\\\"element\\\",\\\"student\\\",\\\"corner\\\",\\\"party\\\",\\\"supply\\\",\\\"whose\\\",\\\"locate\\\",\\\"character\\\",\\\"insect\\\",\\\"caught\\\",\\\"period\\\",\\\"indicate\\\",\\\"radio\\\",\\\"spoke\\\",\\\"human\\\",\\\"history\\\",\\\"effect\\\",\\\"electric\\\",\\\"expect\\\",\\\"imagine\\\",\\\"provide\\\",\\\"agree\\\",\\\"gentle\\\",\\\"woman\\\",\\\"captain\\\",\\\"guess\\\",\\\"necessary\\\",\\\"sharp\\\",\\\"create\\\",\\\"neighbor\\\",\\\"rather\\\",\\\"crowd\\\",\\\"compare\\\",\\\"string\\\",\\\"depend\\\",\\\"famous\\\",\\\"dollar\\\",\\\"stream\\\",\\\"sight\\\",\\\"triangle\\\",\\\"planet\\\",\\\"hurry\\\",\\\"chief\\\",\\\"colony\\\",\\\"clock\\\",\\\"enter\\\",\\\"major\\\",\\\"fresh\\\",\\\"search\\\",\\\"yellow\\\",\\\"allow\\\",\\\"print\\\",\\\"desert\\\",\\\"current\\\",\\\"arrive\\\",\\\"master\\\",\\\"track\\\",\\\"parent\\\",\\\"shore\\\",\\\"division\\\",\\\"sheet\\\",\\\"substance\\\",\\\"favor\\\",\\\"connect\\\",\\\"spend\\\",\\\"chord\\\",\\\"original\\\",\\\"share\\\",\\\"station\\\",\\\"bread\\\",\\\"charge\\\",\\\"proper\\\",\\\"offer\\\",\\\"segment\\\",\\\"slave\\\",\\\"instant\\\",\\\"market\\\",\\\"degree\\\",\\\"populate\\\",\\\"chick\\\",\\\"enemy\\\",\\\"reply\\\",\\\"drink\\\",\\\"occur\\\",\\\"support\\\",\\\"speech\\\",\\\"nature\\\",\\\"range\\\",\\\"steam\\\",\\\"motion\\\",\\\"liquid\\\",\\\"meant\\\",\\\"quotient\\\",\\\"teeth\\\",\\\"shell\\\",\\\"oxygen\\\",\\\"sugar\\\",\\\"death\\\",\\\"pretty\\\",\\\"skill\\\",\\\"women\\\",\\\"season\\\",\\\"solution\\\",\\\"magnet\\\",\\\"silver\\\",\\\"thank\\\",\\\"branch\\\",\\\"match\\\",\\\"suffix\\\",\\\"especially\\\",\\\"afraid\\\",\\\"sister\\\",\\\"steel\\\",\\\"discuss\\\",\\\"forward\\\",\\\"similar\\\",\\\"guide\\\",\\\"experience\\\",\\\"score\\\",\\\"apple\\\",\\\"bought\\\",\\\"pitch\\\",\\\"dream\\\",\\\"evening\\\",\\\"condition\\\",\\\"total\\\",\\\"basic\\\",\\\"smell\\\",\\\"valley\\\",\\\"double\\\",\\\"continue\\\",\\\"block\\\",\\\"chart\\\",\\\"success\\\",\\\"company\\\",\\\"subtract\\\",\\\"event\\\",\\\"particular\\\",\\\"opposite\\\",\\\"shoulder\\\",\\\"spread\\\",\\\"arrange\\\",\\\"invent\\\",\\\"cotton\\\",\\\"determine\\\",\\\"quart\\\",\\\"truck\\\",\\\"noise\\\",\\\"level\\\",\\\"chance\\\",\\\"gather\\\",\\\"stretch\\\",\\\"throw\\\",\\\"shine\\\",\\\"property\\\",\\\"column\\\",\\\"molecule\\\",\\\"select\\\",\\\"wrong\\\",\\\"repeat\\\",\\\"require\\\",\\\"broad\\\",\\\"prepare\\\",\\\"plural\\\",\\\"anger\\\",\\\"claim\\\",\\\"continent\\\"]\");\n\n//# sourceURL=webpack:///./dist/assets/validWords.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_assets_validWords_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/assets/validWords.json */ \"./dist/assets/validWords.json\");\nvar _dist_assets_validWords_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../dist/assets/validWords.json */ \"./dist/assets/validWords.json\", 1);\n\n\nclass BackwardsHangman {\n  constructor() {\n    this.state = {\n      word: '',\n      validKeys: 'abcdefghijklmnopqrstuvwxyz',\n      wrongCount: 0,\n      correctCount: 0,\n      wrongGuesses: [],\n      correctGuesses: [],\n      gameOver: false,\n    };\n  }\n\n  // Init\n  startGame() {\n    $('#sfx-start')[0].play();\n    // Generate a random word and display its letters.\n    this.state.word = _dist_assets_validWords_json__WEBPACK_IMPORTED_MODULE_0__[Math.round(Math.random() * _dist_assets_validWords_json__WEBPACK_IMPORTED_MODULE_0__.length)];\n\n    this.displayNewWord(this.state.word);\n    this.startListener();\n    $('#game').css('display', 'flex');\n  }\n\n  restartGame() {\n    this.state = {\n      word: _dist_assets_validWords_json__WEBPACK_IMPORTED_MODULE_0__[Math.round(Math.random() * _dist_assets_validWords_json__WEBPACK_IMPORTED_MODULE_0__.length)],\n      validKeys: 'abcdefghijklmnopqrstuvwxyz',\n      wrongCount: 0,\n      correctCount: 0,\n      wrongGuesses: [],\n      correctGuesses: [],\n      gameOver: false,\n    };\n\n    //TODO add a class to everything that should be hidden on restart\n    $('#lose').hide();\n    $('#face').hide();\n    $('#sun').hide();\n    $('body').attr('class', '');\n    $('#retry').css('display', 'none');\n    this.displayNewWord(this.state.word);\n    this.startListener();\n  }\n\n  displayNewWord(word) {\n    $('#word-letters').html(\n      this.state.word.split('').map(letter => {\n        const $div = $('<div>', { class: `letter letter-${letter}` });\n        $div.text(letter);\n        return $div;\n      }),\n    );\n\n    // for (let i = 0; i < this.state.word.length; ++i) {\n    //   const $div = $('<div>', { class: `letter letter-${this.state.word[i]}` });\n    //   $div.text(word[i]);\n    //   $('#word-letters').append($div);\n    // }\n  }\n\n  startListener() {\n    $(document).keypress(e => {\n      if (!this.state.gameOver) {\n        const pressedKey = e.key.toLowerCase();\n        if (this.state.validKeys.includes(pressedKey)) {\n          this.guessLetter(pressedKey);\n        }\n      }\n    });\n  }\n\n  guessLetter(letter) {\n    $('#sfx-guess')[0].play();\n\n    // Display the guess\n    $('#guess').text(letter);\n    $('#guess').addClass('glow');\n    window.setTimeout(() => $('#guess').text('').removeClass('glow'), 300);\n\n    // Wait a beat then evaluate the guess\n    window.setTimeout(\n      () => (this.state.word.includes(letter) ? this.correctGuess(letter) : this.incorrectGuess(letter)),\n      500,\n    );\n  }\n\n  correctGuess(letter) {\n    $('#sfx-correct')[0].play();\n    if (!this.state.correctGuesses.includes(letter)) {\n      this.state.correctGuesses.push(letter);\n      $(`.letter-${letter}`).text('');\n      ++this.state.correctCount;\n\n      if (this.state.correctCount === this.state.word.length) this.win();\n    }\n  }\n\n  incorrectGuess(letter) {\n    // TODO: Move sound effects into helper fn.\n    $('#sfx-wrong')[0].play();\n\n    $('body').addClass('wrong');\n    window.setTimeout(() => $('body').removeClass('wrong'), 300);\n\n    this.state.wrongGuesses.push(letter);\n    $('#used').text(this.state.wrongGuesses.join(''));\n    if ($('#used-letters').is(':hidden')) $('#used-letters').show();\n    ++this.state.wrongCount;\n\n    switch (this.state.wrongCount) {\n      case 0:\n        console.error('incorrectGuess ran despite zero wrongCount?');\n        break;\n      case 1:\n        $('rect#Rleg').hide();\n        break;\n      case 2:\n        $('rect#Lleg').hide();\n        break;\n      case 3:\n        $('rect#Rarm').hide();\n        break;\n      case 4:\n        $('rect#Larm').hide();\n        break;\n      case 5:\n        $('rect#torso').hide();\n        break;\n      case 6:\n        $('path#head').hide();\n        window.setTimeout(() => this.lose(), 300);\n        break;\n    }\n  }\n\n  win() {\n    this.state.gameOver = true;\n    // TODO: Figure out what happens from here\n    $('#sfx-win')[0].play();\n    $('#face').show();\n    $('#sun').show();\n    $('body').addClass('win');\n    window.setTimeout(() => {\n      $('#retry').css('display', 'block');\n      $(document).keypress(e => {\n        $(document).unbind(\"keypress\");\n        this.restartGame();\n      });\n    }, 1000);\n  }\n\n  lose() {\n    this.state.gameOver = true;\n\n    $('#sfx-lose')[0].play();\n    $('#lose').show();\n\n    // Wait a bit and show a retry button\n    window.setTimeout(() => {\n      $('#retry').css('display', 'block');\n      $(document).keypress(e => {\n        $(document).unbind(\"keypress\");\n        this.restartGame();\n      });\n    }, 500);\n  }\n}\n\nwindow.onload = () => {\n  $(document).keypress(e => {\n    $(document).unbind(\"keypress\");\n    $('#welcome').hide();\n    const Game = new BackwardsHangman();\n    Game.startGame(); \n  });\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });