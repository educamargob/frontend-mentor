function urlCopy(event){
  const copied = document.querySelector('.copied');
  if(copied){
    copied.classList.remove('copied');
    copied.innerHTML = 'Copy';
  }
  const copyBtn = event.currentTarget;
  const div = copyBtn.parentElement;
  const copyLink = div.querySelector('span').innerHTML;
  navigator.clipboard.writeText(copyLink)
  .then(() => copyBtn.classList.add('copied'))
  .catch(err => console.error('Error: ', err));
  copyBtn.innerHTML = 'Copied!';
}

function copyEvent(itemsBtn) {
  itemsBtn.addEventListener('click', urlCopy);
}
