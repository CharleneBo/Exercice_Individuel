const winNumber = 22;

function askNumber(){
    let givenNumber = parseInt(prompt("Entre un chiffre, stp"))
    console.log(givenNumber)
    return givenNumber
}



function didIWin(givenNumber){
    if (givenNumber == winNumber){
        alert("Bravo, tu as gagné")
        return true
    } else if (givenNumber < winNumber){
        alert("Plus grand")
    } else {
        alert("Plus petit")
    }
    return false;
}

function gamePlay(){
    let number
    let stock
    do {
        number = askNumber()
        stock = didIWin(number)
    } while (stock == false)
}

gamePlay();