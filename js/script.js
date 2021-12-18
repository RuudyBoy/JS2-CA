import { getExistingFavs } from "./utils/favFunctions.js";
import { searchArticles } from "./ui/searchArticles.js";
import { renderArticles } from "./ui/renderArticles.js";
import { errorMessage } from "./ui/errorMessage.js";


const url ="http://localhost:8060/articles/";

    async function getArticles() {

	try {
        const response = await fetch(url);
        const articles = await response.json();
        
        renderArticles(articles);
        searchArticles(articles);

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
        errorMessage("error", error, ".article-container");
    } 

    
}

getArticles();



