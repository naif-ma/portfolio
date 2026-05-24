/* ==========================
PATCH JS
LIVE COUNTERS + EMAILS
INSTAGRAM + HERO FIXES
========================== */

/* ---------- FIX BOOT QUOTES ---------- */

const quotes = [

"Saving your time.",

"A look inside how your work gets done.",

"Managing operations professionally.",

"Helping your workflow move faster.",

"Organized systems. Better execution.",

"Turning busy work into smooth delivery."

];

let q = 0;

setInterval(()=>{

const quoteTarget =

document.getElementById(
"benefitText"
);

if(quoteTarget){

quoteTarget.style.opacity="0";

setTimeout(()=>{

q++;

quoteTarget.innerText =

quotes[
q % quotes.length
];

quoteTarget.style.opacity="1";

},250);

}

},1500);

/* ---------- FAST PREMIUM BOOT ---------- */

setTimeout(()=>{

const boot =
document.querySelector(
".boot"
);

if(boot){

boot.style.transition=
".45s";

boot.style.opacity=
"0";

boot.style.transform=
"scale(1.02)";

setTimeout(()=>{

boot.style.display=
"none";

},450);

}

},900);





/* ---------- HERO LIVE DASHBOARD ---------- */

const liveCards =

document.querySelectorAll(
".live-card h3"
);

const ranges = [

[12,16],
[4,8],
[2,5],
[6,10]

];

function updateLiveCards(){

liveCards.forEach((card,index)=>{

const min =
ranges[index][0];

const max =
ranges[index][1];

const value =

Math.floor(

Math.random() *
(max-min+1)

)+min;

card.textContent = value;

});

}

setInterval(
updateLiveCards,
3500
);

/* ---------- PROFESSIONAL LIVE EMAILS ---------- */








/* LIVE EMAILS — NO REPEATS */

const emailList =

document.querySelector(
".email-list"
);

const newProfessionalEmails=[

{
subject:
"New Project Coordination Request",

body:
`Hello Naif, 
We are currently restructuring internal workflow systems and require assistance with spreadsheets, reporting, research coordination, and operational communication.<br><br>

Best regards,<br>

Sarah Mitchell <br>
Operations Director`
},




{
subject:
"Research & Analytics Support Opportunity",

body:
`Hello Naif, 
We are seeking support for research organization, analytics reporting, data tracking, and workflow coordination across multiple active projects.

<br><br>Best regards,

<br>James Walker <br>
Business Strategy Lead`
},



{
subject:
"Digital Workflow Expansion Inquiry",

body:
`Hello Naif, 
Our team is expanding reporting, scheduling, documentation, and spreadsheet systems.

Your operational style appears highly relevant to our current needs.

<br><br>Best regards,

 <br>Olivia Bennett <br>
Administrative Manager`
}

];

/* TRACK USED EMAILS */

let emailQueue=[
...newProfessionalEmails
];

/* ADD NEW MAIL */

function addNewEmail(){

if(

emailQueue.length===0

){

return;

}

const current=

emailQueue.shift();

const email=

document.createElement(
"div"
);

email.className=
"email new-mail";

email.innerHTML=`

<div class="new-label">

✉ NEW EMAIL RECEIVED

</div>

<b>

${current.subject}

</b>

<br><br>

${current.body}

`;

if(emailList){

emailList.prepend(
email
);

}

setTimeout(()=>{

email.classList.remove(
"new-mail"
);

},5000);

}

/* ARRIVAL */

setInterval(

()=>{

if(

emailQueue.length>0

){

addNewEmail();

}

},

22000

);













/* ---------- INSTAGRAM COUNTERS ---------- */

const instaMetrics =

document.querySelectorAll(
".metric h2"
);

let instaStarted = false;

function animateValue(

element,

start,

end,

duration

){

let current = start;

const increment =

(end-start)/
(duration/30);

const timer =

setInterval(()=>{

current += increment;

if(current >= end){

current = end;

clearInterval(timer);

}

element.textContent =

Math.floor(current)
.toLocaleString();

},30);

}

function startInstagramCounters(){

if(instaStarted)
return;

instaStarted=true;

if(instaMetrics[0])

animateValue(
instaMetrics[0],
120,
214,
2000
);

if(instaMetrics[1])

animateValue(
instaMetrics[1],
20,
71,
2000
);

if(instaMetrics[2])

animateValue(
instaMetrics[2],
80,
214,
2000
);

if(instaMetrics[3])

animateValue(
instaMetrics[3],
400,
3200,
2200
);

}

window.addEventListener(
"scroll",
()=>{

const instaSection =

document.getElementById(
"instagram"
);

if(!instaSection)
return;

const pos =

instaSection
.getBoundingClientRect()
.top;

if(pos < window.innerHeight-200){

startInstagramCounters();

}

});

/* ---------- BETTER NOTIFICATIONS ---------- */

function premiumNotification(text){

const box =

document.querySelector(
".notification-box"
);

if(!box)
return;

const note =

document.createElement(
"div"
);

note.className=
"notification";

note.innerText=text;

box.appendChild(note);

setTimeout(()=>{

note.style.opacity="0";

setTimeout(()=>{

note.remove();

},500);

},4000);

}

/* ---------- CONTACT CARDS HOVER ---------- */

const contactCards =

document.querySelectorAll(
".contact-btn"
);

contactCards.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.boxShadow=

"0 0 40px rgba(255,255,255,.20)";

});

card.addEventListener(
"mouseleave",
()=>{

card.style.boxShadow="";

});

});









/* YOUTUBE LIVE METRICS */

let youtubeStarted=false;

function smoothCounter(

element,
start,
target,
duration,
suffix

){

let current=start;

const step=(target-start)/(duration/60);

const interval=setInterval(()=>{

current+=step;

if(current>=target){

current=target;

clearInterval(interval);

}

if(suffix==="CTR"){

element.textContent=

current.toFixed(1)

+"%";

}

else if(suffix==="WATCH"){

element.textContent=

current.toFixed(1)

+" HRS";

}

else if(suffix==="RETENTION"){

element.textContent=

Math.floor(current)

+"%";

}

else{

element.textContent=

"+"

+

Math.floor(current);

}

},60);

}

window.addEventListener(

"scroll",

()=>{

const yt=

document.getElementById(
"youtube"
);

if(!yt)
return;

const position=

yt
.getBoundingClientRect()
.top;

if(

position

<

window.innerHeight-180

&&

!youtubeStarted

){

youtubeStarted=true;

document
.querySelectorAll(
".yt-card"
)
.forEach(card=>{

card.classList.add(
"live"
);

});

smoothCounter(

document.getElementById(
"ctrMetric"
),

6.2,

8.7,

7000,

"CTR"

);

smoothCounter(

document.getElementById(
"watchMetric"
),

12.4,

18.4,

8500,

"WATCH"

);

smoothCounter(

document.getElementById(
"retentionMetric"
),

58,

71,

7800,

"RETENTION"

);

smoothCounter(

document.getElementById(
"subsMetric"
),

92,

204,

10000,

"SUB"

);

}

});









/* ==========================
SMART NAVBAR
========================== */

let lastScroll=0;

const nav=
document.querySelector(
".top-nav"
);

window.addEventListener(

"scroll",

()=>{

const current=

window.pageYOffset;

if(

current>lastScroll

&&

current>120

){

nav.classList.add(
"nav-hide"
);

}

else{

nav.classList.remove(
"nav-hide"
);

}

lastScroll=current;

});

/* MOBILE BURGER */

const burger=

document.getElementById(
"burger"
);

burger.addEventListener(

"click",

()=>{

burger.classList.toggle(
"active"
);

nav.classList.toggle(
"mobile-open"
);

});



function copyEmail(){

navigator.clipboard.writeText(
"naifmashook786@gmail.com"
);

const toast=

document.createElement(
"div"
);

toast.className=
"copy-toast";

toast.innerHTML=

"⚡ Email copied successfully";

document.body.appendChild(
toast
);

setTimeout(()=>{

toast.classList.add(
"show"
);

},40);

setTimeout(()=>{

toast.classList.remove(
"show"
);

setTimeout(()=>{

toast.remove();

},450);

},2600);

}