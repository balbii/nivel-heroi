console.log("Script carregado!");

const state = {
    view: {
        botao: document.querySelector("#meuBotao"),
        nome: document.querySelector("input[name='nomeHeroi']"),
        xp: document.querySelector("input[name='xpHeroi']"),

    },
    values: {
        nivel: "",
    }
    // actions: {

    // }
}

function calcularClassificacao(){
    const nomeHeroi = state.view.nome.value;
    const xpHeroi = parseInt(state.view.xp.value); 

    console.log(typeof xpHeroi);

    if (nomeHeroi === "" || xpHeroi === null) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if(xpHeroi < 1001) {
        state.values.nivel = "Ferro";
    } else if (xpHeroi < 2001) {
        state.values.nivel = "Bronze";
    } else if (xpHeroi < 5001) {
        state.values.nivel = "Prata";
    } else if (xpHeroi < 7001) {
        state.values.nivel = "Ouro";
    } else if (xpHeroi < 8001) {
        state.values.nivel = "Platina";
    } else if (xpHeroi < 9001) {
        state.values.nivel = "Ascendente";
    } else if (xpHeroi < 10001) {
        state.values.nivel = "Imortal";
    } else if (xpHeroi > 10000) {
        state.values.nivel = "Radiante";
    }

}

function addBotaoListener() {
    state.view.botao.addEventListener("click", exibirResultado);
}

function exibirResultado() {
    calcularClassificacao();

    const nivel = state.values.nivel;
    const nomeHeroi = state.view.nome.value;
    alert(`O herói ${nomeHeroi} está no nível ${nivel}`);
    
}
function init() {
    addBotaoListener();
}

init();