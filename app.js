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
        
        let loss=(initial-current)*quantity
        let lossPercentage=(loss / initial)*100
        

        showOutput(`Loss= ${loss} Loss  percentage =${lossPercentage}%`)
    }
    else if(initial<current){
       
        let profit=(current-initial)*quantity
        profitPercentage=(profit/initial)*100
        showOutput(`Profit= ${profit} Profit  percentage =${profitPercentage}%`)
        
    }
    else{
        
    }

}
function showOutput(message){
    outputBox.innerText=message
}
btnCheck.addEventListener("click",submitHandler)
