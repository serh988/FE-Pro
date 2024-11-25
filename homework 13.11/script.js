const form = document.querySelector("#searchCocktails");
const input = document.querySelector("#searchInput");
const divResults = document.querySelector("#results");

async function getCocktails(name) {
  const query = name.trim();
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
  if (!response.ok) throw new Error("Error fetching cocktails");
  const data = await response.json();
  return data.drinks;
}

function displayCocktails(cocktails) {
  divResults.innerHTML = "";

  if (!cocktails) {
    const noResults = document.createElement("p");
    noResults.innerText = "No results found!";
    divResults.append(noResults);
    return;
  }

  cocktails.forEach(cocktail => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;
    img.alt = cocktail.strDrink;

    const name = document.createElement("h3");
    name.innerText = cocktail.strDrink;

    card.append(img, name);
    card.addEventListener("click", () => showModal(cocktail));
    divResults.append(card);
  });
}

function showModal(cocktail) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.append(overlay);

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = () => {
    modal.remove();
    overlay.remove();
  };

  const img = document.createElement("img");
  img.src = cocktail.strDrinkThumb;
  img.alt = cocktail.strDrink;

  const name = document.createElement("h3");
  name.innerText = cocktail.strDrink;

  const instructions = document.createElement("p");
  instructions.innerText = cocktail.strInstructions;

  const ingredientsList = document.createElement("ol");
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient && measure) {
      const li = document.createElement("li");
      li.innerText = `${ingredient}: ${measure}`;
      ingredientsList.append(li);
    }
  }

  modal.append(closeButton, img, name, instructions, ingredientsList);
  document.body.append(modal);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchValue = input.value;
  try {
    const cocktails = await getCocktails(searchValue);
    displayCocktails(cocktails);
  } catch (error) {
    console.error(error);
  }
});
