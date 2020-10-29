// ==UserScript==
// @name     snippets
// @version  1
// @grant    none
// @exclude  *
// ==/UserScript==

function addCSS(str) {
  var css = document.createElement('style'); 
  css.innerHTML = str; 
  document.body.appendChild(css);
}

function sleep(ms) {
  // usage: sleep(ms).then(fn)
  return new Promise(resolve => setTimeout(resolve, ms));
}