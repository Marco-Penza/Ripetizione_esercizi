const bottone = document.getElementById("btn");
const testo = document.getElementById("testo");

bottone.addEventListener("click", function() {
    testo.textContent = "";
});
/*
let nome1 = 'Marco';
let eta = 30;
let numero_decimale = 100.0;
let vero = true;
console.log(typeof nome1);
console.log(typeof eta);
console.log(typeof numero_decimale);
console.log(typeof vero);

// crea 2 numeri stampa somma prodotto differenza e divisione e crea una stringa nome e cognome e uniscile con una template literal
let nome = 'Franco'
let cognome = 'Pippo'
const n1 = 10;
const n2 = 20;
let somma = n1 + n2;
let differenza = n1 - n2;
let prodotto = n1 * n2
let divisione = n1 / n2;
console.log(`Ciao, sono ${nome} ${cognome} il risultato del prodotto è ${prodotto}, la somma è ${somma}, la divisione è ${divisione} `);


//crea una funzione calcolaArea(base,altezza) che restituisce l'area di un rettangolo.chiamala con 3 valori diversi e stampa i risultati.

function calcolaArea(base, altezza) {
    let area = base * altezza;
    return area;
};
console.log(calcolaArea(5,10))

let risultato1 = calcolaArea(20,10);
let risultato2 = calcolaArea(1,5);
let risultato3 = calcolaArea(10,15);
console.log(`il risultato è ${risultato1}`);
console.log(risultato2);
console.log(risultato3);
    
//Riscrivi questa funzione come arrow function: function doppio(n) { return n * 2; } Poi crea un'arrow function saluta(nome) che restituisce "Ciao, [nome]!" e testala.

const doppio = (n) => { return n * 2};
const saluta = (nome) => {return `Ciao, ${nome}!`};
console.log(saluta('Marco'))

const presentati = (nome, eta = 0, citta = 'sconosciuta') => { return `Mi chiamo ${nome}, ho ${eta} anni, vengo da ${citta}`};
let presentazione_Marco = presentati('Marco',20,'Barletta');
let presentazione_Pippo = presentati('Pippo',20);
let presentazione_Gennaro = presentati('Gennaro');
console.log(presentazione_Marco);
console.log(presentazione_Pippo);
console.log(presentazione_Gennaro);


//crea una funzione analizzaNumero(n) che restituisce un valore : numero, pari truefalse, positivo truefalse,quadrato

const analizzaNumero = (n) => {
    return {
        valore: n,
        pari: n % 2 === 0,
        positivo: n >= 0,
        quadrato: n*n
}};
let numero_positivo = analizzaNumero(10).positivo;
console.log(numero_positivo);


//creare array con almeno 5 frutti, stampa il primo, l'ultimo,lunghezza totale, aggiungi un frutto con push,rimuovi l ultimo con pop e stampa l array aggiornato

let frutti = ['mela', 'pera', 'banana', 'anguria'];
console.log(frutti[0], frutti.length)
frutti.pop()
console.log(frutti)

//dato questo array[3,7,12,5,9,1] usa foreach per stampare ogni numero moltiplicato per 2 poi usa un for...of per stampare solo i numeri maggiori di 5.
const numeri = [3, 7, 12, 5, 9, 1];
const nuovoArray = numeri.map((n) => n * 2);
const nuovoArray2 = numeri.filter((n) => n >= 5);
console.log(nuovoArray)
console.log(nuovoArray2)


//Hai questo array di studenti:
studenti = [
    {nome:"Anna",voto:8},
    {nome:"Luca",voto:5},
    {nome:"Sara",voto:9},
    {nome:"Marco",voto:6}
];

const nuovoArray = studenti.filter((a) => a.voto >= 6);
const nuovoArray2 = studenti.find((a) => a.voto > 8);
console.log(nuovoArray, nuovoArray2);


//Dato [1, 2, 3, 4, 5]:
// • Con map: crea un nuovo array con ogni numero elevato al quadrato
// • Con reduce: calcola la somma di tutti i numeri
// • Con map: dato ["mario","anna","luca"] crea un array con le iniziali maiuscole (usa .toUpperCase() e [0])


const numeri = [1, 2, 3, 4, 5];
const arrayStringe = ['Mario','Anna','Luce'];
const nuovoArray = numeri.map((a) => (a * a));
const nuovoArray2 = numeri.reduce((b, n) => b + n);
const nuovoArray3 = arrayStringe.map((a) => a[0].toUpperCase())
console.log(nuovoArray, nuovoArray2, nuovoArray3)

const Auto = {
    marca:'Opel',
    modello: 'Opel astra',
    anno: 2020,
    colore:'nero'
};

delete Auto.colore
Auto.km = 10000;
console.log(Auto)

//Crea un oggetto contoBancario con:intestatario:il tuo nome,saldo 1000, deposita(importo):aggiunge al saldo e stampa il nuovo saldo, preleva(importo):sottrae se c'è abbastanza salto altrimenti stampa "Saldo insufficiente"mostraSaldo():stampa il saldo attuale.

const contoBancario = {
    intestatario: 'Marco Penza',
    saldo: 1000,
    
    mostraSaldo: function() {
        console.log(this.saldo);
    },

    deposita: function(importo) {
        this.saldo = this.saldo + importo 
        console.log(this.saldo)
    },

    preleva: function(importo) {
        if (this.saldo >= importo)
            this.saldo = this.saldo - importo
        else {
            console.log('Saldo insufficiente')
        } 
    },
};

//Crea un oggetto persona con: nome, cognome, eta e un oggetto annidato indirizzo con via, città, cap.
//Stampa la città usando la dot notation.
//Crea una funzione descrivi(persona) che stampa: "Nome Cognome vive a Città"

const persona = {
    nome: "Mario",
    cognome: "Penza",
    eta: 20,
    indirizzo: {
        via: "canfora",
        citta: "barletta",
        cap: "2"
    },
    descrivi: function() {
        console.log(`Salve sono ${this.nome} ${this.cognome} , vivo a ${this.indirizzo.citta} in via ${this.indirizzo.via} numero ${this.indirizzo.cap}`)
    }
}

console.log(persona.descrivi())
*/
//Crea una classe animale con: proprieta nome specie eta, costruttore con questi parametri descrivi() che stampa sono nome, un specie di eta anni.
//Crea 2 istanze diverse e chiama descrivi su entrambe.
class Animale {
    constructor(nome, specie, eta) {
        this.nome = nome,
        this.specie = specie,
        this.eta = eta
    }
    descrivi() {
        console.log(`Sono ${this.nome}, un ${this.specie} di ${this.eta.anni} anni, ${this.eta.mesi} mesi e ${this.eta.giorni} giorni`);
    }
}

const cane = new Animale("Fuffy", "cane", {anni: 3, mesi: 2, giorni: 5});
cane.descrivi()
const gatto = new Animale("Minny", "gatto", {anni: 0, mesi: 5, giorni: 9});
gatto.descrivi()