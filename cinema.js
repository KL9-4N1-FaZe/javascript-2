let età = 40;
let persone = 20;
let online = true;

let costo

if(età<=23){
    costo = (persone*6)
}
else if(età>=51)
{
    costo = (persone*6)
}
else {
    costo = (persone*8)
}

if (online == true){
    costo -= persone
}

console.log(costo);