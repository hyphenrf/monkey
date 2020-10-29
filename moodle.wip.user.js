// ==UserScript==
// @name     moodle.wip
// @version  1
// @grant    none
// @exclude  *
// ==/UserScript==

var ck = document.cookie;
var fl = document.querySelector("li.section.main.moveablesection.state-visible > div > ul").children;
var mmh = [];

for (li of fl) {
  mmh.push(((i) => "wget --no-verbose --header='Cookie: " + document.cookie + "' " + i.getAttribute("data-url") + ";")(li));
}

console.log(mmh.join("\n"));