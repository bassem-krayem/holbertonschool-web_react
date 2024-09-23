interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // Dynamic attribute
};

interface Directors extends Teacher {
  numberOfReports: number;
}

console.log(teacher3);

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  let teacher = `${firstName[0]}. ${lastName}`;
  console.log(teacher);
  return teacher;
};

printTeacher("John", "Doe");

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return `Currently working`;
  }

  displayName() {
    return this.firstName;
  }
}

const studentFromClass = new StudentClass("john", "doe");
console.log(studentFromClass.workOnHomework());
console.log(studentFromClass.displayName());
