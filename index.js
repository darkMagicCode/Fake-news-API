

var allItems = [];

async function getNews(category , lang) {
    console.log("iam in fetch");

  var apinews = await fetch(`https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=06b0b69d9b4146d79bf54700ab0d5433`);
  var apinewsFinal = await apinews.json();
  allItems = apinewsFinal.articles;
  displayData()
}


function displayData() {
    console.log("iam in display");

  var cartona = ``;
  for (let index = 0; index < allItems.length; index++) {
    cartona += `
 <div class="col-md-3">
    <div class="card" style="width: 18rem;">
  <img height="200" src="${allItems[index].urlToImage}" class="card-img-top" alt="...">
  <div  class="card-body  "  >
    <h5 class="card-title">${allItems[index].title.split(" ").splice(0,5).join(' ')}</h5>
     <p  class="card-text lead">${allItems[index].description}</p>
    <a href="${allItems[index].url}" class="btn btn-primary ">see more</a>
  </div>
</div>


</div>
</div>`;
    document.getElementById("rowData").innerHTML = cartona;

    }
}


var links = document.querySelectorAll(".dropdown");
var lang = document.querySelectorAll(".dropdown-item");

var categoryCode = null;

for (let i = 0; i < links.length; i++) {
    console.log("iam in first");
    links[i].addEventListener('click', function (e) {
        categoryCode = e.target.getAttribute('category');
        // getNews(categoryCode)
         console.log(categoryCode);

    })
};


for (let i = 0; i < lang.length; i++) {
    console.log("iam in xxxxx");

    lang[i].addEventListener('click', async function (e) {
        var lang = e.target.getAttribute('lang');
        await getNews(categoryCode, lang);
        console.log(lang);
        displayData();
    })
}

getNews("health","us");