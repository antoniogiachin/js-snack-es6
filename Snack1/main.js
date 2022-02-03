// Creo array oggetti bici

const bici = [

    {
        nome:'era',

        peso: 25,
    },

    {
        nome:'ea',

        peso: 15,
    },

    {
        nome:'esa',

        peso: 20,
    }

];


const arrayPesi =[];

for (let i = 0; i < bici.length; i++){

    let {peso} = bici[i];
    
    let nomePeso = `La bici ${bici[i].nome} pesa ${(peso)} kg`;

    console.log(nomePeso);

    arrayPesi.push(parseInt(peso));


}


console.log(arrayPesi);
const result = Math.min(...arrayPesi);
console.log(`Il peso minore è di ${result} kg`);





