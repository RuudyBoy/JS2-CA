import { getExistingFavs } from "./utils/favFunctions.js";


const url ="http://localhost:8060/articles/";

const productContainer = document.querySelector (".product-container");


   async function getProducts() {

	try {
        const response = await fetch(url);
        const products = await response.json();

        console.log(products);

        const favourites = getExistingFavs();

        products.forEach((product) => {

            let cssClass = "far";

            const doesObjectExist = favourites.find(function(fav) {
                console.log(fav);

                return parseInt (fav.id) === product.id;
             });

            console.log(doesObjectExist);

            if (doesObjectExist) {
                cssClass = "fa";
            }

            productContainer.innerHTML += `<div class="product">
            <h4> ${product.title} </h4>
            <p>  ${product.summary} </p>
            <p> Author: ${product.author} </p>
            <i class="${cssClass} fa-star" data-id="${product.id}" data-title="${product.title}"> </div>`
        });


        


        const favButtons = document.querySelectorAll(".product i");

        favButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });

        function handleClick(event) {
            console.log(event);
            event.target.classList.toggle("fa");
            event.target.classList.toggle("far");

            const id = this.dataset.id;
            const title = this.dataset.title;

            
            const currentFavs = getExistingFavs();
            

            const productExists = currentFavs.find(function(fav) {
                return fav.id === id;
            });

            if (productExists === undefined) {
                
                const product = {id: id, title: title};
                currentFavs.push(product);
                saveFavs(currentFavs);
            }
            else {
                const newFavs = currentFavs.filter((fav) => fav.id !== id);
                saveFavs(newFavs);
            }

        }

        

        function saveFavs(favs) {
            localStorage.setItem("favourites", JSON.stringify(favs));
        }





      
       
    } catch (error) {
        console.log(error);
    } 

    
}

getProducts();
