(()=>{"use strict";const init=()=>{
const model=[
 {title:"Overview",icon:"⌂",items:[]},
 {title:"Talent Acquisition",icon:"◎",items:["Documents Received","Approvals","Recruiting","Onboarding","Employees"]},
 {title:"People Directory",icon:"♙",items:["Candidates","Employees","Clients","Contractors","Vendors"]},
 {title:"Clients",icon:"◇",items:["Contact","Documentation","Contract","Billing","Invoicing"]}
];
const descriptions={
 "Documents Received":"Review and organize documents submitted by candidates and employees.",
 "Approvals":"Review decisions and requests waiting for authorized approval.",
 "Recruiting":"Manage vacancies, candidates, interviews, and hiring progress.",
 "Onboarding":"Coordinate each new hire's onboarding activities and required records.",
 "Employees":"View and manage employee information for this workspace.",
 "Candidates":"View candidates and their current relationship with the organization.",
 "Clients":"View and manage client directory records.",
 "Contractors":"View and manage contractor directory records.",
 "Vendors":"View and manage vendor directory records.",
 "Contact":"Maintain client contact information.",
 "Documentation":"Organize documents associated with each client.",
 "Contract":"Review and manage client contract records.",
 "Billing":"Manage client billing information and activity.",
 "Invoicing":"Create and monitor client invoices."
};
const sidebar=document.querySelector(".sidebar"),nav=document.getElementById("sideNav"),topbar=document.querySelector(".topbar"),content=document.querySelector(".content");
if(!sidebar||!nav||!topbar||!content)return;
sidebar.id="appSidebar";
let toggle=document.getElementById("menuToggle");
if(!toggle){toggle=document.createElement("button");toggle.id="menuToggle";toggle.className="menu-toggle";toggle.type="button";toggle.innerHTML="<span></span><span></span><span></span>";topbar.prepend(toggle)}
toggle.setAttribute("aria-controls","appSidebar");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation menu");
const backdrop=document.createElement("button");backdrop.className="nav-drawer-backdrop";backdrop.type="button";backdrop.setAttribute("aria-label","Close navigation menu");document.body.append(backdrop);
const overview=[...content.children];const modulePane=document.createElement("section");modulePane.className="nav-workspace";modulePane.hidden=true;content.append(modulePane);
const setDrawer=open=>{document.body.classList.toggle("nav-drawer-open",open);toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu")};
toggle.addEventListener("click",()=>setDrawer(!document.body.classList.contains("nav-drawer-open")));backdrop.addEventListener("click",()=>setDrawer(false));document.addEventListener("keydown",e=>{if(e.key==="Escape")setDrawer(false)});
const showOverview=()=>{overview.forEach(el=>el.hidden=false);modulePane.hidden=true;document.getElementById("crumbScreen")&&(document.getElementById("crumbScreen").textContent="Overview")};
const showModule=(group,item)=>{overview.forEach(el=>el.hidden=true);modulePane.hidden=false;const active=item||group.items[0];modulePane.innerHTML='<header class="nav-workspace-head"><p class="eyebrow">Dashboard workspace</p><h1>'+group.title+'</h1><p>Select a title to open its individual screen below.</p></header><div class="module-tabs" role="tablist" aria-label="'+group.title+' screens">'+group.items.map(x=>'<button class="module-tab '+(x===active?'active':'')+'" type="button" role="tab" aria-selected="'+(x===active)+'" data-screen="'+x+'">'+(x==="Documents Received"?"Documents":x)+'</button>').join("")+'</div><article class="module-screen" aria-live="polite"><h2>'+active+'</h2><p>'+descriptions[active]+'</p><div class="screen-canvas"><div><strong>'+active+' workspace</strong><span>This screen is ready for its records, actions, and backend integration.</span></div></div></article>';document.getElementById("crumbScreen")&&(document.getElementById("crumbScreen").textContent=active);modulePane.querySelectorAll("[data-screen]").forEach(btn=>btn.addEventListener("click",()=>{showModule(group,btn.dataset.screen);markActive(group.title,btn.dataset.screen)}))};
const markActive=(group,item)=>{nav.querySelectorAll("button").forEach(b=>b.classList.remove("active"));nav.querySelector('[data-group="'+group+'"]')?.classList.add("active");if(item)nav.querySelector('[data-group="'+group+'"][data-item="'+item+'"]')?.classList.add("active")};
nav.innerHTML=model.map((g,i)=>g.items.length?'<div class="drawer-group" data-drawer-group="'+g.title+'"><button class="drawer-parent '+(i===0?'active':'')+'" type="button" data-group="'+g.title+'"><span class="drawer-label"><i>'+g.icon+'</i><span>'+g.title+'</span></span><span class="drawer-chevron">›</span></button><div class="drawer-children">'+g.items.map(x=>'<button class="drawer-child" type="button" data-group="'+g.title+'" data-item="'+x+'">'+x+'</button>').join("")+'</div></div>':'<button type="button" class="active" data-group="'+g.title+'"><i>'+g.icon+'</i><span>'+g.title+'</span></button>').join("");
nav.querySelectorAll(".drawer-parent").forEach(btn=>btn.addEventListener("click",()=>{const group=model.find(g=>g.title===btn.dataset.group),wrap=btn.closest(".drawer-group");nav.querySelectorAll(".drawer-group").forEach(x=>x!==wrap&&x.classList.remove("expanded"));wrap.classList.add("expanded");markActive(group.title,group.items[0]);showModule(group,group.items[0])}));
nav.querySelectorAll(".drawer-child").forEach(btn=>btn.addEventListener("click",()=>{const group=model.find(g=>g.title===btn.dataset.group);markActive(group.title,btn.dataset.item);showModule(group,btn.dataset.item);if(matchMedia("(max-width:900px)").matches)setDrawer(false)}));
nav.querySelector('[data-group="Overview"]').addEventListener("click",()=>{markActive("Overview");showOverview();setDrawer(false)});
setDrawer(false);showOverview();
};if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();})();