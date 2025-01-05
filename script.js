const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// trim whitespaces and check if there is input
	if (str.trim().length > 0) {
		//filters fruit array to look for input
		results = fruit.filter(item => 
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
	// resets ul for next inputs
	suggestions.innerHTML = "";

	if (results.length > 0) {
		results.forEach(item => {
			// creates new li to hold each suggestion
			const newLi = document.createElement("li");

			// uses regex to highlight parts of results that match inputVal
			const regex = new RegExp(`(${inputVal})`, 'gi');
			const highlightedItem = item.replace(regex, '<b>$1</b>');

			// sets new li with result that is highlighted
			newLi.innerHTML = highlightedItem;

			// appends new li to the ul
			suggestions.appendChild(newLi);
		});
		// sets a class to style ul when there are results
		suggestions.setAttribute("class", "has-suggestions")
	} else {
		// removes class if there are no results
		suggestions.removeAttribute("class");
	}
}

// function for eventlistener when a suggestion is clicked
function useSuggestion(e) {
	// sets the input to the clicked suggestion
	input.value = e.target.textContent;
	// removes all other suggestions from ul
	suggestions.innerHTML = ""; 
	// resets styling for suggestions ul
	suggestions.setAttribute("class", "");
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);