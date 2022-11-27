var parametro = prompt('Digite um número')

switch (parseInt(parametro)) {
    case 1:
        //se parametro === 1
        document.write('Parametro 1');
        break;

    case 2:
        //se parametro === 2
        document.write('Parametro 2');
        break;

    default:
        //se parametro não for encontrado
        document.write('Default');

}