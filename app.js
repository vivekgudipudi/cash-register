const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1];


checkButton.addEventListener("click", function validateBillAmount() {
   hideMessage(); 
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const returnamount = cashGiven.value - billAmount.value;
            calculateChange(returnamount);


        }else{
            showMessage("Cash Given should be greater than or equal to bill amount");

        }
    } else {
        showMessage("The bill amount should be greater than 0");

    }
});

function hideMessage() {
    message.style.display = "none";
}

function calculateChange(returnamount) {
    for(let i = 0; i< availableNotes.length;i++){
        const numberOfNotes = Math.trunc(returnamount/availableNotes[i]);
        returnamount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }

}

function showMessage(text) {
    message.style.display = "block";
    message.innerText = text;
}