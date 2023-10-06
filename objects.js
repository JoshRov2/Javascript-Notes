const date = new Date()
let year = date.getFullYear
const Dennis = {
    firstName: "Dennis",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function () {
        return year - this.DOB;
    },
};
console.log(Dennis.firstName);

const ChenZee = {
    firstName: "ChenZee",
    lastName: "Unknown",
}
console.log(Dennis, ChenZee);