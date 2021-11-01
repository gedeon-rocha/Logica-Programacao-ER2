let numAlunos = 5;

let listaAlunos = ["João", "Maria", "José", "Francisco", "Antônia"];

for (let contador = 0; contador < numAlunos; contador++) {
    // console.log(contador);

    if (contador == 0) {
        console.log(contador + "- ZERO"); //concatenação
    } else if (contador % 2 == 1) {
        console.log(`${contador}- ÍMPAR`);  //interpolação
    } else {
        console.log(`${contador}- PAR`);
    }
}