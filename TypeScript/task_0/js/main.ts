//On the way of task 0

// Interface & Obj
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Maggie',
	lastName: 'Song',
	age: 27,
	location: 'Asia'
}

const student2: Student = {
	firstName: 'Michael',
	lastName: 'McKennie',
	age: 31,
	location: 'Europa'
}

const studentsList: Student[] = [student1, student2];
// Creating the structure of the table
const table: HTMLTableElement = document.createElement('table');
const tHead: HTMLTableSectionElement = document.createElement('thead');
const tBody: HTMLTableSectionElement = document.createElement('tbody');
// Row for the table head 
const headRow: HTMLTableRowElement = document.createElement('tr');
const headFirstName: HTMLTableCellElement = document.createElement('th');
const headLocation: HTMLTableCellElement = document.createElement('th');
const headAge: HTMLTableCellElement = document.createElement('th');
const headLastName: HTMLTableCellElement = document.createElement('th');


headFirstName.textContent ='First Name'
headLastName.textContent = 'Last Name'
headAge.textContent = 'Age'
headLocation.textContent = 'Location'

headRow.appendChild(headFirstName);
headRow.appendChild(headLastName);
headRow.appendChild(headAge);
headRow.appendChild(headLocation);
tHead.appendChild(headRow);
// Add rows for each element in StudentList in tBody
studentsList.forEach(element => {
    const createRowBody: HTMLTableRowElement = document.createElement('tr');
    const firstNameElement: HTMLTableCellElement = document.createElement('td');
	const lastNameElement: HTMLTableCellElement = document.createElement('td');
	const ageElement: HTMLTableCellElement = document.createElement('td');
    const locationElement: HTMLTableCellElement = document.createElement('td');
    firstNameElement.textContent = element.firstName;
	lastNameElement.textContent = element.lastName;
	ageElement.textContent = String(element.age);
    locationElement.textContent = element.location;

    createRowBody.appendChild(firstNameElement);
	createRowBody.appendChild(lastNameElement);
	createRowBody.appendChild(ageElement);
    createRowBody.appendChild(locationElement);
    tBody.appendChild(createRowBody);
});


// Append everything into the table
table.appendChild(tHead);
table.appendChild(tBody);

document.body.appendChild(table);
