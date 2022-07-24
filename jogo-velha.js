const X = "X";
const O = "O";

let jogadorAtivo = X;
let areaJogo = [[], [], []];
let partidaEncerrada = false;

function reiniciarJogo() {}

//jogador venceu
function valoresIguais(valores, jogador) {
 return valores.every(function(valor) {
    return valor === jogadorAtivo;
  })
}

function jogadorVenceu(jogadorAtivo) {
const venceuLinha1 = valoresIguais(
  [areaJogo[0][0], areaJogo[0][1], areaJogo[0][2]], 
  jogadorAtivo
); 
  const venceuLinha2 = valoresIguais(
    [areaJogo[1][0], areaJogo[1][1], areaJogo[1][2]], 
    jogadorAtivo
);
  const venceuLinha3 = valoresIguais(
    [areaJogo[2][0], areaJogo[2][1], areaJogo[0][2]], 
    jogadorAtivo
);

const venceuColuna1 = valoresIguais(
  [areaJogo[0][0], areaJogo[1][0], areaJogo[2][0]], 
  jogadorAtivo
);

const venceuColuna2 = valoresIguais(
  [areaJogo[0][1], areaJogo[1][1], areaJogo[2][1]], 
  jogadorAtivo
);

const venceuColuna3 = valoresIguais(
  [areaJogo[0][2], areaJogo[1][2], areaJogo[2][2]], 
  jogadorAtivo
);

const venceuDiagonal1 = valoresIguais(
  [areaJogo[0][0], areaJogo[1][1], areaJogo[2][2]], 
  jogadorAtivo
);

const venceuDiagonal2 = valoresIguais(
  [areaJogo[0][2], areaJogo[1][1], areaJogo[2][0]], 
  jogadorAtivo
);



  return( 
     venceuLinha1 ||
     venceuLinha2 || 
     venceuLinha3 || 
     venceuColuna1 || 
     venceuColuna2 || 
     venceuColuna3 || 
     venceuDiagonal1 ||
     venceuDiagonal2
  );
}

function selecionarArea(posicaoLinha, posicaoColuna) {
  if (partidaEncerrada) {
    return;
  }
  

    const Linha = posicaoLinha -1;
    const Coluna = posicaoColuna -1;

    //indefinir jogada na mesma área
    if (areaJogo[Linha][Coluna] !== undefined) {
        return;
    }
    
    areaJogo[Linha][Coluna] = jogadorAtivo;


    //simbolos desenhados
    desenharSimbolo(jogadorAtivo, posicaoLinha, posicaoColuna);

    if (jogadorVenceu(jogadorAtivo)){
      exibirResultado("O vencedor foi o jogador " + jogadorAtivo + "!")
      partidaEncerrada = true;
    }

    //alternar jogador
    jogadorAtivo = jogadorAtivo === X ? O : X;
      marcarJogadorAtivo(jogadorAtivo);
    }

    //reiniciar jogo
    function reiniciarJogo(){
      location.reload();
    }
