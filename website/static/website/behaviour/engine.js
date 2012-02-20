/**
	Example.nl - engine.js
*/
"use strict";

/* TODO: load dependent scripts here (Modernizr.load?) */


/**
	Setup / Config
*/



/**
	Base:
*/

var Example = {

	settings: {},

	defaults: {},

	init: function () {

//		console.log('init');

	},

	doSomething: function (event) {

	}

};





/**
	Document Ready!
	Move all setup/init function-calls to this section, to run once the document is ready.
*/
$(document).ready(function () {






/**
	Skip-to-Main links move focus to #main:
*/
	// add a click handler to all links that point to same-page targets (href="#...")
	$("a[href^='#']").click(function () {
		// get the href attribute of the internal link
		// then strip the first character off it (#)
		// leaving the corresponding id attribute
		$("#" + $(this).attr("href").slice(1)).focus();
	});


}); // end document.ready
