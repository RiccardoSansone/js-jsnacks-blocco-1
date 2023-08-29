const wordOne = prompt('inserisci una parola a tuo piacere');
const wordTwo = prompt('per favore, inserisci nuovamente una parola a tuo piacere');
const printer = document.querySelector('h1');
if(wordOne.length > wordTwo.length){
    printer.innerHTML = wordTwo + ' ' + wordOne;
} else if(wordOne.length < wordTwo.length){
    printer.innerHTML = wordOne + ' ' + wordTwo;
} else {
    printer.innerHTML = 'HANNO LA STESSA LUNGHEZZA' + ' ' + wordOne + ' ' + wordTwo;
}