

let form = document.querySelector('#loginForm');
let email = document .querySelector('#email');
let password = document.querySelector('#password');
let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');
let resultMsg = document.querySelector('#resultMessage');
let togglePassword = document.querySelector('#togglePassword');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function showError(input, errorEl, message){
    input.classList.add('error-border');
    input.classList.remove('success');
    errorEl.textContent = message;
}

function showSuccess(input, errorEl){
    input.classList.add('success');
    input.classList.remove('error-border');
    errorEl.textContent = '';
}

function emailValidate(){

    const emailValue = email.value.trim();

    if(emailValue === ''){
        showError(email, emailError, 'Please Enter Email');
        return false;
    }
    if(!emailRegex.test(emailValue)){
        showError(email,emailError, 'Enter Valid Email');
        return false;
    }
        showSuccess(email, emailError);
        return true;
}

function passwordValidate(){

    const passwordValue = password.value.trim();

    if(passwordValue === ''){
        showError(password, passwordError, 'Please Enter Password');
        return false;
    }
    if(!passwordRegex.test(passwordValue)){
        showError(password, passwordError, 'Min 8 char, uppercase, special and Numbers');
        return false;
    }
        showSuccess(password, passwordError);
        return true;
}

email.addEventListener('blur', emailValidate);
password.addEventListener('blur', passwordValidate);

email.addEventListener('input', () => {
    if(emailRegex.test(email.value)){
        showSuccess(email, emailError);
    }
})

password.addEventListener('input', () => {
    if(passwordRegex.test(password.value)){
        showSuccess(email, emailError);
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isEmailValid = emailValidate();
    let isPasswordValid = passwordValidate();

    if(isEmailValid && isPasswordValid){
        resultMsg.textContent = 'Login Success';
        form.reset();
    }
})

togglePassword.addEventListener('click', () => {
    const isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    togglePassword.textContent = isHidden ? '🙈' : '👁';
})