//Verify if the email is valid

const email = document.querySelector("#email");
const submitBtn = document.querySelector(".form button");
const error = document.querySelector('.form-errors');
const errorIco = document.querySelector('.error-icon');



submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const value = email.value;
    let pattern = /[a-z]@[a-z]/i;
    if(!pattern.test(value)){
        email.style.borderColor = 'var(--c-p1)';
        error.style.display = 'block';
        error.innerText = "Please provide a valid email";
        errorIco.style.display = 'block';
    }else {
        alert("GOOD JOB!")
    }
    
});

document.getElementById("email").addEventListener("keyup", function () {
    email.style.borderColor = 'hsl(348, 16%, 82%)';
    error.style.display = 'none';
    errorIco.style.display = 'none';
});