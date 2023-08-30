/* Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// Fare due const differenti con promt, dove si possono scrivere.

//let words = [];
//let word1 = words.push (prompt('Scrivi una parola'));
//let word2 = words.push (prompt("Scrivi un'altra parola"));
//console.log(words);

// confrontare le due parole e stamparle

/* if (words[0].length > words[1].length) {
    
    wordsEl.innerHTML = `${words[1]} ${words[0]}`
    
} else if (words[1].length > words[0].length) {
    
    wordsEl.innerHTML = `${words[0]} ${words[1]}`

} else {

    wordsEl.innerHTML = 'Le parole sono della stessa lunghezza!'

} */

/////////////////////////////////////////
// While loop

let words = [];
let word1 = words.push (prompt('Scrivi una parola'));
let word2 = words.push (prompt("Scrivi un'altra parola"));
let wordsEl = document.querySelector('.print');
let i = 0;

while (i < 2) {

    if (words[0].length > words[1].length) {
    
        wordsEl.innerHTML = `${words[1]} ${words[0]}`
    
    } else if (words[1].length > words[0].length) {
        
        wordsEl.innerHTML = `${words[0]} ${words[1]}`
    
    } else {
    
        wordsEl.innerHTML = 'Le parole sono della stessa lunghezza!'
    
    }

    i++
}