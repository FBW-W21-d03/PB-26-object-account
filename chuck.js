//Aktuelle Chuck's Bankkonto
const ChucksBankKonto= {
    iban: "DE01 2345 6789 0000 1111 2222",
    bankleizahl: "ABCDEFGH123",
    bankfiliale: "Sparkasse Berlin Ost",
    kontostandinEuro: 1000,
    dispoinEuro: 500

}
console.log("Chuck's alter BankKonto:",ChucksBankKonto);

//Neue Chuck's Bankkonto
ChucksBankKonto.iban=ChucksBankKonto.iban;
ChucksBankKonto.bankleizahl=ChucksBankKonto.bankleizahl;
ChucksBankKonto.bankfiliale="Sparkasse Berlin West";
ChucksBankKonto.kontostandinEuro=ChucksBankKonto.kontostandinEuro + 100;
ChucksBankKonto.dispoinEuro=ChucksBankKonto.dispoinEuro + 50;

console.log("Chuck's neue BankKonto", ChucksBankKonto);