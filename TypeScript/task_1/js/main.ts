// 1. Let's build a Teacher interface 
interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
    yearsOfExperience?: number;
	location: string;
    [key: string]: any;
}
// 2. Extending the Teacher class 
interface Director extends Teacher {
    numberOfReports: number
}
// 3. Printing teachers 
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const slicedFirstName: string = `${firstName.slice(0, 1)}.`
    return `${slicedFirstName} ${lastName}`
}
// 4. Writing a class
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
interface ConstructorStudentClass {
    new (firstName: string, lastName: string): StudentClassInterface;
}
  
// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working'
    }
  
    displayName(): string {
      return this.firstName
    }
}  

