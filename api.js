const shortenLinkBtn = document.querySelector('.shorten-btn');
const linkInput = document.querySelector('.text-input');
const shortenDisplay = document.querySelector('.link-display');



fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
.then(res => res.json())
.then(data => {
  console.log(data)
})