
//greeter.js
var config = require('./config.json');

module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = config.greetText; //'Hi there and greetings!';
	return greet;
}