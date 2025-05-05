//advanced loops

//1
const basket = ['apple', 'orange', 'grapes'];
const detailedBasket = {
    apple: 5,
    orange: 10,
    grapes: 1000
}

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}



basket = ['apple', 'orange', 'grapes'];
//2
basket.forEach(item => {
    console.log(item);
})

// for of
//iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
//enumerating - objects
for (item in detailedBasket) {
    console.log(item);
}
