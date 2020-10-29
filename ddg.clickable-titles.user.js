// ==UserScript==
// @name     ddg.clickable-titles
// @version  1
// @grant    none
// @match		 *://duckduckgo.com/?q=*
// ==/UserScript==


window.onload = (fn => {
	var box = document.getElementsByClassName('js-about-item');
	if (box) {

  	var link = box[0].getElementsByClassName('js-about-item-more-at-inline')[0];
  	if (link) {

    	var a = link.cloneNode(false);
    	var title = box[0].getElementsByClassName("module__title__link")[0];
    	if (title) {

      	var parent = title.parentElement;
    		a.setAttribute("class",'');
    		a.appendChild(title);
      	parent.appendChild(a);
    	}
  	}
	}
});