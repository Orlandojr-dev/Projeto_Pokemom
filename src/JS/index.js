/*
OBJETIVO 1- Quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista.
    - Passo 1 - dar um jeito de pegar o elemento HTML da seta avançar.
    - Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
    - Passo 3 - fazer aparecer o próximo cartão da lista.
    - Passo 4 - buscar o cartão que está selecionado e esconder.
    
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista.
    - Passo 1 - dar um jeito de pegar o elemento HTML da seta voltar.
    - Passo 2 -  dar um jeito de identificar o clique do usuário na seta voltar.
    - Passo 3 - fazer aparecer o cartão anterior da lista.
    - Passo 4 - buscar o cartão que está selecionado e esconder
*/


/*
OBJETIVO 1- Quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista.
    - Passo 1 - dar um jeito de pegar o elemento HTML da seta avançar.
    - Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
    - Passo 3 - fazer aparecer o próximo cartão da lista.
    - Passo 4 - buscar o cartão que está selecionado e esconder.
*/

/* Passo 1 - dar um jeito de pegar o elemento HTML da seta avançar.*/
/*
console.log(document.getElementById('btn-avancar'));*/
    const btnAvancar = document.getElementById('btn-avancar');
    const btnVoltar = document.getElementById('btn-voltar');
    let cartaoAtual = 0;
    const cartoes = document.querySelectorAll(".cartao");


/* Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.*/
btnAvancar.addEventListener("click",function (){

 if(cartaoAtual === cartoes.lenght -1) return;
 
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

   /* - Passo 4 - buscar o cartão que está selecionado e esconder.*/
   const cartaoSelecionado = document.querySelector("selecionado")
    cartaoSelecionado.classList.remove("selecionado");
});


btnVoltar.addEventListener("click",function (){

    if(cartaoAtual === cartoes.lenght -1) return;
    
        const cartaoSelecionado = document.querySelector("selecionado")
        cartaoSelecionado.classList.remove("selecionado");

       cartaoAtual--;
       cartoes[cartaoAtual].classList.add("selecionado");
 
   });







