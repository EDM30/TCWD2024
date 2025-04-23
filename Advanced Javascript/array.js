//Advanced Array Methods

const array = [1, 2, 3, 4, 5];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log(double);

//map
const mapArray = array.map(num => num * 2);

console.log(mapArray);

//filter
const filterArray = array.filter(num => num % 2 === 0);

console.log(filterArray);

//reduce
const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(reduceArray);



