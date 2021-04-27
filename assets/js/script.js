
let ingredients = document.getElementById("input").value;
let button = document.getElementById("button");

button.addEventListener('click', getRecipe)


// API CALL
function getRecipe(){
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    .then(response => response.json())
    .then(result => { const mealList = result
        if(mealList.meals){
            mealList.meals.forEach(meal => {
                console.log(meal)
            });
        }
         })
    .catch(error => console.log('error', error))
}


     