// javascript-object-account

// Aufgabenstellung - Teil 1


const chuckKonto = {
  Institut : "Sparkasse Berlin Ost",
  Iban     : "DE01 2345 6789 0000 1111 2222",
  Blz      : "ABCDEFGH123",
  Saldo    : "1000€",
  Dispo    : "500€"
};

chuckKonto.Institut = "Sparkasse Berlin West";
chuckKonto.Saldo    = "1000€ + Willkommensbonus 100€";
chuckKonto.Dispo    = "500€  + Dispoerhöhung von 50€";



console.log(chuckKonto)


