const copyButton = document.querySelectorAll('.copy-button');
const newLink = document.querySelector('.new-link');

console.log(copyButton.length)
if(copyButton.length === 1){
  copyButton.addEventListener('click', () => {
    console.log('worked')
    navigator.clipboard.writeText(newLink.innerText);
    copyButton.innerText = 'copied!'
    copyButton.style.background = '#3b3054'
  })
}

if(copyButton.length > 1){
  for(let i = 0; i <= copyButton.length; i++){
    copyButton.addEventListener('click', () => {
      console.log('worked')
      navigator.clipboard.writeText(newLink.innerText);
      copyButton.innerText = 'copied!'
      copyButton.style.background = '#3b3054'
    })
  }
}

