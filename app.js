// ==========================================
// 1. BANCO DE DADOS DOS CASOS CLÍNICOS
// ==========================================
const casosBD = [
    {
        id: "scc_esofago",
        nome_patologia: "Carcinoma de Células Escamosas do Esôfago",
        tipo_exame: "patologia", 
        etapa1: {
            paciente: "MTR, masculino, 62 anos, pedreiro aposentado.",
            historia: "Chega ao ambulatório com queixa de 'entalo crônico e dor no peito'. Relata dificuldade progressiva para engolir (disfagia) há cinco meses. Inicialmente engasgava com sólidos, mas agora o entalo ocorre até com líquidos, associado à dor retroesternal. Perda de peso estimada em 15 kg no semestre.",
            antecedentes: "Tabagismo e alcoolismo diários desde os 16 anos.",
            exame_fisico: "Caquético, hipocorado (2+/4+), anictérico e afebril.",
            pergunta: "1. Qual a sua principal hipótese diagnóstica estruturada?",
            gabarito_titulo: "Carcinoma de Células Escamosas do Esôfago.",
            gabarito_justificativa: "O paciente apresenta todos os fatores de risco epidemiológicos clássicos (homem, idoso, tabagismo e alcoolismo) alinhados à apresentação clínica típica de disfagia progressiva e perda de peso."
        },
        etapa2: {
            contexto: "Sua hipótese clínica de doença estrutural esofágica obstrutiva foi estabelecida.",
            pergunta: "2. Quais exames complementares você solicita para confirmar a suspeita?",
            gabarito_titulo: "Endoscopia Digestiva Alta (EDA) com biópsia.",
            gabarito_justificativa: "É o padrão-ouro para visualizar o estreitamento luminal e a lesão exofítica, além de permitir a coleta de tecido para análise."
        },
        etapa3: {
            laudo_exame: "Presença de volumosa lesão exofítica no terço médio do esôfago, friável e com ulcerações. Causa grave estreitamento luminal, impedindo a progressão do aparelho.",
            gabarito_solicitacao: "Identificação: MTR, 62 anos, Sexo Masculino.\n\nMaterial / Procedimento: Fragmentos de lesão esofágica (terço médio) / Biópsia Endoscópica.\n\nInformes Clínicos: Paciente idoso com longo histórico de tabagismo e alcoolismo, apresentando perda de peso e disfagia progressiva. A EDA revelou lesão exofítica ulcerada e estreitamento luminal. Suspeita de Carcinoma de Células Escamosas."
        },
        etapa4: {
            macroscopia: "5 fragmentos irregulares, pardacentos e firmes. (B1 - 5F - TI).",
            microscopia: "Neoplasia epitelial maligna. Proliferação de células escamosas atípicas e mitoses atípicas. Invasão do estroma conjuntivo subjacente.",
            pergunta: "4. Com base na integração clínico-patológica, qual o diagnóstico definitivo?",
            gabarito_titulo: "Carcinoma de Células Escamosas do Esôfago."
        }
    },
    {
        id: "dpoc_01",
        nome_patologia: "Doença Pulmonar Obstrutiva Crônica (DPOC)",
        tipo_exame: "funcional", 
        etapa1: {
            paciente: "RFS, masculino, 62 anos, motorista aposentado.",
            historia: "Dispneia progressiva limitante e tosse crônica com expectoração matinal há vários anos.",
            antecedentes: "Tabagismo ativo com alta carga tabágica (44 anos-maço).",
            exame_fisico: "Uso de musculatura acessória, murmúrio vesicular difusamente reduzido, tempo expiratório prolongado e sibilância esparsa.",
            pergunta: "1. Qual a principal suspeita clínica e o fator de risco determinante?",
            gabarito_titulo: "Doença Pulmonar Obstrutiva Crônica (DPOC).",
            gabarito_justificativa: "Quadro clássico de dispneia e tosse em paciente acima de 40 anos com alta carga tabágica associada."
        },
        etapa2: {
            contexto: "A suspeita de síndrome obstrutiva crônica necessita de comprovação funcional e de imagem.",
            pergunta: "2. Quais exames você solicita para estadiamento e confirmação diagnóstica?",
            gabarito_titulo: "Espirometria e Radiografia de Tórax.",
            gabarito_justificativa: "A espirometria é mandatória para confirmar a obstrução do fluxo aéreo, e a radiografia avalia os sinais de hiperinsuflação."
        },
        etapa3: {
            laudo_exame: "A espirometria confirmou distúrbio ventilatório com obstrução irreversível. A radiografia de tórax evidenciou retificação das cúpulas diafragmáticas e hiperinsuflação.",
            pergunta_alternativa: "3. Correlacione o achado da espirometria com a fisiopatologia da doença.",
            gabarito_titulo: "Obstrução fixa e irreversível da via aérea.",
            gabarito_justificativa: "Diferente da asma, a obstrução irreversível na espirometria reflete o dano estrutural crônico: o remodelamento brônquico e a destruição alveolar (enfisema)."
        },
        etapa4: {
            pergunta: "4. Com base na clínica e na prova de função pulmonar, qual o diagnóstico final?",
            gabarito_titulo: "DPOC (Padrão obstrutivo irreversível)."
        }
    },
    {
        id: "adeno_pulmonar_01",
        nome_patologia: "Adenocarcinoma Pulmonar",
        tipo_exame: "patologia",
        etapa1: {
            paciente: "MTP, do sexo feminino, 64 anos, branca, professora aposentada, casada, 2 filhos saudáveis.",
            historia: "Chega ao ambulatório com queixa de 'falta de ar e tosse persistente'. Relata que há cerca de quatro meses vem apresentando tosse seca que não cede com xaropes comuns e dispneia aos médios esforços. Refere também uma perda de peso não intencional de 7 kg no último semestre. Nega episódios de febre ou hemoptise.",
            antecedentes: "Nega veementemente tabagismo prévio ou passivo, bem como etilismo. Indica mãe falecida por infarto agudo do miocárdio e pai hipertenso.",
            exame_fisico: "PA = 130x80 mmHg, afebril, levemente hipocorada, eupneica no repouso e anictérica. Ausculta pulmonar revela murmúrio vesicular globalmente reduzido, sem ruídos adventícios.",
            pergunta: "1. Analise o texto e indique as principais hipóteses diagnósticas considerando o perfil epidemiológico da paciente. Justifique sua resposta.",
            gabarito_titulo: "Adenocarcinoma Pulmonar.",
            gabarito_justificativa: "Trata-se do câncer de pulmão mais comum em não fumantes e mulheres. A ausência de febre afasta suspeitas infecciosas agudas, enquanto a tosse persistente, dispneia e perda de peso progressiva formam a síndrome consumptiva que levanta a forte suspeita neoplásica[cite: 5]."
        },
        etapa2: {
            contexto: "Os exames laboratoriais de triagem revelam elevação significativa do marcador tumoral CEA. A equipe decide prosseguir com exames de imagem para avaliar estruturalmente o parênquima pulmonar.",
            pergunta: "2. Qual exame de imagem é fundamental neste momento e qual a localização típica esperada da lesão para esta hipótese?",
            gabarito_titulo: "Tomografia Computadorizada (TC) de Tórax.",
            gabarito_justificativa: "A tomografia é o exame de escolha para localizar e caracterizar a lesão. No Adenocarcinoma Pulmonar, a lesão apresenta tipicamente uma localização mais periférica no pulmão[cite: 5]."
        },
        etapa3: {
            laudo_exame: "A tomografia de tórax evidencia um nódulo pulmonar de localização periférica, de contornos espiculados e irregulares, medindo 4,2 cm no seu maior diâmetro, situado no lobo inferior esquerdo, com sinais de retração pleural adjacente. Diante da lesão, a equipe da cirurgia torácica realizou biópsia pulmonar percutânea guiada por TC.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: M. T. P.  |  Sexo: Feminino  |  Idade: 64 anos\nProcedência: Ambulatório de Cirurgia Torácica / Radiologia Intervencionista\n\nNatureza do Material:\nTrês (3) fragmentos filiformes de parênquima pulmonar obtidos por biópsia percutânea por agulha grossa (Core Biopsy) guiada por TC.\n\nHistória Clínica e Exame Físico:\nPaciente de 64 anos, professora aposentada, não tabagista (carga tabágica zero) e não etilista. Apresenta quadro de tosse seca persistente e dispneia aos médios esforços há 4 meses, associada a emagrecimento não intencional de 7 kg no último semestre. Sem febre ou hemoptise. Exame físico sem alterações de relevo, exceto por murmúrio vesicular difusamente reduzido.\n\nAchados Laboratoriais e Radiológicos:\nLaboratório: Marcador tumoral CEA significativamente elevado.\nTC de Tórax: Nódulo pulmonar periférico de contornos espiculados e irregulares, medindo 4,2 cm no maior diâmetro, localizado no lobo inferior esquerdo (LIE), com sinais de retração pleural adjacente.\n\nHipótese Diagnóstica:\nNeoplasia pulmonar primária (Adenocarcinoma pulmonar) vs. Doença metastática.\n\nSolicitação:\nSolicito avaliação histopatológica da amostra para confirmação diagnóstica. Havendo confirmação de neoplasia maligna, favor processar blocos visando futura investigação imuno-histoquímica e molecular.\n\nData: ___/___/____  |  Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Recebidos três fragmentos filiformes de tecido brancacento e firme, medindo o maior 1,4 x 0,1 cm e o menor 0,8 x 0,1 cm. Toda a amostra foi incluída para análise (B1 - 3F - TI).",
            microscopia: "Neoplasia epitelial maligna infiltrativa, caracterizada pela proliferação de glândulas atípicas. As células neoplásicas apresentam acentuado pleomorfismo nuclear, nucléolos evidentes e figuras de mitose. O tumor exibe predominantemente padrões arquiteturais acinar e papilífero, associados à invasão das estruturas do estroma adjacente[cite: 5].",
            pergunta: "4. Com as informações epidemiológicas, clínicas, radiológicas e a descrição microscópica fornecida, aponte o diagnóstico definitivo.",
            gabarito_titulo: "Adenocarcinoma Pulmonar."
        }
    }
    
];

// ==========================================
// 2. LÓGICA DO SISTEMA
// ==========================================
let casoAtual = {};

window.onload = function() {
    const seletor = document.getElementById('seletorCaso');
    
    casosBD.forEach((caso, index) => {
        const option = document.createElement('option');
        option.value = index;
        // A MUDANÇA ACONTECEU AQUI: 
        // Em vez de puxar o nome da patologia, o sistema cria o texto "Caso Clínico 1", "Caso Clínico 2", etc.
        option.text = "Caso Clínico " + (index + 1); 
        seletor.appendChild(option);
    });

    carregarCaso(0);
};

function carregarCaso(index) {
    casoAtual = casosBD[index];
    resetarInterface();

    document.getElementById('txt_paciente').innerText = casoAtual.etapa1.paciente;
    document.getElementById('txt_historia').innerText = casoAtual.etapa1.historia;
    document.getElementById('txt_antecedentes').innerText = casoAtual.etapa1.antecedentes;
    document.getElementById('txt_exame_fisico').innerText = casoAtual.etapa1.exame_fisico;

    document.getElementById('lbl_pergunta1').innerText = casoAtual.etapa1.pergunta;
    document.getElementById('gab_titulo1').innerText = casoAtual.etapa1.gabarito_titulo;
    document.getElementById('gab_justificativa1').innerText = casoAtual.etapa1.gabarito_justificativa;

    document.getElementById('txt_contexto2').innerText = casoAtual.etapa2.contexto;
    document.getElementById('lbl_pergunta2').innerText = casoAtual.etapa2.pergunta;
    document.getElementById('gab_titulo2').innerText = casoAtual.etapa2.gabarito_titulo;
    document.getElementById('gab_justificativa2').innerText = casoAtual.etapa2.gabarito_justificativa;

    document.getElementById('txt_laudo_exame').innerText = casoAtual.etapa3.laudo_exame;

    const blocoPatologia = document.getElementById('bloco_patologia');
    const blocoFuncional = document.getElementById('bloco_funcional');
    const gabPatologia = document.getElementById('gab_patologia');
    const gabFuncional = document.getElementById('gab_funcional');
    
    const blocoLaudoPatologico = document.getElementById('bloco_laudo_patologico');
    const blocoConclusaoClinica = document.getElementById('bloco_conclusao_clinica');

    if (casoAtual.tipo_exame === 'patologia') {
        blocoPatologia.classList.add('visivel');
        blocoFuncional.classList.remove('visivel');
        gabPatologia.classList.add('visivel');
        gabFuncional.classList.remove('visivel');
        
        document.getElementById('gab_solicitacao').innerText = casoAtual.etapa3.gabarito_solicitacao;

        blocoLaudoPatologico.classList.add('visivel');
        blocoConclusaoClinica.classList.remove('visivel');
        document.getElementById('txt_macroscopia').innerText = casoAtual.etapa4.macroscopia;
        document.getElementById('txt_microscopia').innerText = casoAtual.etapa4.microscopia;
        
    } else {
        blocoFuncional.classList.add('visivel');
        blocoPatologia.classList.remove('visivel');
        gabFuncional.classList.add('visivel');
        gabPatologia.classList.remove('visivel');

        document.getElementById('lbl_pergunta3_alternativa').innerText = casoAtual.etapa3.pergunta_alternativa;
        document.getElementById('gab_titulo3').innerText = casoAtual.etapa3.gabarito_titulo;
        document.getElementById('gab_justificativa3').innerText = casoAtual.etapa3.gabarito_justificativa;

        blocoConclusaoClinica.classList.add('visivel');
        blocoLaudoPatologico.classList.remove('visivel');
    }

    document.getElementById('lbl_pergunta4').innerText = casoAtual.etapa4.pergunta;
    document.getElementById('gab_titulo4').innerText = casoAtual.etapa4.gabarito_titulo;
}

function verificar(step) {
    document.getElementById('gabarito' + step).style.display = 'block';
    document.getElementById('btn_next' + step).style.display = 'block';
    
    if(step === 1) document.getElementById('resposta_1').disabled = true;
    if(step === 2) document.getElementById('resposta_2').disabled = true;
    if(step === 3) {
        if(document.getElementById('solicitacao_unica')) document.getElementById('solicitacao_unica').disabled = true;
        if(document.getElementById('resposta_3_alternativa')) document.getElementById('resposta_3_alternativa').disabled = true;
    }
    if(step === 4) document.getElementById('resposta_4').disabled = true;
}

function nextStep(currentStep) {
    document.getElementById('step' + currentStep).classList.remove('active');
    document.getElementById('step' + (currentStep + 1)).classList.add('active');
}

function reiniciarApp() {
    carregarCaso(document.getElementById('seletorCaso').value);
}

function resetarInterface() {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));
    document.getElementById('step1').classList.add('active');

    for(let i=1; i<=4; i++) {
        document.getElementById('gabarito' + i).style.display = 'none';
        document.getElementById('btn_next' + i).style.display = 'none';
    }
    
    const inputs = ['resposta_1', 'resposta_2', 'solicitacao_unica', 'resposta_3_alternativa', 'resposta_4'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.value = '';
            el.disabled = false;
        }
    });
}
