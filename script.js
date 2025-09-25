let clicks = 0;
let clickers = false;
let clickeramount = 0;


let clickersprice = 10;

function buyclcks(){
    if (clicks >= clickersprice && clickers === true){
        document.getElementById("buyclickers").disabled = false
    }
    else{
        document.getElementById("buyclickers").disabled = true
    }
    document.getElementById("buyclickers").addEventListener("click", function(){
        clickeramount++
        clicks = clicks - clickersprice
    })
}




document.getElementById("btn").addEventListener("click", function(){
    clicks++;
    console.log(clicks);
    document.getElementById("num").innerText = clicks;


    if (clicks >= 10 && clickers === false){
    document.getElementById("buyclickers").disabled = false
}
    
    // if (clicks >= 10 && clickers === true ){
        
    // }

});

