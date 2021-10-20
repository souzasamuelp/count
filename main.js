function count() {
    let firstNumber = Number(document.getElementById('firstNumber').value)
    let lastNumber = Number(document.getElementById('lastNumber').value)
    let result = document.querySelector("section#result")
    let count

    result.innerHTML += `<h2>Contando de ${firstNumber} até ${lastNumber}</h2>`

    if (firstNumber < lastNumber) {
        count = firstNumber
        while (count <= lastNumber) {
            result.innerHTML += ` ${count} &#x1F449;`
            count ++
        }
    } else  if (lastNumber < firstNumber) {
        count = firstNumber
        while (count >= lastNumber) {
            result.innerHTML += ` ${count} &#x1F449;`
            count --
        }
    } else {
        result.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    
    result.innerHTML += ` &#x1F3C1;`
}