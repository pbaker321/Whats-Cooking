
let searchBtn = document.getElementById("srch-btn");
let output = document.getElementById("meal");
output.innerHTML = "";

// event listener
searchBtn.addEventListener("click", findMeals);

// call api
function findMeals(){
    let mealSearch = document.getElementById("meal-srch").value;    //meal search input
    let diet = document.getElementById("diet").value;   // diet input
    let allergy = document.getElementById("intolerance").value; // allergen input
    let html = "";
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${mealSearch}&diet=${diet}&intolerances=${allergy}&number=10`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "518ace866amsh0cf82a1f5a0c004p1d243djsneb40d8f01a66",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(result => { const mealList = result
         if(mealList.results){
            mealList.results.forEach(meal => 
                html +=`    
                <div data-id="${meal.id}>
                    <div class ="meal-name">
                        <h3>${meal.title}</h3>
                        <a href="${meal.sourceUrl}">Go to Recipe</a>
                    </div>
                    <div class ="meal-img">
                        <img src ="https://spoonacular.com/recipeImages/${meal.id}-90x90.jpg" alt ="food">
                    </div>
                    
                </div>
                `); // html output
                output.classList.remove('notFound');
        } else {
                html = "Sorry, we didn't find any meal!";
                output.classList.add('notFound');            
        }
                output.innerHTML = html;
            });
        }