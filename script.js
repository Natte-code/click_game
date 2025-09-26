let clicks = 0; // antal clicks

//extra clicks 
let extraclicks = 0; // extra clicks per clicker (kommer implementeras senare)
let extraclicksprice = 10; // priset på extra clicks (kommer öka med varje köp)
let xtraclicks = false;

//clickers 
let clickersprice = 10; // priset på clickers (kommer öka med varje köp)
let clickers = false; 
let clickeramount = 0;
let autotick = 5000; // hur ofta auto clickers ska klicka (i ms)
let cooldwnprice = 100; // priset för att minska cooldown på auto clickers

// buy btns
const buyBtn = document.getElementById("buyclickers");
const buyxbtn = document.getElementById("buyxclicks");
const timBtn = document.getElementById("tim");

// elements
const numEl = document.getElementById("num");
const btn = document.getElementById("btn");

// amounts
const clickeramountEl = document.getElementById("clickeramount");

//price counts
const clickerspriceEl = document.getElementById("clickersprice");
const priceclick = document.getElementById("pricexclck");
const extraclickspriceEl = document.getElementById("timemsbt");
const timebtwnEl = document.getElementById("timebtwnc");

///////////////////////////////////////////////////////////////////////////////////////////
// uppdaterar ui func
function updateUI(){
    numEl.innerText = clicks;
    clickeramountEl.innerHTML = clickeramount;
    priceclick.innerHTML = clickersprice;
    extraclickspriceEl.innerHTML = extraclicksprice;
    timebtwnEl.innerText = autotick + " ms";

    if (clicks >= clickersprice){
        buyBtn.disabled = false;
    } else {
        buyBtn.disabled = true;
    }

    if (clicks >= extraclicksprice){
        buyxbtn.disabled = false;
    } else {
        buyxbtn.disabled = true;
    }

    if (clickers === true && clickeramount >= 5 && clicks >= cooldwnprice){
        timBtn.disabled = false;
    } else {
        timBtn.disabled = true;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

// buy clickers
function buyclcks(){
    buyBtn.addEventListener("click", function(){
        if (clicks >= clickersprice){
            clickeramount++;
            clicks -= clickersprice;

            clickers = true;
            clickersprice = Math.floor(clickersprice * 1.5); // priset ökar

            if (clicks < 0) clicks = 0; // safety
            updateUI();
        } else {
            updateUI();
        }
    });
}

//decrease the time between auto clicks
function decreaseautotime(){
    timBtn.addEventListener("click", function(){
        if (clickeramount >= 5 && clicks >= cooldwnprice){
            autotick -= 50; 
            clicks -= cooldwnprice;
        
            if (clicks < 0) clicks = 0; // safety
            if (autotick < 100) autotick = 100; // minimum gräns

            clearInterval(autoInterval); // resetta intervallet
            autoInterval = setInterval(autoclicks, autotick);

            updateUI();
        } else {
            updateUI();
        }
    });
}

//buy extra clicks
function buyxclicks(){
    buyxbtn.addEventListener("click", function(){
        if (clicks >= extraclicksprice){
            extraclicks++;
            clicks -= extraclicksprice;

            extraclicksprice = Math.floor(extraclicksprice * 0.3); // priset ökar
            xtraclicks = true;

            if (clicks < 0) clicks = 0; // safety
            updateUI();
        } else {
            updateUI();
        }
    });
}

/*
adds clicks when clicking the button
*/
btn.addEventListener("click", function(){
    clicks++;

    if (extraclicks > 0){
        clicks += extraclicks;
    }
    updateUI();
});

//apply upgrades
function xtrclcksapply(){
    clicks += extraclicks;
    updateUI();
}

// auto clickers
let autoInterval = setInterval(autoclicks, autotick);
function autoclicks(){
    if (clickeramount > 0){
        clicks += clickeramount;
        updateUI();
    }
}

// init
decreaseautotime();
xtrclcksapply();
buyxclicks();
updateUI();
buyclcks();
