const Bankkonto = {
    IBAN: 'DE01 2345 6789 0000 1111 2222',
    Bankleizahl: 'ABCDEFGH123',
    Kontostand: 1000 + ' €',
    Dispo: 500 + ' €'
}

Bankkonto.Kontostand = 1100 + ' €';
Bankkonto.Dispo = 550 + ' €';

console.log(Bankkonto);