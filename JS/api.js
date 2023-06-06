import { divCreate} from "./main.js";

const shortenLinkBtn = document.querySelector('.shorten-btn');
const linkInput = document.querySelector('.text-input');
const shortenDisplay = document.querySelector('.link-display');

async function fetchData(text){
  try{
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
    
    const data = await response.json();
    
    return data;
  }
  catch(err){
    console.log('FETCH ERRORRR', err)
    throw err;
  }
}

shortenLinkBtn.addEventListener('click', () => {
  if(linkInput.value === '' || linkInput.value === null){
    alert('PLEASE ENTER A VALID URL!!!')
  }
  
  fetchData(linkInput.value)
  .then(data => {
    const shortenLinkDiv = divCreate('shorten-div');
    shortenLinkDiv.innerHTML = `
    <div class='original-link'>${linkInput.value}</div>
    
    <div class='short-link'>
    <span class='new-link'>${data.result.full_short_link}</span>
    <button class='copy-button'>Copy</button>
    </div>
    `;
    
    return shortenLinkDiv;
  })
  .then(data => {
    shortenDisplay.append(data);
    linkInput.value = '';

    return document.querySelector('.copy-button');
  })
  .then(copyButton => {
    const newLink = document.querySelector('.new-link');

    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(newLink.innerText);
      copyButton.innerText = 'copied!'
      copyButton.style.background = '#3b3054'
    })
  })
  .catch(err => {
    console.log(err);
  })
})



