// Array ogetti squadre

const squadre =[

    {
        nome : 'Napoli',
     
        puntiFatti : 0,
        
        falliSubiti : 0,
    },

    {
        nome : 'Inter',
     
        puntiFatti : 0,
        
        falliSubiti : 0,
    },

    {
        nome : 'Juve',
     
        puntiFatti : 0,
        
        falliSubiti : 0,
    },


];

function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min) + min);
}


function teamFoul(myTeamArray){

    
    function randomNumber(min, max){
        
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    const recap =[];
    
    for(let i =0; i < myTeamArray.length; i++){
    
        myTeamArray[i].puntiFatti = randomNumber(1, 100);
    
        myTeamArray[i].falliSubiti = randomNumber(1, 50);
    
        const {nome} = myTeamArray[i];
        const{falliSubiti} = myTeamArray[i]
        console.log(nome, falliSubiti);
    
        recap.push(`La squadra ${nome}, ha subito ${falliSubiti} falli.`);
    
    }
    return recap;
}


const riassunto = teamFoul(squadre);
console.log(riassunto);


