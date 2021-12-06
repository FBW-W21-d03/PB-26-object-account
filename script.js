const kontoChuck = {
    iban: "IBAN DE01 2345 6789 0000 1111 2222",
    Bankleizahl: "ABCDEFGH123",
    bank:"Bank Sparkasse Berlin Ost",
    Kontostand: "1000,00 €",
    Dispo: "500,00 €"
}

console.log(kontoChuck.bank, kontoChuck);

let bonni = "100,00 €";
let Dispoerhöhung = "50,00 €";

kontoChuck.bank = "Sparkasse Berlin West";

kontoChuck.Kontostand = parseFloat(bonni) + parseFloat(kontoChuck.Kontostand);
kontoChuck.Dispo = parseFloat(Dispoerhöhung) + parseFloat(kontoChuck.Dispo)


totn_kontostand = kontoChuck.Kontostand;
totn_dispo = kontoChuck.Dispo;

kontoChuck.Kontostand = totn_kontostand.toLocaleString('de-DE', {style:'currency', currency:'EUR'});

kontoChuck.Dispo = totn_dispo.toLocaleString('de-DE', {style:'currency', currency:'EUR'});

console.log("Neu Bank:", kontoChuck.bank, kontoChuck);