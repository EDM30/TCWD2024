const first = () => {
    const greet = "Hi";
    const second = () => {
        const name = "bobby";
        console.log(greet + name);
    }
    return second;
}

const newFunc = first();
newFunc();