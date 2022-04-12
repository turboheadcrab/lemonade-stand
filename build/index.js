"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lemonJuice = 3;
var water = 3;
var sugar = 1.5;
var iceCubes = 10;
var lemonade = {
  lemonJuice: lemonJuice,
  water: water,
  sugar: sugar,
  iceCubes: iceCubes,
  calculatePrice: function calculatePrice() {
    return this.lemonJuice * 0.3 + this.water * .01 + this.sugar * .25 + this.iceCubes * .05 + .75;
  }
};

function copyLemonade(lemonade) {
  var newLemonade;

  for (var key in lemonade) {
    newLemonade = _objectSpread(_objectSpread({}, newLemonade), {}, _defineProperty({}, key, lemonade[key]));
  }

  return newLemonade;
}

console.log(copyLemonade(lemonade));