// step 1 : add click event in submit button 
document.getElementById('log-btn').addEventListener('click', function () {
    // step 2 : input the email field
    // alwasy get input value get input.value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : get passowrd set in the html element
    const userPassword = document.getElementById('user-password');
    const passowrd = userPassword.value;
    // Do not verify not clinet site user and passowrd
    if (email === '123@gmail.com' && passowrd === '1234') {
        window.location.href = 'bank.html'
    } else {
        alert('Please Enter vaild User and Password')
    }

})