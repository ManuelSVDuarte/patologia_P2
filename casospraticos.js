// Array contendo todos os casos clínicos, imagens e respostas
const casosClinicos = [
    {
        numero: 1,
        imagem: "lamina 1.jpg",
        texto: "Homem, 65 anos, apresenta epigastralgia, saciedade precoce e perda ponderal não intencional de 10 kg em três meses. A endoscopia digestiva alta revela lesão ulcerada de bordas irregulares no antro gástrico. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Adenocarcinoma gástrico"
    },
    {
        numero: 2,
        imagem: "lamina 2.jpg",
        texto: "Mulher, 72 anos, com odinofagia e rouquidão recente. A endoscopia digestiva alta revela lesão vegetante e friável que obstrui 60% do lúmen esofágico superior. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Carcinoma de células escamosas do esôfago"
    },
    {
        numero: 3,
        imagem: "lamina 3.jpg",
        texto: "Jovem de 22 anos apresenta início súbito de febre alta, calafrios e tosse produtiva com escarro purulento. A radiografia de tórax mostra consolidação do lobo inferior direito. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Pneumonia"
    },
    {
        numero: 4,
        imagem: "lamina 4.jpg",
        texto: "Homem, 62 anos, relata alteração do hábito intestinal (constipação alternada com diarreia) e hematoquezia. A colonoscopia identifica lesão ulcerada no sigmoide. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Adenocarcinoma colorretal"
    },
    {
        numero: 5,
        imagem: "lamina 5.jpg",
        texto: "Homem, 60 anos, tabagista de longa data (40 anos/maço), apresenta dispneia progressiva aos esforços e tórax em tonel. A radiografia de tórax mostra hipertransparência pulmonar. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Enfisema pulmonar"
    },
    {
        numero: 6,
        imagem: "lamina 6.jpg",
        texto: "Homem, 65 anos, tabagista pesado, apresenta tosse persistente e hemoptise. A tomografia revela massa central próxima ao hilo pulmonar direito com sinais de cavitação. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Carcinoma de células escamosas do pulmão"
    },
    {
        numero: 7,
        imagem: "lamina 7.jpg",
        texto: "Jovem de 28 anos nota aumento, indolor, do testículo direito há quatro meses. A ultrassonografia mostra massa sólida, hipoecoica e homogênea. Analise a amostra coletada após ressecção cirúrgica da lesão, presente na lâmina, e identifique o diagnóstico.",
        resposta: "Seminoma"
    },
    {
        numero: 8,
        imagem: "lamina 8.jpg",
        texto: "Mulher de 38 anos em investigação de infertilidade realiza ressonância magnética que demonstra nódulo presente na parede uterina que distorce a cavidade endometrial. Analise a amostra coletada após ressecção cirúrgica da lesão, presente na lâmina, e identifique o diagnóstico.",
        resposta: "Leiomioma uterino"
    },
    {
        numero: 9,
        imagem: "lamina 9.jpg",
        texto: "Mulher, 45 anos, relata sangramento vaginal após o coito e corrimento escuro e fétido. O exame especular mostra lesão exofítica e friável no colo uterino. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Carcinoma de células escamosas do colo uterino"
    },
    {
        numero: 10,
        imagem: "lamina 10.jpg",
        texto: "Homem, 40 anos, apresenta tosse produtiva há três semanas, febre vespertina, sudorese noturna e emagrecimento. A radiografia de tórax mostra infiltrado em ápice pulmonar direito. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Tuberculose do pulmão"
    },
    {
        numero: 11,
        imagem: "lamina 11.jpg",
        texto: "Homem, 70 anos, relata alteração no hábito urinário, com jato fraco e sensação de esvaziamento incompleto. O toque retal mostra próstata homogeneamente aumentada, de consistência elástica e indolor. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Hiperplasia nodular da próstata / Hiperplasia prostática benigna"
    },
    {
        numero: 12,
        imagem: "lamina 12.jpg",
        texto: "Paciente de 55 anos é admitido com melena e hematêmese. Após a estabilização hemodinâmica, foi realizada endoscopia digestiva alta que revela lesão ulcerada ativa em pequena curvatura gástrica. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Úlcera péptica do estômago"
    },
    {
        numero: 13,
        imagem: "lamina 13.jpg",
        texto: "Homem, 72 anos, assintomático, apresenta PSA extremamente elevado em exame de rotina. O toque retal revela nódulo endurecido e fixo no lobo direito da próstata. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.",
        resposta: "Adenocarcinoma da próstata"
    }
];

// Função para randomizar (embaralhar) a ordem do array
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função global para mostrar/ocultar a resposta
window.toggleResposta = function(botao) {
    const divResposta = botao.nextElementSibling;
    if (divResposta.style.display === "none") {
        divResposta.style.display = "block";
        botao.textContent = "Ocultar Resposta";
        botao.style.backgroundColor = "#6c757d"; // Muda a cor ao clicar
    } else {
        divResposta.style.display = "none";
        botao.textContent = "Ver Resposta";
        botao.style.backgroundColor = "#28a745"; // Volta para a cor original
    }
};

// Função para renderizar os casos na tela assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    // Busca a div onde os casos serão inseridos no HTML
    const container = document.getElementById("container-simulado");
    
    // Interrompe se o container não existir no HTML
    if (!container) {
        console.error("A div com id 'container-simulado' não foi encontrada no HTML.");
        return; 
    }

    // Embaralha os casos
    const casosEmbaralhados = embaralharArray([...casosClinicos]);

    // Cria o HTML dinâmico para cada caso já embaralhado
    casosEmbaralhados.forEach((caso, index) => {
        const divCaso = document.createElement("div");
        divCaso.classList.add("caso-card");
        
        // Estilo embutido incluindo o botão interativo para exibir a resposta
        divCaso.innerHTML = `
            <div style="background: #fff; padding: 25px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <h2 style="color: #0056b3; margin-bottom: 15px; border-bottom: 2px solid #f0f2f5; padding-bottom: 10px;">Questão ${index + 1}</h2>
                <img src="${caso.imagem}" alt="Lâmina do Caso" style="max-width: 100%; height: auto; border-radius: 5px; margin-bottom: 15px; border: 1px solid #ddd;">
                <p style="font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 20px;"><strong>História Clínica:</strong> ${caso.texto}</p>
                
                <button onclick="toggleResposta(this)" style="padding: 10px 20px; font-size: 1rem; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s;">
                    Ver Resposta
                </button>
                <div style="display: none; margin-top: 15px; padding: 15px; background-color: #e9ecef; border-left: 4px solid #28a745; border-radius: 4px;">
                    <strong style="color: #1a1a1a;">Diagnóstico:</strong> <span style="color: #0056b3; font-weight: bold;">${caso.resposta}</span>
                </div>
            </div>
        `;
        
        container.appendChild(divCaso);
    });
});
