// ==UserScript==
// @name     less annoying discord
// @version  1
// @match 	 *://discordapp.com/*
// @grant    none
// ==/UserScript==

// Startup
var intrv = setInterval((fn => {
    var a = document.querySelector('[class^="quote"]');
		if (a) { 
      a.remove();
      clearInterval(intrv);
    }
}), 500);

// keeps running, every minute
var intrv = setInterval((fn => {
    var a = document.querySelector('[class^="quote"]');
		if (a) { 
      a.remove();
    }
}), 60000);