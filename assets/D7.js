/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function stringheConcatenate(str1, str2) {
  //denominiamo la funziona, ricordati che str1, str2 non sono valori fissa, stanno lì appesi ma poi devi scrivere tu il valore, li hia chiamati così per intuire un po' che ci devi mettere
  const primiDue = str1.slice(0, 2); //ricordati che con slice indicando il dove puntare all'interno () dici da dove iniziare e dove finire, dove finisce quello puntato è escluso
  const ultimiTre = str2.slice(-3); //qui prendiamo gli ultimi 3 caratteri, generalmente dovremmo indicare 2 valori ma non indicando nulla quello parte da chi sta al terzo posto dalla fine e prende tutto, ovviamente puoi fare comunque cose come (-3,-1) e così via
  const risultato = primiDue + ultimiTre;
  const maiuscolo = risultato.toUpperCase();
  console.log("Risultato in maiuscolo", maiuscolo);
}
stringheConcatenate("daprocida", "sterno");
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function generaDieciNumeri() {
  let dieciNum = [];
  for (let i = 0; i < 10; i++) {
    dieciNum.push(Math.floor(Math.random() * 101));
  }
  return dieciNum;
}

const dieciUscita = generaDieciNumeri();
const dieciUscita2 = generaDieciNumeri();
console.log("dieciNum", dieciUscita);
console.log("dieciNum2", dieciUscita2);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function numeriPari() {
  const tuttiNumeri = generaDieciNumeri();
  console.log("tutti numeri", tuttiNumeri);
  const soloIPari = tuttiNumeri.filter((num) => num % 2 === 0); //ricordati che quei due "num" non sono modi di default di chimare gli elementi, lì devi chiamare gli elemnti di un array ma decidi tu come ogni volta
  return soloIPari; //ricordati sempre di mettere i default in questi casi
}
let pari = numeriPari();

console.log("Solo numeri pari", pari);
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaPari(pari) {
  let somma = 0;
  pari.forEach((num) => (somma += num));
  return somma;
}
const risultatoPari = sommaPari(pari);
console.log("Somma di numeri Pari", risultatoPari);
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function reduciPari() {
  const sommaPari = pari.reduce((accumulatore, numero) => accumulatore + numero, 0); //qui di nuovo chiamiamo noi gli elementi come vogliamo, lo 0 finale è per inizializzare l'inizio con 0 che è un numero che ha valore numero.
  return sommaPari;
}
reduciPari;
let reduceSomma = reduciPari();
console.log("Somma con Reduce", reduceSomma);
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incrementaNumeri() {
  let numeroMoltiplicatore = 5;
  let numeri = generaDieciNumeri();
  return numeri.map((num) => num * numeroMoltiplicatore);
}
const numeriIncrementati = incrementaNumeri();
console.log("Numeri incrementati", numeriIncrementati);
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const arrEpic = ["EPICODE", "is", "great"];
function ritornaNumeri(arrEpic) {
  return arrEpic.map((str) => str.length);
}
const numeriEpic = ritornaNumeri(arrEpic);
console.log("numeriEpic", numeriEpic);
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function creaDispari() {
  let dispari = [];
  for (let i = 0; i < 99; i++) {
    if (i % 2 !== 0);
    {
      dispari.push(i);
    }
  }
  return dispari;
}
const soloDispari = creaDispari();
console.log("Dispari", soloDispari);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function filmPiuVecchio(movies) {
  let piuVecchio = movies[0]; // diamo un punto di partenza per confrontare i filmdal primo film
  movies.forEach((film) => {
    if (film.anno < piuVecchio.anno) {
      piuVecchio = film; // aggiorno se trovo un film più vecchio
    }
  });

  return piuVecchio;
}
const filmDatato = filmPiuVecchio(movies);
console.log("Film", filmDatato);
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
