const date = new Date()
let year = date.getFullYear
const students = {
    firstName: "Dennis",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function () {
        return year - this.DOB;
    },
    firstName: "Josh",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function () {
        return year - this.DOB;
    },
    firstName: "Mark",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function () {
        return year - this.DOB;
    },

    firstName: "Paul",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function () {
        return year - this.DOB;
    },
}
let names = [Dennis, Josh, Mark, Paul];
students.forEach((student) => console.log(student.age));







let nums = [1, 2, 3, 4, 5];
let movies = ["Star Wars", "Marvel Thing", "Barbie"];
console.log(nums[nums.length - 1]);
nums.forEach((el) => console.log(el));
movies.forEach((movie) => console.log(movie));