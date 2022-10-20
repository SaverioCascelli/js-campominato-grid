// **Consegna**
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


const colBox = document.querySelector(".col"); 
const initBtn = document.querySelector("header button");


initBtn.addEventListener("click", function(){
    const selectOption = parseInt(document.querySelector("header select").value);
    colBox.innerHTML="";
    switch (selectOption){
        case 1:
            init(100, 10);
            break
        case 2:
            init(81, 9);
            break
        case 3:
            init(49, 7);
            break
    }
    
})


function init(numberOfBox, boxInRow){
    for(let i = 0 ; i < numberOfBox ; i++){
        colBox.append(createBox(boxInRow));
    }
}


function createBox(boxPerRow){
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.width = calcCssWidth(boxPerRow)
    addSequentialNumber(div);
    setNumber(div);
    div.addEventListener("click", function(){
        console.log(this.number);
        div.classList.add("bg-primary")
    })
    return div
}

function calcCssWidth(elementPerRow){
    return `calc(100% / ${elementPerRow})`;
}


function getNumber(item){
    return item.number
}

function getLastNumber(className){
    const arr = document.getElementsByClassName(className);
    const lastItem = arr[arr.length-1];
    
    return lastItem ? getNumber(lastItem) : 0
}

function addSequentialNumber(item){
    let lastNumb = getLastNumber("box");
    item.number = lastNumb +1;

}

function addNumbers(className){
    const arr = document.getElementsByClassName(className);
    for(let i = 0 ; i < arr.length; i ++){
        arr[i].number = i+1;
    }
}

function getAllNumber(className){
    const arr = document.getElementsByClassName(className);
    for(let i = 0 ; i < arr.length; i ++){
        console.log(arr[i].number);
    }
}

function printNumber(className){
    const arr = document.getElementsByClassName(className);
    for(let i = 0 ; i < arr.length; i ++){
        arr[i].textContent = arr[i].number;
    }
}

function setNumber(item){
    item.textContent = item.number
}

