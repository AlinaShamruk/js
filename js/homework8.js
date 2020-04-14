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


let text = ['First Name', 'Last Name', 'Age'];
let table = document.getElementById("table");


for (key of data) {
    let tr = document.createElement("tr");
    for (name in key) {
        let td = document.createElement("td");
        let txt = document.createTextNode(key[name]);
        td.appendChild(txt);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

// -------------------------------------

const addUser = () => {
    let firstName = prompt('User name');
    let lastName = prompt('User surname');
    let age = prompt('User age');
    let row = [firstName, lastName, age];
    let tr = document.createElement('tr');
    for (value of row) {
        let td = document.createElement('td');
        let content = document.createTextNode(value);
        td.append(content);
        tr.append(td);
    }
    table.append(tr);
};

let addbut = document.createElement('button');
addbut.textContent = 'ADD';
addbut.onclick = addUser;
document.body.appendChild(addbut);

// -------------------------------------------

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
document.body.append(removeButton);

removeButton.onclick = () => {
    let tab = document.querySelectorAll('#table tr');
    let artab = Array.from(tab);
    artab.forEach((e) => {
        e.onclick = () => {
            e.remove();
            artab.forEach((e) => {
                e.onclick = false;
            });
        }
    });
}


// ---------------------------------------------

let change = document.createElement('button');
change.textContent = 'Change';
document.body.append(change);

change.onclick = () => {
    let tab = document.querySelectorAll('#table tr td');
    let artab = Array.from(tab);
    artab.forEach((e) => {
        e.onclick = () => {
            let old = e.textContent;
            e.innerHTML = ` <input placeholder=" ${old} "></input>`;
            e.children[0].focus();
            e.children[0].onblur = () => {
                newValue = e.children[0].value;
                e.innerText = newValue;
            };
            artab.forEach((e) => {
                e.onclick = false;
            });
        }
    });

}
