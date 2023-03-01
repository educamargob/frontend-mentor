const dropdowns = document.querySelectorAll('.dropdown-item');
const doc = document.querySelector('html')


  

function showMenu(element) {
    const dropdown = element;
    const menu = dropdown.querySelector('.dropdown-menu');
    
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        dropdown.style.color = 'var(--c-3)'
    } else {
        dropdown.style.color = 'var(--c-2)'
    }
};

function menuEvent(dropdown){
    dropdown.addEventListener('click', function (event){
        event.stopPropagation();
        showMenu(event.currentTarget);
    });
};

function menuHide(dropdown){
    const menu = dropdown.querySelector('.dropdown-menu');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
}

document.documentElement.addEventListener("click", function () {
    dropdowns.forEach(menuHide);
  });

dropdowns.forEach(menuEvent);




//Verify if the email is valid

// const email = document.querySelector("#email");
// const submitBtn = document.querySelector(".form button");
// const error = document.querySelector('.form-errors');
// const errorIco = document.querySelector('.error-icon');



// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     const value = email.value;
//     let pattern = /[a-z]@[a-z]/i;
//     if(!pattern.test(value)){
//         email.style.borderColor = 'var(--c-p1)';
//         error.style.display = 'block';
//         error.innerText = "Please provide a valid email";
//         errorIco.style.display = 'block';
//     }else {
//         alert("GOOD JOB!")
//     }
    
// });

// document.getElementById("email").addEventListener("keyup", function () {
//     email.style.borderColor = 'hsl(348, 16%, 82%)';
//     error.style.display = 'none';
//     errorIco.style.display = 'none';
// });