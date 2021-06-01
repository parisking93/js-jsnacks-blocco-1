// 1 Snack 
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.

var prima = prompt('inserisci la prima parola');
var seconda = prompt('inserisci la seconda parola');

if (prima.length < seconda.length){
    document.getElementById('parola').innerHTML = 'la parola piu corta è ' + prima + '<br>' + 'la parola piu lunga è ' + seconda;
} else if (prima.length > seconda.length){
    document.getElementById('parola').innerHTML = 'la parola piu corta è ' + seconda + '<br>' + 'la parola piu lunga è ' + prima;
} else {
    document.getElementById('parola').innerHTML = 'le parole ' + prima + ' & ' + seconda +  ' sono lunghe uguali ';
}