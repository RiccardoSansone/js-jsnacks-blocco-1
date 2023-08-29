let sum = 0;
for (let i = 0; i < 10; i++) { 
    const request = Number(prompt('inserisci un numero'));
    sum = sum + request;
}
const results = document.querySelector('h1');
results.innerHTML = sum;
