
const searchBtn = document.getElementById("srch-btn");
let output = document.getElementById("meal");
let html = ""

searchBtn.addEventListener("click", findMeals());

function findMeals(){
    let mealSearch = document.getElementById("meal-srch").value;
    let diet = document.getElementById("diet").value;
    let allergy = document.getElementById("intolerance").value;
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
                <div>
                    <div class = "meal-name">
                        <h3>${meal.title}</h3>
                        <a href="${meal.sourceUrl}">Go to Recipe</a>
                    </div>
                    <div class = "meal-img">
                        <img src = "${meal.image}" alt = "food">
                    </div>

                </div>
                `);
                output.classList.remove('notFound');
        } else {
                html = "Sorry, we didn't find any meal!";
                output.classList.add('notFound');            
        }
                output.innerHTML = html;
            });
        }