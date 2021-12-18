import { renderArticles } from "./renderArticles.js";


 export function searchArticles(articles) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredArticles = articles.filter(function (article) {
            if (article.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderArticles(filteredArticles);
    };
}



