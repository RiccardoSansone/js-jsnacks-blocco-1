const numberOne = Number(prompt('inserisci un numero'));
const numberTwo = Number(prompt('per favore, inserisci un altro numero'));
const printer = document.querySelector('h1');
if(numberOne > numberTwo){
    printer.innerHTML = numberOne;
} else if(numberOne < numberTwo){
    printer.innerHTML = numberTwo;
} else {
    printer.innerHTML = 'sono identici ' + numberOne;2
}