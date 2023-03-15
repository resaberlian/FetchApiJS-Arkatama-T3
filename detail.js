const detailProduct = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = urlSearchParams.get("id");
  const data = "https://themealdb.com/api/json/v1/1/lookup.php?i=" + id;
  fetch(data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson.meals);
      detailMeals.innerHTML = "";
      var product = responseJson.meals.find((meals) => meals.idMeal == id);
      const text = product.strYoutube;
      const pattern = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/gi;
      const replacement = "https://www.youtube.com/embed/$1";
      const newText = text.replace(pattern, replacement);
     let result = "";
      for (let i = 1; i <= 20; i++) {
        let ingredient = product[`strIngredient${i}`];
        let measure = product[`strMeasure${i}`];
        // Check if the ingredient is null or empty
        if (ingredient && ingredient.trim() !== "") {
          result += measure + " " + ingredient + "; \n"
		    }}
        console.log(result);
          detailMeals.innerHTML += `
              <h1 class="text-4xl font-title font-semibold">Recipe of ${product.strMeal}</h1>
              <div class="flex justify-between items-center">
                  <div>
                      <p class="font-body text-sm font-light text-grey py-2">Part of the secret of success is to eat what you like and let the food fight it out inside.</p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 ml-2  font-title">${product.strCategory}</span>
                      <span class="inline-block bg-orangeSecondary rounded-full px-3  py-1 text-xs md:text-sm font-semibold text-white ml-2 mb-2 font-body">${product.strArea}</span>
                  </div>
              </div>
              <div class="relative" style="padding-top: 56.25% ">
                  <iframe class="absolute inset-0 w-full h-full rounded-lg" src="${newText}" frameborder="0" …></iframe>
              </div>
              <div class="md:flex py-5" id="detailMeals">
                  <div class="md:w-1/2">
                      <h1 class="text-3xl py-5 font-title font-semibold">Instructions</h1>
                      <ul> 
                          <li>${product.strInstructions}</li>
                          
                      </ul>
          
                  </div>
                  <div class="md:w-1/2 md:px-5">
                      <h1 class="text-3xl py-5 font-title font-semibold">Ingredients</h1>
                    
                        <p>${result}</p>
                   
                  </div>
              </div>
                      
                  `;
    })
    .catch((error) => {
      console.error(error);
    });
};
detailProduct();
