// ==UserScript==
// @name         Contador de batata muito legal
// @description  Conta as batata do grundos.cafe procê (aprecie com moderação)
// @author       thiagoyasue
// @include      http*://www.grundos.cafe/medieval/potatocounter/
// ==/UserScript==

var src = document.querySelectorAll("img[src*='/games/potato']");
$("input[name='potatoes']").val(src.length-1);