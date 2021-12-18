import { getExistingFavs } from "../utils/favFunctions.js";

export function renderArticles(articlesToRender) {

    const articleContainer = document.querySelector (".article-container");

    articleContainer.innerHTML = "";

    const favourites = getExistingFavs();

    articlesToRender.forEach((article) => {

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
        <i class=" ${cssClass}  fa-star" data-id="${article.id}" data-title="${article.title}"> </div>`
    });
}