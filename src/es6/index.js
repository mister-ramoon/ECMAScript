function newFuction(name, age, country) {
    var name = name || 'Juan';
    var age = age || 18;
    var country = country || 'MX';
    console.log( name, age, country);
}

// es6
function newFunction2 (name = 'Juan', age = 18, country = "MX"){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ramon', '19', 'MX');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;

//Multilínea
let lorem = "Qui consequatur. Commodi. Ipsum vel dius yet minima \n" 
+ "Otra frase epica que necesitamos";

// ----> es6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Desestructuracion de objetos
let person =  {
    'name': 'Ramon',
    'age': 18,
    'country': 'MX'
}

console.log(person.name, person.age);

let{name, age} = person;
console.log(name, age);

//Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);


//let y const
{
    var globalVar = "Global var";
}

{
    let globalLet = 'Global let'
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet) Let solo existe en scope. En  el bloque de codigo donde fue definido.

const a = 'b';
a = 'a'; //No va a correr
console.log(a);


