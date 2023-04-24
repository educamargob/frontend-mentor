var tabs = document.querySelectorAll(".form-tab");
var barItems = document.querySelectorAll(".bar-item");
var currentTab = 0
showTab(currentTab);



function showTab(tab) {
  //show the called tab
  if(tab == 4){
    var form = document.querySelector('form');
    var thanks = document.querySelector('.thanks-page');
    form.style.display = 'none';
    thanks.style.display = 'flex';

  }else {
    var nextBtn = document.querySelector("#nextBtn");
    tabs[tab].classList.add('active');
    barItemSelected(tab);
    if (tab == 0){
      document.querySelector("#backBtn").style.display = "none";
      document.querySelector(".buttons").style.justifyContent = "end";
    } else{
      document.querySelector(".buttons").style.justifyContent = "space-between";
      document.querySelector("#backBtn").style.display = "block";
    }
    
    if (tab == (tabs.length - 1)){
      getValues();
      nextBtn.innerHTML = "Confirm";
      nextBtn.classList.add("c-2");
    } else {
      nextBtn.innerHTML = "Next Step";
      nextBtn.classList.remove("c-2");
    }
  }
}

function barItemSelected(n){
  barItems.forEach((element) =>{
    element.classList.remove('active');
  });

  for(let i = 0; i <= n; i++){
    barItems[i].classList.add('active');
  };
}


function nextBack(n) {
  //function to show the back or next tab
  tabs[currentTab].classList.remove("active");
  currentTab = currentTab + n;

  if (currentTab >= tabs.length) {
    document.querySelector("form").submit;
  }
  showTab(currentTab);
}

function openTab(n) {
  //Open a selected tab from side bar
  tabs[currentTab].classList.remove("active");
  currentTab = n;

  if (currentTab >= tabs.length) {
    document.querySelector("form").submit;
  }
  showTab(currentTab);
}