

const searchForm = document.querySelector('#searchInput');
const searchResultDiv = document.querySelector('#recipesBody');
const container = document.querySelector('container');
const modal = document.querySelector('.card')
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
async function getIngredients(id) {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + id + '/ingredientWidget.json';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6eb3a787d1msha03cc579a1e4122p1a7afajsn9b49e719e17e',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
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

async function viewRecipe(event) {

    event.preventDefault()

    console.log(event.target.id.split(' ')[0])
    console.log(results)
    modal.classList.remove('hidden');


    const foundItem = results.find(item => item.id === +event.target.id.split(' ')[0])
    if (foundItem) {
        const data = await getIngredients(foundItem.id)
        const ingredientslist = JSON.parse(data)
        console.log(ingredientslist)
        document.querySelector('.my-modal__content').innerHTML = `
    <h1 class="title" style="color:green;"> ${foundItem.title}</h1>
    <div class="innermodal">
    <img src="${foundItem.image}" style="width:300px;height:300px;" alt="">
    <div class="flexcontainer">${ingredientslist.ingredients.map(ing => (
            `<p>${ing.amount.us.value} ${ing.amount.us.unit} of ${ing.name}</p>`
        ))}</div>
    </div>
    `;
    } else {
        //
    }

}



modal.addEventListener("click", function () {
    modal.classList.add('hidden')
})