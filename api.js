import { divCreate} from "./main.js";

const shortenLinkBtn = document.querySelector('.shorten-btn');
const linkInput = document.querySelector('.text-input');
const shortenDisplay = document.querySelector('.link-display');


function getShortenLink(text){
  fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const shortenLinkDiv = divCreate('shorten-div');
    shortenLinkDiv.innerHTML = `
      <div class='original-link'>${text}</div>
      
      <div class='short-link'>
        <span class='new-link'>${data.result.full_short_link}</span>
        <button class='copy-button'>Copy</button>
      </div>
    `;

    shortenDisplay.append(shortenLinkDiv);
    linkInput.value = '';
    
    
    const copyButton = document.querySelector('.copy-button');
    const newLink = document.querySelector('.new-link');

  
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(newLink.innerText);
      copyButton.innerText = 'copied!'
      copyButton.style.background = '#3b3054'
    })
  })
  
}

shortenLinkBtn.addEventListener('click', () => {
  if(linkInput.value === '' || linkInput.value === null){
    alert('PLEASE ENTER A VALID URL!!!')
  }
  
  getShortenLink(linkInput.value);
})


