// Exemplo de como fica o JSON agora
const casosBD = [
    {
        "id": "scc_esofago",
        "nome_patologia": "Carcinoma de Células Escamosas do Esôfago",
        "tipo_exame": "patologia",
        "etapa1": { ... },
        "etapa2": { ... },
        "etapa3": {
            "laudo_exame": "Presença de volumosa lesão exofítica no terço médio do esôfago, friável e com ulcerações. Causa grave estreitamento luminal.",
            
            // AGORA É UM ÚNICO TEXTO CONTÍNUO (Use \n para quebrar linha)
            "gabarito_solicitacao": "Identificação: MTR, 62 anos, Sexo Masculino.\nMaterial / Procedimento: Fragmentos de lesão esofágica (terço médio) / Biópsia Endoscópica.\nInformes Clínicos: Paciente idoso com longo histórico de tabagismo e alcoolismo, apresentando perda de peso e disfagia progressiva. A Endoscopia revelou lesão exofítica ulcerada e estreitamento luminal. Suspeita de Carcinoma de Células Escamosas."
        },
        "etapa4": { ... }
    }
];
