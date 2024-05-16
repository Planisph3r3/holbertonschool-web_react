//5. Advanced types Part 1 

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }
    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    } else {
        return new Director()
    }
}

// 6. Creating functions specific to employees

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        employee.workDirectorTasks()
    } else {
        employee.workTeacherTasks()
    }
}
// 7. String literal types

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math"
    } else if (todayClass === "History") {
        return "Teaching History"
    } else {
        return "Unknown subject"; //this implementation / handle was not required by the task.
    }
}