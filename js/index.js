(()=>{const t=document.querySelector(".cartoon-cat__cat"),e=document.querySelector(".block-about__description"),n=e.getBoundingClientRect(),c=document.querySelectorAll(".anime");window.addEventListener("scroll",()=>{var e=window.pageYOffset;Number.parseInt(e)>=Number.parseInt(n.top)&&!t.classList.contains("move")&&(console.log("CAt"),t.classList.add("move"))}),0<c.length&&window.addEventListener("scroll",function(){for(let t=0;t<c.length;t++){const i=c[t];var n=i.offsetHeight,o=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,e=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+e,left:t.left+n}}(i).top;let e=window.innerHeight-n/4;n>window.innerHeight&&(e=window.innerHeight-window.innerHeight/4),pageYOffset>o-e&&pageYOffset<o+n?i.classList.add("active"):i.classList.remove("active")}})})();