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


const arr = [1,2,3,4,5,6];

const arr1 = [...arr];

console.log(arr1);

// add
const arr2 = [...arr.slice(0, 3), 8, ...arr.slice(3)];

console.log(arr2);


// update
const arr3 = [...arr.slice(0, 3), 8, ...arr.slice(4)];

console.log(arr3)


// remove
const arr4 = [...arr.slice(0, 3), ...arr.slice(4)];

console.log(arr4);

const [...rest] = arr;

console.log(rest)


const users = [
  {
      name: 'yagnesh',
      gender: 'male',
      age: 30
  },
  {
      name: 'rohit',
      gender: 'male',
      age: 28
  },
  {
      name: 'virat',
      gender: 'male',
      age: 25
  },
  {
      name: 'deepika',
      gender: 'female',
      age: 32
  },
  {
      name: 'radhika',
      gender: 'female',
      age: 26
  }
];


const user = {
  name: 'priyanka',
  gender: 'female',
  age: 35
}

const updatedUsers = [user, ...users];

// console.log(updatedUsers);


// console.log(1 == '1')

const index = users.findIndex(user => user.name === 'virat');

const updatedUsers1 = [...users.slice(0, index), {...users[index], age: 27 }, ...users.slice(index + 1) ];

// console.log(updatedUsers1);
// this we can use to remove data from first or max third position
const [,...rest] = users;

const i = users.findIndex(x => x.name === 'deepika');

console.log(i)

const newUsers = [...users.slice(0, i), ...users.slice(i + 1)];

const newUsers1 = users.filter(x => x.name !== 'deepika');


console.log(newUsers1);

// console.log(rest)


var arr = [...Array(100000000).keys()];

console.time("for loop");

var newArr = [];
for (let index = 0; index < arr.length; index++) {
  var element = arr[index];
  newArr.push(element);
}

console.timeEnd("for loop");

console.time("foreach loop");

var newArr1 = [];
arr.forEach(element => {
  newArr1.push(element);
});

console.timeEnd("foreach loop");

   
const c = a || b;
const d = a && b;


console.log(c)
console.log(d)


const arr = [1,2,3,4,5, 6];


// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sum += element;
// }

// console.log(sum);

const sum = arr.reduce((p, c) => p + c, 0);

console.log(sum);


const users = [
  {
      name: 'yagnesh',
      gender: 'male',
      age: 30
  },
  {
      name: 'rohit',
      gender: 'male',
      age: 28
  },
  {
      name: 'virat',
      gender: 'male',
      age: 25
  },
  {
      name: 'deepika',
      gender: 'female',
      age: 32
  },
  {
      name: 'radhika',
      gender: 'female',
      age: 26
  }
];


//   {
//       male: [],
//       female: []
//   }

// {
//     00-09: [],
//     20-29: [],
//     90-99: []
//     120-129: []
// }


const groupBy = users.reduce((p, c) => {
  (p[c.gender] = p[c.gender] || []).push(c);
  return p; 
}, {});

console.log(groupBy)

//   const newData = users.reduce((p, c) => {
//       let newData = c;
//       if(c.name === 'virat') {
//           newData = {...c, age: 27}
//       }
//       return [...p, newData];
//   }, []);

console.log(newData);




class Animal {
  constructor(type = 'animal') {
      this.type = type;
  }

  set type(val) {
      this._type = val.toUpperCase();
  }

  get type() {
      return this._type
  }

  sound() {
      return 'Animal Sound';
  }
};

class Cat extends Animal {
  constructor(type = 'cat') {
      super(type)
  }

  sound() {
      const soundType = super.sound();
      return `${soundType} is meoww...`
  }
}


const a = new Animal('dog');

console.log(a.type)
console.log(a.sound())

const c = new Cat();
console.log(c.type)
console.log(c.sound())

const groupByAge = users.reduce((p, c) => {
  const ageGroup = parseInt(c.age / 10);
  const key = `${ageGroup}0-${ageGroup}9`;
  (p[key] = p[key] || []).push(c);
  return p
}, {});

console.log(groupByAge)



const users = [
  {
      name: 'yagnesh',
      gender: 'male',
      age: 30
  },
  {
      name: 'rohit',
      gender: 'male',
      age: 28
  },
  {
      name: 'virat',
      gender: 'male',
      age: 25
  },
  {
      name: 'deepika',
      gender: 'female',
      age: 32
  },
  {
      name: 'radhika',
      gender: 'female',
      age: 26
  }
];


const newUsers = users.map(user => {
  if(user.gender === 'male') {
      return {...user, profession: 'cricketer'}
  }
  return {...user, profession: 'actor'}
});

console.log(newUsers)

class Animal {
  constructor(type = 'animal') {
      this.type = type;
  }

  set type(val) {
      this._type = val.toUpperCase();
  }

  get type() {
      return this._type;
  }

  sound() {
      setTimeout(() => {
          console.log(this.type);
      }, 1000);
  }
}

class Cat extends Animal {
  constructor(type = 'cat') {
      super(type)
  }

  sound(data) {
      console.log(super.sound())
      console.log(this.type)
      console.log(data)
  }
}

const a = new Animal();
console.log(a.sound());

const b = new Cat();
b.sound('meow...');

// for in

// fo of


const obj = { a: 1, b: 2, c: 3};

console.log(Object.keys(obj));

for (const key in obj) {
    console.log(key,obj[key])
}

const arr = [1,2,3,4,5,6];

for (const element of arr) {
    console.log(element);
}

for (const [key, value] of Object.entries(obj)) {
    console.log(key)
    console.log(value)
}

// setTimeout(callback function, 1000);

console.log(1)
document.addEventListener('copy', function () {
    console.log(3)
})
console.log(2)


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('p1 resolve')
  }, 3000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('p2 reject')
  }, 2000)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('p3 reject')
  }, 1000)
});


const fetchData = async () => {
  try {
      // console.time('p');
      // const res = await Promise.all([p1,p2,p3]);
      // console.timeEnd('p');
      console.time('p1');
      const res1 = await Promise.race([p1,p2,p3]);
      console.timeEnd('p1');
      console.log(res1);
      // console.time('p')
      // const res = await p1; // 1sec
      // console.log(res);
      // const res1 = await p2; // 2 sec
      // console.log(res1);
      // const res2 = await p3; // 3 sec
      // console.log(res2);
      // console.timeEnd('p')// 6 sec
  } catch (error) {
      console.log(error)
  }
};

fetchData();


1
2
3














// callback

// promise

// generator

// const test = async () => {
//     await 

// }



function* add() {
  yield 1;
  yield 2;
  yield 3;
  return 'hello'
};

const gen = add();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

for (const iterator of gen) {
  console.log(iterator)
}


// function curring
const calc = (a, b) => {
  return (func) => {
      return func(a, b);
  };
};

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;

console.log(calc(1,2)(multi))

