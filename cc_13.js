//TASK 2
const employeeContainer = document.getElementById("employeeContainer");
const addEmployeeButton = document.getElementById("addEmployeeButton");

function addEmployee(name, position) {
    const card = document.createElement("div");
    card.classList.add("employee-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    const positionPara = document.createElement("p")
    positionPara.textContent = position;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    employeeContainer.appendChild(card);

    addEmployeeButton.addEventListener("click", function() {
        const name = prompt("Enter employee name:");
        const position = prompt("Enter employee position:");
        if (name && position);
    }
    )};
