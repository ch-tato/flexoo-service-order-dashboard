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

var searchInput=document.getElementById("search-input"),chips=document.querySelectorAll(".chip[data-filter]");
var cards=document.querySelectorAll(".service-card");
var countEl=document.getElementById("results-count"),emptyState=document.getElementById("empty-state");
var resetBtn=document.getElementById("reset-filters");
var quickChips=document.querySelectorAll(".qc-chip[data-quick]");
var activeFilter="all";

function norm(s){return (s||"").toLowerCase().trim()}

function cardMatches(card,q){
    if(!q)return true;
    var hay=norm(card.dataset.name+" "+card.dataset.keywords+" "+card.textContent+" "+card.dataset.category);
    return hay.indexOf(q)!==-1
}

function applyFilters(){
  var q=norm(searchInput?searchInput.value:""),visible=0;

	cards.forEach(function(card){
    var matchCat=activeFilter==="all"||card.dataset.category===activeFilter;
        var show=matchCat&&cardMatches(card,q);
    card.classList.toggle("hidden",!show);
		if(show)visible++
	});

  if(countEl){
    countEl.innerHTML="Showing <strong>"+visible+"</strong> of "+cards.length+" services"
  }

	if(emptyState){
		var isEmpty=visible===0;
		emptyState.classList.toggle("show",isEmpty);
    if(isEmpty){
      var t1=document.getElementById("es-title"),t2=document.getElementById("es-sub");
      var other=0;
          if(activeFilter!=="all"&&q){
        cards.forEach(function(card){
          if(cardMatches(card,q))other++
        })
      }
      if(other>0){
        t1.textContent="No services match “"+searchInput.value.trim()+"” in this category";
		t2.textContent="But "+other+(other===1?" service matches":" services match")+" in other categories.";
        resetBtn.textContent="Show all matching services";
        resetBtn.dataset.mode="widen"
      }else{
        t1.textContent="No services found";
        t2.textContent="Try different keywords, or reset the filters to browse the full catalog.";
		resetBtn.textContent="Reset filters";
        resetBtn.dataset.mode="reset"
      }
    }
	}
}

function animateCards(){
    cards.forEach(function(card){
      if(card.classList.contains("hidden"))return;
	  card.classList.remove("pop");
        void card.offsetWidth;
      card.classList.add("pop")
    })
}

function setFilter(val){
	activeFilter=val;
  chips.forEach(function(chip){
    var on=chip.dataset.filter===val;
    chip.classList.toggle("active",on);
		chip.setAttribute("aria-pressed",on?"true":"false")
  });
  applyFilters();animateCards()
}

chips.forEach(function(chip){
  chip.addEventListener("click",function(){setFilter(chip.dataset.filter)})
});

if(searchInput){
	searchInput.addEventListener("input",applyFilters);
    searchInput.addEventListener("keydown",function(e){
    if(e.key!=="Enter")return;
		e.preventDefault();
    var tgt=document.getElementById("catalog");
        if(!tgt)return;
    var calm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	tgt.scrollIntoView({behavior:calm?"auto":"smooth",block:"start"})
  })
}

quickChips.forEach(function(qc){
	qc.addEventListener("click",function(){
    if(!searchInput)return;
        searchInput.value=qc.dataset.quick;
    setFilter("all");
		applyFilters();
    var target=document.getElementById("catalog");
    if(target)target.scrollIntoView({behavior:"smooth",block:"start"})
	})
});

if(resetBtn){
  resetBtn.addEventListener("click",function(){
      if(resetBtn.dataset.mode==="widen"){
	  setFilter("all")
    }else{
        if(searchInput)searchInput.value="";
      setFilter("all");
		if(searchInput)searchInput.focus()
    }
  })
}

document.addEventListener("keydown",function(e){
	if(e.key==="/"&&searchInput&&document.activeElement!==searchInput&&!/input|textarea|select/i.test(document.activeElement.tagName)){
    e.preventDefault();
        searchInput.focus()
	}
  if(e.key==="Escape"&&searchInput&&document.activeElement===searchInput){
    searchInput.value="";
		applyFilters()
  }
});

applyFilters()
})();
