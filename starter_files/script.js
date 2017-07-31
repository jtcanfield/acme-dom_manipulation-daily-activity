let portfolioData = [
    {
        img : "img/boat.jpg",
        h2 : "Boats"
    },
    {
        img : "img/hair.jpg",
        h2 : "Hair Styles"
    },
    {
        img : "img/shirts.jpg",
        h2 : "t Shirts"
    },
    {
        img : "img/dirt.jpg",
        h2 : "Dirt"
    }
];


/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/
let parentHeroElement = document.getElementById("hero");
let h1element = document.createElement( "h1" );
h1element.textContent = "ACME Design Studio";
parentHeroElement.appendChild( h1element );
let theParagraphUnderHero = document.createElement( "p" );
theParagraphUnderHero.textContent = "We are dedicated to producing the best designs in the world.";
parentHeroElement.appendChild( theParagraphUnderHero );
/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/
for (i = 0; i < portfolioData.length; i++){
  let parentPortfolioElement = document.querySelector('#portfolio > ul');
  let createli = document.createElement("li");
  let createimgElement = document.createElement("img");
  createimgElement.setAttribute("src", portfolioData[i].img)
  createli.appendChild(createimgElement);
  let createH2Element = document.createElement("h2");
  createH2Element.textContent = (portfolioData[i].h2);
  createli.appendChild(createH2Element);
  parentPortfolioElement.appendChild(createli);
}



/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
let navBar = document.querySelector("nav");
let listenButton = document.getElementById("dropdown");
listenButton.addEventListener("click", dropNavBar);
function dropNavBar(){
  navBar.classList.toggle('visible');
}
