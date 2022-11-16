//ome do aluno - nota 1  - nota 2 - média - Aprovado ou Reprovado


var Nomes = ["Kleber", "Caio", "Débora", "João", "Pedro"];
var NotasA = [3.5, 1.0, 9.5, 4.0, 8.0];
var NotasB = [8.0, 7.5, 10.0, 6.5, 7.0];

function media(n1, n2) {

    return (n1 + n2) / 2
}

function passou(media) {

    if (media > 7){
        return "Aprovado";
    } else {
        return "Reprovado";

    }
}

for (var index in Nomes) {

    var Nota1 = NotasA[index];
    var Nota2 = NotasB[index];
    var m = media(Nota1, Nota2);
    console.log(Nomes[index] +
        " - " +
        Nota1 +
        " - " +
        Nota2 +
        " - " +
          m + 
       
       " - " + passou(m));

} 