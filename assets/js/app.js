(function(){
"use strict";
var nav=document.getElementById("nav");
function onScroll(){
    if(!nav)return;
  nav.classList.toggle("scrolled",window.scrollY>12)
}
window.addEventListener("scroll",onScroll,{passive:true});
onScroll()

var revealEls=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&revealEls.length){
	var io=new IntersectionObserver(function(entries){
		entries.forEach(function(e){
			if(e.isIntersecting){
        var sib=Array.prototype.slice.call(e.target.parentNode.children);
				var idx=sib.indexOf(e.target),el=e.target;
				el.style.transitionDelay=Math.min(idx,4)*70+"ms";
				el.classList.add("in");
				io.unobserve(el);
				setTimeout(function(){el.style.transitionDelay=""},900)
			}
		})
	},{threshold:0.12,rootMargin:"0px 0px -40px 0px"});
	revealEls.forEach(function(el){io.observe(el)});
}else{
  revealEls.forEach(function(el){el.classList.add("in")})
}


setTimeout(function(){
  revealEls.forEach(function(el){el.classList.add("in");el.style.transitionDelay=""});
},2500);

})();
