// Prolems in es6

// hoisting problem
var a;

a = 1;

a = 2;

console.log(a);

// scoping problem
{
  var a = 1;
}

// solution for both problems is let keyword

{
  let b = 1;
}

console.log(b);

let a = 1;

a = 2;

console.log(a);

const c = 2;

c = 3;

var a = 1;

a = 322312312312321213;

// string literals

// const fname = 'yagnesh';

// const lname = 'modh';

// // const fullName = fname + '\ncar'

// const fullName = `${fname}

// car`

// yagnesh's car

// console.log(fullName);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

var es5 =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">';
"\n\t<title>Document</title>" +
  "\n</head>" +
  "\n<body>" +
  "\n" +
  "</body>" +
  "</html>";

console.log(es5);

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(es6);


// function foo() {
//     console.log('foo')
// }


const foo = function () {
    console.log('foo')
}

const obj = { a: 1, b: 2, c: 3}


obj.a = 2;

obj.c= 5

console.log(obj)

const arr = [1,2,3,4];
arr.push(5);

arr.pop()

console.log(arr)


const a = '';

a = 1


primitive 

String
Number
Boolean



nonpimitive


Object
arr
function



null

undefined



//


const a = 1;

const b = 2;

// const obj = {
//     a: a,
//     b: b,
//     c: function () {
//         return this.a  + this.b;
//     }
// }

const obj = {
    a,
    b,
    c() {
        return this.a + this.b;
    }
}


console.log(obj.a);
console.log(obj.b);
console.log(obj.c())

//


// function add(a,b) {
//     return a + b;
// }




// arrow function
const add = (a,b) => a + b;

const greet = name => `Hello, ${name}`;

console.log(greet('Yagnesh'))

console.log(add(1,3));



const obj = {
    a: 1,
    b: 2,
    c: 3,
};



obj.b = 5;


const arr = {...obj, c: 5};

// delete obj.c

console.log(obj);


// const obj1 = Object.assign(obj, { d: 4});


// spread operator
const obj1 = { ...obj, d: 4};

const obj2 = { ...obj, b: 5 }

console.log(obj1)
console.log(obj2)


// destructuring 

const name = "rohit";

const user = {
    name: 'yagnesh',
    lastName: 'modh',
    gender: 'male',
    age: 30
}



const { name: n1, age, gender, ...rest } = user;

console.log(name)
console.log(n1);
console.log(age);


console.log(rest);
// const { a, b, ...rest } = obj;

// console.log(a)
// console.log(b)
// console.log(rest)





// obj.d = 4;

// console.log(obj)

