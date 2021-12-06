//Aufgabenstellung - Teil 1
let haben = 1000;
let dispo = 500;

const chuckKonto = {
    iban: "DE0"+1+" "+2345+" "+6789+" "+"0000"+" "+1111+" "+2222,
    blz: "ABCDEFGH123",
    bank: "Sparkasse Berlin Ost",
    haben:"€"+" "+haben+","+"00",
    dispo: "€"+" "+dispo+","+"00",
};

console.log("Kontodaten von Chuck: " , chuckKonto);

console.log("------------------")

//Aufgabenstellung - Teil 2

let bonus = 100;
let dispoPlus = 50;


chuckKonto.bank = "Sparkasse Berlin West";
chuckKonto.haben = haben + bonus;
chuckKonto.dispo = dispo + dispoPlus;

console.log("Neue Kontodaten von Chuck: ");
console.log("Filiale: "+chuckKonto.bank);
console.log("Neues Guthaben: "+" "+"€"+" "+chuckKonto.haben+","+"00");
console.log("Neuer Dispo: "+"€"+" "+chuckKonto.dispo+","+"00");
