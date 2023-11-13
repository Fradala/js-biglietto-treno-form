

/*const kilometriPasseggiero = parseFloat ( prompt( 'dichiara i km che vuoi percorrere' ));
const etàPasseggiero = parseInt ( prompt( 'quanti anni hai'));*/
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

document.getElementById('kilometri').innerHTML= kilometriPasseggiero


const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function(){

    console.log('inizio funzione caalback')
    prezzoTotale
    console.log('fine call')
})