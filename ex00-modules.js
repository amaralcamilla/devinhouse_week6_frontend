/**
 * 1 - Ao inserir nome e idade nos campos e clicar no botão, criar novo objeto;
 * 2 - Validar campos: Se estiver vazio, exibir mensagem informando o erro;
 * 3 - Validar idade: Máximo 3 dígitos;
 * 4 - Ao clicar no botão "Dizer nome", exibir mensagem informando o nome;
 * 5 - Ao clicar no botão "Dizer idade", exibir mensagem informando a idade;
 */

//import User from "./classes/User.js";
//import UserList from "./classes/UserList.js";
//import { isEmpty, isValidAge } from "./functions/validators.js";
//import { printAge, printName } from "./functions/print.js";

export default class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
export default class UserList extends Array {
    add(user) {
    this.push(user)
    }
}
const users = new UserList();

document
    .querySelector('btn-registrar')
    .addEventListener('click', ()=> {
        let name = document.querySelector('#name').value
        let age = document.querySelector('#age').value

        if(isEmpty(name)){
            alert("Favor preencher o campo 'Nome'.")
            return;
        }
        if(isEmpty(age) || !isValidAge(age)){
            alert("Favor preencher o campo 'Idade' com um valor válido");
            return;
        }
        const user = new User(name, age)
        users.add(user)

        appendToList(user)
    })

function appendToList(user) {
    let row = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdAge = document.createElement('td');
    let tdActions = document.createElement('td')

    let btnName = document.createElement('button')
    btnName.classList.add("btn-name")
    btnName.addEventListener('click', ()=> printName(user.name))
    btnName.innerHTML = "Dizer nome"

    let btnIdade = document.createElement('button')
    btnIdade.classList.add("btn-age");
    btnIdade.addEventListener('click', ()=>printAge(user.age))
    btnIdade.innerHTML = "Dizer idade"

    tdName.innerHTML = user.name;
    tdAge.innerHTML = user.age;
    tdActions.appendChild(btnName)
    tdActions.appendChild(btnAge)

    row.appendChild(tdName)
    row.appendChild(tdAge)
    row.appendChild(tdActions)

    document.querySelector('tbody').appendChild('row')
}


function isEmpty(valor) {
    return valor.trim() === "";
}

function isValidAge(age) {
    return age.trim().length  
}
function printName(userName){
    alert("User's name is " + User.name + ".")
}
function printAge(userAge){
    alert("User is " + User.age + "years old.")
}