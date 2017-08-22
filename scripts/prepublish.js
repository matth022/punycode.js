'use strict';

var fs = require('fs');
var path = require('path');

var regex = /module\.exports = punycode;/;

var sourceContents = fs.readFileSync(path.resolve(__dirname, '../punycode.js'), 'utf-8');

if (!regex.test(sourceContents)) {
	throw new Error('The underlying library has changed. Please update the prepublish script.');
}

var outputContents = sourceContents.replace(regex, 'export default punycode;');

fs.writeFileSync(path.resolve(__dirname, '../punycode.es6.js'), outputContents);
