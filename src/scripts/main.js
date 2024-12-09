console.log("Script carregado!");

const state = {
    view: {
        botao: document.querySelector("#meuBotao"),
        nome: document.querySelector("input[name='nomeHeroi']"),
        xp: document.querySelector("input[name='xpHeroi']"),

    }
    // values: {

    // }
    // actions: {

    // }
}

function addBotaoListener() {
    state.view.botao.addEventListener("click", exibirResultado);
}

function exibirResultado() {
    const nomeHeroi = state.view.nome.value;
    const xpHeroi = state.view.xp.value; 

    if (nomeHeroi === "" || xpHeroi === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    console.log("Nome:", nomeHeroi);
    console.log("XP:", xpHeroi);
    
    
    alert(`Nome: ${nomeHeroi}\nXP: ${xpHeroi}`);
    
    // calcularClassificacao(params);
}
function init() {
    addBotaoListener();
}

init();