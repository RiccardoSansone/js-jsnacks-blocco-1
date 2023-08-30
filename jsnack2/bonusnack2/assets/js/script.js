// con while) Snack 2:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let i = 1;
let list = [];
while(i <= 2){
    let parolaUtente = prompt('inserisci una parola a piacere');
    list.push(parolaUtente);
    i++
}
console.log(list[0], list[1]);
if(list[0].length > list[1].length){
    console.log(list[1] + list[0]);
} else if(list[1].length > list[0].length) {
    console.log(list[0] + list[1]);
} else {
    console.log(list[1] + list[0]);
}