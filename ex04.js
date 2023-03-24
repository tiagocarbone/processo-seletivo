let velCarro = 110; 
let velCaminhao = 80; 
let distancia = 100;
let tempoCarro = (distancia / velCarro) * 60; 
let tempoCaminhao = (distancia / velCaminhao) * 60 + 10; 


console.log(tempoCarro, tempoCaminhao)

if (tempoCarro < tempoCaminhao) {
    console.log("O carro estará mais próximo de Ribeirão Preto.");
  } else {
    console.log("O caminhão estará mais próximo de Ribeirão Preto.");
  }

