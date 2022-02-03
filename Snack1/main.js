// Creo array oggetti bici

const bici = [

    {
        'nome': 'dragon',

        'peso' : 20,
    },

    {
        'nome': 'fire',

        'peso' : 10,
    },

    {
        'nome': 'hawk',

        'peso' : 25,
    }


];

// Ciclo array per stampare pesi
let pesi = [];
for (let i= 0; i < bici.length; i++){
   
    

    console.log(bici[i].peso);

    pesi.push(bici[i].peso);
    
}

console.log(pesi);

const pesoMax = Math.max(...pesi);
console.log(pesoMax)