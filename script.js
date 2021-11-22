'use strict' 

const listaProdutos = [
    'Leite',
    'Maça',
    'Chocolate',
    'Café',
    'Palha de aço',
    'PS5'
];
       
let ul = document.getElementById('resultado');

//Percorremos todos os itens do array
listaProdutos.forEach(item => {

    //Criamos um elemento para o DOM
    let li = document.createElement('li');

    //Inserimos um texto para o elemento
    li.innerText = item;

    //Incluimos o elemento ao filho da UL
    ul.appendChild(li);
});