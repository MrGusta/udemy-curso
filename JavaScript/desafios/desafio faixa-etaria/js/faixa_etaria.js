// 15 30 60
//  15 = criança | igual

var idade = prompt('Digite a sua idade:');

if (idade >= 0 && idade < 15) {
    document.write('<h3>Criança</h3>')
} else if (idade >= 15 && idade < 30) {
    document.write('<h3>Jovem</h3>')
} else if (idade >= 30 && idade < 60) {
    document.write('<h3>Adulto</h3>')
} else {
    document.write('<h3>Idoso</h3>')
}
