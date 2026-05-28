let tasks = [];

// ADD TASK

function addTask(){

    const projectName = document.getElementById("projectName").value;
    const taskName = document.getElementById("taskName").value;
    const assignedTo = document.getElementById("assignedTo").value;
    const deadline = document.getElementById("deadline").value;
    const priority = document.getElementById("priority").value;

    if(
        projectName === "" ||
        taskName === "" ||
        assignedTo === "" ||
        deadline === "" ||
        priority === ""
    ){
        alert("Please fill all fields");
        return;
    }

    const task = {
        projectName: projectName,
        taskName: taskName,
        assignedTo: assignedTo,
        deadline: deadline,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    renderTasks();
    updateStats();
    clearForm();
    showNotification("Task added successfully ✅");
}

// RENDER TASKS

function renderTasks(){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index) => {

        const card = document.createElement("div");

        card.classList.add("task-card");

        card.innerHTML = `
            <h2>${task.projectName}</h2>
            <p><strong>Task:</strong> ${task.taskName}</p>
            <p><strong>Assigned To:</strong> ${task.assignedTo}</p>
            <p><strong>Deadline:</strong> ${task.deadline}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>

            <span class="status ${task.completed ? "completed" : ""}">
                ${task.completed ? "Completed" : "Pending"}
            </span>

            <br>

            <button class="complete-btn" onclick="markComplete(${index})">
                Mark Complete
            </button>
        `;

        taskList.appendChild(card);

    });

}

// MARK COMPLETE

function markComplete(index){

    tasks[index].completed = true;

    renderTasks();
    updateStats();
    showNotification("Task marked as completed 🚀");

}

// UPDATE STATS

function updateStats(){

    const totalProjects = new Set(tasks.map(task => task.projectName)).size;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    document.getElementById("totalProjects").innerText = totalProjects;
    document.getElementById("totalTasks").innerText = totalTasks;
    document.getElementById("completedTasks").innerText = completedTasks;
    document.getElementById("pendingTasks").innerText = pendingTasks;

}

// CLEAR FORM

function clearForm(){

    document.getElementById("projectName").value = "";
    document.getElementById("taskName").value = "";
    document.getElementById("assignedTo").value = "";
    document.getElementById("deadline").value = "";
    document.getElementById("priority").value = "";

}

// SHOW NOTIFICATION

function showNotification(message){

    const notification = document.getElementById("notification");

    notification.innerText = message;

    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    },3000);

}