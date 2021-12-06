const Chuck = {
    Bank:"Sparkasse Berlin Ost",
    IBAN: "DE01 2345 6789 0000 1111 2222",
    Bankleizahl:"ABCDEFGH123" ,
    Baujahr: 2017,
    Kontostand:1000,
    DispoInHöhe:500,
};
Chuck.Bank ="Sparkasse Berlin West";
Chuck.Kontostand = Chuck.Kontostand +100;
Chuck.DispoInHöhe = Chuck.DispoInHöhe + 50;

console.log(Chuck);
