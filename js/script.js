//ESECUZIONE
//genero l'azione sul bottone quando viene premuto
const buttonPlay = document.getElementById("play");
buttonPlay.addEventListener("click", function() {
    //prendo l'elemento con la classe grid per poter aggiungere le celle
    const gridElem = document.querySelector(".grid");

    //ciclo per creare 100 celle
    for (let i = 0; i < 100; i++) {
        //il numero corrente é l'indice piú uno cosi da scrivere i numeri da 1 a 100
        const curNumber = i + 1;
        //generare la cella della griglia
        const cell = generateGridCell(curNumber) //cella é elemento html, quindi posso aggiungergli event listener
        cell.addEventListener("click",handleCellClick)
    
    
        //debug
        //console.log(cell);
        gridElem.append(cell);
    }  
})




//FUNZIONI


/**
 * genera una cella della griglia con un numero all'interno
 * @param {number} innerNumber numero da inserire nella cella
 * @returns {any} elemento html della cella
 */
function generateGridCell(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;
    return newCell;
}


/**
 * funzione che si attiva al click della cella e che aggiunge una classe per lo sfondo blue
 * @returns {any}
 */
function handleCellClick() {
    //aggiungo il colore azzurro
    this.classList.add("azzurro")
    //messaggio in console del numero della cella cliccata
    console.log(this.innerHTML);
} 