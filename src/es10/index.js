//Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

//Flat Map
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//Trim
let hello = '         hello world';
console.log(hello.trimStart());
let hello = 'Hello World          ';
console.log(hello.trimEnd());

//Optional catch

try {

}catch {
    error
}

//From Entries
let entries = [["name", "Juan"], ["age", 18]];
console.log(Object.fromEntries(entries));

//Object Symbol
let mySymbol =  `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);


