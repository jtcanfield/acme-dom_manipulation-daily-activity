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
let parentPortfolioElement = document.getElementById("portfolio");
let unorderedList = document.createElement( "ul" );
parentPortfolioElement.appendChild( unorderedList );
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');
let listItem4 = document.createElement('li');

let h2element1 = document.createElement('h2');
h2element1.textContent = 'Boats';
listItem1.appendChild( h2element1 );
let h2element2 = document.createElement('h2');
h2element2.textContent = 'Hair Styles';
listItem2.appendChild( h2element2 );
let h2element3 = document.createElement('h2');
h2element3.textContent = 't Shirts';
listItem3.appendChild( h2element3 );
let h2element4 = document.createElement('h2');
h2element4.textContent = 'Dirt';
listItem4.appendChild( h2element4 );

let portfolioImage1 = document.createElement('img');
listItem1.appendChild( portfolioImage1 );
let portfolioImage2 = document.createElement('img');
listItem2.appendChild( portfolioImage2 );
let portfolioImage3 = document.createElement('img');
listItem3.appendChild( portfolioImage3 );
let portfolioImage4 = document.createElement('img');
listItem4.appendChild( portfolioImage4 );


/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
