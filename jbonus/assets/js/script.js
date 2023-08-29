let lista = [];
for (let i = 0; i < 6; i++) {
    const elementLista = lista[i];
    let request = Number(prompt('inserisci un numero'));
    if(request % 2 !== 0){
        lista.push(request)
    }
}
let printer = document.querySelector('h1');
printer.innerHTML = lista;