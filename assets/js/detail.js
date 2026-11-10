(function(){
"use strict";
var root=document.getElementById("sd-root");
if(!root||typeof svcs==="undefined")return;

var star_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26 6.6.7-4.9 4.5 1.35 6.5L12 16.9 6.05 19.96 7.4 13.46 2.5 8.96l6.6-.7L12 2z"/></svg>';
var clock_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
var users_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>';
var redo_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L3 10"/></svg>';
var arrow_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>';
var back_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>';
var shield_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
var plus_svg='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>';

function esc(s){
	return String(s==null?"":s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;").replace(/'/g,"&#39;")
}
function minPriceOf(s){
  return Math.min.apply(null,s.packages.map(function(p){return p.price}))
}
function rp(n){
    return typeof rp_fmt==="function"?rp_fmt(n):"Rp "+Number(n).toLocaleString("id-ID")
}

var qs=new URLSearchParams(window.location.search);
var id=qs.get("id");
var svc=null;
for(var i=0;i<svcs.length;i++){
  if(svcs[i].id===id){svc=svcs[i];break}
}

if(!svc){
	document.title="Service not found — Flexoo";
    root.innerHTML=
      '<section class="sd-hero"><div class="container">'+
	    '<div class="sd-notfound">'+
          '<span class="eyebrow">404 · Service</span>'+
        '<h1 class="sd-title">We couldn’t find that service</h1>'+
          '<p class="sd-tagline">'+(id?'There is no service with the id “'+esc(id)+'”.':'No service was specified in the link.')+
	      ' Browse the catalog to find what you need.</p>'+
        '<a class="btn btn-primary btn-lg" href="index.html#catalog">'+back_svg+' Back to catalog</a>'+
	    '</div>'+
      '</div></section>';
  return
}

document.title=svc.name+" — Flexoo";

var selectedPkg=0;
svc.packages.forEach(function(p,idx){if(p.popular)selectedPkg=idx});
var pkgParam=parseInt(qs.get("pkg"),10);
if(!isNaN(pkgParam)&&svc.packages[pkgParam])selectedPkg=pkgParam;
var picked_addons={};

var steps2=(typeof procs!=="undefined"&&procs[svc.process])||[];
var faq2=typeof faq_data!=="undefined"?faq_data:[];
var chk=typeof chk1!=="undefined"?chk1:"";
var chkW=typeof CHK_w!=="undefined"?CHK_w:chk;
var ico=(typeof icons_map!=="undefined"&&icons_map[svc.icon])||"";

var related=svcs.filter(function(s){
	return s.category===svc.category&&s.id!==svc.id
});

var html="";

html+=
  '<section class="sd-hero">'+
      '<div class="container">'+
	'<nav class="sd-crumbs" aria-label="Breadcrumb">'+
        '<a href="index.html">Home</a><span aria-hidden="true">/</span>'+
	  '<a href="index.html#catalog">Services</a><span aria-hidden="true">/</span>'+
      '<span class="sd-crumb-cat">'+esc(svc.categoryName)+'</span><span aria-hidden="true">/</span>'+
        '<span aria-current="page">'+esc(svc.name)+'</span>'+
    '</nav>'+
	'<div class="sd-hero-head">'+
      '<span class="sd-icon">'+ico+'</span>'+
        '<span class="sc-cat" data-category="'+esc(svc.category)+'"><i class="dot"></i>'+esc(svc.categoryName)+'</span>'+
    '</div>'+
      '<h1 class="sd-title">'+esc(svc.name)+'</h1>'+
	'<p class="sd-tagline">'+esc(svc.tagline)+'</p>'+
    '<div class="sd-facts">'+
        '<span class="sd-fact sd-rating">'+star_svg+'<strong>'+svc.rating.toFixed(1)+'</strong> <em>('+svc.reviews+' reviews)</em></span>'+
      '<span class="sd-fact">'+clock_svg+esc(svc.delivery)+'</span>'+
	  '<span class="sd-fact">'+users_svg+esc(svc.team)+'</span>'+
        (svc.revisions&&svc.revisions!=="N/A"?'<span class="sd-fact">'+redo_svg+'Revisions: '+esc(svc.revisions)+'</span>':'')+
    '</div>'+
      '<div class="sd-stack">'+
	  '<span class="sd-stack-label">'+(svc.category==="training"?"Tracks":"Built with")+'</span>'+
        svc.stack.map(function(t){return '<span class="sd-tag">'+esc(t)+'</span>'}).join("")+
    '</div>'+
	'<div class="sd-hero-cta">'+
        '<span class="sd-from"><small>from</small>'+rp(minPriceOf(svc))+'</span>'+
      '<a class="btn btn-primary btn-lg" href="#packages">Choose a package</a>'+
    '</div>'+
  '</div>'+
'</section>';

html+='<section class="section sd-body"><div class="container sd-layout"><div class="sd-main">';

html+=
  '<div class="sd-block reveal" id="about">'+
	'<span class="eyebrow">Overview</span>'+
      '<h2 class="sd-h2">About this service</h2>'+
    svc.desc.map(function(p){return '<p class="sd-p">'+esc(p)+'</p>'}).join("")+
'</div>';

html+=
    '<div class="sd-block reveal" id="includes">'+
  '<span class="eyebrow">What’s included</span>'+
	'<h2 class="sd-h2">Everything you get</h2>'+
      '<ul class="sd-includes">'+
    svc.includes.map(function(t){
	  return '<li><span class="sd-check">'+chk+'</span>'+esc(t)+'</li>'
    }).join("")+
  '</ul>'+
'</div>';

html+=
  '<div class="sd-block reveal" id="packages">'+
      '<span class="eyebrow">Pricing</span>'+
	'<h2 class="sd-h2">Choose a package</h2>'+
    '<div class="sd-pkgs" role="radiogroup" aria-label="Packages">'+
      svc.packages.map(function(p,idx){
        return (
	  '<button type="button" class="sd-pkg'+(p.popular?" is-popular":"")+'" role="radio" data-pkg="'+idx+'" aria-checked="false">'+
          (p.popular?'<span class="sd-pkg-badge">Most popular</span>':'')+
	    '<span class="sd-pkg-head">'+
            '<span class="sd-pkg-name">'+esc(p.name)+'</span>'+
          '<span class="sd-radio" aria-hidden="true">'+chkW+'</span>'+
	    '</span>'+
        '<span class="sd-pkg-blurb">'+esc(p.blurb)+'</span>'+
          '<span class="sd-pkg-price">'+rp(p.price)+'</span>'+
	    '<span class="sd-pkg-note">'+esc(p.note)+'</span>'+
        '<span class="sd-pkg-feats">'+
          p.features.map(function(f){
	        return '<span class="sd-pkg-feat"><span class="sd-check">'+chk+'</span>'+esc(f.t)+'</span>'
          }).join("")+
	    '</span>'+
      '</button>'
        )
    }).join("")+
  '</div>'+
'</div>';

if(svc.addons&&svc.addons.length){
	html+=
      '<div class="sd-block reveal" id="addons">'+
    '<span class="eyebrow">Optional</span>'+
        '<h2 class="sd-h2">Add-ons</h2>'+
	  '<div class="sd-addons">'+
      svc.addons.map(function(a,idx){
        return (
	      '<label class="sd-addon">'+
            '<input type="checkbox" data-addon="'+idx+'">'+
          '<span class="sd-addon-box" aria-hidden="true">'+chkW+'</span>'+
	        '<span class="sd-addon-text">'+
              '<span class="sd-addon-name">'+esc(a.name)+'</span>'+
            '<span class="sd-addon-desc">'+esc(a.desc)+'</span>'+
	        '</span>'+
          '<span class="sd-addon-price">+ '+rp(a.price)+'</span>'+
	      '</label>'
        )
      }).join("")+
    '</div>'+
  '</div>'
}

if(steps2.length){
  html+=
    '<div class="sd-block reveal" id="process">'+
	  '<span class="eyebrow">How it works</span>'+
        '<h2 class="sd-h2">From first call to '+(svc.process==="training"?"certificate":"launch")+'</h2>'+
      '<ol class="sd-steps">'+
	    steps2.map(function(s,idx){
          return (
        '<li class="sd-step">'+
	      '<span class="sd-step-num">'+(idx+1<10?"0":"")+(idx+1)+'</span>'+
            '<span class="sd-step-body">'+
          '<span class="sd-step-title">'+esc(s.t)+'</span>'+
	        '<span class="sd-step-desc">'+esc(s.d)+'</span>'+
            '</span>'+
	      '</li>'
          )
        }).join("")+
      '</ol>'+
    '</div>'
}

if(faq2.length){
    html+=
  '<div class="sd-block reveal" id="faq">'+
	'<span class="eyebrow">FAQ</span>'+
      '<h2 class="sd-h2">Frequently asked questions</h2>'+
    '<div class="sd-faq">'+
	  faq2.map(function(f,idx){
        return (
      '<details class="sd-faq-item"'+(idx===0?" open":"")+'>'+
	    '<summary><span>'+esc(f.q)+'</span><span class="sd-faq-icon" aria-hidden="true">'+plus_svg+'</span></summary>'+
          '<p>'+esc(f.a)+'</p>'+
	  '</details>'
        )
      }).join("")+
    '</div>'+
  '</div>'
}

html+='</div>';

html+=
    '<aside class="sd-aside" aria-label="Order summary">'+
  '<div class="sd-summary" id="sd-summary">'+
	'<div class="sd-sum-head">'+
      '<span class="sd-sum-label">Your order</span>'+
        '<span class="sd-sum-service">'+esc(svc.name)+'</span>'+
    '</div>'+
	'<div class="sd-sum-lines" id="sd-sum-lines"></div>'+
      '<div class="sd-sum-total">'+
    '<span>Total estimate</span>'+
        '<strong id="sd-total"></strong>'+
	'</div>'+
      '<p class="sd-sum-deposit" id="sd-deposit"></p>'+
    '<button type="button" class="btn btn-primary btn-lg btn-block" id="sd-order">Order now</button>'+
	'<a class="btn btn-ghost btn-block sd-ask" href="mailto:hello@flexoo.id?subject='+encodeURIComponent("Question about "+svc.name)+'">Ask a question first</a>'+
      '<ul class="sd-assure">'+
    '<li>'+shield_svg+'Free scoping call before any payment</li>'+
        '<li>'+clock_svg+'Proposal within 3 business days</li>'+
	'</ul>'+
  '</div>'+
'</aside>';

html+='</div></section>';

if(related.length){
	html+=
  '<section class="section sd-related">'+
      '<div class="container">'+
    '<div class="section-head reveal">'+
	  '<span class="eyebrow">More in '+esc(svc.categoryName)+'</span>'+
        '<h2>You might also need</h2>'+
      '</div>'+
	'<div class="catalog-grid sd-related-grid">'+
        related.map(function(s){
      var lowest=minPriceOf(s);
	  return (
        '<a class="service-card reveal" data-category="'+esc(s.category)+'" href="service-detail.html?id='+encodeURIComponent(s.id)+'">'+
          '<div class="sc-top">'+
	    '<span class="sc-icon">'+((icons_map&&icons_map[s.icon])||"")+'</span>'+
            '<span class="sc-cat"><i class="dot"></i>'+esc(s.categoryName)+'</span>'+
          '</div>'+
	    '<h3 class="sc-title">'+esc(s.name)+'</h3>'+
        '<p class="sc-desc">'+esc(s.tagline)+'</p>'+
          '<div class="sc-meta">'+
	    '<span class="sc-price"><small>from</small>'+rp(lowest)+'</span>'+
            '<span class="sc-delivery">'+clock_svg+esc(s.delivery)+'</span>'+
          '</div>'+
	    '<div class="sc-foot">'+
        '<span class="sc-rating">'+star_svg+s.rating.toFixed(1)+' <em>('+s.reviews+')</em></span>'+
          '<span class="sc-cta">View details '+arrow_svg+'</span>'+
	    '</div>'+
      '</a>'
	  )
    }).join("")+
  '</div>'+
      '</div>'+
    '</section>'
}

root.innerHTML=html;

var pkgBtns=root.querySelectorAll(".sd-pkg");
var addonInputs=root.querySelectorAll("input[data-addon]");
var linesEl=document.getElementById("sd-sum-lines"),totalEl=document.getElementById("sd-total");
var depositEl=document.getElementById("sd-deposit");
var orderBtn=document.getElementById("sd-order");
var summary=document.getElementById("sd-summary");
var lastTotal=null;

function computeTotal(){
	var tot=svc.packages[selectedPkg].price;
  Object.keys(picked_addons).forEach(function(k){tot+=svc.addons[k].price});
    return tot
}

function updateSummary(){
  var p=svc.packages[selectedPkg];
	var lines=
    '<div class="sd-sum-line">'+
        '<span><span class="sd-sum-pkg">'+esc(p.name)+' package</span><span class="sd-sum-note">'+esc(p.note)+'</span></span>'+
	  '<span>'+rp(p.price)+'</span>'+
    '</div>';
  Object.keys(picked_addons).sort().forEach(function(k){
      var a=svc.addons[k];
	lines+=
        '<div class="sd-sum-line is-addon">'+
      '<span>+ '+esc(a.name)+'</span>'+
	    '<span>'+rp(a.price)+'</span>'+
        '</div>'
  });
	linesEl.innerHTML=lines;
  var total=computeTotal();
    totalEl.textContent=rp(total);
  if(lastTotal!==null&&total!==lastTotal){
	totalEl.classList.remove("is-bump");
      void totalEl.offsetWidth;
    totalEl.classList.add("is-bump")
  }
	lastTotal=total;
  depositEl.textContent=svc.category==="training"
      ?"Training programs are paid upfront per batch or program."
    :"50% deposit to start: "+rp(Math.round(total/2))+" · rest split by milestones."
}

function selectPkg(idx){
    selectedPkg=idx;
  pkgBtns.forEach(function(b){
	var on=Number(b.dataset.pkg)===idx;
      b.classList.toggle("is-selected",on);
    b.setAttribute("aria-checked",on?"true":"false");
	b.tabIndex=on?0:-1
  });
    updateSummary()
}

pkgBtns.forEach(function(b){
  b.addEventListener("click",function(){selectPkg(Number(b.dataset.pkg))});
	b.addEventListener("keydown",function(e){
    var dir=(e.key==="ArrowRight"||e.key==="ArrowDown")?1:(e.key==="ArrowLeft"||e.key==="ArrowUp")?-1:0;
        if(!dir)return;
      e.preventDefault();
	var nx=(selectedPkg+dir+pkgBtns.length)%pkgBtns.length;
    selectPkg(nx);
        pkgBtns[nx].focus()
  })
});

addonInputs.forEach(function(inp){
    inp.addEventListener("change",function(){
	var k=inp.dataset.addon;
      if(inp.checked)picked_addons[k]=true;else delete picked_addons[k];
    inp.closest(".sd-addon").classList.toggle("is-on",inp.checked);
        updateSummary()
  })
});

selectPkg(selectedPkg)
})();
