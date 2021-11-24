

// grabbing the form to search meals

const meal_form = document.querySelector('#meal_form');

meal_form.addEventListener('submit', getMeal);

// fetching meal info from api
function getMeal() {
    const search_term= document.querySelector('.search_item').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_term}`)
        .then(response => response.json())
        .then(data => createMeal(data))
    
    const output = document.querySelector('.output');

    if (search_term) {
        output.innerHTML = `
                <p>Your Search Term Results of ${search_term} are below<p>
            `
    }
   
}
// creating the meal card to display to user
function createMeal(data) {
    const createArray = (data.meals);
    createArray.map(function (meal) {
        const createCard = document.createElement('div');
        createCard.classList.add('meal');

        createCard.innerHTML = `
               <h1> ${meal.strMeal}</h1>
                <img src=${meal.strMealThumb}>
                <p>Instructions: ${meal.strInstructions}</p>
        
        `
        const meals = document.querySelector('.meals');
        meals.appendChild(createCard);
    })
}

  
