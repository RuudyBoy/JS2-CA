import { getExistingFavs } from "./utils/favFunctions.js";
import logoutButton from "./common/clearButton.js";

const favourites = getExistingFavs();

const articleContainer = document.querySelector(".article-container");

if (favourites.length === 0) {
    articleContainer.innerHTML =  `<div class="noFav">
    <h4 class"noFav"> No favorites added:(</h4>
    <a class="addFav" href="index.html"> Add Favorites here</a>
</div>`;
}

articleContainer.innerHTML +=  `<button id="logout"> Clear All</button>`;

favourites.forEach((favourite) => {
    articleContainer.innerHTML += ` 
                                <div class="article">
                                    <h4>${favourite.title}</h4>
                                    <i class="fa fa-star"></i>
                                </div>`;
logoutButton();
                            
});