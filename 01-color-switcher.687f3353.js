!function(){var e,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.querySelector("body");a.disabled=!0,t.addEventListener("click",(function(n){e=setInterval((function(){d.style="background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),a.disabled=!1,t.disabled=!0})),a.addEventListener("click",(function(){clearInterval(e),a.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.687f3353.js.map
