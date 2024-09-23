let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;
const palavras = ["bloco",
    "creeper",
    "enderman",
    "nether",
    "redstone",
    "pistão",
    "poção",
    "encantamento",
    "minério",
    "aldeão",
    "espada",
    "picareta",
    "forno",
    "mesa de trabalho",
    "portal",
    "dragão",
    "zumbi",
    "esqueleto",
    "exploração",
    "construção",
    "bioma",
    "fortaleza",
    "slime",
    "lava",
    "diamante",
    "obsidiana",
    "caverna",
    "fazenda",
    "mapa",
    "bússola",]; // Adicione suas palavras aqui
const dicas = ["Unidade básica de construção no Minecraft.",
    "Inimigo que explode ao se aproximar do jogador.",
    "Criatura que se teletransporta e é hostil quando olhada diretamente.",
    "Dimensão infernal acessível através de um portal.",
    "Material usado para criar circuitos e mecanismos.",
    "Bloco que pode empurrar outros blocos quando ativado.",
    "Item que concede efeitos especiais ao jogador.",
    "Melhorias aplicadas a armas e ferramentas.",
    "Recursos naturais extraídos de blocos específicos.",
    "NPC que vive em vilas e pode trocar itens com o jogador.",
    "Arma usada para combate corpo a corpo.",
    "Ferramenta usada para minerar blocos.",
    "Bloco usado para fundir minérios e cozinhar alimentos.",
    "Bloco usado para criar itens e ferramentas.",
    "Estrutura que permite viajar entre dimensões.",
    "Chefe final encontrado na dimensão End.",
    "Inimigo comum que aparece à noite.",
    "Inimigo que usa arco e flecha.",
    "Ato de descobrir novas áreas e recursos.",
    "Processo de criar estruturas e edificações.",
    "Região com características ambientais específicas.",
    "Estrutura encontrada no Nether, cheia de perigos.",
    "Criatura que se divide em partes menores quando derrotada.",
    "Líquido quente que causa dano ao jogador.",
    "Minério raro usado para criar ferramentas e armaduras poderosas.",
    "Bloco resistente usado para construir portais para o Nether.",
    "Espaço subterrâneo cheio de recursos e perigos.",
    "Área dedicada ao cultivo de plantas e criação de animais.",
    "Item usado para visualizar a área ao redor do jogador.",
    "Ferramenta que aponta para o ponto de spawn do jogador.",]; // Adicione dicas correspondentes

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio];
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    atualizarDisplayDoJogo();
}

function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = palavraAtual[i];

        if (letrasAdivinhadas.includes(letra) || letra === " ") {
            palavraExibida += letra;
        } else {
            palavraExibida += "_";
        }
    }
    document.getElementById("palavra").textContent = palavraExibida;
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas Restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;

    if (tentativasRestantes <= 0) {
        document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
    } else if (palavraExibida.indexOf('_') === -1) {
        document.getElementById("status").textContent = "Você venceu!";
    }
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase();

    if (letraAdivinhada.length === 1 && /^[a-záéíóúãõç]$/i.test(letraAdivinhada)) {
        if (!letrasAdivinhadas.includes(letraAdivinhada)) {
            letrasAdivinhadas.push(letraAdivinhada);

            if (!palavraAtual.includes(letraAdivinhada)) {
                tentativasRestantes--;
            }

            atualizarDisplayDoJogo();
            desenharBoneco(); // Certifique-se de definir esta função para desenhar o boneco do jogo da forca
        }
    }

    entradaAdivinhacao.value = "";
}

document.addEventListener("DOMContentLoaded", iniciarJogo);