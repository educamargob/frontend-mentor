const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

document.addEventListener("mouseup", menuHide);

menuButton.addEventListener('click', function(){
  menu.classList.toggle("active")
});

function menuHide(event){
  //hide the menu if clicked outside, not activate in mobiles
    if(!menu.contains(event.target) && !menuButton.contains(event.target)){
      if(menu.classList.contains('active')){
        menu.classList.remove('active');
      }
    }
  }
