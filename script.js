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
    prezzo: 1200,
    categoria: "elettronica",
    stock: 0
});


//SPREAD CON ARRAY hai numeriA = [1,2,3] e numeriB = [4,5,6].
//- Crea tuttiNumeri unendo i due array senza concat
//- Crea numeriExtra aggiungendo 0 all inizio e 7 alla fine
//- Crea una copia indipendente di numeriA e modifica la copia
//- Verifica che la copia sia cambiata

const numeriA = [1, 2, 3];
const numeriB = [4, 5, 6];

const tuttiNumeri = [...numeriA, ...numeriB]
console.log(tuttiNumeri)

const numeriExtra = [0, ...tuttiNumeri, 7]
console.log(numeriExtra)

const numeriA1 = [...numeriA, 7];
console.log(numeriA1)


//Spread con oggetti
//Hai un oggetto base: {nome:"Mario", ruolo:"user", attivo:false}.

//• Crea una copia identica con spread
//• Crea un oggetto admin partendo da base con ruolo:"admin", nome Gennaro e attivo:true
//• Unisci due oggetti: {a:1, b:2} e {b:99, c:3} e spiega nel console.log cosa succede a b

const base = {
    nome:"Mario",
    ruolo:"user",
    attivo:false
}

const base1 = { ...base
}
console.log(base1)

const admin = {
    ...base,
    nome:"Gennaro",
    ruolo:"admin",
    attivo:true
}
console.log(admin)

const oggetto1 = {
    a:1,
    b:2
}
const oggetto2 = {
    b:99,
    c:3
}
const oggettiUniti = {
    ...oggetto1,
    ...oggetto2
}
console.log(oggettiUniti)

//Crea una funzione somma(...numeri) che accetta un numero qualsiasi di argomenti e restituisce la loro somma.
//Crea una funzione prima(primo, ...resto) che stampa il primo elemento e poi tutti gli altri separati da virgola.
//Testale con valori diversi.


function somma(...numeri) {
    let totale = 0;
    for (let i = 0; i < numeri.length; i++)
        totale = totale + numeri[i];
    console.log(totale)
}

somma(1,2,3,4,5)

//Versione Moderna
// let totale = 0;
// numeri.forEach((n) => {
//    totale += n;
// });

function prima(primo, ...resto) { 
    console.log(primo)
    console.log(` il resto è ${resto.join(",")}`)
}
prima(10,20,30)

//Promise e then
//Crea una funzione attendi(ms) che restituisce una Promise che si risolve dopo ms millisecondi (usa setTimeout).
//Chiamala con .then() e stampa "aspettato X ms" quando finisce.
//Poi crea una Promise che si rifiuta e gestisci l'errore con .catch()

// funzione che aspetta ms millisecondi

function attendi(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}
function fallisci() {
    return new Promise((resolve, reject) => {
        reject("qualcosa è andato storto");
    });
}

async function esegui() {
    try {
        const ms = await attendi(2000);
        console.log(`aspettato ${ms} ms`);

        await fallisci();
        console.log("successo"); // Non arriverà mai qui
    } catch (errore) {
        console.log("errore:", errore);
    }
} 

esegui();

//Riscrivi questa funzione usando async/await:
//fetch('https://jsonplaceholder.typicode.com/users/1')
//.then(r => r.json())
//.then(data => console.log(data.name))


async function esegui() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        console.log(data.name)
        console.log(data.email)
        console.log(data.username)
    } catch (errore) {
        console.log("errore", errore)
    }
}
esegui();

//Filtrare dati da API
//Usa fetch per chiamare 
//https://jsonplaceholder.typicode.com/todos
//Poi filtra solo i todo con userid === 1
//Tra quelli, stampa solo i completati (completed === true)
//Stampa quanti sono in totale
async function caricaTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  const userTodos = todos.filter((todo) => {
    return todo.userId === 1
  })

  const completedTodos = userTodos.filter((todo) => {
    return todo.completed === true
  })

  console.log(userTodos)
  console.log(completedTodos)
  console.log(completedTodos.length)
}

caricaTodos();

//try/catch base 
//JSON.parse() lancia un errore se la stringa non è JSON valido.

function parseJson(testo) {
    try {
        const obj = JSON.parse(testo);
        console.log("OK:", obj);
        return obj;
    } catch (err) {
        console.log("Errore:", err.message)
        return null;
    }
}
console.log(parseJson('{"nome":"Marco"}'));
console.log(parseJson('non valido'));

//fetch + try/catch + gestione errore
//Obbiettivo creare funzione getUser() che prende un utente da API - se funziona stampa i dati - se fallisce stampa errore

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

        const data = await response.json()

        console.log(data.name);
        console.log(data.email);
        console.log(data.username);
    } catch (err) {
        console.log("errore", err)
    }
} //fetch -> Promise: risposta dal server -> Response -> JSON() -> Promise: parsing dati -> Oggetto JS finale
getUser();

//Crea fimzopme getPost() che prende un post da:https://jsonplaceholder.typicode.com/posts/1 stampa title body e usa async await try catch

async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json();
        console.log(data.title)
        console.log(data.body)
    } catch (err) {
        console.log("Errore", err)
    }
}
getPost()

//Esercizio usare API: https://jsonplaceholder.typicode.com/posts scrivi una funzione getPosts() che deve prendere tutti i post e filtrare solo quelli con userId === 1 e stampare solo i titoli
async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const userPosts = data.filter((post) => {
            return todo.userId === 1
        })
        const userTitle = userPosts.map((post) => {
            return todo.title
        })
        console.log(userPosts)
        console.log(userTitle)
    } catch (err) {

    }
}

getPosts();


//Crea dividi(a,b) che: Se b === 0: throw new Error("Divisione per zero"), Se a o b non sono number:throw new TypeError("Solo numeri"), Altrimenti restituisce a / b;
//Chiamala 4 vole in try/catch separati: 10/2, 10/0, "ciao"/2, 5/2

function dividi(a,b) {
    if (b === 0) {
        throw new Error("divisione per zero")
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Solo numeri")
    }
    return a / b;
}

try {
    const risultato = dividi(10, 100);
    console.log(risultato);
} catch (err) {
    console.log("Errore:", err.message);
}

try {
    console.log(dividi(10,2));
} catch (err) {
    console.log("errore nel risultato 1", err);
}

try {
    console.log(dividi(10,0));
} catch (err) {
    console.log(err.message);
}

try {
    console.log(dividi("ciao",2));
} catch (err) {
    console.log(err.message);
}

try {
    console.log(dividi(5,2))
} catch (err) {
    console.log(err.message)
}

function eseguiDivisione(a,b) {
    try {
        console.log(dividi(a,b))
    } catch (err) {
        console.log(err.message)
    }
}

eseguiDivisione(10,2);
eseguiDivisione(10,0);
eseguiDivisione("ciao",2);
eseguiDivisione(5,2);


//Simula una connessione DB: connetti(url) se url vuota lancia Error- eseguiQuery(db,sql) - se sql contiene "drop" lancia error- disconnetti(db) stampa "connessione chiusa" 
//Crea anche eseguiQuerysicura(url,sql) con try catch finally che chiude sempre la connessione anche in caso di errore

function connetti(url) {
    if (!url) {
        throw new Error("URL mancante o non valido");
    }
    return {url}
}
//esempio const db = connetti("mysql://localhost"); db diventa { url: "mysql://localhost"}

function eseguiQuery(db, sql) {

    if (sql.includes("DROP")) {
        throw new Error("Query pericolosa")
    }
    return `Query eseguita: ${sql}`;
}

function disconnetti(db) {
    console.log("Connessione chiusa");
}

function eseguiQuerySicura(url,sql) {
    let db;
    try {
        db = connetti(url);
        const risultato = eseguiQuery(db,sql);
        console.log(risultato);
    } catch (err) {
        console.log("Errore:", err.message);
    } finally {
        disconnetti(db);
    }
}
eseguiQuerySicura(
    "mysql://localhost", "SELECT * FROM users");
//Query mancante
eseguiQuerySicura("", "SELECT * FROM users");
//Query pericolosa
eseguiQuerySicura("mysql://localhost", "DROP TABLE users")


//Optional chaining ?.
//Hai questi oggetti con strutture diverse:

const u1 = {
    nome: "Marco",
    indirizzo: {città:"Napoli",
        cap: "80100"
    }
}
const u2 = {
    nome: "Anna",
    indirizzo: {città:"Roma"
    }
}
const u3 = {
    nome: "Luca"
}
const u4 = null

//Crea ottieniInfo(u) che stampa nome, città e CAP.
//Usa ?. e ?? — senza if/else. Se manca, mostra "sconosciuta"/"n/d".

function ottieniInfo(u) {
   const nome = u?.nome ?? "sconosciuta"
   const city = u?.indirizzo?.città ?? "sconosciuta"
   const cap = u?.indirizzo?.cap ?? "n/d"
   return console.log(`nome ${nome}, città ${city}, cap è ${cap}`)
}
ottieniInfo(u1);
ottieniInfo(u2);
ottieniInfo(u3);
ottieniInfo(u4);


//?? vs ||
//Differenza importante:
//• || usa il default se il valore è falsy (0, false, "", null, undefined)
//• ?? usa il default SOLO se è null o undefined

//Dimostrazione con saldo=0 e attivo=false.
//Poi crea impostazioniApp(config) con ?? per i default:
//{volume:50, debug:false, nome:"Utente", lingua:"it", timeout:5000}
const saldo = 0 
const attivo = false
saldo || 100    //risultato 100
attivo || true   //risultato true
// || troppo aggressivo (blocca anche valori validi come 0)
// ?? piu preciso

const appDefault = {
    volume: 50,
    debug: false,
    nome: "Utente",
    lingua: "it",
    timeout: 5000
}

function impostazioniApp(config) {
    const volume = config.volume?? 50
    const debug = config.debug?? false
    const nome = config.nome?? "Utente"
    const lingua = config.lingua?? "it"
    const timeout = config.timeout?? 5000
    console.log(`volume è ${volume} - il debug è ${debug} - nome: ${nome} - lingua: ${lingua} - timeout: ${timeout}`)
}
impostazioniApp({})

//Map base
//Crea una rubrica con Map:
//• Aggiungi 4 contatti con .set(nome, numero)
//• Controlla se un nome esiste con .has()
//• Prendi un numero con .get()
//• Rimuovi un contatto con .delete()
//• Stampa tutti con for...of
//• Stampa quanti contatti con .size

const rubrica = new Map();
rubrica.set("Marco", "123");
rubrica.set("Gianni", "456");
rubrica.set("Filippo", "789");
rubrica.set("Lello", "487");
const giggino = rubrica.has("Marco");
console.log(giggino)

const rimuovereNumero = rubrica.delete("Gianni")

const numeroGianni = rubrica.get("Gianni");
console.log(numeroGianni);
console.log(rubrica);

for (const[nome, numero] of rubrica) {
    console.log(nome, numero);
}

const checkNumeri = rubrica.size
console.log(checkNumeri);
// .set() - aggiungi
// .get() - leggi
// .has() - controlla
// .delete() - rimuovi
// .size - conteggio
// for ... of - scorrere

//Set valori unici
//1 Rimuovi duplicati da [1,2,3,4,1,5,3,6,5]
//2 Set di frutti aggiungi, rimuovi usa .has() e .size
//Intersezione:dati[1,2,3,4,5] e [3,4,5,6,7], trova i numeri in entrambi usando Set
new Set([1, 2, 2, 3, 3, 3])

const duplicati = [1,2,3,4,1,5,3,6,5];
const senzaDuplicati = new Set(duplicati)
console.log(senzaDuplicati)

const ritornoDuplicati = [...senzaDuplicati]
console.log(ritornoDuplicati)

const frutti = new Set([])
frutti.add("Mela");
frutti.add("Pera");
frutti.add("Banana");
console.log([...frutti]);

frutti.delete("Banana")
console.log([...frutti]);

const x = frutti.has("Pera");
console.log(x)

console.log(frutti.size);

const a = [1,2,3,4,5];
const b = [3,4,5,6,7];

//const completedTodos = userTodos.filter((todo) => {return todo.completed === true})
const setb = new Set(b);
const newArray = a.filter((x) => {
    return setb.has(x)
})
console.log(newArray);

//Map — contare occorrenze
//Scrivi contaParole(testo):
//• Divide in parole (.toLowerCase().split(' '))
//• Conta ogni parola con una Map
//• Restituisce la Map
//Scrivi trovaPiùFrequente(mappa) — la parola col massimo conteggio.
//Test: "il gatto e il cane e il gatto mangia il pesce"

const testo1 = "il gatto e il cane e il gatto mangia il pesce"

function contaParole(testo) {
    const parole = testo.toLowerCase().split(' ');
    const mappa = new Map();
    for (const parola of parole) {
        if (mappa.has(parola)) {
            const valore = mappa.get(parola)
            mappa.set(parola, valore + 1)
        } else {
          mappa.set(parola, 1)
        }
    }
    return mappa
}
console.log(contaParole(testo1));

//Closure base — contatore
//Crea creaContatore(iniziale=0) che restituisce un oggetto con:
//• incrementa() — +1
//• decrementa() — -1
//• valore() — restituisce il valore
//• reset() — torna al valore iniziale
//Il valore deve essere PRIVATO. Crea due contatori separati e dimostra che sono indipendenti.

function creaContatore(iniziale = 0) {
    let valore = iniziale;
    return {
        incrementa: function() {
            valore++;
        },
        decrementa: function() {
            valore--;
        },
        valore: function() {
            return valore;
        },
        reset: function() {
            valore = iniziale;
        }
    }
}
const c1 = creaContatore(0);
c1.incrementa();
c1.incrementa();
console.log(c1.valore());
c1.decrementa();
console.log(c1.valore());
c1.reset();
console.log(c1.valore());

//Modulo pattern
//Crea creaCarrello() che gestisce un array privato e restituisce:
//• aggiungi(prodotto, prezzo)
//• rimuovi(nomeProdotto)
//• totale() — somma prezzi
//• lista() — stampa tutti

function creaCarrello() {
    let carrello = [];
    return {
        aggiungi: function(prodotto, prezzo) {
            carrello.push({nome: prodotto, prezzo: prezzo });
        },
        rimuovi: function(prodotto) {
            carrello = carrello.filter((x) => {
                return x.nome !== prodotto
            })
        },
        totale: function() {
            return carrello.reduce((tot, item) => {
                return tot + item.prezzo;
            }, 0);
        },
        lista: function() {
            carrello.forEach((a) => {
                console.log(a.nome, a.prezzo)
            })
        }
    }
}

const c = creaCarrello();
c.aggiungi("pane", 2);
c.aggiungi("latte", 1.5);
c.lista();
console.log(c.totale());
console.log(`Il totale è ${c.totale()}`);


//Crea una funzione creaRegistro() che contiene un array privato di studenti {nome:"Mario", voto: 7}
//La funzione deve restituire: aggiungi(nome,voto), rimuovi(nome), media() e lista() e migliorStudente()

function creaRegistro() {
    let studenti = [];
    return {
        aggiungi: function(nome, voto) {
            studenti.push({nome: nome, voto: voto });
        },
        rimuovi: function(nome) {
            let stutendi = studenti.filter((x) => {
                return x.nome !== nome;
            });
        },
        media: function(voto) {
            const somma = studenti.reduce((tot, s) => {
                return tot + s.voto;
            }, 0);
            return somma / studenti.length;
        },
        lista: function() {
            studenti.forEach((a) => {
                console.log(a.nome, a.voto);
            });
        },
        migliorStudente: function() {
            let migliore = null;
            studenti.forEach((s) => {
                if(migliore === null || s.voto > migliore.voto) {
                    migliore = s;
                }
            });

            return migliore;
        }
    }
}
const registro = creaRegistro();
registro.aggiungi("Mario", 7);
registro.aggiungi("Filippo", 10);
console.log("LISTA:");
registro.lista();
console.log("MEDIA:")
console.log(registro.media());

//Clousure nei loop
//Questo stampa "5" cinque volte: for (var i=0; i<5; i++){setTimeout(() => console.log(i),0)}
//Sistema in 3 modi: 1.Sostituisci var con let. 2.Funzione factory che cattura n. 3.[0,1,2,3,4].forEach(...)

for(var i=0; i<5; i++) {
    setTimeout(() => console.log("con var", i), 2000)
}
for(let i=0; i<5; i++) {
    setTimeout(() => console.log("con let", i), 0)
}

//Esercizi col DOM
//Usa gli elementi nel sandbox:
//• Cambia il testo del titolo in "Modificato con JS!"
//• Cambia il colore del paragrafo a #378ADD
//• Aggiungi la classe "h1" al div box
//• Crea un nuovo <li> "Elemento aggiunto" e appendilo alla lista

const bottone = document.getElementById("btn");
const testo = document.getElementById("testo");
const titolo = document.getElementById("titolo");
const box = document.querySelector(".box");
const lista = document.getElementById("lista1");
const li = document.getElementById("li");

bottone.addEventListener("click", function () {
    testo.textContent = "un programmatore";
    titolo.textContent = "Modificato con JS!";
    testo.classList.add("sfondo-azzurro");
    
    const elementi = document.querySelectorAll("#lista1 li");
    let esiste = false;

    elementi.forEach((li) => {
        if (li.textContent === "Elemento aggiunto") {
            esiste = true;
        }
    });

    if(!esiste) {
        const li = document.createElement("li");
        li.textContent = "Elemento aggiunto";
        lista.append(li);
    }
});

//Usa il sandbox con bottone e paragrafo:
//• Incrementa il contatore ad ogni click
//• Dopo 5 click, cambia sfondo del bottone
//• Mostra "Hai cliccato X volte!" nel paragrafo
//• Il bottone Reset azzera tutto

const bottone2 = document.getElementById("btn2");
const reset = document.getElementById("reset");
const testo1 = document.getElementById("testo1");
let contatore = 0;

bottone2.addEventListener("click", function () {
    contatore++;
    testo1.textContent = `hai cliccato ${contatore} volte`
    if(contatore >= 5) {
        bottone2.style.backgroundColor = "#378ADD";
        void bottone2.offsetWidth;
        bottone2.classList.add("pulse");
    }
});

reset.addEventListener("click", function () {
    contatore = 0;
    testo1.textContent = "";
    bottone2.style.backgroundColor = "";
    bottone2.classList.remove("pulse");
});

//Usa il sandbox con casella e lista frutti:
//• Ad ogni tasto, filtra i frutti che contengono il testo
//• Case-insensitive
//• Se nessun risultato, mostra "Nessun risultato"
//• Casella vuota = mostra tutti

const input = document.getElementById("input");
const frutti = document.querySelectorAll("#lista2 li");
const messaggio = document.getElementById("messaggio");

input.addEventListener("input", function () {
    const valore = input.value.toLocaleLowerCase();
    let trovato = false;

    frutti.forEach((frutto) => {
        const testo = frutto.textContent.toLowerCase();
        if (testo.includes(valore)) {
            frutto.style.display = "block";
            trovato = true;
        } else {
            frutto.style.display = "none";
        }
    });
    
    if (valore === "") {
        frutti.forEach((frutto) => {
            frutto.style.display = "block";
        });
        messaggio.textContent = "";
        return;
    }

    if(!trovato) {
        messaggio.textContent = "Nessun risultato";
    } else {
        messaggio.textContent = "";
    }
});
*/
