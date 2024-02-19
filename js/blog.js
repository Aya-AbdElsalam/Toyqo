//draw all article in page
document.querySelector(".blog").innerHTML = blog
  .map((article) => {
    return `
      <div class="article_container">
            <div class="img">
                <img  loading="lazy" data-src="${article.img}" alt="article" width="100%" height="auto" class="lazyload">
            </div>
            <div class="info">
                <p>${article.date} | ${article.owner}</p>
                <h2 onclick="articleId(${article.id})">${article.title}</h2>
                <p  onclick="articleId(${article.id})"><i class="fa-solid fa-arrow-right"></i>READ MORE</p>
            </div>
        </div>
    `;
  })
  .join("");
//store id of choosen article
function articleId(id) {
  localStorage.setItem("articleId", id);
  window.location = " articleDetails.html";
}
