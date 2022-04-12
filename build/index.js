"use strict";

var _lemonade;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lemonade = (_lemonade = {
  lemonJuice: 3,
  water: 3,
  sugar: 1.5,
  iceCubes: 5
}, _defineProperty(_lemonade, console.log('Hello World'), 'Hi'), _defineProperty(_lemonade, "calculatePrice", function calculatePrice() {
  return this.lemonJuice * 0.3 + this.water * .01 + this.sugar * .25 + this.iceCubes * .05 + .75;
}), _lemonade);

function updateLemonade(lemonade, lemonJuice, water, sugar, iceCubes) {
  return _objectSpread({
    lemonJuice: lemonJuice,
    water: water,
    sugar: sugar,
    iceCubes: iceCubes
  }, lemonade);
}

lemonade.water = 8;
console.log(_objectSpread(_objectSpread({}, lemonade), {}, {
  water: 5
}));
console.log(lemonade);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]];
var numbersCopy = [].concat(numbers);
numbersCopy[10] = _toConsumableArray(numbers[10]);
numbersCopy[10][0] = 5;
console.log(numbers);
console.log(numbersCopy);
var a = lemonade.water,
    lemonJuice = lemonade.lemonJuice,
    sugar = lemonade.sugar,
    iceCubes = lemonade.iceCubes;
console.log(a);
console.log(lemonJuice);
console.log(sugar);
console.log(iceCubes);