let nome: string = "Marco";
console.log(nome);

/* //Inferenza automatica
//Sperimenta l'inferenza:
//• Dichiara variabili senza annotazione — TS deduce il tipo
//• Prova ad assegnare il tipo sbagliato (in TS reale darebbe errore)
//• Dichiara let risultato: number senza valore iniziale (qui serve annotare)
//• Crea un oggetto: TS inferisce anche le proprietà


let nome1 = "Marco";
let eta = 25;
let online = true;
let risultato: number;

let utente = {
    nome: "Marco",
    eta: 25,
    online: true
};

//any vs unknown vs never
//Confronta i tre tipi:
//• Con any: assegna valori diversi — TS non si lamenta mai
//• Con unknown: prova ad usarlo direttamente — TS ti fermerà
//• Usa typeof per fare narrowing su unknown
//• Crea una funzione fallisciSempre(msg: string): never

let valore: any;
valore = 10;
valore = "ciao";
valore = true;

let dato: unknown;
dato = 10;
dato = "ciao";
if (typeof dato === "string") {
    console.log(dato.length);
}

function fallisciSempre(msg: string): never {
    throw new Error(msg);
}


//TIPI DELLE FUNZIONI
//Crea queste funzioni con i tipo corretti:
//- saluta(nome:string):string - restituisce "Ciao,[nome]!"
//-somma(a,b): number - somma due numeri
//- isAdulto(eta): boolean - true se eta >= 18
//- presentati(nome, eta): void - solo console.log, non ritorna nulla.

function saluta(nome: string): string {
    return `Ciao, ${nome}!`
}
saluta("Marco");
console.log(saluta("Marco"));

function somma(a: number, b:number): number {
    return a + b
}
console.log(somma(10,20));

function isAdulto(eta :number): boolean {
    return (eta >= 18);
}
console.log(isAdulto(10));

function presentati(nome: string, eta: number): void {
    console.log(`Mi chiamo ${nome} ed ho ${eta} anni`);
}
presentati("Marco",32);


//Union types e any
//Crea:
//• Una variabile id che può essere string oppure number (union type)
//• Una funzione formatta(valore: string | number): string che se riceve un numero lo precede con "#", se è stringa la mette in maiuscolo
//• Prova anche il tipo any (ma poi commenta perché è da evitare)
//• Prova il tipo unknown e la differenza con any

let id: string | number;

function formatta(valore:string | number): string {
    if (typeof valore === "string") {
        return valore.toUpperCase();
    } else {
    return "#" + valore;
    } 
    // any: disattiva i controlli di TypeScript
    //let valore: any = "ciao";
    //valore = 10;
    //valore = true;
    //let y: unknown = "ciao";
    //y.toUpperCase(); // ERRORE
} 
    
//Type assertion (as) e as const
//Sperimenta con as e as const:
//• Una risposta API arriva come unknown — usa as per dire a TS che struttura ha
//• Crea un array COLORI con as const — prova a modificarlo (errore!)
//• Crea un oggetto CONFIG as const — prova a cambiare una proprietà (errore!)
//• Usa typeof COLORI[number] per ottenere il tipo union dai valori

let risposta :unknown;

risposta = {
    nome: "Marco",
    eta:25
};

risposta as { 
    nome: string;
     eta: number
}; //permette di leggere nome ed eta pero ts si fida non verifica davvero i dati



const COLORI = ["rosso", "verde", "blu"] as const;

//COLORI.push("giallo"); errore

const CONFIG = {
    porta: 3000,
    ambiente: "dev"
} as const;

type Colore = typeof COLORI[number];
let c: Colore;

c = "rosso";
c = "blu";
//c = "giallo";   errore
*/

//Interfacce base
//Crea le interfacce e usale:
//• Interfaccia Libro: titolo, autore, anno, pagine, disponibile
//• Crea un array Libro[] con almeno 3 libri
//• Una funzione cercaLibro(lista: Libro[], autore: string): Libro[]
//• Una funzione stampaLibro(libro: Libro): void

interface Libro {
    titolo: string;
    autore: string;
    anno: number;
    pagine: number;
    disponibile: boolean;
};

const libro1: Libro = {
    titolo: "Harry Potter",
    autore: "Pippo",
    anno: 1960,
    pagine: 2000,
    disponibile: true,
};

const libro2: Libro = {
    titolo: "Avenger",
    autore: "Iron Man",
    anno: 1945,
    pagine: 2500,
    disponibile: true,
};

const libro3: Libro = {
    titolo: "Godzilla",
    autore: "Tom Cruise",
    anno: 2020,
    pagine: 3500,
    disponibile: true,
};

const libri: Libro[] = [];
libri.push(libro1, libro2, libro3);

function cercaLibro(lista: Libro[], autore: string): Libro[] {
    return lista.filter((libro) => {
        return libro.autore.toLowerCase() === autore.toLowerCase()
    })
}

//piu pulita vista con AI 
//function cercaLibro(lista: Libro[], autore: string): Libro[] {
//    return lista.filter(libro =>
//        libro.autore.toLowerCase() === autore.toLowerCase()
//    );
//}


