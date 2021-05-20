let searchBtn = document.getElementById("srch-btn");
let output = document.getElementById("meal");
//output.innerHTML = ""; // clears previous search whenn new one is started

// event listener
searchBtn.addEventListener("click", findMeals);

// call api
function findMeals(){
 let errorModal = document.getElementById("error-modal");
 let mealSearch = document.getElementById("meal-srch").value.trim();
 if (mealSearch == "") {
 $(errorModal).modal("show");
 return false;
}    //meal search input
 let diet = document.getElementById("diet").value;
 // diet input
 let allergy = document.getElementById("intolerance").value;
 // allergen input
 let html = "";
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com`
  +`/recipes/search?query=${mealSearch}&diet=${diet}`
  +`&intolerances=${allergy}&number=10`, {
  "method": "GET",
  "headers": {
  "x-rapidapi-key": "518ace866amsh0cf82a1f5a0c004p1d243djsneb40d8f01a66",
  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
   }
})
.then(response => response.json())
.then(result => { const mealList = result;
 if(mealList.results.length > 0){
  mealList.results.forEach(meal =>
  html +=`
  <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3"> 
    <div class="meal-card">
      <div>
      <h5 class ="text-center mt-1 p-2"">${meal.title}</h5>
      </div>
      <div>
      <a href="${meal.sourceUrl}" target="_blank"><img class="meal-img"
      + src ="https://spoonacular.com/recipeImages/${meal.id}-312x150.jpg"
      + alt ="food"></a>
      </div>
    </div>
  </div>
`); // html output
} else {
  output.classList.add("not-found");
  html = "Sorry the meal you were looking for cannot be found!";
}
  output.innerHTML = html;
});
}

// back to the top of the page

let backToTop = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction();};
// appears once scrolled past 50px
function scrollFunction() {
if (document.body.scrollTop > 200 ||
    + document.documentElement.scrollTop > 200) {
  backToTop.style.display = "block";
} else {
  backToTop.style.display = "none";
 }
}

function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

let clearBtn = document.getElementById("clear-button");

window.onscroll = function() {reloadFunction();};

function reloadFunction() {
 if (document.body.scrollTop > 500 ||
    + document.documentElement.scrollTop > 500) {
  clearBtn.style.display = "block";
} else {
  clearBtn.style.display = "none";
 }
}

function clearFunction() {
 location.reload();
}