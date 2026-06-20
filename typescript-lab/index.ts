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
*/
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