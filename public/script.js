const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');
let searchQuery = '';
const APP_KEY = '6eb3a787d1msha03cc579a1e4122p1a7afajsn9b49e719e17e';


searchForm.addEventListener('sunmit',(e)=>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI (){
    const baseURL ='https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
function generateHTML(results){
    let generatedHTML = '';
    results.map(result => {
        
 
    })
    searchResultDiv.innerHTML = generateHTML;
}


// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
//   params: {
//     query: 'pasta',
//     cuisine: 'italian',
//     excludeCuisine: 'greek',
//     diet: 'vegetarian',
//     intolerances: 'gluten',
//     equipment: 'pan',
//     includeIngredients: 'tomato,cheese',
//     excludeIngredients: 'eggs',
//     type: 'main course',
//     instructionsRequired: 'true',
//     fillIngredients: 'false',
//     addRecipeInformation: 'false',
//     titleMatch: 'Crock Pot',
//     maxReadyTime: '20',
//     ignorePantry: 'true',
//     sort: 'calories',
//     sortDirection: 'asc',
//     minCarbs: '10',
//     maxCarbs: '100',
//     minProtein: '10',
//     maxProtein: '100',
//     minCalories: '50',
//     maxCalories: '800',
//     minFat: '10',
//     maxFat: '100',
//     minAlcohol: '0',
//     maxAlcohol: '100',
//     minCaffeine: '0',
//     maxCaffeine: '100',
//     minCopper: '0',
//     maxCopper: '100',
//     minCalcium: '0',
//     maxCalcium: '100',
//     minCholine: '0',
//     maxCholine: '100',
//     minCholesterol: '0',
//     maxCholesterol: '100',
//     minFluoride: '0',
//     maxFluoride: '100',
//     minSaturatedFat: '0',
//     maxSaturatedFat: '100',
//     minVitaminA: '0',
//     maxVitaminA: '100',
//     minVitaminC: '0',
//     maxVitaminC: '100',
//     minVitaminD: '0',
//     maxVitaminD: '100',
//     minVitaminE: '0',
//     maxVitaminE: '100',
//     minVitaminK: '0',
//     maxVitaminK: '100',
//     minVitaminB1: '0',
//     maxVitaminB1: '100',
//     minVitaminB2: '0',
//     maxVitaminB2: '100',
//     minVitaminB5: '0',
//     maxVitaminB5: '100',
//     minVitaminB3: '0',
//     maxVitaminB3: '100',
//     minVitaminB6: '0',
//     maxVitaminB6: '100',
//     minVitaminB12: '0',
//     maxVitaminB12: '100',
//     minFiber: '0',
//     maxFiber: '100',
//     minFolate: '0',
//     maxFolate: '100',
//     minFolicAcid: '0',
//     maxFolicAcid: '100',
//     minIodine: '0',
//     maxIodine: '100',
//     minIron: '0',
//     maxIron: '100',
//     minMagnesium: '0',
//     maxMagnesium: '100',
//     minManganese: '0',
//     maxManganese: '100',
//     minPhosphorus: '0',
//     maxPhosphorus: '100',
//     minPotassium: '0',
//     maxPotassium: '100',
//     minSelenium: '0',
//     maxSelenium: '100',
//     minSodium: '0',
//     maxSodium: '100',
//     minSugar: '0',
//     maxSugar: '100',
//     minZinc: '0',
//     maxZinc: '100',
//     offset: '0',
//     number: '10',
//     limitLicense: 'false',
//     ranking: '2'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6eb3a787d1msha03cc579a1e4122p1a7afajsn9b49e719e17e',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// fetchData();
