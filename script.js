const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Amor ou Liberdade?",
        alternativas: [
            {
                texto: "Ser amado por todos mas não poder ser quem vc realmente é.",
                afirmacao: "Ser popular, "
            },
            {
                texto: "Ser odiado por todos mas ser livre para fazer o que quizer.",
                afirmacao: "Ser lívre, "
            }           
            
        ]
    },
    {
        enunciado: "Quem em primeiro lugar?",
        alternativas: [
            {
                texto:"Realizar os desejos das pessoas ao meu redor.",
                afirmacao:"ajudar os outros, "
            },
            {
                texto: "Realizar todos os meus desejos.",
                afirmacao:"eu em primeiro, "
            }
        ]
    },
    {
        enunciado: "Quantidade ou Qualidade?",
        alternativas: [
            {
                texto:"Viver mais.",
                afirmacao:"viver mais, "
            },
            {
                texto:"Viver melhor.",
                afirmacao:"viver ao máximo, "
            }
            
        ]
    },
    {
        enunciado: "O que vc prefere?",
        alternativas: [
            {
                texto:"Ter encontrado o amor (homem/mulher) da sua vida.",
                afirmacao:"ter contrado o amor "
            },
            {
                texto:"Ter aprendido a encontrar os meios para enrriquecer",
                afirmacao:"ficar rico "
            }
            
        ]
    },
    {
        enunciado: "Pra eles, ou pra mim?",
        alternativas: [
            {
                texto: "Me sacrificar para salvar 10 pessoas.",
                afirmacao:"e ser um herói."
            },
            {
                texto: "Sacrificar 10 pessoas para me salvar.",
                afirmacao:"e sobreviver acima de tudo."
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Vc prefere...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();