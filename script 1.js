// Este script adiciona interatividade simples ao site

// Função que mostra curiosidades aleatórias na página curiosidades.html
function mostrarCuriosidade() {
    const curiosidades = [
        "O Fusca foi projetado por Ferdinand Porsche a pedido de Adolf Hitler.",
        "O Golf Sapão foi o primeiro Golf fabricado no Brasil.",
        "O Opala usava o mesmo motor de alguns modelos da Chevrolet americana.",
        "O Fusca foi relançado em 1993 no Brasil como Fusca Itamar.",
        "O Golf GTI Sapão podia atingir mais de 200 km/h!"
    ];

    // Seleciona um item aleatório da lista
    const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];

    // Exibe no parágrafo com id 'curiosidade'
    document.getElementById("curiosidade").textContent = aleatoria;


}