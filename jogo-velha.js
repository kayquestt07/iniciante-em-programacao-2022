const X = "X"; 
const O = "O"; 
var vezDoJogador = X; 
 
 
function selecionarArea(posicaoLinha, posicaoColuna) { 
    if (vezDoJogador == X){ 
        desenharSimbolo(X, posicaoLinha, posicaoColuna); 
        verVencedor(); 
        marcarJogadorAtivo(O); 
        vezDoJogador = O; 
    } 
    else{ 
        desenharSimbolo(O, posicaoLinha, posicaoColuna); 
        verVencedor(); 
        marcarJogadorAtivo(X); 
        vezDoJogador = X;  
    } 
} 
 
 
function verVencedor(){ 
    const selecionarArea = document.querySelectorAll(".quadrado-jogo"); 
        let a1 = selecionarArea [0];  
        let a2 = selecionarArea [1];  
        let a3 = selecionarArea [2]; 
        let a4 = selecionarArea [3];  
        let a5 = selecionarArea [4];  
        let a6 = selecionarArea [5];  
        let a7 = selecionarArea [6];  
        let a8 = selecionarArea [7];  
        let a9 = selecionarArea [8];  
    if(   
        combinacoes(a1,a2,a3) || 
        combinacoes(a4,a5,a6) || 
        combinacoes(a7,a8,a9) || 
 
        combinacoes(a1,a5,a9) || 
        combinacoes(a3,a5,a7) || 
        combinacoes(a1,a4,a7) || 
 
        combinacoes(a2,a5,a8) || 
        combinacoes(a3,a6,a9) 
 
      ) 
    { 
            exibirResultado(`O Jogador ${vezDoJogador} venceu!`); 
    }else{ 
            checarArea() ? exibirResultado("Empate!"): ''; 
    } 
} 
 
const quadradoDoJogo = document.querySelectorAll(".quadrado-jogo"); 
 
function checarArea(){ 
for(let i in quadradoDoJogo){ 
    if(quadradoDoJogo[i].textContent ===''){ 
        return false; 
    }        
} 
        return true; 
} 
 
function combinacoes(a2, a3, a4){ 
    if(a2.textContent === a3.textContent && a2.textContent === a4.textContent && a2.textContent !== ""){ 
        return true;          
    } 
        return false; 
    } 
 
 
function reiniciarJogo() { 
    location.reload(); 
}
