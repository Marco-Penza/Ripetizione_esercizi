const bottone = document.getElementById("btn");
const testo = document.getElementById("testo");

bottone.addEventListener("click", function () {
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

//Crea una classe calcolatrice con proprietà risultato iniziale 0, metodo aggiungi(n) sottrai(n) moltiplica(n) reset() stampa() usala per fare 10 + 5 - 2 *3 e stampa il risultato.

class Calcolatrice {
    constructor() {
        this.risultato = 0;
    }
    aggiungi(n) {
        this.risultato = this.risultato + n;
    }
    sottrai(n) {
        this.risultato = this.risultato - n;
    }
    moltiplica(n) {
        this.risultato = this.risultato * n;
    }
    reset() {
        this.risultato = 0;
    }
    stampa() {
        console.log(this.risultato);
    }
}

const conteggio = new Calcolatrice()


conteggio.aggiungi(10);
conteggio.aggiungi(5);
conteggio.sottrai(2);
conteggio.moltiplica(3)
conteggio.stampa();

//EREDITARIETA crea una classe base persona(nome cognome eta) con metodo saluta che stampa ciao sono nome cognome.
//Crea una classe Studente che extends persona con proprieta extra universita e metodo studia che stampa nome sta studiando a universita crea istanza di entrambe

class Persona {
    constructor(nome, cognome, eta) {
        this.nome = nome,
        this.cognome = cognome,
        this.eta = eta
    }
    saluta() {
        console.log(`Salve, sono ${this.nome} ${this.cognome}`)
    };
}

class Studente extends Persona {
    constructor(nome, cognome, eta, universita) {
        super(nome, cognome, eta);
        this.universita = universita;
    }
    studia() {
        console.log(`la persona ${this.nome} sta studiando presso ${this.universita}`);
    }
}
const Marco = new Studente("marco", "penza", 20, "Bocconi");
Marco.studia();
Marco.saluta();



//Crea dipendente(nome,stipendioBase) con metodo calcolaStipendio() che restituisce stipendioBase
//Crea Manager(nome, stipendioBase, bonus) che estende Dipendente e fa override di calcolaStipendio() usando super per aggiungere il bonus
//stampa lo stipendio di un dipendente e di un manager.

class Dipendente {
    constructor(nome, stipendioBase) {
        this.nome = nome;
        this.stipendioBase = stipendioBase;
    }
    calcolaStipendio() {
        console.log(this.stipendioBase);
    }
}

class Manager extends Dipendente {
    constructor(nome, stipendioBase, bonus) {
        super(nome, stipendioBase);
        this.bonus = bonus;
    }
    calcolaStipendio() {
        const totale = this.stipendioBase + this.bonus;
        console.log(totale);
    }
}

const pippo = new Dipendente("pippo", 5000);
pippo.calcolaStipendio();

const gianni = new Manager("gianni", 5000, 1);
gianni.calcolaStipendio();


//Dato questo oggetto utente:
//{nome:"Giulia", eta:28, città:"Roma", lavoro:"sviluppatrice"}

//• Estrai nome e eta in variabili
//• Estrai città rinominandola residenza
//• Estrai professione con default "non specificato" (non esiste nell'oggetto)

//Stampa tutto.
const utente = {
    nome:"Giulia",
     eta:28, citta:"Roma",
      lavoro:"sviluppatrice"
};

const { nome, eta, citta: residenza, professione = "non specificato" } = utente;
console.log(nome);
console.log(eta);
console.log(residenza);
console.log(professione);

//Crea una funzione stampaUtente({nome, eta, città = "sconosciuta"}) che accetta un oggetto e stampa "Nome: [nome] | Età: [eta] | Città: [città]".
//Chiamala con oggetti diversi, uno senza la città.

function stampaUtente({nome, eta, città = "sconosciuta"}) 
    {
    console.log(`Nome: ${nome} | Età: ${eta} | Città: ${città}`);
    }

stampaUtente({ nome: "Giulia", eta: 28, città: "Roma"});


// 1. Oggetto completo
const film1 = { titolo: "Inception", anno: 2010, regista: "Christopher Nolan", rating: 9 };

// 2. Senza regista e senza rating
const film2 = { titolo: "Film Misterioso", anno: 2024 };

// 3. Con una proprietà che si chiama 'regista' (che deve essere rinominata in 'autore')
const film3 = { titolo: "Il Gladiatore", anno: 2000, regista: "Ridley Scott" };

//Obbiettibo, crea una funzione mostraInfoFilm({ titolo, anno, regista: autore = "Anonimo", rating = 5 }) che accetta un oggetto film

function mostraInfoFilm({ titolo, anno, regista: autore = "Anonimo", rating = 5 }) {
    console.log(`Titolo: ${titolo}, Anno: ${anno}, Regista/Autore: ${autore}, Rating: ${rating}`);
}

mostraInfoFilm(film1);
mostraInfoFilm(film2);
mostraInfoFilm(film3);


// Crea una funzione stampaUtente({...}) che prende nome eta default non specificata, email non disponibile e ruolo rinominato in tipoUtente default = "guest"
const utente2 = {
    nome: "Sara",
    eta: 30
};

const utente3 = {
    nome: "Marco",
    email: "marco@mail.com",
    ruolo: utente
};

function stampaUtente({
    nome,
     eta = "non specificata",
      email = "non disponibile",
      ruolo: tipoUtente = "guest"
    }) {
    }
*/

//crea funzione stampaProdotto(...) estrarre nome prezzo categoria default generico e stock 0
const prodotto1 = {
    nome: "iPhone 15",
    prezzo: 1200,
    categoria: "smartphone",
    stock: 5
};

const prodotto2 = {
    nome: "Samsung TV",
    prezzo: 800
};

const prodotto3 = {
    nome: "MacBook Pro",
    prezzo: 2500,
    categoria: "laptop"
};

function stampaProdotto({
    nome,
    prezzo,
    categoria: tipoCategoria = "generico",
    stock: tipoStock = 0
}) {
    console.log(nome, prezzo, tipoCategoria, tipoStock);
}
stampaProdotto({
    nome: "iPhone",
    prezzo: 1200
});