//Type Coercion
1 == '1'; //True because of type coercion
1 === '1';//False because '1' is a string not a number

// Type Coercion Examples

// 1. Loose Equality (==) - performs type coercion
console.log('Loose Equality Examples:');
console.log(1 == '1');      // true - string '1' is coerced to number 1
console.log(true == 1);     // true - true is coerced to 1
console.log([] == '');      // true - array is coerced to empty string
console.log(null == undefined); // true - special case

// 2. Strict Equality (===) - no type coercion
console.log('\nStrict Equality Examples:');
console.log(1 === '1');     // false - different types
console.log(true === 1);    // false - different types
console.log([] === '');     // false - different types  
console.log(null === undefined); // false - different types

// 3. Common Coercion Scenarios
console.log('\nCommon Coercion Scenarios:');
console.log('5' + 3);       // '53' - number is coerced to string
console.log('5' - 3);       // 2 - string is coerced to number
console.log(true + 1);      // 2 - true is coerced to 1
console.log(false + 1);     // 1 - false is coerced to 0

// 4. Boolean Coercion
console.log('\nBoolean Coercion Examples:');
console.log(Boolean(''));           // false
console.log(Boolean(0));            // false
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true



