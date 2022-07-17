function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else {
        return getPin();
    }
}
function generatePin(){
    document.getElementById('pin-input').value = getPin();
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else {
        const prevCalcNumber = calcInput.value;
        const newCalcNumber = prevCalcNumber + number;
        calcInput.value = newCalcNumber;
    }
})

function verifyPin(){
    const pin = document.getElementById('pin-input').value;
    const typedPin = document.getElementById('calc-input').value;

    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    if(pin == typedPin){
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}