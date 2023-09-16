

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');
const modal = document.querySelector('.my-modal')
let searchQuery = '';
const APP_KEY = '6eb3a787d1msha03cc579a1e4122p1a7afajsn9b49e719e17e';

let results = null;


searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery)
    const data = await fetchAPI(searchQuery);

    results = data.results
    generateHTML()
});



//FETCH API
async function fetchAPI(search) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': APP_KEY,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    const baseURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=' + search;
    const response = await fetch(baseURL, options);
    const data = await response.json();
    // const parsedData = JSON.parse(data)
    // generateHTML(data.hits);
    console.log(data);
    return data

}

function generateHTML() {
    searchResultDiv.innerHTML = '';

    results.forEach(item => {


        const oneItem = document.createElement('div');
        oneItem.classList.add('item');
        oneItem.innerHTML = ` 

        <img src="${item.image}" alt="">
    <div class="flexcontainer"></div>
    <h1 class="title"> ${item.title}</h1>
    <a class="view-button" id="${item.id} href="#" onclick="viewRecipe(event);">View Recipe</a>
 
    `;

        searchResultDiv.append(oneItem)
    })
}

function viewRecipe(event) {

    event.preventDefault()

    console.log(event.target.id.split(' ')[0])
    console.log(results)
    modal.classList.remove('hidden');


    const foundItem = results.find(item => item.id === +event.target.id.split(' ')[0])
    if (foundItem) {
        document.querySelector('.my-modal__content').innerHTML = `
    <img src="${foundItem.image}" style="width:300px;" alt="">
    <div class="flexcontainer"></div>
    <h1 class="title" style="color:green;"> ${foundItem.title}</h1>
    `;
    } else {
        //
    }

}





modal.addEventListener("click", function () {
    modal.classList.add('hidden')
})