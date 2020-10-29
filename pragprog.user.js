// ==UserScript==
// @name     Fuck Pragprog
// @version  1
// @grant    none
// @match 	 *://*.pragprog.com/*
// ==/UserScript==

var redir = document.getElementsByTagName("noscript")[0];
console.log(redir);
redir.remove();
