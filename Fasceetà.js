for (let i = 0; i <= 100; i++) {
    let fascia = ""; 

    switch (true) {
        case (i <= 1):
            fascia = "lattante";
            break;
        case (i == 2):
            fascia = "prima infanzia";
            break;
        case ( i <= 6):
            fascia = "seconda infanzia";
            break;
        case (  i <= 22):
            fascia = "pubertà e adolescenza";
            break;
        case ( i <= 39):
            fascia = "prima età adulta";
            break;
        case (  i <= 59):
            fascia = "seconda età adulta";
            break;
        case (  i <= 75):
            fascia = "terza età";
            break;
        case (  i <= 90):
            fascia = "quarta età";
            break;
        case (i >= 91):
            fascia = "quinta età";
            break;
    }

    console.log(i + " anni: " + fascia);
}