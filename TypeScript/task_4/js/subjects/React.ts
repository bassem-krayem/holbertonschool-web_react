/// <reference path="./Teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact > 0) {
        return `Available React: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}