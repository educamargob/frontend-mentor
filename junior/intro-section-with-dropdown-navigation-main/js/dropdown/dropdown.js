const dropdowns = document.querySelectorAll('.dropdown-item');
const doc = document.querySelector('html')


function showDropdownMenu(element) {
//Show or hide the dropdown menu
    const dropdown = element;
    const menu = dropdown.querySelector('.dropdown-menu');
    
    menu.classList.toggle('active');
    dropdown.classList.toggle('active');
    if(menu.classList.contains('active')){
        dropdown.style.color = 'var(--c-3)'
    } else {
        dropdown.style.color = 'var(--c-2)'
    }
};

function menuEvent(dropdown){
//Check the click event in the dropdown button
    dropdown.addEventListener('click', function (event){
        event.stopPropagation();
        showDropdownMenu(event.currentTarget);
    });
};

function menuHide(dropdown){
//hide the dropdown if clicked outside, not activate in mobiles
    if(screen.width > 700){
        const menu = dropdown.querySelector('.dropdown-menu');
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
            dropdown.classList.remove('active');
        }
    }
}

document.documentElement.addEventListener("click", function () {
    dropdowns.forEach(menuHide);
  });

dropdowns.forEach(menuEvent);