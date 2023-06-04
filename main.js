function PCreate(text, name){
  const headertext = document.createElement('p');
  headertext.className = name;
  headertext.innerText = text;
  
  return headertext;
}

function button(text, name){
  const button = document.createElement('button');
  button.className = name;
  button.innerText = text;

  return button;
}

function title(text,name){
  const h2 = document.createElement('h2');
  h2.className = name;
  h2.innerText = text;
  
  return h2;
}

 export function divCreate(name){
  const div = document.createElement('div');
  div.className = name;

  return div;
}

const body = document.querySelector('body');

const firstBodyContainer = divCreate('first-body-container');

const headerContainer = divCreate('header-container');
const headerDivOne = divCreate('first-header-div');
const headerDivTwo = divCreate('second-header-div');
const logoDiv = divCreate('logo')

headerDivOne.append(logoDiv);
headerDivOne.append(PCreate('Features', 'headerText'));
headerDivOne.append(PCreate('Pricing', 'headerText'));
headerDivOne.append(PCreate('Resources', 'headerText'));

headerDivTwo.append(PCreate('Login', 'headerText'));
headerDivTwo.append(button('Sign Up', 'button'));

headerContainer.append(headerDivOne);
headerContainer.append(headerDivTwo);

//SHOWCASE
const showcase = divCreate('showcase');
const showcaseContent = divCreate('showcase-content');
const showcaseImg = divCreate('showcase-img');


showcaseContent.append(title(`More than just shorter links`, 'showcase-title'))
showcaseContent.append(PCreate(
  "Build your brand's recognition and get detailed inslights on how your links are performing", 'showcase-p'));
showcaseContent.append(button('Get Started', 'button'));

const inputContainer = divCreate('input-container')
const inputText = document.createElement('input');
inputText.className = 'text-input';
inputText.placeholder = 'Shorten a link here...';

console.log(inputContainer)
  
inputContainer.append(inputText);
inputContainer.append(button('Shorten It!', 'shorten-btn'));
  
showcase.append(showcaseContent);
showcase.append(showcaseImg);
showcase.append(inputContainer);
  
firstBodyContainer.append(headerContainer)
firstBodyContainer.append(showcase);
  
body.append(firstBodyContainer);
  
// gray background 
const secondBodyContainer = divCreate('second-body-container');
const shortenLinkDisplay = divCreate('link-display');
  
const grayBackground = divCreate('gray-background');
grayBackground.append(secondBodyContainer);
  
const statsTitleDiv = divCreate('stats-title-container');

const statsTitle = title('Advanced Statistics', 'stats-title');
const statsP = PCreate(
  'Track how your links are proforming across the web with our advanced statistics dashboard', 
  'stats-p'
);

statsTitleDiv.append(statsTitle);
statsTitleDiv.append(statsP);

const statsBoxesContainer = divCreate('boxes-container');

const statsBoxOne = divCreate('stat-box-one');
const statsBoxTwo = divCreate('stat-box-two');
const statsBoxThree = divCreate('stat-box-three');

statsBoxOne.append(divCreate('img-one'))
statsBoxOne.append(title('Brand Recognition', 'box-title'))
statsBoxOne.append(PCreate(
  " Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.", 'box-text')
)

statsBoxTwo.append(divCreate('img-two'))
statsBoxTwo.append(title('Detailed Records', 'box-title'))
statsBoxTwo.append(PCreate(
  "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.", 'box-text')
)

statsBoxThree.append(divCreate('img-three'))
statsBoxThree.append(title('Full Customizable', 'box-title'))
statsBoxThree.append(PCreate(
  "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.", 'box-text')
)

statsBoxesContainer.append(statsBoxOne);
statsBoxesContainer.append(statsBoxTwo);
statsBoxesContainer.append(statsBoxThree);


body.append(grayBackground);
secondBodyContainer.append(shortenLinkDisplay);
secondBodyContainer.append(statsTitleDiv);
secondBodyContainer.append(statsBoxesContainer);

//boost you links today
const beforeFooter = divCreate('get-started');
const innerBeforeFooterDiv=divCreate('inner-before-foot-div');

innerBeforeFooterDiv.append(title('Boost your links today', 'boost-link'))
innerBeforeFooterDiv.append(button('Get Started', 'button'))

beforeFooter.append(innerBeforeFooterDiv);

body.append(beforeFooter);


//FOOTER
const footer = divCreate('footer');
const footerLogo = divCreate('footer-logo')
footerLogo.innerHTML = `
  <img src='./images/white-logo.svg'>
`;

const features = divCreate('features')
const resources = divCreate('resources')
const company = divCreate('company')
const social = divCreate('socials')

const facebookLogo = divCreate('facebook');
facebookLogo.innerHTML= `
  <i class="fa-brands fa-facebook"></i>
`;
const twitterLogo = divCreate('twitter');
twitterLogo.innerHTML= `
  <i class="fa-brands fa-twitter"></i>
`;
const pinterestLogo = divCreate('pinterest');
pinterestLogo.innerHTML= `
  <i class="fa-brands fa-pinterest"></i>
`;
const instagramLogo = divCreate('instagram');
instagramLogo.innerHTML= `
  <i class="fa-brands fa-instagram"></i>
`;

features.append(PCreate('Features', 'first'))
features.append(PCreate('Link Shortening', 'list'))
features.append(PCreate('Branded Links', 'list'))
features.append(PCreate('Analytics', 'list'))

resources.append(PCreate('Resources', 'first'))
resources.append(PCreate('Blog', 'list'))
resources.append(PCreate('Developers', 'list'))
resources.append(PCreate('Support', 'list'))

company.append(PCreate('Company', 'first'))
company.append(PCreate('About', 'list'))
company.append(PCreate('Our Team', 'list'))
company.append(PCreate('Careers', 'list'))
company.append(PCreate('Contact', 'list'))

social.append(facebookLogo)
social.append(twitterLogo)
social.append(pinterestLogo)
social.append(instagramLogo)

footer.append(footerLogo)
footer.append(features)
footer.append(resources)
footer.append(company)
footer.append(social)

body.append(footer);


