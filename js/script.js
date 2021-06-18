// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

console.log(cut(['a','b',4,6,7,'e',45,76,10], 3, 5));

function cut(array, a, b){
    const newArray = [];
    for (let i = a; i <= b; i++){
        newArray.push(array[i])
    }
    return newArray;
}

// non capisco come poter implementarre filter e foreach 