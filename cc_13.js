//TASK 2
// selects elements from the dom
const employeeContainer = document.getElementById("employeeContainer"); 
const addEmployeeButton = document.getElementById("addEmployeeButton");

function addEmployee(name, position) { // creates employee card
    const card = document.createElement("div"); // creates a div for the employee card
    card.classList.add("employee-card");

    const nameHeading = document.createElement("h3"); // creates the name heading
    nameHeading.textContent = name;

    const positionPara = document.createElement("p") // sets up the position paragraph
    positionPara.textContent = position;

    const removeButton = document.createElement("button"); // makes remove button
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    // appends elements 
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    employeeContainer.appendChild(card); // appends the card to the employee container
}

    addEmployeeButton.addEventListener("click", function() { // adds event listener (click) to button
        const name = prompt("Enter employee name:");
        const position = prompt("Enter employee position:");
       
        if (name && position) {
            addEmployee(name, position);
    }
    });

//TASK 3

function highlightCards(){
    const cards = document.querySelectorAll(".employee-card"); // selects all employee cards

    Array.from(cards).forEach(card => { // converts nodelist to array + impliments highlight
        card.style.border = "2px solid green"; // highlights green
    });
}

highlightCards(); // tests function