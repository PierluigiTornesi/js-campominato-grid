Esercizio di oggi: **Griglia Campo Minato**

**Consegna**

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

**Consigli del giorno:**

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:

Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.



### SOLUZIONE NO BONUS

**Dati**

1. Griglia con un numero preciso di celle da creare (100)
2. Numeri da inserire nelle celle, da 1 a 100

**Logica**
1. Al click del bottone : 
    1. Ciclo for per generare 100 celle con i numeri da 1 a 100
    2. Funzione *generateGridCell* per creare una singola cella della griglia
    3. Aggiungere effetto del colore al click della cella con la funzione *handleCellClick*
    4. Inserire le celle nella griglia nell'html

**Output**

1. Griglia 10x10 con i numeri da 1 a 100  in ordine