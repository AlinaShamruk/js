// let user = {
//     name: 'John',
//     surname: "Smith"
// };

// user.name = "Pete";
// delete user.name;
// console.log(user)

// console.log('-------------------');


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];

// }
// console.log(sum);

// console.log('-------------------');


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric() {
//     for (key in menu) {
//         if (typeof menu[key] === "number") {
//             menu[key] *= 2;
//         }

//     }
//     console.log(menu)
// };

// multiplyNumeric();

// console.log('-------------------');

// let arr = [54, 15, 3, 8, 5, 44];
// for (num of arr) {
//     if (num > 7) {
//         console.log(num)
//     }
// }

// console.log('-------------------');


// let arg = [{ 'one': 4 }, { 'two': 11 }, { 'forest': 22 }];
// for (let key of arg) {
//     for (name in key) {
//         if (key[name] > 7) {
//             console.log(name);
//         }
//     }
// }

// console.log('-------------------');


const information = [
    {
        "firstName": 'Ashton',
        "lastName": 'Kutcher',
        "age": 40,
    }, {
        "firstName": 'Bradley',
        "lastName": 'Pitt',
        "age": 54,
    }, {
        "firstName": 'Hannah',
        "lastName": 'Dakota',
        "age": 24,
    }
]


let user = prompt("Введите имя");

function cheakLastName() {
    for (const key of information) {
        console.log(`${key}`)
        if (key.lastName === user) {
            alert(key.firstName + ' ' + key.lastName + ' ' + key.age);
            return 
        }

    } alert("No results found for your request");

};
cheakLastName();




