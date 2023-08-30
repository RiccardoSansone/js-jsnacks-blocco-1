// Da fare con WHILE tutti I prossimi snacks
// Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let i = 0;
let num = [];

while(1 < 2) {
    let utNumber = Number(prompt('seleziona un numero'));
    if(isNaN(utNumber)){
        i--
    } else {
        num.push(utNumber)
        i++
    }
}
if (num[0 > num[1]]){
    console.log(num[0]);
} else {
    console.log(num[1]);
}