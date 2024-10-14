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
const priceForKm = 0.21
// chiedo l'età del passeggero
const passegereAge = parseInt(prompt("inserisci la tua età"))
// chiedo quanti km devono percorrere 
const passegereKm = parseInt(prompt("inserisci i km da percorrere"))
// ! Elaborazione
// verifico l'età dei passeggeri
// SE l'età del passeggero è inferiore a 
//               18 calcolo il costo del biglietto e applico lo sconto del 20%
const ispassegereAgeValid = !isNaN(passegereAge) && passegereAge < 18;
if (!ispassegereAgeValid < 18){
   let totalPrice = priceForKm * passegereKm;
   function calcPrice(totalPrice , discount18){
    const discountCalc = (totalPrice * discount18) / 100;
    let discountPrice = totalPrice - discountCalc;
    return discountPrice;
   }

   console.log ("il" + discount18 + "% di" + totalPrice + "è" + discountPrice);
   
}





// ALTRIMENTI l'età del passeggero è maggiore di 65
//                applico lo sconto del 40% AND calcolo il prezzo
//ALTRIMENTI paga il prezzo pieno 
// ! Output 
// stampo il messaggio 