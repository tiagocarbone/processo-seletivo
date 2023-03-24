function stringAoContrario(string) {
    var stringnova = "";
    for (var i = string.length - 1; i >= 0; i--) {
        stringnova += string[i];
    }
    return stringnova;
}
console.log(stringAoContrario('Eu gosto de codar'))

