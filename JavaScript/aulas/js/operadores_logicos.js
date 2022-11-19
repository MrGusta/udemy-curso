
/* && Verdadeiro se todas as expressão forem verdadeiras

//true && true && false = false
 if (2 == 2 && 3 >= 1 && 'a' == 'b') {
    document.write('<p style="color: green;">Verdadeiro</p>');
} else {
    document.write('<p style="color: red;">Falso</p>')
    */

/* || Verdadeiro se pelo menos uma expressão for verdadeira
//true || true || false = true
 if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write('<p style="color: green;">Verdadeiro</p>');
} else {
    document.write('<p style="color: red;">Falso</p>')*/

/* || Falso se todas as expressão forem falsas
//false || false || false = false
if (4 == 2 || 3 >= 4 || 'a' == 'b') {
    document.write('<p style="color: green;">Verdadeiro</p>');
} else {
    document.write('<p style="color: red;">Falso</p>')
}*/

/* ! Inverte o resultado de comparação das expressões
//false = false
if (!(5 >= 2)) {
    document.write('<p style="color: green;">Verdadeiro</p>');
} else {
    document.write('<p style="color: red;">Falso</p>');
}*/

var nota = prompt('Digite sua nota:')
var faltas = prompt('Digite a quantidade de faltas:')
var media = 7
var faltas_maximas = 15

/*if (nota >= media && faltas <= faltas_maximas) {
    document.write('<p style="color: green;">Aprovado!</p>');
    //lógica
} else (
    document.write('<p style="color: red;">Reprovado!</p>')
    //lógica
)*/


// operador ternário
// var resultado = <condicao> ? <verdadeiro> : <falso>
var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)