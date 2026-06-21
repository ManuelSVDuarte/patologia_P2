// patologias.js
const bancoDeDadosPatologias = [
    {
        patologia: "Adenocarcinoma Pulmonar (Padrão Acinar)",
        achadosHistologicos: "Formações glandulares com lúmen evidente; pode haver desmoplasia (reação fibrosa)",
        localizacao: "Periferia do pulmão, próxima à pleura"
    },
    {
        patologia: "Adenocarcinoma Pulmonar (Padrão Sólido)",
        achadosHistologicos: "Células neoplásicas distribuídas de maneira uniforme e compacta; pouca ou nenhuma formação glandular evidente",
        localizacao: "Periferia do pulmão, próxima à pleura"
    },
    {
        patologia: "Adenocarcinoma Pulmonar (Padrão Mucinoso)",
        achadosHistologicos: "Produção de muco pelas células tumorais; acúmulo de muco intra e extracelular",
        localizacao: "Periferia do pulmão, próxima à pleura"
    },
    {
        patologia: "Adenocarcinoma Pulmonar (Padrão Papilífero)",
        achadosHistologicos: "Projeções celulares malignas para o interior do lúmen glandular (papilas)",
        localizacao: "Periferia do pulmão, próxima à pleura"
    },
    {
        patologia: "Carcinoma de Células Escamosas Pulmonar",
        achadosHistologicos: "Proliferação de células escamosas atípicas, pleomorfismo celular, núcleos hipercromáticos, invasão de estruturas adjacentes e pérolas córneas",
        localizacao: "Central, próxima ao hilo pulmonar"
    },
    {
        patologia: "Tumor Carcinóide Pulmonar",
        achadosHistologicos: "Ninhos, trabéculas, estruturas alongadas ou rosetas; padrão de cromatina em 'sal e pimenta', pouco pleomorfismo, baixa atividade mitótica, ausência ou pouca necrose. Hormônios: secreta principalmente serotonina",
        localizacao: "Central, nos brônquios"
    },
    {
        patologia: "Pneumonia Bacteriana",
        achadosHistologicos: "Exsudato neutrofílico intra-alveolar; consolidação pulmonar; alvéolos preenchidos por pus",
        localizacao: "Parênquima pulmonar (alvéolos)"
    },
    {
        patologia: "Pneumonia Viral",
        achadosHistologicos: "Predomínio de infiltrado intersticial; dano alveolar difuso; membranas hialinas em casos graves",
        localizacao: "Parênquima pulmonar (interstício)"
    },
    {
        patologia: "Pneumonia Fúngica",
        achadosHistologicos: "Granulomas ou hifas/esporos visíveis em colorações especiais (PAS)",
        localizacao: "Parênquima pulmonar"
    },
    {
        patologia: "Tuberculose Pulmonar",
        achadosHistologicos: "Granuloma com necrose caseosa, células gigantes de Langhans e infiltrado linfoplasmocitário",
        localizacao: "Ápice pulmonar"
    },
    {
        patologia: "Doença Pulmonar Obstrutiva Crônica (DPOC)",
        achadosHistologicos: "Bronquite: hiperplasia das glândulas mucosas e hipersecreção de muco. Enfisema: destruição dos septos alveolares com perda da elasticidade pulmonar",
        localizacao: "Brônquios (bronquite) e alvéolos/septos (enfisema)"
    },
    {
        patologia: "Asma",
        achadosHistologicos: "Espessamento da membrana basal, hiperplasia do músculo liso bronquiolar, infiltrado eosinofílico e aumento de células produtoras de mucina",
        localizacao: "Brônquios/vias aéreas"
    },
    {
        patologia: "Carcinoma de Células Escamosas do Esôfago",
        achadosHistologicos: "Células escamosas atípicas, mitoses atípicas, invasão tecidual, queratinização anormal e angiogênese",
        localizacao: "Esôfago"
    },
    {
        patologia: "Esofagite por Cândida",
        achadosHistologicos: "Infiltrado inflamatório agudo (neutrófilos), hifas e leveduras na superfície do epitélio, ulceração epitelial",
        localizacao: "Esôfago"
    },
    {
        patologia: "Esofagite Eosinofílica",
        achadosHistologicos: "Aumento acima de 15 eosinófilos por campo, infiltrado eosinofílico, hiperplasia basal e espongiose epitelial",
        localizacao: "Esôfago"
    },
    {
        patologia: "Doença do Refluxo Gastroesofágico (DRGE)",
        achadosHistologicos: "Hiperplasia da camada basal, alongamento das papilas, infiltrado inflamatório",
        localizacao: "Esôfago"
    },
    {
        patologia: "Esôfago de Barrett",
        achadosHistologicos: "Presença de células caliciformes (metaplasia intestinal)",
        localizacao: "Esôfago"
    },
    {
        patologia: "Adenocarcinoma Gástrico",
        achadosHistologicos: "Glândulas atípicas, invasão tecidual e células em anel de sinete",
        localizacao: "Estômago (frequentemente antro)"
    },
    {
        patologia: "Gastrite por H. pylori",
        achadosHistologicos: "Infiltrado linfoplasmocitário, presença de neutrófilos, metaplasia intestinal e bacilos curvos/espiralados sobre o epitélio",
        localizacao: "Estômago"
    },
    {
        patologia: "Úlcera Péptica",
        achadosHistologicos: "Necrose fibrinóide, infiltrado leucocitário e tecido fibrinoleucocitário",
        localizacao: "Estômago"
    },
    {
        patologia: "Tumor Neuroendócrino (TGI)",
        achadosHistologicos: "Grupamentos celulares em ninhos; células uniformes com núcleos redondos a ovais; cromatina em 'sal e pimenta'; baixa atividade mitótica. Hormônios: produz gastrina, secretina e motilina",
        localizacao: "Intestino delgado"
    },
    {
        patologia: "Doença Celíaca",
        achadosHistologicos: "Atrofia das vilosidades intestinais; linfocitose intraepitelial; hiperplasia das criptas; infiltrado inflamatório crônico na lâmina própria",
        localizacao: "Intestino delgado (duodeno)"
    },
    {
        patologia: "Adenocarcinoma Colorretal",
        achadosHistologicos: "Glândulas atípicas infiltrando a submucosa e camadas profundas, desmoplasia do estroma, aumento da atividade mitótica, produção de mucina",
        localizacao: "Cólon e reto"
    },
    {
        patologia: "Doença Inflamatória Intestinal",
        achadosHistologicos: "Inflamação crônica em atividade, ulcerações da mucosa, distorção da arquitetura, redução/deformação das criptas, diminuição de células caliciformes e abscessos de criptas",
        localizacao: "Trato gastrointestinal"
    },
    {
        patologia: "Doença Isquêmica Intestinal",
        achadosHistologicos: "Necrose de coagulação da parede intestinal, perda da mucosa, hemorragia, edema e exsudato inflamatório fibrinoleucocitário",
        localizacao: "Intestino"
    },
    {
        patologia: "Doença Diverticular",
        achadosHistologicos: "Herniação da mucosa e submucosa através da camada muscular; diverticulite: criptite, abscessos, ulcerações, fístulas e infiltrado inflamatório",
        localizacao: "Cólon (especialmente sigmoide)"
    },
    {
        patologia: "Carcinoma de Células Escamosas do Colo do Útero",
        achadosHistologicos: "Displasia epitelial, proliferação de células escamosas atípicas, atipias nucleares e aumento de mitoses",
        localizacao: "Colo do útero (zona de transição)"
    },
    {
        patologia: "Leiomioma Uterino",
        achadosHistologicos: "Proliferação acentuada de células musculares lisas (fusiformes), fibrose, degeneração hialina",
        localizacao: "Útero"
    },
    {
        patologia: "Teratoma de Ovário",
        achadosHistologicos: "Tecidos de múltiplas linhagens (ectodérmica, mesodérmica e endodérmica)",
        localizacao: "Ovário"
    },
    {
        patologia: "Carcinoma Invasivo da Mama",
        achadosHistologicos: "Infiltração dos ductos por células neoplásicas em ninhos e cordões, pleomorfismo e alta atividade mitótica",
        localizacao: "Mama"
    },
    {
        patologia: "Hiperplasia Prostática Benigna (HPB)",
        achadosHistologicos: "Proliferação nodular de estroma e epitélio, glândulas dilatadas ou atrofia glandular; dupla camada de epitélio glandular preservada",
        localizacao: "Próstata (zona de transição)"
    },
    {
        patologia: "Adenocarcinoma da Próstata",
        achadosHistologicos: "Glândulas pequenas e agrupadas (padrão infiltrativo), perda da camada basal (revestidas por uma única camada), atipia nuclear, nucléolos proeminentes, invasão perineural",
        localizacao: "Próstata (zona periférica)"
    },
    {
        patologia: "Carcinoma de Células Escamosas do Pênis",
        achadosHistologicos: "Proliferação de células escamosas atípicas, formação de queratina condensada (pérola córnea), invasão do estroma, ninhos de células neoplásicas",
        localizacao: "Pênis"
    },
    {
        patologia: "Seminoma",
        achadosHistologicos: "Células grandes e uniformes com citoplasma claro, estratificação em ninhos, estroma com infiltrado linfocítico",
        localizacao: "Testículo"
    }
];
