function getValues(){
  //Get the Values
  var addons = [];

  var plan = document.querySelector('input[name="rGroup"]:checked').value
  var planType = document.querySelector('input[name="plan"]')
  if (planType.checked) {
    var planTypeV = planType.value;
  } else {
    var planTypeV = "Monthly";
  }
  var addon1 = document.querySelector('input[name="online"]')
  if (addon1.checked) {
    addons.push(addon1.value);
  }
  var addon2 = document.querySelector('input[name="large"]')
  if (addon2.checked) {
    addons.push(addon2.value);
  }
  var addon3 = document.querySelector('input[name="custom"]')
  if (addon3.checked) {
    addons.push(addon3.value);
  }
  showPlan(plan, planTypeV);
  calcValues(plan, planTypeV, addons)
}

function showPlan(plan, planType) {
  var planTitle = document.querySelector("#plan-title");
  planTitle.innerHTML = `${plan} (${planType})`
}

function calcValues(plan, planType, addons){
  var total = 0;
  var plans = {
    ArcadeMonthly : 9,
    AdvancedMonthly : 12,
    ProMonthly : 15,
    ArcadeYearly : 90,
    AdvancedYearly : 120,
    ProYearly : 150
  };
  var types = {
    Monthly : "mo",
    Yearly : "yr"
  }
  var addonTypes = {
    'Online service' : 1,
    'Larger storage' : 2,
    'Customizable profile' : 2
  }
  var planValue = document.querySelector("#plan-value");
  planValue.innerHTML = `$${plans[plan+planType]}/${types[planType]}`
  removeAddons();
  addons.forEach((element) =>{
    if(planType == 'Monthly'){
      var value = addonTypes[element];
    } else {
      var value = (addonTypes[element]*10);
    }
    total += value;
    createAddon(element,value);
  });

  total += plans[plan+planType];
  var planTotal = document.querySelector(".data-total");
  if (planType == 'Monthly') {
    planTotal.innerHTML = `<span class="font-1-s c-n0">Total (per month)</span>
    <span class="font-1-xx-s c-2">+$${total}/${types[planType]}</span>`
  } else {
    planTotal.innerHTML = `<span class="font-1-s c-n0">Total (per year)</span>
    <span class="font-1-xx-s c-2">+$${total}/${types[planType]}</span>`
  }
}


function createAddon(addon, value) {
  //show selected addon
  if (!document.querySelector('.data-addons')){
    var data = document.querySelector('.confirm-data');
    var addonList = document.createElement('div');
    addonList.classList.add('data-addons');
    data.appendChild(addonList);
  };
  var addonList = document.querySelector('.data-addons');
  var divAddon = document.createElement('div');
  divAddon.classList.add('data-addon');
  divAddon.innerHTML = `<span class='font-1-s c-n0'>${addon}</span><span>+$${value}/mo</span>`;
  addonList.appendChild(divAddon);
}

function removeAddons() {
  var addonList = document.querySelector('.data-addons');
  if(addonList){
    addonList.remove();
  }
}
