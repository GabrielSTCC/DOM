let tasks = [
    {
        id: 1,
        description: "Estudar HTML",
        completed: false
    },
    {
        id: 2,
        description: "Estudar CSS",
        completed: false
    },
    {
        id: 3,
        description: "Estudar JavaScript",
        completed: false
    },
    
];

const getCheckBoxInput = ({id, description, completed}) => {
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const wrapper = document.createElement("div");
    const checkboxId = `${id}-checkbox`;

    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.completed = completed;

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'chackbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

window.onload = () => {
    const todoList = document.getElementById("todo-list");
    tasks.forEach((task) => {
        const checkbox = getCheckBoxInput(task);

        const list = document.querySelector("todo-list");
        const toDo = document.createElement("li");
        const button = document.createElement("button");

        toDo.id = task.id;
        toDo.appendChild(checkbox);
        toDo.appendChild(button);

        todoList.appendChild(toDo);
    })
}