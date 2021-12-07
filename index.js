const chuckUser = {
    vName: "Chuck",
    nName: "Taylor",
    bank: "Sparkasse Berlin Ost",
    iban: "DE01 2345 6789 0000 1111 2222",
    bZahl: "ABCDEFGH123",
    kontostand: 1000,
    dispo: 500,
}

console.log(chuckUser);

console.log(chuckUser.vName, "wechselt seine Bank von", chuckUser.bank, 
"zu Sparkasse Berlin West");

chuckUser.bank = "Sparkasse Berlin West";
chuckUser.kontostand = chuckUser.kontostand + 100;
chuckUser.dispo = chuckUser.dispo + 50;
console.log(chuckUser);

console.log("Dies ist der aktuelle Kontostand", chuckUser.kontostand, "€", chuckUser.vName, chuckUser.nName
);


