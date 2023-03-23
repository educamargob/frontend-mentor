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
  submitBtn.innerText = 'Shorten It!';
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = "var(--c-1)";
  submitBtn.style.cursor = "pointer";
  const itemsBtn = document.querySelectorAll('.shorten-item button');
  itemsBtn.forEach(copyEvent);
}

async function shortenLink(link) {
// Calling SHRTCODE API and using the values from JSON
  const fullLink = link.value;
  const url = `https://api.shrtco.de/v2/shorten?url=${fullLink}`
  const data = await fetch(url);
  const resp = await data.json();
  const shortLink = resp.result.full_short_link;
  createShortenItem(shortLink, fullLink);
}


submitBtn.addEventListener('click', function (event) {
  //Validate the URL 
  event.preventDefault();
  const value = link.value;
  // Pattern found in https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript Thank You
  let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if(!pattern.test(value)){
      link.classList.add('error');
      error.classList.add('active');
      error.innerText = "Please provide a valid link";
  }else{
      submitBtn.innerText = 'Generating...';
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "var(--c-n2)";
      submitBtn.style.cursor = "wait";
      shortenLink(link);
      link.value = '';
  }
});

link.addEventListener("keyup", function () {
  link.classList.remove('error');
  error.classList.remove('active');
});