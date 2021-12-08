// TEIL 1
const chuckAccount ={
    IBAN : "DE23456789000011112222",
    Bankleizahl : "ABCDEFGH123",
    Bank: "sparkasse Berlin ost",
    Kontostand: 1000,
    Dispo : 500,
}

console.log(chuckAccount);


// TEIL 2
chuckAccount.Bank = "sparkass Berlin West";
chuckAccount.Kontostand = 1000 + 100;
chuckAccount.Dispo = 500 + 50;

console.log("*****************")

console.log(chuckAccount);


