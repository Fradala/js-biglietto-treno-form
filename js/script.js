const buttonElement = document.querySelector('button');


buttonElement addEventListener('click' , function(){

    const kilometriPasseggiero = parseFloat ( document.getElementById('kilometri').value);
    const etàPasseggiero = parseInt ( document.getElementById('età').value);
    const minorenne = etàPasseggiero < 18
    const pensionato = etàPasseggiero >= 65

    const prezzoBigglietto1Km = 0.1976;
    const prezzoTotale = prezzoBigglietto1Km + kilometriPasseggiero;



    let scontoMinorenni = prezzoTotale * 17.65 / 100;
    let scontoPensionati = prezzoTotale * 53.27 / 100;


    const prezzoConScontMino = prezzoTotale - scontoMinorenni
    const prezzoConScontoPensio = prezzoTotale - scontoPensionati

    const numM = prezzoConScontMino;
    const numMFixed = numM.toFixed(2);

    const numP = prezzoConScontoPensio;
    const numPFixed = numP.toFixed(2);

    if ( minorenne){
        document.getElementById ('biglietto').innerHTML= 'il biglietto costa :' + numM.toFixed(2)


    }else if( pensionato){
        document.getElementById('biglietto').innerHTML= 'il biglietto costa :' + numP.toFixed(2)
        

    }else{
        
        document.getElementById('biglietto').innerHTML= 'il biglietto costa :' + prezzoTotale
    }



});



   

