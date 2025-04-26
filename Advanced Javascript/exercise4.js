const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures are functions that remember the environment in which they were created.
//In this case, the second function remembers the greet variable from the first function.
//When the second function is called, it uses the greet variable from the first function.
//This is because the second function is a closure that has access to the greet variable from the first function.


//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
