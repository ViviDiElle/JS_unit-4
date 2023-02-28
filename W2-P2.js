/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/*
me.skills.pop()

*/

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

/*
let arrayDispari = []

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    arrayDispari.push(i)
  }
}
console.log(arrayDispari);

*/

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

/*
let arrayRandom = []

for (let i = 1; i <= 10; i++) {
  let rand = Math.floor(Math.random() * 100 + 1)
  arrayRandom.push (rand)
}
console.log(arrayRandom);

*/

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

/*
  let arrayRandom = []
  let arrayPari = []
  
  for (let i = 1; i < arrayRandom.length; i++) {
    if (arrayRandom[i] % 2 === 0) {
      arrayPari.push(arrayRandom[i])
    }
  }
  console.log(arrayPari);

  oppure

  let arrayContenitore = [1,2,3,4,5,6,7,8,9]
  let arrayPari = []
  
  for (let i = 1; i < arrayContenitore.length; i++) {
    if (arrayContenitore[i] % 2 === 0) {
      arrayPari.push(arrayContenitore[i])
    }
  }
  console.log(arrayPari);

*/

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

/*
  let arrayRandom = []
  let somma = 0
  for (let i = 0; i < arrayRandom.lenght; i++) {
    somma = somma + arrayRandom[i]
  }
  console.log(somma)


*/


/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/


/*
let piuUno = []
for (let i = 0; i < arrayRandom.lenght; i++) {
    piuUno.push(arrayRandom[i] +1)
  }
  console.log(piuUno)
*/

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

/*
let arrayRandom = []

for (let i = 0; i < arrayRandom.length; i++) {
  if (arrayRandom[i] % 2 === 0) {
    arrayRandom.splice(i--, 1)
  }
}
console.log(arrayRandom)
*/

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

/*

let arrayRandom = []

for (let i = 1; i <= 10; i++) {
  let rand = Math.floor(Math.random() * 10 + 1)
  if (!arrayRandom.includes(rand))  {
  arrayRandom.push (rand)
  } else {
    i--
  }
}
console.log(arrayRandom);


*/

/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] RISULTATO: [7, 2, 5]
*/

/*
let es9 = ["EPICODE", "is", "great"]

for (let i = 0; i < es9.lenght; i++) {
  es9[i] = es9[i].lenght
}
console.log(es9)


*/

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/*

let es10 =[5,3,1]
es10.reverse()

console.log(es10)

*/

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

/*
let max = arrayRandom[0]

for (let i = 0; i < arrayRandom.length; i++) {
  if (arrayRandom[i] > max) {
    max = arrayRandom[i]
  }
}
console.log(max)

OPPURE

let es11 =[20,12,30,23,40,11]
let max = es11[0]
for (let i = 0; i <es11.lenght; i++) {
  if (arrayRandom[i] > max) {
    max = es11 [i]
  }
}

*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

/*
let maxYear = parseInt(movies[0].Year)
let oldest

for(let i = 0; i < movies.lenght; i++){
  letYearParsed = parseInt(movies[i].Year)
  if (yearParsed > maxYear) {
    oldest= movies[i]
  }
}

*/

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

/*
console.log(movies.length)


*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/*

let titoli = []
for(let i = 0; i < movies.lenght; i++) {
  titoli.push(movies[i].Title)
}
console.log(titoli)

*/

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/*

let thisMil =[]

for(let i = 0; i < movies.length; i++) {
  if (parseInt (movies[i].Year) > 2000) {
    thisMil.push(movies[i])
  }
}
console.log(thisMil)

*/

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'

/*

let movieID

for(let i = 0; i < movies.lenght; i++) {
  if (movies[i].imdbID === id) {
    movieID = movies[i]
    break
  }
}
console.log(movieID)

*/

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/*

let sommaAnni = 0
for(let i = 0; i < movies.lenght; i++) {
  sommaAnni = sommaAnni + parseInt(movies[i].Year)
}
console.log(sommaAnni)

*/

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

/*

let parola = "Ring"
let risultato = []
for(let i = 0; i < movies.lenght; i++) {
  if (movies[i].Title.includes(parola)) {
    risultato.push(movies[i])
  }
}
console.log(risultato)

*/