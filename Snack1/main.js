const bici = [

    {
        nome : 'Rotter',

        peso : 20,
    },

    {
        nome : 'Terren',

        peso: 15,
    },


    {
        nome: 'Setter',

        peso: 25,
    },

];



// Prendo i valori del primo oggetto dell'array

function lightestProduct(myArrayOfProducts){

    let {peso} = myArrayOfProducts[0];

    let {nome} = myArrayOfProducts[0];

    for(let i = 0; i < myArrayOfProducts.length; i++){

        if(peso > myArrayOfProducts[i].peso){
            peso = myArrayOfProducts[i].peso;
            nome = myArrayOfProducts[i].nome;
        }

    }

    let risultato = `Il prodotto che pesa meno è ${nome} che pesa ${peso} kg`;

    return risultato;
    
}


let final = lightestProduct(bici);
console.log(final);

// let {peso} = bici[0];
// let {nome} = bici [0];


// // Ciclo valori array
// for(let i = 0; i < bici.length; i++){

//     if(peso > bici[i].peso){
//         peso = bici[i].peso;
//         nome = bici[i].nome;
//     }

//     /*sto dicendo: se la variabile peso con 0 è maggiore della successiva
//     allora peso e nome sono quelli della successiva, poi ricomincia, quella finale sarà ovviamente la più piccola*/

// }

// console.log(`La bicicletta con il peso minore è ${nome} che pesa ${peso} kg `);