"use strict";

var _vorpal = _interopRequireDefault(require("vorpal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
const order = {
    total: 5.00,
    lemonades: [
        {
            lemonJuice: 4,
            water: 2,
            sugar: 3,
            iceCubes: 7,
            price: 5
        }, {
            lemonJuice: 2,
            water: 2,
            sugar: 1,
            iceCubes: 7,
            price: 3
        }, {
            lemonJuice: 3,
            water: 2,
            sugar: .5,
            iceCubes: 7,
            price: 4.38
        }, {
            lemonJuice: 3,
            water: 2.14,
            sugar: 1.25,
            iceCubes: 7,
            price: 2.49
        }
    ],
    lemonadeStand: {
        name: 'Cooksys LemonadeStand'
    },
    customer: {
        name: 'Will',
        phoneNumber: '0000000000'
    }
}*/
var vorpal = (0, _vorpal["default"])();
vorpal.command('hello [number]', 'Prints Hello to the console').option('-f --file', 'Provide a file name').action(function (args, callback) {
  this.log(args.options);
  this.log('Hello ${args.name}, should I call you at ${args.number}');
  callback();
});
vorpal.show();