//TASK 2, 4, 5

// selects elements from the dom
const employeeContainer = document.getElementById("employeeContainer"); 
const addEmployeeButton = document.getElementById("addEmployeeButton");

employeeContainer.addEventListener("click", function() { // event listener that logs clicks
    console.log("Employee Card Clicked")
});

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

    removeButton.addEventListener("click", function (event) { // stops event propagation when removing
        event.stopPropagation(); // stops bubbling
        console.log("Remove button clicked."); 
        employeeContainer.removeChild(card); // removes card from container
    });

    card.addEventListener("dblclick", function () {
        const newName = prompt ("Input new name:", nameHeading.textContent) ; // prompts user to enter new name
        const newPosition = prompt("Input new position:", positionPara.textContent); // prompts user to enter new position

        if(newName) nameHeading.textContent = newName; // updates text content of name heading if name is entered
        if(newPosition) positionPara.textContent = newPosition; // updates text content of position paragraph if posiiton is entered
    });

    // appends elements 
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    employeeContainer.appendChild(card); // appends the card to the employee container

    highlightCards(); // highlights cards
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
