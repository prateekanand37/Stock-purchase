const totalBill= document.querySelector("#total-bill")
const cashGiven=document.querySelector("#cash-given")
const checkBtn=document.querySelector("#check-btn")
const errorMsg=document.querySelector("#error-msg")
const notesCount=document.querySelectorAll(".no-of-notes")


availCurrency=[2000,500,100,20,10,5,1]
checkBtn.addEventListener("click",function validateTotalBill(number){ console.log("clicked")
    errorMsg.style.display="none";
    if(totalBill.value > 0 ){
        if(cashGiven.value > totalBill.value || cashGiven.value===totalBill.value){
         let amountToBeReturned=cashGiven.value - totalBill.value
         calculateChange(amountToBeReturned)
        }
        else{
            printMsg("Cash provided should be equal or more than the Total bill amount")
        }
    }
    else{
     printMsg("Total bill amount should be greater than 0");
    }
})
function printMsg(msg){
    errorMsg.style.display="block";
    errorMsg.innerText=msg;
}
function calculateChange(amountToBeReturned){
    for(let i=0;i<availCurrency.length;i++){
    const numberOfNotes=Math.trunc(amountToBeReturned/availCurrency[i])
    amountToBeReturned%=availCurrency[i]
    notesCount[i].innerText=numberOfNotes
}}