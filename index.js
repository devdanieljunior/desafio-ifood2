//chamada da função ratingCalculator e atribuição do seu retorno a variável herosXpAmount
let herosXpAmount = ratingCalcutator(0, 0);

//Declara variável para nome do herói
let herosName = "Lion ";

//Declara constantes para mensagens de saída
const message1 = "O herói ";
const message2 = "têm o saldo de ";
const message3 = " vitórias ";
const message4 = "e está no nível de ";

/*Matriz de ranking de acordo com a quantidade vitórias
Coluna 0 (Nível), Coluna 1 (victoriesMin), Coluna 2 (victoriesMax)*/
const level = [
    ["Ferro", 0, 10],
    ["Bronze", 11, 20],
    ["Prata", 21, 50],
    ["Ouro", 51, 80],
    ["Diamante", 81, 91],
    ["Lendário", 91, 100],
    ["Imortal", 101, 103],
]

//Apresenta no console nome do herói
console.log("Nome do jogador: " + herosName);

//Apresenta no console a pontuação
console.log("A pontuação inicial do herói é de " + herosXpAmount)

//Apresenta no console a string
console.log("Estamos avaliando sua posição no ranking! Aguarde...");

/*loop que varre a matriz "level" que vefifica o nível de acordo com as vitórias calculadas pela função 
ratingCalcutator*/
for(herosXpAmount; herosXpAmount <= 103; herosXpAmount++) {

    //Verifica a pontução do herói e informa o seu nível no ranking
    if(herosXpAmount <= 10) {
    console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[0][0]);
    }

    if(herosXpAmount >= 11 && herosXpAmount <= 20) {
        console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[1][0]);
    }

    if(herosXpAmount >= 21 && herosXpAmount <= 50) {
        console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[2][0]);
    }

    if(herosXpAmount >= 51 && herosXpAmount <= 80) {
        console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[3][0]);
    }

    if(herosXpAmount >= 81 && herosXpAmount <= 90) {
        console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[4][0]);
    }

    if(herosXpAmount >= 91 && herosXpAmount <= 100) {
        console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[5][0]);
    }

    if(herosXpAmount >= 101 || herosXpAmount > 102) {
        console.log(message1 + herosName + message2 + herosXpAmount + message3 + message4 + level[6][0]);
    }
}

//Função que calcula o número de vitórias do herói
function ratingCalcutator(victories, defeats ) {
    let calc = victories - defeats;
    return calc;  
}
