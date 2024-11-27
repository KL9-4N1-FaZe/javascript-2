let parole = ["albero", "casa", "computer", "auto", "mare", "giardino", "lampada", "scuola", "sedia", "tavolo", 
    "telefono", "computer", "bicicletta", "libro", "penna", "palla", "carro", "finestra", "cielo", "montagna"];

let paroleDaCercare = ["auto", "scuola", "lampada", "computer", "bicicletta"];

for(let i=0; i<paroleDaCercare.length; i++){
   console.log(parole.indexOf(paroleDaCercare[i])) 
}