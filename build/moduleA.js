"use strict";

console.log('Running Module A');

require('./moduleB');

var moduleBImports = require('./moduleB');

moduleBImports.internalFunction();

var moduleBImportsAgain = require('./moduleB');

console.log(moduleBImportsAgain.internalVariable);
console.log('Finished Running Module A');