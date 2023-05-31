function headerPCreate(text){
  const headertext = document.createElement('p');
  headertext.className = 'headerText';
  headertext.innerText = text;
  
  return headertext;
}

const body = document.querySelector('body');

const headerContainer = document.createElement('header');
headerContainer.className = 'header-container';

const headerDivOne = document.createElement('div');
headerDivOne.className = 'first-header-div';

const headerDivTwo = document.createElement('div');
headerDivTwo.className = 'second-header-div';

const logoDiv = document.createElement('div');
logoDiv.className = 'logo';

headerDivOne.append(logoDiv);
headerDivOne.append(headerPCreate('Features'));
headerDivOne.append(headerPCreate('Pricing'));
headerDivOne.append(headerPCreate('Resources'));

headerDivTwo.append(headerPCreate('Login'));
headerDivTwo.append(headerPCreate('Sign Up'));

headerContainer.append(headerDivOne);
headerContainer.append(headerDivTwo);

body.append(headerContainer);

console.log(headerDivOne)
console.log(headerDivTwo)
console.log(headerContainer)





