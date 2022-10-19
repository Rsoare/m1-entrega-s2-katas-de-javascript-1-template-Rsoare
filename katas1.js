//                   1
function cubicSquare() {
    let numeroCubo = 0
    for (let cont = 1; cont <= 10; cont++){
        numeroCubo = cont ** 3
        console.log(numeroCubo)
    }
    return numeroCubo
}
cubicSquare()





//                        2
function divisibleFor(numberLimitador,numberDivisor) {
    let totalDivisor = 0
    for (let cont = 1; cont <= numberLimitador; cont++) {
        if (cont % numberDivisor == 0){
            totalDivisor = cont
            console.log(totalDivisor)
        }
    }
    return totalDivisor 
} 
divisibleFor(100,10)





//                         3
function stringElement(string,number) {
    for (let i = number ; i < string.length; i ++) {
        return string[i].toUpperCase()
    } 
}
console.log(stringElement("algorítmos",7))





//                      4
function stringSlicer(string,number) {
    let string1 = ""
    for (let i = string.length; i > number - 1; i--) {
        string1 = string.slice(0,i)
    }
    return string1
}
console.log(stringSlicer("ALGORÌTMOS",4))





//                     5
function stringRest(string,number) {
    let string1 = ""
    for (let i = string.length; i > number - 1; i--) {
        string1 = string.slice(i,string.length)
    }
    return string1
}
console.log(stringRest("ALGORÌTMOS",2))






//                    6
function countVowels(string){
    let tamanhostring = ""
    for (let cont = 0; cont <= string.length; cont++) {
        if(string[cont] == "a" ||string[cont] == "e" ||string[cont] == "i" ||string[cont] == "o" ||string[cont] == "u"){
            tamanhostring++
        }
    }
    return tamanhostring
}
console.log(countVowels("abacaxi"))





//                 7
function countTextOccurrences(string,quantidadeLetras) {
    let contadorLertras = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] === quantidadeLetras){
            contadorLertras ++
        }
    }
    return contadorLertras
}
console.log(countTextOccurrences("abacaxi","a"))






//                     8
function textBackwards(string) {
    let stringInversa = ""
    for (let i = string.length -1 ; i > -1; i--) {
            stringInversa += string[i]
    }
    return stringInversa
}
console.log(textBackwards("abacaxi"))







//                  9
function removeBlank (String){
    let semEspacos = ""
    for (let i = 0; i < String.length; i++) {
        if(String[i] != " "){
            semEspacos += String[i]
        }
    }
    return semEspacos
}
console.log(removeBlank ("Não ficará   espaços em branco"))






//                      10
function encryptText(string) {
    let frase = ""
    for (let i = 0; i < string.length; i++){
        if (string[i] == "a" || string[i] == "A" ){
            frase += "x"
        } else if(string[i] == "e" || string[i] == "E"){
            frase += "y"
        }else if(string[i] == "i" || string[i] == "I"){
            frase += "w"
        }else if(string[i] == "o" || string[i] =="O"){
            frase += "k"
        }else if(string[i] == "u" || string[i] == "U"){
            frase += "Z"
        }else{
            frase += string[i]
        }
    } 
    return frase
}
console.log(encryptText("uma frase ultra secreta que precisa ser criptografada"))