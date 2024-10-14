/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Buon lavoro! */


// ! Raccolta dati
// raccolgo i dati di partenza
const discount18=20;
const discount65=40;
const priceForKm = 0.21;
let totalPrice;

// chiedo l'età del passeggero
const passegereAge = parseInt(prompt("inserisci la tua età"))
// chiedo quanti km devono percorrere 
const passegereKm = parseInt(prompt("inserisci i km da percorrere"))
console.log(passegereKm);

// ! Elaborazione
// verifico l'età dei passeggeri
// SE l'età del passeggero è inferiore a 
//               18 calcolo il costo del biglietto e applico lo sconto del 20%
const ispassegereAgeValid = !isNaN(passegereAge) && passegereAge < 18;
if (ispassegereAgeValid < 18){
totalPrice = (priceForKm * passegereKm) * discount18 / 100 ;
}
// ALTRIMENTI SE l'età del passeggero è maggiore di 65
//               calcolo il costo del biglietto e applico lo sconto del 40%
else if (ispassegereAgeValid > 65){
    totalPrice = (priceForKm * passegereKm) * discount65 / 100 ;
}
// ALTRIMENTI SE l'età è compresa tra i 18 e i 65 anni applico il prezzo non scontato 
else if (ispassegereAgeValid > 18 && ispassegereAgeValid < 65){
    totalPrice = priceForKm * passegereKm;
}


// ! Output 
// stampo il messaggio 
let num = totalPrice.toFixed(2); 
alert(num + "€")