const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma viagem de moto pela estrada e percebe que o tempo está mudando rapidamente. Qual a sua decisão?",
        alternativas: [
            {
                texto: "Continuar a viagem e enfrentar a tempestade.",
                afirmacao: "Você decide seguir em frente, enfrentando a tempestade com coragem. "
            },
            {
                texto: "Procurar um abrigo seguro até a tempestade passar.",
                afirmacao: "Você encontra um abrigo seguro e espera a tempestade passar. "
            }
        ]
    },
    {
        enunciado: "Durante a viagem, sua moto começa a fazer um barulho estranho. O que você faz?",
        alternativas: [
            {
                texto: "Ignorar o barulho e continuar a viagem.",
                afirmacao: "Você ignora o barulho e continua a viagem, torcendo para que não seja nada grave. "
            },
            {
                texto: "Parar e verificar o problema.",
                afirmacao: "Você para a moto e descobre que é um problema simples que pode ser resolvido rapidamente. "
            }
        ]
    },
    {
        enunciado: "Você encontra um grupo de motociclistas que convidam você para se juntar a eles. Qual é a sua resposta?",
        alternativas: [
            {
                texto: "Aceitar o convite e viajar em grupo.",
                afirmacao: "Você decide viajar com o grupo e faz novos amigos na estrada. "
            },
            {
                texto: "Recusar o convite e continuar sozinho.",
                afirmacao: "Você prefere continuar sozinho, aproveitando a paz e a liberdade da viagem solo. "
            }
        ]
    },
    {
        enunciado: "Ao anoitecer, você precisa decidir onde passar a noite. Qual é a sua escolha?",
        alternativas: [
            {
                texto: "Montar acampamento em um local isolado.",
                afirmacao: "Você monta acampamento em um local isolado e aprecia a tranquilidade da noite. "
            },
            {
                texto: "Procurar uma pousada na cidade mais próxima.",
                afirmacao: "Você encontra uma pousada aconchegante e passa a noite confortavelmente. "
            }
        ]
    },
    {
        enunciado: "No último dia da viagem, você encontra um desvio na estrada. O que você faz?",
        alternativas: [
            {
                texto: "Seguir pelo caminho desconhecido e explorar novas áreas.",
                afirmacao: "Você decide explorar o desvio e descobre paisagens incríveis e lugares novos. "
            },
            {
                texto: "Manter-se na rota planejada.",
                afirmacao: "Você decide seguir o plano original e chega ao seu destino conforme o planejado. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da viagem!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
