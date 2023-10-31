class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            text: task,
            completed: false
        });
    }

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

const model = new TaskModel();
