let data = [
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
];

let first = document.getElementsById('our_arr');
first.innerHTML = data;

let kfdk = document.getElementById('First Name')
kfdk.innerHTML = data[firstName]


// for (let row = 0; row < n; row++) {
//     let tr = document.createElement("TR")
//     tableBody.appendChild(tr)
//     for (let col = 0; col < m; col++) {
//         let td = document.createElement("TD")
//         td.innerHTML = up[row][col]
//         if (up[row][col] != 0) {
//             td.innerHTML = up[row][col]
//         }
//         tr.appendChild(td)
//     }
// }
// document.body.appendChild(table)