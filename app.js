const initialPrice=document.querySelector("#Initial-price")
const quantity=document.querySelector("#Quantity-of-stocks")
const currentPrice=document.querySelector("#Current-price")
const btnCheck=document.querySelector(".btn")
const outputBox=document.querySelector(".output-box")


function submitHandler(){
    let ip=initialPrice.value
    let qty=quantity.value
    let cp=currentPrice.value
    calculateProfitLoss(ip,qty,cp)
}


function calculateProfitLoss(initial,quantity,current){
    
    if(initial>current ){
        // loss
        let loss=(initial-current)*quantity
        let lossPercentage=(loss / initial)*100
        console.log("clicked")

        showOutput(`Loss= ${loss} Loss  percentage =${lossPercentage}%`)
    }
    else if(initial<current){
        // profit
        let profit=(current-initial)*quantity
        profitPercentage=(profit/initial)*100
        showOutput(`Profit= ${profit}  .       Profit  percentage =${profitPercentage}%`)
        console.log("hello")
    }
    else{
        // equal
    }

}
function showOutput(message){
    outputBox.innerText=message
}
btnCheck.addEventListener("click",submitHandler)