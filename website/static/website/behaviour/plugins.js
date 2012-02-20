/**
	Helper functions:
*/
"use strict";


/**
	Arrays:
*/

Array.prototype.contains = function (needle) {
	for (key in this) {
		if (this[key] === needle) {
			return true;
		}
	}
	return false;
};


/**
	Events:
	Cross-browser, no-jQuery
*/

function onEvent(element, type, method) {
	if (typeof window.addEventListener === "function") {
		return element.addEventListener(type, method, false);
	} else if (typeof window.attachEvent === "object") {
		return element.attachEvent('on' + type, method);
	}
} // end onEvent

function offEvent(element, type, method) {
	if (typeof window.removeEventListener === "function") {
		return element.removeEventListener(type, method, false);
	} else if (typeof window.detachEvent === "object") {
		return element.detachEvent('on' + type, method);
	}
} // end offEvent

function doEvent(element, type) {
	if (typeof window.dispatchEvent === "function") {
		var theEvent = document.createEvent('Event');
		theEvent.initEvent(type, true, true);
		element.dispatchEvent(theEvent);
	} else if (typeof element.fireEvent === "object") {
		return element.fireEvent('on' + type);
	}
} // end doEvent


/**
	Cookies:
	http://www.quirksmode.org/js/cookies.html
*/

function setCookie(name, value, days, path) {
	var date, expires;
	if (days) {
		date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	if(path) {
		path = "; path=" + path;
	} else {
		path = "; path=/";
	}
	document.cookie = name + "=" + value + expires + path;
} // end setCookie

function getCookie(name) {
	var nameEQ = name + "=",
		ca = document.cookie.split(';');
	for (var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
} // end getCookie

function unsetCookie(name, path) {
	setCookie(name, "", -1, path);
} // end unsetCookie

