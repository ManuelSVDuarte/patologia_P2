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
        tipo_exame: "patologia", // Mantemos patologia pois a biópsia foi necessária para descartar malignidade/coinfecção
        etapa1: {
            paciente: "MJS, 45 anos, ajudante de pedreiro, morador de comunidade com alta densidade populacional.",
            historia: "Paciente relata: 'Doutor, minha tosse já dura cinco meses. Achei que era só uma alergia por causa da poeira da obra, mas nas últimas semanas ela ficou muito pesada, com catarro e, algumas vezes, uns fios de sangue. De noite, acordo todo suado, a roupa chega a ficar encharcada, e minhas calças estão caindo de tanto que emagreci'.",
            antecedentes: "Nega tabagismo. Uso esporádico de álcool.",
            exame_fisico: "Paciente febril (37,6ºC), taquicárdico e emagrecido. Murmúrio vesicular diminuído em ápice pulmonar direito, com estertores finos.",
            pergunta: "1. Analise o relato e correlacione as condições de moradia (aglomeração) com a epidemiologia desta patologia.",
            gabarito_titulo: "Transmissão por gotículas em ambientes fechados.",
            gabarito_justificativa: "A Tuberculose (TB) é uma doença de transmissão aérea facilitada pela aglomeração e precariedade habitacional, onde o contato prolongado em ambientes sem ventilação aumenta drasticamente o risco de contágio do bacilo de Koch."
        },
        etapa2: {
            contexto: "Baciloscopia de escarro confirmou a presença de BAAR. Radiografia mostrou cavitação apical.",
            pergunta: "2. Cite os três principais achados que definem a suspeita clínica/radiológica de TB descritos.",
            gabarito_titulo: "Tríade Clínica e Radiológica da TB.",
            gabarito_justificativa: "1. Tosse produtiva/hemoptoica persistente > 3 semanas; 2. Sintomas constitucionais (sudorese noturna e perda de peso); 3. Cavitação em ápice pulmonar na radiografia."
        },
        etapa3: {
            laudo_exame: "Baciloscopia de escarro positiva (BAAR+). Devido à dúvida diagnóstica sobre coinfecção ou malignidade, foi realizada biópsia transbrônquica da borda da cavidade.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: M. J. S. | Sexo: Masculino | Idade: 45 anos\nProcedência: UBS / Pneumologia\n\nNatureza do Material:\nFragmentos teciduais por biópsia transbrônquica da borda de lesão cavitária apical (Pulmão Direito).\n\nHistória Clínica:\nPaciente com tosse hemoptoica (5 meses), sudorese noturna e emagrecimento acentuado. PPD positivo e BAAR+ no escarro.\n\nAchados Radiológicos:\nRadiografia/TC evidenciando consolidação e extensa cavitação em ápice pulmonar direito.\n\nHipótese Diagnóstica:\nTuberculose pulmonar cavitária (excluir lesão neoplásica associada).\n\nSolicitação:\nSolicito avaliação histopatológica para confirmação de padrão granulomatoso e exclusão de malignidade na borda da cavidade.\n\nData: ___/___/____ | Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Três fragmentos de aspecto friável e coloração esbranquiçada (quejosa). (B1 - 3F - TI).",
            microscopia: "Intenso processo inflamatório crônico granulomatoso. Múltiplos granulomas com extensa necrose caseosa central, macrófagos epitelioides e células gigantes de Langhans.",
            pergunta: "4. Aponte o diagnóstico definitivo com base no achado de 'células de Langhans' e necrose caseosa.",
            gabarito_titulo: "Tuberculose Pulmonar (Inflamação Granulomatosa Caseosa).",
            gabarito_justificativa: "O diagnóstico é de TB pulmonar. A presença de granulomas com necrose caseosa e células gigantes de Langhans é a resposta imune clássica e patognomônica da infecção pelo Mycobacterium tuberculosis."
        }
    },
    {
        id: "pneumonia_02_idoso",
        nome_patologia: "Pneumonia Bacteriana",
        tipo_exame: "funcional",
        etapa1: {
            paciente: "JVO, 79 anos, aposentado, residente em Instituição de Longa Permanência (ILPI).",
            historia: "O cuidador relata: 'O seu JVO estava bem ontem, mas hoje acordou muito confuso, não reconheceu a gente e parecia estar sonolento demais. Ele começou a tossir um catarro grosso e reclamar de uma dor no peito, parece que dói mais quando ele puxa o ar fundo. A gente notou também que ele estava com o corpo muito quente'.",
            antecedentes: "Hipertensão e diabetes tipo 2.",
            exame_fisico: "Paciente prostrado, rebaixado. PA = 90x60 mmHg, febre (39,1ºC), taquicárdico e taquipneico. Ausculta com estertores crepitantes grossos em base pulmonar direita.",
            pergunta: "1. Analise o relato e explique por que a idade e a residência em ILPI são fatores de risco críticos para a gravidade desta pneumonia.",
            gabarito_titulo: "Vulnerabilidade e Risco Institucional.",
            gabarito_justificativa: "Idosos apresentam imunossenescência e reserva fisiológica reduzida, tornando infecções bacterianas rapidamente graves. O ambiente de ILPI expõe o paciente a patógenos com maior resistência e risco de microaspiração, comum em pacientes com declínio cognitivo."
        },
        etapa2: {
            contexto: "Exames de sangue indicam leucocitose grave e gasometria mostra hipoxemia. Radiografia de tórax revela consolidado alveolar com broncogramas aéreos no lobo inferior direito.",
            pergunta: "2. Correlacione a clínica (tosse/febre/confusão) com os achados de imagem (broncogramas aéreos). O que é o broncograma?",
            gabarito_titulo: "Síndrome de Consolidação Alveolar.",
            gabarito_justificativa: "A clínica de sepse pulmonar é explicada pela inflamação alveolar intensa. O broncograma aéreo ocorre quando o ar nos brônquios contrasta com os alvéolos ao redor, que estão preenchidos por pus (exsudato), confirmando a consolidação alveolar."
        },
        etapa3: {
            laudo_exame: "Devido à insuficiência respiratória grave e necessidade de intubação, foi coletado Lavado Broncoalveolar (LBA) para cultura e bacterioscopia. Biópsia de parênquima não foi realizada.",
            pergunta_alternativa: "3. Por que, neste caso específico de pneumonia, a solicitação de biópsia pulmonar seria uma conduta incorreta ou iatrogênica?",
            gabarito_titulo: "Diagnóstico Clínico-Microbiológico.",
            gabarito_justificativa: "A pneumonia é um diagnóstico de síndrome infecciosa. A biópsia é um procedimento invasivo desnecessário que expõe o paciente a risco de hemorragia e pneumotórax, não trazendo benefícios terapêuticos frente ao diagnóstico estabelecido pelo LBA e pela radiografia."
        },
        etapa4: {
            pergunta: "4. Com base no infiltrado inflamatório alveolar, aponte o diagnóstico histopatológico da lesão e justifique a severidade do quadro.",
            gabarito_titulo: "Pneumonia Bacteriana Aguda (Fase de Hepatização).",
            gabarito_justificativa: "O diagnóstico é de pneumonia bacteriana aguda. A severidade advém do preenchimento alveolar por exsudato neutrofílico e fibrinoso, causando grave desequilíbrio na troca gasosa (hipoxemia), que pode evoluir para falência respiratória."
        }
    },
    {
        id: "tumor_carcinoide_tipico_02",
        nome_patologia: "Tumor Neuroendócrino (Carcinoide)",
        tipo_exame: "patologia",
        etapa1: {
            paciente: "LFS, 32 anos, professor, não tabagista.",
            historia: "Paciente relata: 'Doutor, minha tosse já dura quase um ano. No começo, achei que fosse apenas um resfriado que não ia embora, mas ela persiste. Sinto como se tivesse algo preso no meu peito, um chiado que não para, e vez ou outra vejo raias de sangue no que eu cusso. Já tomei vários xaropes e até antibióticos para pneumonia, melhora por uns dias, mas o aperto no peito continua igual'.",
            antecedentes: "Nega tabagismo, nega doenças crônicas. Praticante de atividades físicas.",
            exame_fisico: "Ausculta com sibilo localizado em hemitórax direito, diminuição do murmúrio vesicular na mesma região e esforço respiratório leve.",
            pergunta: "1. Como a cronologia e a natureza dos sintomas (chiado fixo e hemoptise) orientam o raciocínio diagnóstico para uma obstrução de via aérea central?",
            gabarito_titulo: "Obstrução Endobrônquica.",
            gabarito_justificativa: "O 'chiado fixo' (monofônico) é um sinal clássico de obstrução de via aérea central (nódulo endobrônquico). A persistência apesar de tratamentos para pneumonia e a hemoptise reforçam a necessidade de investigar lesão estrutural."
        },
        etapa2: {
            contexto: "A tomografia revela uma massa endobrônquica vascularizada, um achado típico de tumores neuroendócrinos.",
            pergunta: "2. Explique por que tumores neuroendócrinos como o Carcinoide possuem intenso realce ao contraste na TC.",
            gabarito_titulo: "Hipervascularização.",
            gabarito_justificativa: "Tumores neuroendócrinos são neoplasias altamente vascularizadas. O realce intenso ao contraste na TC reflete essa densa rede de capilares, sendo uma característica radiológica marcante que ajuda a diferenciá-los de carcinomas epiteliais comuns."
        },
        etapa3: {
            laudo_exame: "Massa polipoide arredondada, obstruindo parcialmente o brônquio principal direito, com intensa captação de contraste. Sem linfonodomegalias hilares evidentes.",
            gabarito_solicitacao: "PEDIDO DE EXAME ANATOMOPATOLÓGICO\n\nIdentificação do Paciente: Nome: L. F. S. | Sexo: Masculino | Idade: 32 anos\nProcedência: Cirurgia Torácica / Broncoscopia\n\nNatureza do Material:\nFragmentos obtidos por biópsia endobrônquica de massa em brônquio principal direito.\n\nHistória Clínica:\nPaciente jovem, não tabagista, com tosse persistente, hemoptise e sibilo monofônico fixo há 10 meses. TC mostra massa endobrônquica hipervascularizada.\n\nHipótese Diagnóstica:\nTumor endobrônquico (suspeita de Tumor Neuroendócrino/Carcinoide).\n\nSolicitação:\nSolicito avaliação histopatológica. Devido à vascularização da lesão, favor considerar o risco de sangramento na coleta e realizar estudo imuno-histoquímico para marcadores neuroendócrinos (cromogranina e sinaptofisina).\n\nData: ___/___/____ | Carimbo e Assinatura do Médico Assistente: _____________________"
        },
        etapa4: {
            macroscopia: "Fragmentos de tecido elástico, amarelados, com áreas hemorrágicas. (B1 - 3F - TI).",
            microscopia: "Proliferação de células neuroendócrinas uniformes, com cromatina em 'sal e pimenta'. Padrão arquitetural em ninhos sólidos, rico estroma vascular, sem necrose e com índice mitótico muito baixo.",
            pergunta: "4. Aponte o diagnóstico definitivo e descreva o padrão de cromatina observado.",
            gabarito_titulo: "Tumor Neuroendócrino (Carcinoide Típico).",
            gabarito_justificativa: "Diagnóstico de Carcinoide típico. O padrão de cromatina em 'sal e pimenta' é característico da organização do DNA nessas células neuroendócrinas, refletindo sua diferenciação bem estabelecida."
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
