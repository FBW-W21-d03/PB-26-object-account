const ChuckBankkonto = {
    IBAN: "DE01 2345 6789 0000 1111 2222",
    Bankleizahl: "ABCDEFGH123",
    BankName: "Sparkasse Berlin Ost",
    Kontostand: 1000,
    Dispo: 500,
    Waehrung: "€"
}

ChuckBankkonto.BankName = "Sparkasse Berlin West";

const Willkommensbonus = 100;
ChuckBankkonto.Kontostand += Willkommensbonus; // Kontostand = Kontostand + 100 = 1100
console.log("Kontostand wird: = ", ChuckBankkonto.Kontostand + ChuckBankkonto.Waehrung);

const Dispoerhöhung = 50;
ChuckBankkonto.Dispo += Dispoerhöhung; // Dispo = Dispo + 50 = 550
console.log("Dispo wird: ", ChuckBankkonto.Dispo + ChuckBankkonto.Waehrung);

console.log("ChuckBankkonto wird: ", ChuckBankkonto);