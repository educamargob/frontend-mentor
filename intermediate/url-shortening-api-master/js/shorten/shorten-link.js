//Verify if the email is valid

const link = document.querySelector("#link");
const submitBtn = document.querySelector("form button");
const error = document.querySelector('.form-error');

function createShortenItem(shortLink, fullLink){
  //Create list element to show shorten link
  const list = document.querySelector(".shorten-items");

  const listItem = document.createElement("li");
  listItem.classList.add('shorten-item', 'font-1-m');
  list.appendChild(listItem);

  //Create Subelements with shorten link
  const link = document.createElement("span");
  link.innerHTML = fullLink;
  link.classList.add('font-1-m');
  listItem.appendChild(link);
  
  const shorten = document.createElement("div");
  shorten.classList.add('link', 'c-1');
  listItem.appendChild(shorten);
  
  const shortenLink = document.createElement("span");
  shortenLink.innerHTML = shortLink;
  const shortenBtn = document.createElement("button");
  shortenBtn.classList.add('button', 'copy');
  shortenBtn.innerText = "Copy";

  shorten.appendChild(shortenLink);
  shorten.appendChild(shortenBtn);
  statusLink("ok");
  const itemsBtn = document.querySelectorAll('.shorten-item button');
  itemsBtn.forEach(copyEvent);
}


function statusLink(status) {
  if (status == "ok"){
    submitBtn.innerText = 'Shorten It!';
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "var(--c-1)";
    submitBtn.style.cursor = "pointer";
    link.classList.remove('error');
    error.classList.remove('active');
  }else if(status == "wait"){
    submitBtn.innerText = 'Generating...';
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "var(--c-n2)";
    submitBtn.style.cursor = "wait";
  }else if (status == "error") {
    submitBtn.innerText = 'Error!';
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "var(--c-3)";
    submitBtn.style.cursor = "not-allowed";
    link.classList.add('error');
    error.classList.add('active');
    error.innerText = "Please add a valid link";
  };
}

async function shortenLink(link) {
// Calling SHRTCODE API and using the values from JSON
  const fullLink = link.value;
  const url = `https://api.shrtco.de/v2/shorten?url=${fullLink}`
  const data = await fetch(url);
  const resp = await data.json();
  if(!resp.ok){
    statusLink("error");
  }else {
    const shortLink = resp.result.full_short_link;
    createShortenItem(shortLink, fullLink);
  }
}


submitBtn.addEventListener('click', function (event) {
  //Validate the URL 
  event.preventDefault();
  const value = link.value;
  if(!value){
      statusLink("error");
  }else{
      statusLink("wait");
      shortenLink(link);
      link.value = '';
  }
});

link.addEventListener("keyup", function () {
  statusLink("ok");
});