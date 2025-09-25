let clicks = 0; // antal clicks
let clickers = false; 
let clickeramount = 0; // hur många clickers
let extraclicks = 0; // extra clicks per clicker (kommer implementeras senare)

let autotick = 5000; // hur ofta auto clickers ska klicka (i ms)


let clickersprice = 10; // priset på clickers (kommer öka med varje köp)

const buyBtn = document.getElementById("buyclickers");
const numEl = document.getElementById("num");
const btn = document.getElementById("btn");
const clickeramountEl = document.getElementById("clickeramount");
const clickerspriceEl = document.getElementById("clickersprice");


//list to do:
// cookies för att spara progression?
// upgrades.
// - extra clicks per clicker
// - snabbare auto clickers
// - gamble funktion

///////////////////////////////////////////////////////////////////////////////////////////
// uppdaterar ui func
function updateUI(){
    numEl.innerText = clicks;
    clickeramountEl.innerHTML = clickeramount;
    priceclick.innerHTML = clickersprice;
    
    if (clicks >= 10 && clickers === false){
    document.getElementById("buyclickers").disabled = false
}
}
//////////////////////////////////////////////////////////////////////////////////////////



function buyclcks(){ // buy clicks and checks if you can buy it func
    //todo: add exponential pris ökning
    buyBtn.addEventListener("click", function(){
        if (clicks >= 10 && clicks >= clickersprice){
            clickeramount++;
            clicks -= clickersprice;

            if (clicks < 0) clicks = 0; // gör så den inte kan bli negativ (hoppas det iallafal)
            clickers = true;
            updateUI();
        }
        else{
            updateUI();
        }
    });
}

btn.addEventListener("click", function(){
    clicks++;
    updateUI();
});

setInterval(autoclicks, autotick);
function autoclicks(){
    if (clickeramount > 0){
        clicks += clickeramount;
        updateUI();
    }
}






updateUI();
buyclcks();

























// // buying clickers and incresing the price
// function buyclcks(){
//     if (clicks >= clickersprice && clickers === true){
//         document.getElementById("buyclickers").disabled = false
//     }
//     else if (clicks < 10){
//         document.getElementById("buyclickers").disabled = true
//     }
    
//     document.getElementById("buyclickers").addEventListener("click", function(){
//         clickeramount++
//         clicks = clicks - clickersprice
//         document.getElementById("num").innerText = clicks;
//     })

    
// }

// function updateUI(){
//     document.getElementById("num").innerText = clicks;
//     document.getElementById("clickeramount").innerText = clickeramount;
//     document.getElementById("clickersprice").innerText = clickersprice;
// }


// document.getElementById("btn").addEventListener("click", function(){
//     clicks++;
//     console.log(clicks);
//     document.getElementById("num").innerText = clicks;




// });


updateUI();
buyclcks();