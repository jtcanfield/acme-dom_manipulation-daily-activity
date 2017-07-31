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



/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
