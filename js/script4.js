// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ['Francesco', 'Cristiano', 'Rebecca', 'Giovanni', 'Cristiana'];

var utente = prompt('dammi il tuo nome');
utente = utente.charAt(0).toUpperCase() + utente.slice(1);
var mex = 'Mi dispiace non puoi partecipare alla festa non sei nella lista';
i = 0;
trovato = true;

while(i < invitati.length && trovato) {
    if (utente == invitati[i]){
        trovato = false;
        mex = 'Benvenuto ' + utente + ' alla festa del grande Gasby';
    } else {
        i++;
    }
}
document.getElementById('messaggio').innerHTML = mex;