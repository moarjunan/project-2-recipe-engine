const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');
let searchQuery = '';
const APP_ID ='a3585e31';
const APP_KEY ='5fe536ef5571a50ad8e9e985775f6a17'


searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL ='https://api.edamam.com/api/recipes/v2?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';
}
