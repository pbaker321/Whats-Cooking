
let ingredients = document.getElementById("input").value;
let button = document.getElementById("button");
//let output = document.getElementById("meal")
let html =""
button.addEventListener('click', getRecipe)


// API CALL
function getRecipe(){
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    .then(response => response.json())
    .then(result => { const mealList = result
        if(mealList.meals){
            mealList.meals.forEach(meal => {
            html += `
                <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
            ` ;                 
            });
             document.getElementById("meal").innerHTML = html
        };
           
         })
    .catch(error => console.log('error', error))
}


     