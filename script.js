const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  // trim whitespaces and check if there is input
  if (str.trim().length > 0) {
    //filters fruit array to look for input
    results = fruit.filter((item) =>
      item.toLowerCase().includes(str.toLowerCase())
    );
  }
  return results;
}

// used for eventlistener and plugs in results and inputVal into showSuggestions function
function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

// creates a list of filtered suggestions and adds them to the suggestion ul
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  results.forEach((item) => {
    // creates new li to hold each suggestion
    const newLi = document.createElement("li");

    // uses regex to highlight parts of results that match inputVal
    const regex = new RegExp(`(${inputVal})`, "gi");
    const highlightedItem = item.replace(regex, "<b>$1</b>");

    newLi.innerHTML = highlightedItem;

    suggestions.appendChild(newLi);
  });
  // sets a class to style ul in css when there are results
  suggestions.setAttribute("class", "has-suggestions");
}

function useSuggestion(e) {
  input.value = e.target.closest("li").textContent;
  // removes all other suggestions from ul
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
