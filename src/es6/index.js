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