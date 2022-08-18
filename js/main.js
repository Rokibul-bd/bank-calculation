// step 1 : add event lintener in the disposit button
document.getElementById('diposit-btn').addEventListener('click', function () {
    // step 2 : get the value in the input field 
    const dipositField = document.getElementById('diposit-field');
    const dipositAmountString = dipositField.value;
    const dipositAmount = parseFloat(dipositAmountString);
    // get the value in diposit display
    const dipositDisplay = document.getElementById('diposit-total');
    const dipositDisplayString = dipositDisplay.innerText;
    const dipositDisplayAmount = parseFloat(dipositDisplayString);
    // clear the diposit input value
    dipositField.value = ''
    if (dipositAmount >= 1) {
        const totalDipositAmount = dipositDisplayAmount + dipositAmount;
        dipositDisplay.innerText = totalDipositAmount;
        // Blance display add with diposit amount 
        const blanceField = document.getElementById('blance');
        const blanceFieldString = blanceField.innerText;
        const blance = parseFloat(blanceFieldString);
        blanceField.innerText = blance + dipositAmount;
    } else {
        alert('Please Enter your vaild Diposit Number');

    }
})

// withdrow button add event lintener
// step 1 : add event lintener
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // get the value in the withdraw display
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementAmoutString = withdrawTotalElement.innerText;
    const withdrawTotalElementAmout = parseFloat(withdrawTotalElementAmoutString);

    // subtraction money in the blance 
    const blanceField = document.getElementById('blance');
    const blanceFieldString = blanceField.innerText;
    const blance = parseFloat(blanceFieldString)
    if (withdrawAmount <= blance) {
        // add money in the display 
        const totalWithdrawBlance = withdrawAmount + withdrawTotalElementAmout;
        withdrawTotalElement.innerText = totalWithdrawBlance;
        // clear the input field
        withdrawField.value = ''
        const totalWithraw = blance - withdrawAmount;
        blanceField.innerText = totalWithraw;
    }
    else if (withdrawAmount >= blance) {
        alert(`Tor baper bank a $${withdrawAmount}  nei.. please Diposit money`)
        withdrawField.value = ''
    } else {
        alert('Please Enter a withdraw Amount Number')
    }

})