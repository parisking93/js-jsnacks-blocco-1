// 2 SNACK 

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
// Variante: stampare solo i numeri pari

// var somma = 0;
// for (i = 0; i < 5; i++){
//     var numero = parseFloat(prompt('dammi il numero'));
//     somma += numero;
// }
// document.getElementById('parola2').innerHTML = 'la somma è ' + somma;

var somma = 0;
var j= 0;
var par = [];
while(j < 5){
    var numero = parseFloat(prompt('dammi il numero'));
    somma += numero;
    if (numero % 2 == 0){
        par.push(numero);
    }
    j++;
}

if (par.length != 0) {
    document.getElementById('titolo').innerHTML = ' i numeri pari sono ';
    for(i = 0; i < par.length; i++){
        document.getElementById('pari').innerHTML += par[i] + ' ';
    }
} else {
    document.getElementById('titolo').innerHTML = ' non ci sono numeri pari ';

}
document.getElementById('parola2').innerHTML = 'la somma è ' + somma;