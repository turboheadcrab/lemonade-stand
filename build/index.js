"use strict";

var _vorpal = _interopRequireDefault(require("vorpal"));

var _lib = require("./lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var vorpal = (0, _vorpal["default"])();
vorpal.command('hello <name>', 'Prints Hello <name> to the console').option('-f --file', 'Provide a file name').action(function (args, callback) {
  if (args.options.file) {
    this.log('I see you want to make a file');
  }

  this.log("Hello ".concat(args.name));
  callback();
});
vorpal.command('createOrder <name> <phoneNumber>', 'Creates an order and saves it as a JSON file').action(function (args, callback) {
  var _this = this;

  var order = {
    total: 0,
    lemonades: [],
    customer: {
      name: args.name,
      phoneNumber: args.phoneNumber
    },
    lemonadeStand: {
      name: 'Cooksys Lemonade Stand'
    }
  }; //Prompt the user for how many lemonades they want

  this.prompt({
    type: 'number',
    name: 'numLemonades',
    "default": 1,
    message: 'How many lemonades would you like to order?'
  }, function (_ref) {
    var numLemonades = _ref.numLemonades;
    var questions = [];

    for (var i = 1; i <= Number.parseInt(numLemonades); i++) {
      questions.push({
        type: 'number',
        name: 'lemonJuice' + i,
        message: "How many cups of lemon juice do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'water' + i,
        message: "How many cups of water do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'sugar' + i,
        message: "How much sugar do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'iceCubes' + i,
        message: "How many ice cubes do you want in lemonade ".concat(i, "?")
      });
    }

    _this.prompt(questions, function (response) {
      // Create a lemonade object for each lemonade in the order
      for (var _i = 1; _i < numLemonades; _i++) {
        order.lemonades.push({
          lemonJuice: response['lemonJuice' + _i],
          water: response['water' + _i],
          sugar: response['sugar' + _i],
          iceCubes: response['iceCubes' + _i]
        });
      } // Set the price of each lemonade in the order


      var _iterator = _createForOfIteratorHelper(order.lemonades),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var lemonade = _step.value;
          lemonade.price = (0, _lib.calculateLemonadePrice)(lemonade);
        } // Set the total price of the order

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      order.price = (0, _lib.calculateOrderTotal)(order);

      _this.log(order);
    });
  });
});
vorpal.delimiter('lemonade-stand$').show();