var teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false, // Dynamic attribute
};
console.log(teacher3);
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var teacher = "".concat(firstName[0], ". ").concat(lastName);
    console.log(teacher);
    return teacher;
};
printTeacher("John", "Doe");
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var studentFromClass = new StudentClass("john", "doe");
console.log(studentFromClass.workOnHomework());
console.log(studentFromClass.displayName());
