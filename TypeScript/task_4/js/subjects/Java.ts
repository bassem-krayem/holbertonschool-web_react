/// <reference path="./Teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingJava > 0) {
        return `Available Java: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}