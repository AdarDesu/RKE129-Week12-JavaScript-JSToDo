const AddToDoButton = document.querySelector("#AddTask");
const InputField = document.querySelector("#UserTaskInput");
const ToDos = document.querySelector("#ToDosContainer");

// Adds shadow when focused
InputField.addEventListener("focus", () => {
    InputField.style.boxShadow = "0 0.3rem 0.2rem -0.2rem #483d8b";
})

// Removes shadow when not focused
InputField.addEventListener("blur", () => {
    InputField.style.boxShadow = "";
})

AddToDoButton.addEventListener("click", AddTask);

function AddTask(){
    if(InputField.value.trim().length){

        // Create a new <li> element
        let NewToDo = document.createElement("li");

        // Add CSS to the element
        NewToDo.classList.add("li-styling");

        // Add content to the new <li> element
        NewToDo.innerText = InputField.value;

        // Add the element to the container
        ToDosContainer.appendChild(NewToDo);

        // If there is a click () => then uses the function
        NewToDo.addEventListener("click", () => {
            NewToDo.style.color = "#808080";
            NewToDo.style.textDecoration = "line-through";
        });

        // Remove on double click
        NewToDo.addEventListener("dblclick", () => {
            ToDosContainer.removeChild(NewToDo);
        });
    }

    else{
        console.log("empty value");

        // Gives red shadow when 
        InputField.style.boxShadow = "0 0.3rem 0.2rem -0.2rem #cc0000";
    }

    InputField.value = "";
}