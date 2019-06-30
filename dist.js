(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const basicLightbox = require('basiclightbox')

document.querySelector('#wrap .logInfo .logStart button ').onclick = () => {
	var name = document.getElementById("logName").value;
	var email = document.getElementById("logEmail").value;
	var password = document.getElementById("logPassword").value;

	if (name == ""){
		name = "default name";
	}

	
	
	if (email == ""){
		email = "default email";
	}

	if (password == ""){
		password = "default password";
	}

	const html = `<p> name: ` +  name + `</p>`
	+ `<p> email: ` +  email + `</p>`
	+ `<p> password: ` +  password + `</p>`

	
	basicLightbox.create(
		html
	).show()
}


},{"basiclightbox":2}],2:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}(function(){return function i(c,u,a){function s(n,e){if(!u[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[n]={exports:{}};c[n][0].call(r.exports,function(e){return s(c[n][1][e]||e)},r,r.exports,i,c,u,a)}return u[n].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var u=function(e){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},a=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},c=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=c;t.create=function(e,o){var r=function(e,n){var t=u('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=t.querySelector(".basicLightbox__placeholder");e.forEach(function(e){return o.appendChild(e)});var r=a(o,"IMG"),i=a(o,"VIDEO"),c=a(o,"IFRAME");return!0===r&&t.classList.add("basicLightbox--img"),!0===i&&t.classList.add("basicLightbox--video"),!0===c&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(u(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),o=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(o)),n=function(e){return!1!==o.onClose(i)&&(t=function(){if("function"==typeof e)return e(i)},(n=r).classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===c(n)||n.parentElement.removeChild(n),t()},410),!0);var n,t};!0===o.closable&&r.addEventListener("click",function(e){e.target===r&&n()});var i={element:function(){return r},visible:function(){return c(r)},show:function(e){return!1!==o.onShow(i)&&(n=r,t=function(){if("function"==typeof e)return e(i)},document.body.appendChild(n),setTimeout(function(){requestAnimationFrame(function(){return n.classList.add("basicLightbox--visible"),t()})},10),!0);var n,t},close:n};return i}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
