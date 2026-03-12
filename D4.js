/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const multiply = l1 * l2
  return multiply
}

console.log("EXERCISE 1:", area(3, 10)) //verified

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3
  } else {
    return n1 + n2
  }
}

console.log("EXERCISE 2a:", crazySum(3, 6)) //verified
console.log("EXERCISE 2b:", crazySum(9, 9)) //verified

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3
  } else {
    return Math.abs(num - 19)
  }
}

console.log("EXERCISE 3a:", crazyDiff(10)) //verified
console.log("EXERCISE 3b:", crazyDiff(25)) //verified

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((20 < n && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log("EXERCISE 4a:", boundary(105)) //verified
console.log("EXERCISE 4b:", boundary(30)) //verified

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa
  } else {
    return "EPICODE" + stringa
  }
}

console.log("EXERCISE 5a:", epify(" School")) //verified
console.log("EXERCISE 5b:", epify("EPICODE School")) //verified

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (pos) {
  if (pos % 3 === 0 || pos % 7 === 0) {
    return true
  } else {
    return false
  }
}

console.log("EXERCISE 6a:", check3and7(100)) //verified
console.log("EXERCISE 6b:", check3and7(35)) //verified

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (toBeReversed) {
  let reversed = "" //variabile dentro la funzione si "svuota" ogni volta che la chiamo. Imposto la variabile come contenitore di stringhe vuoto.
  //parto dall'i=7-1=6, ovvero dalla fine. Mi fermo a i=0. Vado a ritroso.
  for (let i = toBeReversed.length - 1; i >= 0; i--) {
    reversed = reversed + toBeReversed[i]
  }

  return reversed
}

console.log("EXERCISE 7:", reverseString("EPICODE")) // ricordati di chiamare la funzione

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (phrase) {
  let words = phrase.split(" ")
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    words[i] = word[0].toUpperCase() + word.slice(1)
  }
  return words.join(" ")
}

console.log("EXERCISE 8:", upperFirst("ho tanto sonno"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  return str.slice(1, -1)
}

console.log("EXERCISE 8:", cutString("Valeria"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (number) {
  let casual = []
  for (let i = 0; i < number; i++) {
    const lancio = Math.floor(Math.random() * 11)
    casual.push(lancio)
  }
  return casual
}

console.log(giveMeRandom(8))//verified
