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

const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById("todo-list");
    const toDo = document.createElement("li");

    toDo.id = task.id;
    toDo.appendChild(checkbox);
    list.appendChild(toDo);

    return toDo;
}

const getCheckBoxInput = ({id, description, completed}) => {
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const wrapper = document.createElement("div");
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.completed = completed || false;

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'chackbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

/**
 * Returns a new id for a task, by getting the last id in the task list and 
 * incrementing it by one. If the task list is empty, returns 1.
 * @returns {number} The new id for the task.
 * 
 */
const getNewTaskId = () => {
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
}


/**
 * Given an event object, returns an object with the description of the task 
 * obtained from the input field and a new id obtained from the last id in the 
 * tasks array.
 * @param {object} event - The event object from the submission of the form.
 * @returns {object} An object with 'id' and 'description' properties.
 */
const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const id = getNewTaskId();

    return {id, description};
}

const createTask = (event) => {
    event.preventDefault();

    const newTaskData = getNewTaskData(event);
    //const {id, description} = newTaskData;

    const checkbox = getCheckBoxInput(newTaskData);

    createTaskListItem(newTaskData, checkbox);

    tasks = [
        ...tasks,
        {   id: newTaskData.id, 
            description: newTaskData.description, 
            completed: false }
        ];
}

window.onload = () => {
    const form = document.getElementById("create-todo-form");
    form.addEventListener("submit", createTask)

    tasks.forEach((task) => {
        const checkbox = getCheckBoxInput(task);

        const list = document.getElementById("todo-list");
        const toDo = document.createElement("li");
        //const button = document.createElement("button");

        toDo.id = task.id;
        toDo.appendChild(checkbox);
        //toDo.appendChild(button);

        list.appendChild(toDo);
    })
}