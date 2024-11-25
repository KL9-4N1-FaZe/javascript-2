for (let i = 0; i <= 100; i++) {
    let fascia = ""; 

    switch (true) {
        case (i >= 0 && i <= 1):
            fascia = "lattante";
            break;
        case (i === 2):
            fascia = "prima infanzia";
            break;
        case (i >= 3 && i <= 6):
            fascia = "seconda infanzia";
            break;
        case (i >= 7 && i <= 22):
            fascia = "pubertà e adolescenza";
            break;
        case (i >= 23 && i <= 39):
            fascia = "prima età adulta";
            break;
        case (i >= 40 && i <= 59):
            fascia = "seconda età adulta";
            break;
        case (i >= 60 && i <= 75):
            fascia = "terza età";
            break;
        case (i >= 76 && i <= 90):
            fascia = "quarta età";
            break;
        case (i >= 91):
            fascia = "quinta età";
            break;
    }

    console.log(i + " anni: " + fascia);
}