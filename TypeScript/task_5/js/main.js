// Step 2: Create the sumMajorCredits function
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits",
    };
}
// Step 3: Create the sumMinorCredits function
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits",
    };
}
// Test examples:
var majorSubject1 = { credits: 3, brand: "MajorCredits" };
var majorSubject2 = { credits: 4, brand: "MajorCredits" };
var minorSubject1 = { credits: 2, brand: "MinorCredits" };
var minorSubject2 = { credits: 1, brand: "MinorCredits" };
// Summing MajorCredits
var totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Total Major Credits:", totalMajorCredits);
// Summing MinorCredits
var totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Minor Credits:", totalMinorCredits);
