document.addEventListener("DOMContentLoaded", () => { 
    let inputElement = document.getElementById("input-field");
    let buttonClick = document.querySelector(".btn");
    let addElement = document.getElementById("add-element");
    // console.log(inputElement);
    // console.log(buttonClick);

    const addTodo = () => { 
        console.log(inputElement.value);
        let createdElement = document.createElement("p");
            createdElement.innerText = inputElement.value;
            // console.log(createdElement);
            addElement.append(createdElement);
            inputElement.value = "";
            
    };

    buttonClick.addEventListener('click', () => { 
        addTodo();
    });

    addElement.addEventListener('click',(event) => { 
        console.log(event.target);
        let currentElement = event.target;
        currentElement.remove();
    });
    
});


