import { getArticles } from "../script.js";


 export function searchProducts(articles) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        console.log(event);

        const searchValue = event.target.value.trim();

        const filteredProducts = articles.filter(function (article) {
            if (article.id >= (searchValue)) {
                return true;
            }
        });

        getArticles(filteredProducts);
    };
}



