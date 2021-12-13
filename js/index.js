import  {books}  from "./api/articles.js";


const articlesUrl = books +"articles";


(async function () {

    const container = document.querySelector(".articles-container");
    

    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();

        console.log(json);


        json.forEach(function (article) {
            container.innerHTML += `<div class="article">
                                        <h4> ${article.title}</h4>
                                        <p> Published: ${article.published_at}</p>
                                        <p> Summary: ${article.summary}</p>
                                        <p> Author: ${article.author}</p>
                                        <i class="fa fa-minus-circle"
                                    </div>`;
        });
    } catch (error) {
        console.log(error);
        
    }
})(); 





