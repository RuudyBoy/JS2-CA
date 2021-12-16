import { getExistingFavs } from "./utils/favFunctions.js";
import logoutButton from "./common/clearButton.js";


const favourites = getExistingFavs();

const productContainer = document.querySelector(".products-container");

if (favourites.length === 0) {
    productContainer.innerHTML =  `<div class="noFav">
    <h4> "No favorites added:("</h4>
    <a class="addFav-button" href="index.html"> Add Favorites here</a>
</div>`;
}

productContainer.innerHTML +=  
` 
<button id="logout"> Clear All</button>
`;



favourites.forEach((favourite) => {
    productContainer.innerHTML += ` 
                                <div class="product">
                                    <h4>${favourite.title}</h4>
                                    <i class="fa fa-heart"></i>
                                </div>`;
logoutButton();
                            
});