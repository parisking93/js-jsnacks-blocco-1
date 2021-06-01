// SNACK 3 

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var arr = [];
for(i = 0; i < 6; i++){
    var numero = parseFloat(prompt('dammi il numero'));
    if (numero % 2 !=0) {
        arr.push(numero);
    }
}
document.getElementById('titolo3').innerHTML = ' i numeri dispari sono  ';
for(i = 0; i < arr.length; i++) {
    document.getElementById('dispari').innerHTML += arr[i] + ' ';
}