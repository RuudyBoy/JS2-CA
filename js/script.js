import { getExistingFavs } from "./utils/favFunctions.js";


const url ="http://localhost:8060/articles/";

const articleContainer = document.querySelector (".article-container");


   async function getArticles() {

	try {
        const response = await fetch(url);
        const articles = await response.json();

        console.log(articles);

        const favourites = getExistingFavs();

     articles.forEach((article) => {

            let cssClass = "far";

            const doesObjectExist = favourites.find(function(fav) {
                console.log(fav);

                return parseInt (fav.id) === article.id;
             });

            console.log(doesObjectExist);

            if (doesObjectExist) {
                cssClass = "fa";
            }

            articleContainer.innerHTML += `<div class="article">
            <h4> ${article.title} </h4>
            <p>  ${article.summary} </p>
            <p> Author: ${article.author} </p>
            <i class="${cssClass} fa-star" data-id="${article.id}" data-title="${article.title}"> </div>`
        });


        


        const favButtons = document.querySelectorAll(".article i");

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
            

            const articleExists = currentFavs.find(function(fav) {
                return fav.id === id;
            });

            if (articleExists === undefined) {
                
                const article = {id: id, title: title};
                currentFavs.push(article);
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

getArticles();
