class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindToggleTask(this.handleToggleTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));

        this.updateView();
    }

    handleAddTask() {
        const task = this.view.getTaskInput();
        if (task.trim() !== '') {
            this.model.addTask(task);
            this.view.clearTaskInput();
            this.updateView();
        }
    }

    handleToggleTask(index) {
        this.model.toggleTask(index);
        this.updateView();
    }

    handleDeleteTask(index) {
        this.model.deleteTask(index);
        this.updateView();
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.displayTasks(tasks);

        // Update the "Pendiente" button color based on task status
        const taskElements = this.view.taskList.children;
        for (let i = 0; i < taskElements.length; i++) {
            const task = tasks[i];
            const taskElement = taskElements[i];
            const toggleButton = taskElement.querySelector('.toggleButton');

            if (task.completed) {
                toggleButton.classList.remove('Pendiente');
            } else {
                toggleButton.classList.add('Pendiente');
            }
        }
    }
}

const controller = new TaskController(model, view);
