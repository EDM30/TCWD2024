// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons1.includes('John')
// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John'))

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

function powerOf100(num) {
    return num ** 100
}

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

powerOf100(10000)

// #5) Using the function from #3, put in the parameter 2. What is the result?
// Research for yourself why you get this result

powerOf100(2)


