/* Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


// chiedere 1o volte di inserire un numero.
let askNumbers = [];

// fare 10 number prompt.
for (let i = 0; i < 10; i++)

askNumbers.push(+prompt("Enter a number"));

// mandare il risultato in una array.

console.log(askNumbers);

// fare la somma di tutti.

let sum = 0;

for (let i = 0; i < askNumbers.length; i++) {

    sum += askNumbers[i];

}

// Stampare la somma di tutti i numeri.

console.log(`La somma e' di ${sum}`);


     
    


    


    




