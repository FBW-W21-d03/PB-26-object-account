const Chuck = {
    Bankkonto: 'Sparkasse Köln Bonn',
    IBAN: 'DE01 2345 6789 0000 1111 2222',
    Bankleizahl: 'ABCDEFGH123',
    Kontostand: 1000,
    Dispo:500,
    
};

console.log(Chuck);


Chuck.Bankkonto ="Sparkasse Berlin West";
Chuck.Kontostand = Chuck.Kontostand +100;
Chuck.Dispo = Chuck.Dispo + 50;

console.log(Chuck);




