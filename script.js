const bankKonto = {
    iban: "IBAN DE01 2345 6789 0000 1111 2222",
    Bankleizahl: "ABCDEFGH123",
    bank:"Bank Sparkasse Berlin Ost",
    Kontostand: 1000,
    Dispo: 500
}

console.log(bankKonto.bank, bankKonto);

let bonni = 100;
let Dispoerhöhung = 50

bankKonto.bank = "Sparkasse Berlin West";
bankKonto.Kontostand = bonni + bankKonto.Kontostand + Dispoerhöhung;


console.log(bankKonto.bank, bankKonto);