function createPass(){
    const passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passInput.value.match(passPattern)){
        return passField.classList.add('invalid');
    }
    passField.classList.remove('invalid');
}
function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value === ''){
        return cPassField.classList.add('invalid');
    }
    cPassField.classList.remove('invalid')
}
FormData.addEventListener('submit',(e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();
    emailInput.addEventListener('keyup', checkEmail);
    passInput.addEventListener('keyup', createPass);
    cPassInput.addEventListener('keyup', confirmPass);
});