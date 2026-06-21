// Array contendo todos os casos clínicos com a extensão .jpeg corrigida
const casosClinicos = [
    { numero: 1, imagem: "lamina 1.jpeg", texto: "Homem, 65 anos, apresenta epigastralgia, saciedade precoce e perda ponderal não intencional de 10 kg em três meses. A endoscopia digestiva alta revela lesão ulcerada de bordas irregulares no antro gástrico. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Adenocarcinoma gástrico" },
    { numero: 2, imagem: "lamina 2.jpeg", texto: "Mulher, 72 anos, com odinofagia e rouquidão recente. A endoscopia digestiva alta revela lesão vegetante e friável que obstrui 60% do lúmen esofágico superior. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Carcinoma de células escamosas do esôfago" },
    { numero: 3, imagem: "lamina 3.jpeg", texto: "Jovem de 22 anos apresenta início súbito de febre alta, calafrios e tosse produtiva com escarro purulento. A radiografia de tórax mostra consolidação do lobo inferior direito. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Pneumonia" },
    { numero: 4, imagem: "lamina 4.jpeg", texto: "Homem, 62 anos, relata alteração do hábito intestinal (constipação alternada com diarreia) e hematoquezia. A colonoscopia identifica lesão ulcerada no sigmoide. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Adenocarcinoma colorretal" },
    { numero: 5, imagem: "lamina 5.jpeg", texto: "Homem, 60 anos, tabagista de longa data (40 anos/maço), apresenta dispneia progressiva aos esforços e tórax em tonel. A radiografia de tórax mostra hipertransparência pulmonar. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Enfisema pulmonar" },
    { numero: 6, imagem: "lamina 6.jpeg", texto: "Homem, 65 anos, tabagista pesado, apresenta tosse persistente e hemoptise. A tomografia revela massa central próxima ao hilo pulmonar direito com sinais de cavitação. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Carcinoma de células escamosas do pulmão" },
    { numero: 7, imagem: "lamina 7.jpeg", texto: "Jovem de 28 anos nota aumento, indolor, do testículo direito há quatro meses. A ultrassonografia mostra massa sólida, hipoecoica e homogênea. Analise a amostra coletada após ressecção cirúrgica da lesão, presente na lâmina, e identifique o diagnóstico.", resposta: "Seminoma" },
    { numero: 8, imagem: "lamina 8.jpeg", texto: "Mulher de 38 anos em investigação de infertilidade realiza ressonância magnética que demonstra nódulo presente na parede uterina que distorce a cavidade endometrial. Analise a amostra coletada após ressecção cirúrgica da lesão, presente na lâmina, e identifique o diagnóstico.", resposta: "Leiomioma uterino" },
    { numero: 9, imagem: "lamina 9.jpeg", texto: "Mulher, 45 anos, relata sangramento vaginal após o coito e corrimento escuro e fétido. O exame especular mostra lesão exofítica e friável no colo uterino. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Carcinoma de células escamosas do colo uterino" },
    { numero: 10, imagem: "lamina 10.jpeg", texto: "Homem, 40 anos, apresenta tosse produtiva há três semanas, febre vespertina, sudorese noturna e emagrecimento. A radiografia de tórax mostra infiltrado em ápice pulmonar direito. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Tuberculose do pulmão" },
    { numero: 11, imagem: "lamina 11.jpeg", texto: "Homem, 70 anos, relata alteração no hábito urinário, com jato fraco e sensação de esvaziamento incompleto. O toque retal mostra próstata homogeneamente aumentada, de consistência elástica e indolor. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Hiperplasia nodular da próstata / Hiperplasia prostática benigna" },
    { numero: 12, imagem: "lamina 12.jpeg", texto: "Paciente de 55 anos é admitido com melena e hematêmese. Após a estabilização hemodinâmica, foi realizada endoscopia digestiva alta que revela lesão ulcerada ativa em pequena curvatura gástrica. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Úlcera péptica do estômago" },
    { numero: 13, imagem: "lamina 13.jpeg", texto: "Homem, 72 anos, assintomático, apresenta PSA extremamente elevado em exame de rotina. O toque retal revela nódulo endurecido e fixo no lobo direito da próstata. Analise a amostra coletada presente na lâmina e identifique o diagnóstico.", resposta: "Adenocarcinoma da próstata" }
];

let casosSimulado = [];
let indiceAtual = 0;

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function mostrarTela(tela) {
    document.getElementById("tela-menu").style.display = "none";
    document.getElementById("tela-conteudo").style.display = "none";
    document.getElementById(tela).style.display = "block";
}

function voltarAoMenuPratico() {
    mostrarTela("tela-menu");
    document.getElementById("area-renderizacao").innerHTML = "";
    document.getElementById("status-simulado").innerHTML = "";
}

function iniciarRevisao() {
    mostrarTela("tela-conteudo");
    document.getElementById("status-simulado").innerHTML = "Modo de Revisão: Todas as lâminas";
    const area = document.getElementById("area-renderizacao");
    area.innerHTML = "";
    casosClinicos.forEach((caso) => {
        area.innerHTML += `
            <div class="card-questao">
                <h2>Caso ${caso.numero}</h2>
                <img src="${caso.imagem}" alt="Lâmina ${caso.numero}">
                <p><strong>História Clínica:</strong> ${caso.texto}</p>
                <div class="resposta-esperada">
                    <strong style="color: #1a1a1a;">Diagnóstico Esperado:</strong> 
                    <span style="color: #0056b3; font-weight: bold;">${caso.resposta}</span>
                </div>
            </div>
        `;
    });
}

function iniciarSimulado() {
    mostrarTela("tela-conteudo");
    casosSimulado = embaralharArray([...casosClinicos]);
    indiceAtual = 0;
    renderizarQuestaoSimulado();
}

function renderizarQuestaoSimulado() {
    const area = document.getElementById("area-renderizacao");
    const status = document.getElementById("status-simulado");
    
    if (indiceAtual >= casosSimulado.length) {
        status.innerHTML = "Simulado Concluído!";
        area.innerHTML = `
            <div class="card-questao" style="text-align: center;">
                <h2>Parabéns! Você finalizou o simulado prático.</h2>
                <button onclick="iniciarSimulado()" class="btn btn-iniciar-simulado" style="margin-top: 20px;">Fazer Novamente</button>
            </div>
        `;
        return;
    }

    const caso = casosSimulado[indiceAtual];
    status.innerHTML = `Questão ${indiceAtual + 1} de ${casosSimulado.length}`;

    area.innerHTML = `
        <div class="card-questao">
            <h2>Analise o Caso</h2>
            <img src="${caso.imagem}" alt="Lâmina Oculta">
            <p style="margin-bottom: 20px;"><strong>História Clínica:</strong> ${caso.texto}</p>
            <input type="text" id="input-resposta" class="input-resposta" placeholder="Digite o seu diagnóstico aqui..." onkeypress="verificarEnter(event)">
            <div id="feedback-msg" class="feedback-msg"></div>
            <button id="btn-conferir" onclick="conferirResposta()" class="btn btn-conferir">Conferir Resposta</button>
            <button id="btn-proxima" onclick="proximaQuestao()" class="btn btn-proxima">Próxima Questão ➔</button>
        </div>
    `;
    document.getElementById("input-resposta").focus();
}

function verificarEnter(event) {
    if (event.key === "Enter") conferirResposta();
}

function conferirResposta() {
    const inputEl = document.getElementById("input-resposta");
    const digitadoOriginal = inputEl.value;
    const feedbackEl = document.getElementById("feedback-msg");
    const btnConferir = document.getElementById("btn-conferir");
    const btnProxima = document.getElementById("btn-proxima");

    /*if (digitadoOriginal.trim() === "") {
        alert("Por favor, digite um diagnóstico antes de conferir.");
        return;*/
    }

    const casoAtual = casosSimulado[indiceAtual];
    const digitadoNormalizado = normalizarTexto(digitadoOriginal);
    const respostasCorretas = casoAtual.resposta.split("/").map(r => normalizarTexto(r));
    const acertou = respostasCorretas.some(resposta => digitadoNormalizado === resposta);

    feedbackEl.style.display = "block";
    inputEl.disabled = true;
    btnConferir.style.display = "none";
    btnProxima.style.display = "block";

    if (acertou) {
        feedbackEl.className = "feedback-msg feedback-correto";
        feedbackEl.innerHTML = `✅ Correto! O diagnóstico é: <strong>${casoAtual.resposta}</strong>`;
    } else {
        feedbackEl.className = "feedback-msg feedback-erro";
        feedbackEl.innerHTML = `❌ Incorreto. <br><br>Você digitou: <em>${digitadoOriginal}</em><br>O diagnóstico correto é: <strong>${casoAtual.resposta}</strong>`;
    }
}

function proximaQuestao() {
    indiceAtual++;
    renderizarQuestaoSimulado();
}
