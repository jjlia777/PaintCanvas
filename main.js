// PEGA O ID CANVAS NO HTML
let canvas = document.getElementById("canvas");

// PEGAMOS O CONTEXTO DO DESENHO, ESSE É O MÉTODO QUE RETORNA O TIPO DE ANIMAÇÃO, PARA USAR O PARAMETRO "2D" SIGNIFICA QUE O OBJETO QUE SERÁ RENDERIZADO SERÁ BIDEMENSIONAL
let contexto = canvas.getContext("2d");

// VARIAVEL QUE VAI IDENTIFICAR SE ESTAMOS DESENHANDO
let desenhando = false;

canvas.addEventListener("mousedown", function(event){
    //VAMOS USAR O METODO addEventListener PARA OUVIR NOSSO MOUS, ELE IRÁ IDENTIFICAR QUANDO CLICARMOS
    desenhando =  true;
    // DESENHANDO SE TORNA VERDADE
    contexto.beginPath();
    // A VARIAVEL CONTEXTO JUNTO COM O METODO beginPath() INDICA QUE ALGO NOVO SERÁ CRIADO
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    // NESSE METODO, VAMOS DIZER COMO O CONTEXTO IRÁ FUNCIONAR, O clientX VAI FORNECER AS COORDENADAS HORIZONTAIS DO MOUSE E O offsetLeft IRÁ CONVERTER ESSE VALOR EM PIXEL (PX) A MESMA COISA ACONTECE COM O clientY NA VERTICAL
})

canvas.addEventListener("mousemove", function(event){
    // A FUNÇÃO QUE IDENTIFICA QUANDO MOVEMOS O MOUSE
    if(desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        // O lineTo VAI JUNTAR AS COORDENADAS E IDENTIFICAR A LINHA QUE ESTAMOS TRAÇANDO ENQUANTO CLICAMOS E MOVEMOS O MOUSE  
        contexto.stroke();
        // TRAÇA A LINHA
    }
})

canvas.addEventListener("mouseup", function(event){
    // ESSA FUNÇÃO IDENTIFICA QUANDO NÃO ESTAMOS MAIS CLICANDO NO MOUSE
    desenhando = false;
})

//PINCEL ESPESSURA 
let espessuraInput = document.getElementById("espessura");

// Define a espessura inicial do pincel
contexto.lineWidth = espessuraInput.value;

// Adiciona um ouvinte de evento para o evento de alteração de espessura
espessuraInput.addEventListener("input", function() {
    // Atualiza a espessura do pincel quando o usuário ajusta a barra deslizante
    contexto.lineWidth = espessuraInput.value;
});

//CORES 
//pegamos o input da paleta de cor do HTML
let corInput = document.getElementById("cor");

// Define a cor inicial do contexto de desenho
contexto.strokeStyle = corInput.value;

// adiciona um ouvinte de evento para o evento de alteração de cor
corInput.addEventListener("change", function() {
    // atualiza a cor do contexto de desenho quando o usuário escolhe uma nova cor
    contexto.strokeStyle = corInput.value;
});

// // Variável para indicar se a borracha está ativada
// let borrachaAtivada = false;

// // Adicione um ouvinte de evento ao botão
// const borrachaBtn = document.getElementById('borracha');
// borrachaBtn.addEventListener('click', () => {
//     // Alterne a borracha ligada/desligada quando o botão for clicado
//     borrachaAtivada = !borrachaAtivada;
//     if (borrachaAtivada) {
//         borrachaBtn.innerText = 'Desativar Borracha';
//     } else {
//         borrachaBtn.innerText = 'Ativar Borracha';
//     }
// });

// // Adicione um ouvinte de evento para lidar com cliques no canvas
// canvas.addEventListener('mousedown', (e) => {
//     if (borrachaAtivada) {
//         // Se a borracha estiver ativada, apague a área onde o usuário clicou
//         const x = e.clientX - canvas.getBoundingClientRect().left;
//         const y = e.clientY - canvas.getBoundingClientRect().top;
//         ctx.clearRect(x - 10, y - 10, 20, 20); // Ajuste o tamanho da área de apagamento conforme necessário
//     }
// });