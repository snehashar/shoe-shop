const body = document.body;
let cartCount = 0;

const loadingpage=document.createElement("div")
loadingpage.style.width="100%"
loadingpage.style.height="100%"
loadingpage.style.backgroundColor="black"
loadingpage.textContent="welcome to shoe shop...."
loadingpage.style.color="white"
loadingpage.style.display = "flex";
loadingpage.style.alignItems = "center";
loadingpage.style.justifyContent = "center";
loadingpage.style.fontSize = "2em";
loadingpage.style.zIndex = "1000";
loadingpage.style.position = "fixed";
body.appendChild(loadingpage)

setTimeout(()=>{
    createpagecontent();
    loadingpage.style.display="none";
},1000);

function createpagecontent(){
const nav = document.createElement("div");
nav.style.background = "#080B6C";
nav.style.width = "100%";
nav.style.height = "10vh";
nav.style.display = "flex";
nav.style.flexDirection = "row";
nav.style.alignItems = "center";
nav.style.gap = "20vw";
nav.style.overflow = "hidden";
nav.style.position = "fixed";
nav.style.top = "0";  // Navbar ko top par fix karne ke liye
nav.style.zIndex = "1000"; // Navbar ko sabse upar dikhane ke liye
nav.style.padding = "0 2vw";

const shoes = document.createElement("h1");
shoes.textContent = "ShoeShop";
shoes.style.fontFamily = "sans-serif";
shoes.style.color = "#A8D8F7";
shoes.style.marginLeft = "2vw";

const signup = document.createElement("h4");
signup.textContent = "SignUp";
signup.style.color = "white";
signup.style.fontFamily = "sans-serif";
signup.style.cursor = "pointer";
signup.style.marginLeft = "auto";
signup.style.marginRight = "2vw";

const btn = document.createElement("button");
btn.style.display = "flex";
btn.style.flexDirection = 'row';
btn.style.alignItems = "center";
btn.style.justifyContent = "space-between";
btn.style.padding = "1vw";
btn.style.backgroundColor = "#89C5FD";
btn.style.color = "white";
btn.style.marginRight = "3vw";
btn.style.gap = "1vw";
btn.style.width = "5vw";
btn.style.height = "6vh";
btn.style.borderRadius = "2vw";
btn.style.border = "none";
btn.style.boxShadow = "black";
btn.style.fontSize = "1.2em";

const number = document.createElement("h3");
number.textContent = 0;
btn.appendChild(number);

const icon = document.createElement("i");
icon.className = "ri-shopping-cart-2-line"; 
icon.style.fontSize = "1em";
icon.style.color = "white";

btn.appendChild(icon);
nav.appendChild(btn);
nav.appendChild(shoes);
nav.appendChild(signup); // Add signup to nav
body.appendChild(nav);

signup.addEventListener("click",()=>{
    window.location.href="form.html"
})


const themebtn = document.createElement("button");
themebtn.textContent = "Theme"; 
themebtn.style.padding = "0.5em 1em";
themebtn.style.marginLeft = "2vw";
themebtn.style.cursor = "pointer";
themebtn.style.backgroundColor="black";
themebtn.style.color="white";
themebtn.style.marginRight="8vw"

themebtn.addEventListener("click",()=>{
    if(themebtn.style.backgroundColor==="white"){
        themebtn.style.backgroundColor="black";
        themebtn.style.color="white";
    }
    else{
         themebtn.style.backgroundColor="white";
        themebtn.style.color="black";
    }
})

// Create page1
const page1 = document.createElement("div");
page1.style.width = "100%";
page1.style.height = "110vh";
page1.style.backgroundColor = "#E0FFFF"; // Light background color
page1.style.paddingTop = "10vh"; // To avoid overlap with fixed navbar
page1.style.paddingBottom = "1vw";
page1.style.overflow = "hidden";
body.appendChild(page1);

// Add the theme button
nav.appendChild(themebtn);

// Create dark theme styles
const style = document.createElement('style');
style.textContent = `
.dark-theme {
    background-color: black; 
    color: white; 
}

.dark-theme h1, 
.dark-theme h2 {
    color: white; 
}

.card {
    background-color: white; 
    color: black; 
}

.dark-theme .card {
    background-color: #333; 
    color: white;
}
`;
document.head.appendChild(style);

// Add event listener to the theme button
themebtn.addEventListener("click", () => {
    page1.classList.toggle("dark-theme");
    nav.classList.toggle("dark-theme");
})

// Heading
const heading = document.createElement("h1");
heading.textContent = "Our Services";
heading.style.fontFamily = "sans-serif";
heading.style.fontSize = "3em";
heading.style.textAlign = "center";
heading.style.marginTop = "5vw";
page1.appendChild(heading);

const cardsContainer = document.createElement("div");
cardsContainer.style.width = "100%";
cardsContainer.style.height = "85vh"; 
cardsContainer.style.display = "flex";
cardsContainer.style.alignItems = "center";
cardsContainer.style.flexDirection = "row";
cardsContainer.style.padding = "1vw";
cardsContainer.style.gap = "3vw";
page1.appendChild(cardsContainer);

// Card creation function
function createCard(imagesource, textcontent, price) {
    const card = document.createElement('div');
    card.className = "card"; // Assign a class for easier styling
    card.style.width = "30%";  
    card.style.height = "95%"; 
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.borderRadius = "2vw"; 
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"; 

    const carddiv1 = document.createElement("div");
    carddiv1.style.height = "50%";
    carddiv1.style.width = "100%";
    carddiv1.style.display = "flex";
    carddiv1.style.alignItems = "center";
    carddiv1.style.justifyContent = "center";

    const img = document.createElement("img");
    img.src = imagesource; 
    img.style.objectFit = "cover"; 
    img.style.height = "40vh";
    img.style.width = "70%";

    carddiv1.appendChild(img);
    card.appendChild(carddiv1);
    
    const h1 = document.createElement("h1");
    h1.textContent = textcontent;
    h1.style.fontFamily = "sans-serif";
    h1.style.textAlign = "center";
    card.appendChild(h1);

    const cost = document.createElement("h2");
    cost.textContent = `Price: $${price}`;
    cost.style.textAlign = "center";
    card.appendChild(cost);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.style.backgroundColor = "black";
    button.style.border = "solid black 1px";
    button.style.borderRadius = "2vw";
    button.style.color = "white";
    button.style.width = "20vw";
    button.style.height = "7vh";
    button.style.marginLeft = "5vw";
    
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "transparent";
        button.style.color = "black";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    });
    
    button.addEventListener("click", () => {
        cartCount++;
        number.textContent = cartCount;
        alert(`${textcontent} of price $${price} is added to your cart`);
    });
    
    card.appendChild(button);
    return card;
}

const firstCard = createCard("img1.png", "Nike Air Max", 120);
const secondCard = createCard("img2.png", "Adidas Superstar", 100);
const thirdCard = createCard("img3.png", "Puma Suede", 90);

cardsContainer.appendChild(firstCard);
cardsContainer.appendChild(secondCard);
cardsContainer.appendChild(thirdCard); 
}