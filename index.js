//Deklarieren
const chuksKonto = {
    Bank: "Sparkasse Berlin Ost",
    IBAN: "DE01 2345 6789 0000 1111 2222",
    Bankleizahl: "ABCDEFGH123",
    Kontostand: "1000€",
    Dispo: "500€"
}

//Aktualiesierung
chuksKonto.Bank = "Sparkasse Berlin West"
chuksKonto.Kontostand = "1100€"
chuksKonto.Dispo = "550€"

//Ausgabe
console.log(chuksKonto)