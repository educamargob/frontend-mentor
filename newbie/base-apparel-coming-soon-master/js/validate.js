//Verify if the email is valid

const email = document.querySelector("#email");
const error = document.querySelector('.form-errors');

function eventFocusOut(event) {
    const email = event.currentTarget;
    const value = email.value;
    let pattern = /[a-z]@[a-z]/i;
    if(!pattern.test(value)){
        email.style.borderColor = 'var(--c-p1)';
        error.style.display = 'block';
    } else {
        email.style.borderColor = 'hsl(348, 16%, 82%)';
        error.style.display = 'none';
    }
}

email.addEventListener('focusout', eventFocusOut);
