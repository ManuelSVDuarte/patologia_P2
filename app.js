// ==========================================
// 1. BANCO DE DADOS DOS CASOS CLÍNICOS
// ==========================================
const casosBD = [
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
    },
    {
        id: "scc_pulmonar_01",
        nome_patologia: "Carcinoma de Células Escamosas Pulmonar",
        tipo_exame: "patologia",
        etapa1: {
            paciente: "JBS, do sexo masculino, 58 anos, pardo, pedreiro autônomo, casado, 3 filhos.",
            historia: "Chega à emergência com queixa de 'dor no peito e tosse com sangue'. Relata que há cerca de três meses a dor torácica se iniciou, associada à piora de uma 'tosse de fumante' crônica que se tornou produtiva e apresenta hemoptise. Queixa-se de sibilância ao esforço.",
            antecedentes: "Histórico de tabagismo ativo intenso e de longa data (40 anos-maço). Relata fraqueza e dores difusas no corpo.",
            exame_fisico: "PA = 140x90 mmHg, afebril, levemente hipocorado, taquipneico. Ausculta pulmonar revela murmúrio vesicular abolido no hemitórax direito e sibilância localizada.",
            pergunta: "1. Analise o texto e indique as principais hipóteses diagnósticas considerando o perfil epidemiológico do paciente. Justifique sua resposta.",
            gabarito_titulo: "Carcinoma de Células Escamosas Pulmonar.",
            gabarito_justificativa: "Paciente homem, acima de 50 anos, com carga tabágica muito elevada, apresentando sintomas centrais (hemoptise, sibilância e dor torácica) que sugerem neoplasia pulmonar de localização central[cite: 5]."
        },
        etapa2: {
            contexto: "Durante a internação, a equipe identifica hipercalcemia e uma massa hilar direita com atelectasia.",
            pergunta: "2. Explique a relação do achado de hipercalcemia com a hipótese diagnóstica, citando o mecanismo paraneoplásico associado.",
            gabarito_titulo: "Síndrome Paraneoplásica (Produção de PTHrP).",
            gabarito_justificativa: "O Carcinoma de Células Escamosas é frequentemente associado à produção ectópica de Proteína Relacionada ao Hormônio Paratireoidiano (PTHrP), que causa hipercalcemia[cite: 5]."
        },
        etapa3: {
            laudo_exame: "Massa sólida, irregular e cavitada localizada na região do hilo pulmonar direito (tumor central), causando obstrução brônquica parcial e extensa área de atelectasia no lobo médio e inferior ipsilateral. Foi realizada broncoscopia para biópsia direta da massa.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: J. B. S. | Sexo: Masculino | Idade: 58 anos\nProcedência: Serviço de Pneumologia / Broncoscopia\n\nNatureza do Material:\nQuatro (4) fragmentos irregulares de tecido obtidos por biópsia endobrônquica via broncoscopia.\n\nHistória Clínica e Exame Físico:\nPaciente tabagista intenso (40 anos-maço), pedreiro, apresenta dor torácica, tosse produtiva com hemoptise e sibilância há 3 meses. Evoluiu com fraqueza e dores difusas. Exame físico: murmúrio vesicular abolido no hemitórax direito e sibilância localizada.\n\nAchados Laboratoriais e Radiológicos:\nLaboratório: Hipercalcemia acentuada.\nTC de Tórax: Massa sólida, irregular e cavitada em região hilar direita, provocando obstrução brônquica parcial e extensa atelectasia em lobo médio e inferior ipsilateral.\n\nHipótese Diagnóstica:\nNeoplasia maligna de pulmão (suspeita de Carcinoma de Células Escamosas).\n\nSolicitação:\nSolicito exame histopatológico da amostra coletada para diagnóstico definitivo.\n\nData: ___/___/____ | Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Recebidos quatro fragmentos irregulares de tecido firme, de coloração brancacenta e áreas pardacentas, medindo em conjunto 0,9 x 0,6 x 0,4 cm. (B1 - 4F - TI).",
            microscopia: "Neoplasia epitelial maligna de padrão infiltrativo, constituída pela proliferação de células escamosas atípicas. As células tumorais exibem abundante citoplasma, pleomorfismo nuclear e nítidas pontes intercelulares. Observa-se a formação de blocos sólidos com áreas de queratinização central concêntrica, formando as chamadas 'pérolas córneas', além de extensa invasão das estruturas do estroma fibrovascular adjacente[cite: 5].",
            pergunta: "4. Com as informações apresentadas, aponte o diagnóstico definitivo e cite os achados microscópicos que são patognomônicos.",
            gabarito_titulo: "Carcinoma de Células Escamosas Pulmonar (Achados patognomônicos: pontes intercelulares e pérolas córneas[cite: 5])."
        }
    },
    {
        id: "adeno_gastrico_01",
        nome_patologia: "Adenocarcinoma Gástrico",
        tipo_exame: "patologia",
        etapa1: {
            paciente: "JMC, do sexo masculino, 68 anos, branco, comerciante aposentado.",
            historia: "Procura o ambulatório com queixa de dor forte na boca do estômago e fraqueza. Relata dor epigástrica diária há sete meses, episódios frequentes de náuseas e vômitos pós-prandiais, e perda de peso não intencional de 14 kg no semestre.",
            antecedentes: "Histórico antigo e não tratado adequadamente de infecção por H. pylori.",
            exame_fisico: "Paciente emagrecido, hipocorado, anictérico, com dor à palpação profunda na região epigástrica, sem massas palpáveis evidentes.",
            pergunta: "1. Analise a vinheta clínica e indique como o sexo do paciente e o antecedente de infecção crônica por H. pylori funcionam como fatores de risco clássicos para esta doença.",
            gabarito_titulo: "Adenocarcinoma Gástrico.",
            gabarito_justificativa: "O adenocarcinoma gástrico é mais prevalente em homens (relação 2H:1M) e a infecção crônica por H. pylori é um dos principais fatores etiológicos descritos, podendo evoluir para gastrite, atrofia, metaplasia e, eventualmente, neoplasia."
        },
        etapa2: {
            contexto: "Devido aos sinais de alarme, foi realizada Endoscopia Digestiva Alta (EDA).",
            pergunta: "2. Relacione a queixa clínica de náuseas e vômitos com os achados endoscópicos de lesão ulcerada irregular e espessamento da parede do estômago.",
            gabarito_titulo: "Obstrução e perda da distensibilidade gástrica.",
            gabarito_justificativa: "A lesão ulcerada irregular e o espessamento da parede no antro gástrico causam perda da distensibilidade local e rigidez, dificultando a passagem do alimento e resultando em náuseas, vômitos pós-prandiais e saciedade precoce."
        },
        etapa3: {
            laudo_exame: "Volumosa lesão ulcerada irregular no antro gástrico, com bordas elevadas e fundo recoberto por fibrina. A lesão promove um nítido espessamento da parede gástrica adjacente, com perda da distensibilidade local e deformidade da câmara gástrica.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: J. M. C.  |  Sexo: Masculino  |  Idade: 68 anos\nProcedência: Ambulatório de Gastroenterologia\n\nNatureza do Material:\nOito (8) fragmentos irregulares de tecido gástrico (região do antro), obtidos por biópsia via Endoscopia Digestiva Alta (EDA).\n\nHistória Clínica e Exame Físico:\nPaciente de 68 anos com dor epigástrica crônica há 7 meses, náuseas, vômitos pós-prandiais e perda ponderal de 14 kg. Histórico de infecção crônica por Helicobacter pylori não tratada adequadamente. Ao exame: emagrecido, com dor à palpação profunda em região epigástrica.\n\nAchados Endoscópicos:\nVolumosa lesão ulcerada irregular no antro gástrico, com bordas elevadas e fundo fibrinopurulento. Observa-se espessamento da parede e deformidade da câmara gástrica, sugerindo processo infiltrativo.\n\nHipótese Diagnóstica:\nNeoplasia gástrica (Adenocarcinoma).\n\nSolicitação:\nSolicito avaliação histopatológica para confirmação diagnóstica. Por favor, correlacionar os achados com a história de infecção prévia por H. pylori e avaliar a presença de células em anel de sinete.\n\nData: ___/___/____  |  Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Recebidos oito fragmentos irregulares de tecido, de coloração pardacenta e consistência firme, medindo o maior 0,5 cm e o menor 0,2 cm. (B1-B2 - 8F - TI).",
            microscopia: "Neoplasia epitelial maligna de caráter infiltrativo. Predomínio de glândulas atípicas com pleomorfismo nuclear. Presença de células neoplásicas isoladas com núcleo perifericamente rechaçado por vacúolo de mucina (células em anel de sinete). Extensa invasão da lâmina própria e submucosa.",
            pergunta: "4. Com base na visualização microscópica de 'glândulas atípicas, células em anel de sinete e invasão', aponte o diagnóstico morfológico final.",
            gabarito_titulo: "Adenocarcinoma Gástrico (com padrão de células em anel de sinete)."
        }
    },
    {
        id: "gastrite_hpylori_01",
        nome_patologia: "Gastrite por H. pylori",
        tipo_exame: "patologia",
        etapa1: {
            paciente: "MVS, do sexo feminino, 45 anos, parda, costureira.",
            historia: "Procura a UBS com queixa de queimação no estômago e digestão lenta. Relata quadro crônico de dispepsia, dor epigástrica em queimação e frequentes náuseas, que pioram com café e condimentos. Uso de chás e antiácidos caseiros com alívio apenas temporário.",
            antecedentes: "Nega outras comorbidades; histórico de automedicação crônica.",
            exame_fisico: "Paciente afebril, normocorada, anictérica, abdome flácido, com dor à palpação profunda na região epigástrica.",
            pergunta: "1. Analise a vinheta clínica e indique como a origem da paciente e o perfil socioeconômico se alinham à epidemiologia desta infecção.",
            gabarito_titulo: "Gastrite por H. pylori.",
            gabarito_justificativa: "A infecção por H. pylori é extremamente comum em países em desenvolvimento e comunidades com menor índice socioeconômico, onde as condições de saneamento básico facilitam a transmissão do patógeno, acometendo mais da metade da população mundial."
        },
        etapa2: {
            contexto: "Devido à refratariedade dos sintomas, foi solicitada uma Endoscopia Digestiva Alta (EDA).",
            pergunta: "2. Correlacione a clínica crônica da paciente com os achados de agressão estrutural vistos na endoscopia.",
            gabarito_titulo: "Gastrite antral crônica.",
            gabarito_justificativa: "A hiperemia, espessamento da mucosa e erosões antrais são a tradução morfológica do processo inflamatório contínuo provocado pela bactéria, resultando no quadro persistente de dispepsia e dor epigástrica."
        },
        etapa3: {
            laudo_exame: "Estômago com mucosa difusamente hiperemiada e espessada, predominantemente no antro. Presença de irregularidade de superfície e múltiplas erosões rasas com exsudato.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: M. V. S.  |  Sexo: Feminino  |  Idade: 45 anos\nProcedência: Unidade Básica de Saúde\n\nNatureza do Material:\nQuatro (4) fragmentos da mucosa antral e do corpo gástrico, obtidos por biópsia via Endoscopia Digestiva Alta (EDA).\n\nHistória Clínica:\nPaciente feminina, 45 anos, com quadro crônico e arrastado de dispepsia, dor epigástrica em queimação e náuseas, refratárias ao uso de antiácidos e automedicação.\n\nAchados Endoscópicos:\nEstômago com mucosa difusamente hiperemiada e espessada, predominantemente no antro. Presença de irregularidade de superfície e múltiplas erosões rasas com exsudato.\n\nHipótese Diagnóstica:\nGastrite crônica ativa; investigar infecção por Helicobacter pylori.\n\nSolicitação:\nSolicito exame histopatológico para confirmação diagnóstica. Por favor, realizar pesquisa de micro-organismos (coloração especial) para confirmação de H. pylori e avaliar a presença de metaplasia intestinal ou atividade inflamatória.\n\nData: ___/___/____  |  Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Recebidos quatro fragmentos diminutos de tecido de coloração pardo-clara, medindo em conjunto 0,4 x 0,2 cm. (B1 - 4F - TI).",
            microscopia: "Processo inflamatório crônico em atividade com denso infiltrado linfoplasmocitário e neutrófilos no epitélio foveolar. Metaplasia intestinal. Presença de numerosos bacilos espiralados na camada de muco superficial.",
            pergunta: "4. Aponte o diagnóstico etiológico e histopatológico definitivo da paciente.",
            gabarito_titulo: "Gastrite crônica ativa por H. pylori com metaplasia intestinal."
        }
    },
    {
        id: "tb_pulmonar_01",
        nome_patologia: "Tuberculose Pulmonar",
        tipo_exame: "patologia", // Mantém a estrutura de solicitação, mas focada na exclusão de malignidade
        etapa1: {
            paciente: "MJS, do sexo masculino, 45 anos, pardo, ajudante de pedreiro.",
            historia: "Tosse crônica há 5 meses (inicialmente seca, agora produtiva e hemoptoica), sudorese noturna intensa e perda de peso acentuada. Relata convívio em comunidade com alta densidade populacional.",
            antecedentes: "Nega tabagismo. Uso esporádico de álcool.",
            exame_fisico: "PA = 110x70 mmHg, febrícula (37,6ºC), taquicárdico, emagrecido e descorado. Ausculta com murmúrio vesicular diminuído em ápice pulmonar direito, com estertores finos.",
            pergunta: "1. Analise o perfil socioeconômico e a clínica, correlacionando-os com o risco epidemiológico para a principal hipótese.",
            gabarito_titulo: "Tuberculose Pulmonar.",
            gabarito_justificativa: "A pobreza e a aglomeração urbana facilitam a disseminação do bacilo. O quadro clínico clássico de tosse >3 semanas, sudorese noturna e emagrecimento (síndrome consuntiva) em área endêmica aponta para a TB."
        },
        etapa2: {
            contexto: "A equipe solicita radiografia de tórax e teste tuberculínico (PPD).",
            pergunta: "2. Cite os três principais achados clínicos e radiológicos clássicos para esta patologia.",
            gabarito_titulo: "Sintomas constitucionais e imagem apical.",
            gabarito_justificativa: "1. Tosse produtiva/hemoptoica persistente; 2. Emagrecimento e sudorese noturna; 3. Consolidação e cavitação em ápice pulmonar na radiografia."
        },
        etapa3: {
            laudo_exame: "A Baciloscopia de escarro confirmou a presença de BAAR (Bacilos Álcool-Ácido Resistentes). Devido à extensa cavitação e necessidade de descartar lesão neoplásica mascarada, optou-se pela biópsia transbrônquica.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: M. J. S. | Sexo: Masculino | Idade: 45 anos\nProcedência: Unidade Básica de Saúde / Pneumologia\n\nNatureza do Material:\nFragmentos teciduais obtidos por biópsia transbrônquica da borda de lesão cavitária apical (Pulmão Direito).\n\nHistória Clínica:\nPaciente com tosse produtiva/hemoptoica há 5 meses, sudorese noturna e perda ponderal acentuada. PPD fortemente positivo. Baciloscopia de escarro positiva para BAAR.\n\nAchados Radiológicos:\nRadiografia de tórax e TC evidenciando consolidação e extensa cavitação em ápice pulmonar direito.\n\nHipótese Diagnóstica:\nTuberculose pulmonar cavitária (excluir lesão neoplásica secundária).\n\nSolicitação:\nSolicito avaliação histopatológica da borda da cavidade para confirmar padrão inflamatório granulomatoso e descartar malignidade (coinfecção ou neoplasia associada).\n\nData: ___/___/____ | Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Três pequenos fragmentos teciduais, pardo-amarelados, com áreas centrais friáveis e esbranquiçadas (aspecto caseoso). (B1 - 3F - TI).",
            microscopia: "Processo inflamatório crônico granulomatoso. Múltiplos granulomas com extensa necrose caseosa central, circundados por macrófagos epitelioides e células gigantes multinucleadas (tipo Langhans). Periferia com infiltrado linfoplasmocitário.",
            pergunta: "4. Com base na descrição microscópica (granuloma, caseosidade e células de Langhans), aponte o diagnóstico definitivo.",
            gabarito_titulo: "Tuberculose Pulmonar (Inflamação Granulomatosa com Necrose Caseosa)."
        }
    },
    {
        id: "pneumonia_01",
        nome_patologia: "Pneumonia Bacteriana",
        tipo_exame: "funcional", // Isso fará o sistema pular a biópsia e focar na análise de secreção
        etapa1: {
            paciente: "JVO, do sexo masculino, 79 anos, branco, aposentado, residente em ILPI.",
            historia: "Trazido à emergência por rebaixamento do nível de consciência. Febre alta há 48 horas, tosse produtiva espessa e dor torácica pleurítica.",
            antecedentes: "Hipertensão e diabetes tipo 2. Residente em asilo.",
            exame_fisico: "PA = 90x60 mmHg, febril (39,1ºC), taquicárdico, taquipneico. Ausculta com estertores crepitantes grossos em base pulmonar direita.",
            pergunta: "1. Analise o texto e indique como a idade do paciente e o local de residência funcionam como fatores de risco.",
            gabarito_titulo: "Pneumonia Adquirida na Comunidade/Institucional.",
            gabarito_justificativa: "A idade avançada (imunossenescência) e o ambiente de ILPI (aglomeração e maior taxa de colonização por patógenos) são fatores de risco determinantes para pneumonias graves em idosos."
        },
        etapa2: {
            contexto: "Exames mostram leucocitose, hipoxemia e radiografia com infiltrado alveolar e broncogramas aéreos.",
            pergunta: "2. Correlacione a clínica com os achados laboratoriais e indique as categorias etiológicas a investigar.",
            gabarito_titulo: "Síndrome de Consolidação Pulmonar.",
            gabarito_justificativa: "A clínica de febre/tosse e a imagem de consolidação alveolar refletem o preenchimento dos alvéolos por exsudato inflamatório (pus). Deve-se investigar bactérias (Streptococcus pneumoniae, agentes atípicos), vírus e, em casos refratários, fungos."
        },
        etapa3: {
            laudo_exame: "Devido à evolução para insuficiência respiratória grave, foi coletado Lavado Broncoalveolar (LBA) para cultura e bacterioscopia. Não foi realizada biópsia de parênquima devido ao risco desnecessário.",
            pergunta_alternativa: "3. Justifique por que a biópsia histopatológica não é o exame padrão para o diagnóstico de pneumonia.",
            gabarito_titulo: "Diagnóstico Clínico-Imagem-Microbiológico.",
            gabarito_justificativa: "A pneumonia é um processo infeccioso agudo diagnosticado pelo conjunto clínico-radiológico e confirmado por microbiologia (cultura/lâmina de secreção). A biópsia é invasiva, arriscada e não altera o manejo inicial."
        },
        etapa4: {
            pergunta: "4. Com base no quadro de infiltrado alveolar e broncogramas aéreos, aponte o diagnóstico funcional.",
            gabarito_titulo: "Pneumonia Bacteriana (Consolidação Alveolar).",
            gabarito_justificativa: "O diagnóstico é de pneumonia bacteriana caracterizada por preenchimento alveolar (broncogramas aéreos) e dano alveolar difuso, explicando a severa hipoxemia pela alteração da relação ventilação-perfusão."
        }
    },
    {
        id: "tumor_neuroendocrino_01",
        nome_patologia: "Tumor Neuroendócrino (Carcinoide)",
        tipo_exame: "patologia",
        etapa1: {
            paciente: "PRT, do sexo masculino, 29 anos, branco, analista de sistemas.",
            historia: "Tosse persistente e febre há um ano, com quadros recorrentes de pneumonia no pulmão direito. Atualmente, apresenta nova febre e hemoptise.",
            antecedentes: "Nega comorbidades e histórico de tabagismo.",
            exame_fisico: "Ausculta pulmonar com murmúrio vesicular globalmente reduzido à direita, estertores crepitantes e macicez à percussão no lobo inferior direito.",
            pergunta: "1. Por que pneumonias de repetição no mesmo lobo pulmonar em um adulto jovem e não tabagista sugerem lesão obstrutiva?",
            gabarito_titulo: "Suspeita de lesão obstrutiva (Tumor).",
            gabarito_justificativa: "Infecções recorrentes no mesmo sítio anatômico sugerem uma obstrução mecânica local (nódulo endobrônquico) que impede a drenagem das secreções, favorecendo a colonização bacteriana persistente, independentemente do tabagismo."
        },
        etapa2: {
            contexto: "TC mostra nódulo endobrônquico central no brônquio lobar inferior direito, com realce intenso ao contraste.",
            pergunta: "2. Considerando a faixa etária, ausência de tabagismo e achados da TC (lesão central hipercaptante), qual a principal hipótese?",
            gabarito_titulo: "Tumor Neuroendócrino (Carcinoide).",
            gabarito_justificativa: "Tumores neuroendócrinos (carcinoides) são neoplasias típicas de localização central, bem delimitadas e altamente vascularizadas, sendo uma das principais causas de obstrução brônquica em pacientes jovens não tabagistas."
        },
        etapa3: {
            laudo_exame: "Nódulo de localização endobrônquica no brônquio lobar inferior direito, medindo 2,5 cm, bem delimitado e com realce intenso ao contraste. Massa causa obstrução brônquica parcial com atelectasia.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: P. R. T. | Sexo: Masculino | Idade: 29 anos\nProcedência: Cirurgia Torácica / Broncoscopia\n\nNatureza do Material:\nQuatro (4) fragmentos teciduais obtidos por biópsia via broncoscopia de lesão endobrônquica (brônquio lobar inferior direito).\n\nHistória Clínica:\nPaciente jovem, não tabagista, com episódios de pneumonias de repetição no lobo inferior direito há 10 meses. Apresenta hemoptise recente. TC revela nódulo central endobrônquico hipercaptante de contraste.\n\nHipótese Diagnóstica:\nTumor endobrônquico (suspeita de Tumor Neuroendócrino/Carcinoide).\n\nSolicitação:\nSolicito avaliação histopatológica para diagnóstico definitivo e diferenciação neoplásica. Devido à localização e aparência radiológica, favor considerar estudo imuno-histoquímico para marcadores neuroendócrinos se necessário.\n\nData: ___/___/____ | Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Recebidos quatro fragmentos de tecido de coloração pardo-amarelada e consistência elástica. (B1 - 4F - TI).",
            microscopia: "Neoplasia com células uniformes, núcleos redondos com cromatina em 'sal e pimenta'. Organização em ninhos, trabéculas e raras rosetas em estroma ricamente vascularizado. Baixa contagem de mitoses e ausência de necrose.",
            pergunta: "4. Aponte o diagnóstico definitivo e cite os achados citológicos patognomônicos.",
            gabarito_titulo: "Tumor Neuroendócrino (Carcinoide típico).",
            gabarito_justificativa: "O diagnóstico é de Tumor Neuroendócrino (Carcinoide) típico. Os achados patognomônicos são a cromatina em 'sal e pimenta' e a arquitetura trabecular/ninhos com baixa atividade mitótica."
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
