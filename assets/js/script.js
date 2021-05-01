

let button = document.getElementById("button");
let output = document.getElementById("meal")
let html =""
button.addEventListener('click', getRecipe)


// API CALL
function getRecipe(){
    let ingredients = document.getElementById("ingredients").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
        .then(response => response.json())
        .then(result => { const mealList = result
            if(mealList.meals){
                mealList.meals.forEach(meal => {
                html += `
                <div>
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                ` ;                 
                });
                output.classList.remove('notFound');
            } else{
                html = "Sorry, we didn't find any meal!";
                output.classList.add('notFound');
            }

            output.innerHTML = html;
            })
            
            };




     