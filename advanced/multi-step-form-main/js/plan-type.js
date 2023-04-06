var planBtn = document.querySelector("#rd-plan");

function alterPlan(){
  //Toggle the plan type (Monthly or Yearly)
  var price = document.querySelectorAll(".option .price");
  var addonPrice = document.querySelectorAll(".option .addon-price");
  var yearly = document.querySelector("#yearly");
  var monthly = document.querySelector("#monthly");
  yearly.classList.toggle('active');
  monthly.classList.toggle('active');
  price.forEach((element) =>{
    element.classList.toggle('active');
  });  
  addonPrice.forEach((element) =>{
    element.classList.toggle('active');
  });  
}

planBtn.addEventListener("click", alterPlan);