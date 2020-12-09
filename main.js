/*
Creare un oggetto palla che abbia le seguenti proprietà.

Nome = palla
Peso = 10*/



const userInput = prompt("Modifica il peso della palla");

const object = {
    nome : "Palla",
    peso : 10,
}

console.log(object);


/*
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/



palla.peso = Number(prompt("Modifica il peso dell'oggetto della palla"));


console.log(object);


//Creare un array di oggetti: ogni oggetto descriverà una bici
//da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


let objectArray = [
    {
        nome: Atala,
        peso: 30,
    },
    {
        nome: Lombardo,
        peso: 20,
    }
];

console.log(objectArray);

let pesoMinore = 0;

for (let base = 1; base < objectArray.length; indice++ ){
    if (objectArray[pesoMinore].peso > objectArray[base].peso) {
        pesoMinore = base;
    }
}

console.log(objectArray);


//Creare un oggetto che rappresenti un triangolo rettangolo,
//con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.

let triangolo = {
    base: 67,
    altezza: 24
}

let base = triangolo.base;
let altezza = trinagolo.altezza;
let ipotenusa = Math.sqrt(Math.pow(base,2) + Math.pow(altezza,2));

console.log(ipotenusa);

let perimetro = base + altezza + ipotenusa;

console.log(perimetro);

let area = (base * altezza) / 2;

console.log(area);

// Nuove proprietà

triangolo.perimetro = perimetro;
triangolo.area = area;

console.log(triangolo);

//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà:
//nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre
//saranno tutte settate a 0.

const teams = [
    {
        nome: "Manchester Utd",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Manchester City",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

console.log(teams);

//
//Generare numeri random al posto degli 0 nelle proprietà:
//punti fatti e falli subiti

for (let point in teams) {
teams[point].puntiFatti = Math.floor(Math.random(0,100) + 1);
teams[point].falliSubiti = Math.floor(Math.random(0,100) + 1);

};



console.log(teams);
