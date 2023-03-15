// SEARCH MEAL
let btnMeal = document.getElementById('btnSearchMeal');
btnMeal.addEventListener('click', getSearchMeal);

async function getSearchMeal() {
    let inputSearchMeal = document.getElementById('inputSearchMeal').value.trim();  
    const endpoint = "https://themealdb.com/api/json/v1/1/search.php?s="+inputSearchMeal ;
    const api = await fetch(endpoint)
    const data = await api.json()
    console.log(data.meals)
    const cardMeal = document.getElementById('getSearch')
    cardMeal.innerHTML = "";
    data.meals.forEach(element => {
        cardMeal.innerHTML+= 
        `<a href="detailMeals.html?id=${element.idMeal}"> 
        <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
        <img class="w-full h-60" src="${element.strMealThumb}" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${element.strMeal}</div>

        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2  font-title">${element.strCategory}</span>
          <span class="inline-block bg-orangeSecondary rounded-full px-3 text-sm font-semibold text-white mr-2 mb-2 font-body">${element.strArea}</span>
          
        </div>
        </div>
        </a>
        `
    });
}
getSearchMeal()


// GETINGREDIENTS
async function getIngredients() {
    const endpoint = "https://themealdb.com/api/json/v1/1/list.php?i=list";
    const api = await fetch(endpoint)
    const data = await api.json()
    console.log(data.meals)
    data.meals.slice(0,20).forEach(element => {
      swiper.appendSlide([
        `<div class="swiper-slide">
        <a href="detailMeals.html?id=${element.idIngredient}"> 
        <div class="max-w-xs rounded-xl overflow-hidden ">
        <img class="w-full " src="https://www.themealdb.com/images/ingredients/${element.strIngredient}.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-center text-lg mb-2">${element.strIngredient}</div>

        </div>
        </div>
        </a>
        </div>
        `
       ]);
      
    });
}
getIngredients()

// GETCATEGORY 
  async function getCategory() {
  const endpoint = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const api = await fetch(endpoint)
  const data = await api.json()
  console.log(data.categories)
  // const cardIngridients = document.getElementById('getIngridient');
  category.innerHTML = "";
  data.categories.forEach(element => {
    category.innerHTML+= 
      `
      <div class="justify-center">
        <img class="w-full rounded-full " src="${element.strCategoryThumb}" alt="Sunset in the mountains">
    
        <div class="font-bold text-xl mb-2 text-center">${element.strCategory}</div>

        </div>
        </div>
        `
    });
  }
  getCategory()

  // GETLIST COUNTRY 
  async function getCountry() {
    const endpoint = "https://themealdb.com/api/json/v1/1/list.php?a=list";
    const api = await fetch(endpoint)
    const data = await api.json()
    console.log(data.meals)
    // const cardIngridients = document.getElementById('getIngridient');
    filterCountry.innerHTML = "";
    data.meals.forEach(element => {
      filterCountry.innerHTML+= 
        `
        <option value="">${element.strArea}</option>
          `
      });
    }
    getCountry()
  




