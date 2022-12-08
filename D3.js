/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 20;
if (num1 === num2) console.log("They are both the same numbers");
else if (num1 > num2) console.log(num1 + "Is the major one");
else num1 < num2;
console.log(num2 + " Is the major one");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 10;
if (num3 !== 5)
  console.log("NOT EQUAL..." + "SORRY!!! The number you pick is not a 5");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let num4 = 53;
if (num4 % 5 === 0) console.log("Good.. Your number can be divide by 5");
else if (num4 % 5 !== 0)
  console.log("Oppsss.. Your number can not be divided by 5");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro
   addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 10;
let num6 = 2;
if (num5 === 8 || num6 === 8) {
  console.log("Yes one of your number is an 8");
} else if (num5 !== 8 || num6 !== 8)
  console.log("None of your numbers is an 8");
if (num5 + num6 === 8) {
  console.log("Look.. If you add them toghter you get an 8");
} else if (num5 - num6 === 8)
  console.log("Look.. If you subract your numbers you get an 8");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile
   "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 49.99;
let shipping = 10;
if (totalShoppingCart > 50) {
  console.log("Oh..Congratulation..FREE SHIPPING 4 YA TODAY!!");
} else if (totalShoppingCart <= 50)
  console.log(
    "Your total will be € " + totalShoppingCart + " plus shipping € " + shipping
  );
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima
  se le sedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 35;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let shipping2 = 10;

if (totalShoppingCart2 > 50) {
  console.log("Oh..Congratulation..FREE SHIPPING 4 YA TODAY!!");
} else if (totalShoppingCart2 <= 50)
  console.log(
    "Your total will be € " +
      totalShoppingCart2 +
      " plus shipping € " +
      shipping2
  );

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num7 = 20;
let num8 = 150;
let num9 = 12;
if (num7 >= num8) {
  if (num9 >= num7) {
    console.log(num9, num7, num8);
  } else {
    if (num9 >= num8) {
      console.log(num7, num9, num8);
    } else {
      console.log(num7, num8, num9);
    }
  }
} else {
  if (num9 >= num8) {
    console.log(num9, num8, num7);
  } else {
    if (num9 >= num7) {
      console.log(num8, num9, num7);
    } else {
      console.log(num8, num7, num9);
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let gatto = "Exotic short hair";
console.log(typeof gatto);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num10 = 7;
if (num10 % 2 === 0) console.log("Your number is Even");
else num10 % 2 !== 0;
console.log("Your numer id Odd");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 13;
if (val < 5) console.log("Meno di 5");
else if (val < 10) console.log("Meno di 10");
else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills.pop();
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100;
console.log(array);
/* SCRIVI QUI LA TUA RISPOSTA */
