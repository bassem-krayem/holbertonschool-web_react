/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    // teacher attribute follows the structure of the Teacher interface
    teacher: Teacher;

    // Setter method
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}