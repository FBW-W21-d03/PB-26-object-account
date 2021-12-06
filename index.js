const Chuck = {
    Bankkonto: "IBAN DE01 2345 6789 0000 1111 2222",
    Bankleizahl: "ABCDEFGH123",  
    Sparkasse: "Berlin Ost",
    Kontostand: 1000,
    Dispo: 500
    };

    console.log(Chuck);
    Chuck.Kontostand = 1100;
    Chuck.Dispo = 550; 
   

    console.log(Chuck);
    console.log("Die Iban von Chuck ist:",Chuck.Bankkonto);
    console.log("Die Bankleitzahl von Chuck ist:",Chuck.Bankleizahl);
    console.log("Die Sparkasse von Chuck ist:",Chuck.Sparkasse);
    console.log("Der Konto stand von Cuck ist:",Chuck.Kontostand);
    console.log("Das dispo von Chuck ist:",Chuck.Dispo);

   