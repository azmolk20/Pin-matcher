document.querySelector(".generate-btn").addEventListener("click", function getPin(){
    document.querySelector(".form-control").value=randome();
})


function randome(){
    const pin = Math.round(Math.random() * 10000);
    const pinStrings = pin + '';
    if(pinStrings.length == 4){
    return pinStrings
    }
    else{
        return randome();
    }
}

function numbere(number){
    const old = document.getElementById("calcu").value
    document.getElementById("calcu").value =old + number;
}
function clears (){
    document.getElementById("calcu").value="";
}
document.getElementById("submit-btn").addEventListener("click", function(){
    const match = document.getElementById("calcu").value;
    const pin = document.querySelector(".form-control").value;
    if(match!=""& match==pin){
        document.getElementById("calcu").value="";
        document.getElementById("win").style.display="block";
        document.getElementById("lose").style.display="none";
    }
    else{
        
        document.querySelector(".form-control").value=randome();
        document.getElementById("lose").style.display="block";
        document.getElementById("win").style.display="none";
        document.getElementById("calcu").value="";
        chance();
    }
})

function chance() {
    const chance = document.getElementById("chance").innerText;
    const chances = parseInt(chance);
    const total = chances-1;
    document.getElementById("chance").innerText=total;
    if(total==0){
        document.getElementById("submit-btn").style.display="none"
document.getElementById("submit-btn").style.cursor="default";
    }
}