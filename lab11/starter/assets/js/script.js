// Part 1: Make a variable that gets all the "nav-item" buttons using .getElementsByClassName
let navList = document.getElementsByClassName("nav-item");

// A function to show/hide the food item images that takes in a parameter "button"
function filterImages(button) {

	// Name of the specific food item that the button corresponds to
	let buttonName = button.innerHTML;
	// Part 1: Make a boolean variable that checks to see if "button" contains "active" class
	let buttonActive = button.classList.contains("active");
	// Part 1: Make a variable that gets all images of that specific food item using buttonName (use .getElementsByClassName)
	let itemList = document.getElementsByClassName(buttonName);

	// Part 2: Set the condition using buttonActive
	if (buttonActive) {

		// Part 2: Add and remove the respective "active"/"inactive" classes according to your condition
		button.classList.remove("active");
		button.classList.add("inactive");

		// Part 2: Use a for loop to change each item in itemList to display: block; or display: none; according to your condition
		for (let j = 0; j < itemList.length; j++) {
			itemList[j].style.display = "none";
		}

	} else {

		// Part 2: Add and remove the respective "active"/"inactive" classes according to your condition
		button.classList.remove("inactive");
		button.classList.add("active");

		// Part 2: Use a for loop to change each item in itemList to display: block; or display: none; according to your condition
		for (let j = 0; j < itemList.length; j++) {
			itemList[j].style.display = "block";
		}
	}
}

// Why are we using this loop?
for (let i = 0; i < navList.length; i++) {

	// Why is this in the loop? How does it work?
	// Why do we use an anonymous function?
	// Part 2: assign your function to the onclick event handler
	navList[i].onclick = function() {
		filterImages(navList[i]);
	};
}
