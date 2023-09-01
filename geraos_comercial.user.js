// ==UserScript==
// @name         GeraOS_Comercial
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://erp.turbonettelecom.com.br/dashboard_seller
// @downloadURL  https://raw.githubusercontent.com/ferreiraturbo/geraos/master/geraos.user.js
// @updateURL    https://raw.githubusercontent.com/ferreiraturbo/geraos/master/geraos.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=turbonettelecom.com.br
// @grant        none
// ==/UserScript==

(function() {
'use strict';
    // Estilos CSS para o formulário
    var styles = `
    textarea {
        color: white;
        resize: none;
        outline: none;
        width: 95%;
        min-height: 100px;
        max-height: 100px;
    }

    .form-group textarea {
        resize: none
        width: 100%;
        outline: none;
        border-color: #4b4b55;
        background-color: #4f504f;
        padding: 8px;
        border: 1px solid #4f504f;
        border-radius: 3px;
        resize: vertical;
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
    }

    .form-group textarea:focus {
        outline: none;
        border-color: #4b4b55; /* Cor da borda ao receber foco */
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;
    }

    .modal-content {
        margin: 3rem auto;
        max-width: 700px;
        background: white;
        border-radius: 1rem;
    }

    .modal-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
    }

    :root {
    --color-1: #6366f1;
    --color-1-hover: #4338ca;
    --color-2: #06b6d4;
    --color-2-hover: #0891b2;
    --text-color: #312e81;
    --status-btn-bg: #f8fafc;
    --status-btn-bg-hover: #f1f5f9;
  }

 .container {
    width: 600px;
    max-height: 450px;
    min-height: 300px;
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    margin: 0;
}

  .form-input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: .5rem;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, .1);
    padding: 1rem;
    box-sizing: border-box;
    color: var(--text-color);
    transition: ease-in-out .3s all;
    font-size:16px;
  }

  .form-input::placeholder {
    color: #cbd5e1;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--color-1);
  }

  .btn:focus-within,
  .form-input:focus-within {
    box-shadow: #f8fafc 0px 0px 0px 2px, #c7d2fe 0px 0px 0px 6px, #0000 0px 1px 2px 0px;
  }

  textarea.form-input {
    min-height: 150px;
    margin-top:10px;
    font-size:16px;
  }

  .btn {
    border: 0;
    background: var(--color-1);
    padding: 1rem;
    border-radius: 25px;
    color: white;
    cursor: pointer;
  }

  #prev {
    background-color:  var(--color-2);
  }

  .btn[disabled] {
    opacity: .5;
    pointer-events: none;
  }

  .btn:hover {
    background: var(--color-1-hover);
    transition: ease-in-out .3s all;
  }

  .btn-submit {
    background-color: #43163d;
  }

  .btn-submit:hover {
    background-color: var(--color-2-hover);
  }

  .pagination {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination .btn {
    width: 100%;
    text-align: center;
    margin: 0 6px;
  }

  .tab-status {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .tab-status span {
    appearance: none;
    background: var(--status-btn-bg);
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tab-status span.active {
    background-color: var(--color-2);
    color: white;
  }


  #atendimento > div > div.smartline > input {
     width: 15px;
     height: 15px;
  }

  #atendimento > div > div.callline > input {
     width: 15px;
     height: 15px;
  }

  #atendimento > div > div.smartline {
      margin-bottom: 6px;
  }

 #atendimento > div > div > label  {
      font-size:14px;
  }

  .tabpanel > h2 {
    margin-bottom: 15px;
  }

  .hidden {
    display: none;
  }


  #remoto > input {
     width: 15px;
     height: 15px;
     margin-bottom: 5px;
  }

  #remoto > label {
    font-size:14px;
    margin-bottom: 5px;
  }

  #cidade > div > select {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
    font-size: 18px;
    color: #60666d;
  }

  div.alarmes{
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  height: 100px;
  align-items: center;
  justify-content: baseline;
}

.form-control {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.form-control + .form-control {
  margin-top: 1em;
}

.form-control--disabled {
  color: var(--form-control-disabled);
  cursor: not-allowed;
}

input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;
}

.buttongr {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 16px;
  line-height: normal;
  margin: 7px;
  min-width: 0;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  will-change: transform;
}

.buttongr:disabled {
  pointer-events: none;
}

.buttongr:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.buttongr:active {
  box-shadow: none;
  transform: translateY(0);
}

.exitbutton {
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 20px;
}

.closeform {
  content: 'X';
  color: #000;
  font-size: 30px;
}

input[type=radio] {
    /* font-size: 20px; */
    width: 40px;
    /* height: 15px; */
    box-shadow: 0 0 0 0;
}

label {
    font-size: 11pt;
}

`;
    var barraitem;
    var button;
    var isFormOpen = true;


    function verificarOverlay() {
        return document.querySelector('.modal-overlay') !== null;
    }


    // Função para verificar se a barra está presente
    function verificarBarra() {
        var barraitem = document.querySelector("#react-portal > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-9.MuiGrid-grid-lg-10 > div > div.MuiPaper-root.MuiCard-root.MuiPaper-elevation1.MuiPaper-rounded > div > div.MuiGrid-root.jss56.MuiGrid-item")
        var buttonetiqueta = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button");

        if (barraitem) {
            barraitem.style.flexDirection = "row-reverse";
            barraitem.style.justifyContent = "flex-start";
            // A barra está presente, então podemos adicionar o botão
            adicionarBotao(barraitem);
        } else {
            // A barra ainda não está presente, então aguardamos um pouco e verificamos novamente
            setTimeout(verificarBarra, 500);
        }
    }

    // Função para adicionar o botão à barra
    function adicionarBotao(barraitem) {
        // Cria o botão
        button = document.createElement('button');
        button.innerHTML = 'GERA OS';
        // Adiciona uma classe CSS ao botão para estilização opcional
        button.classList.add('buttongr');
        // Adiciona o botão à barra horizontal
        barraitem.appendChild(button);

        var styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);

        //adicionar plugin de alerta
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js';
        script.async = true;
        document.head.appendChild(script);


        button.addEventListener('click', function() {

            if (verificarOverlay()) {
                var formexist = document.querySelector('.modal-overlay');

                if (isFormOpen) {
                    formexist.classList.add('hidden'); // Oculta o formulário
                    isFormOpen = false; // Define o estado do formulário como minimizado
                } else {
                    formexist.classList.remove('hidden'); // Exibe o formulário novamente
                    isFormOpen = true; // Define o estado do formulário como aberto
                }

            } else {
                openModal();
            }
        });

    }

    // Inicia a veificação da barra
    verificarBarra();


    // Função para abrir o modal de formulário
    function openModal() {

        // Cria o overlay do modal
        var overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        // Cria o conteúdo do modal
        var modal = document.createElement('div');
        modal.className = 'modal-content';

        const container = document.createElement("div");
        container.className = "container";

        const exitcontainer = document.createElement("div");
        exitcontainer.className = "exitbutton";

        const exit = document.createElement("a");
        exit.className = "closeform";
        exit.innerHTML = "X";
        exit.setAttribute('href', "#");
        exitcontainer.appendChild(exit);

        container.appendChild(exitcontainer);

        const tabStatus = document.createElement("div");
        tabStatus.className = "tab-status";
        container.appendChild(tabStatus);

        for (let i = 1; i <= 14; i++) {
            const span = document.createElement("span");
            span.className = "tab";
            if (i === 1) {
                span.classList.add("active");
            }
            span.textContent = i;
            tabStatus.appendChild(span);
        }

        const form = document.createElement("form");
        form.action = "#";
        container.appendChild(form);

        const tabList = document.createElement("div");
        tabList.setAttribute("role", "tab-list");
        form.appendChild(tabList);

        const plano = document.createElement("div");
        plano.setAttribute("role", "tabpanel");
        plano.id = "plano";
        plano.className = "tabpanel";
        tabList.appendChild(plano);

        const h3Plano = document.createElement("h2");
        h3Plano.textContent = "Qual plano da instalação?";
        plano.appendChild(h3Plano);

        const inputPlano = document.createElement("input");
        inputPlano.type = "text";
        inputPlano.name = "plano";
        inputPlano.className = "form-input";
        plano.appendChild(inputPlano);

        const valor = document.createElement("div");
        valor.setAttribute("role", "tabpanel");
        valor.id = "valor";
        valor.className = "tabpanel hidden";
        tabList.appendChild(valor);

        const h3Valor = document.createElement("h2");
        h3Valor.textContent = "Valor do Plano?";
        valor.appendChild(h3Valor);

        const inputValor = document.createElement("input");
        inputValor.type = "text";
        inputValor.name = "contato";
        inputValor.className = "form-input";
        valor.appendChild(inputValor);

        const formapagamento = document.createElement("div");
        formapagamento.setAttribute("role", "tabpanel");
        formapagamento.id = "formapagamento";
        formapagamento.className = "tabpanel hidden";
        tabList.appendChild(formapagamento);

        const h3formapagamento = document.createElement("h2");
        h3formapagamento.textContent = "Qual a forma de pagamento?";
        formapagamento.appendChild(h3formapagamento);

        const inputformapagamento = document.createElement("input");
        inputformapagamento.type = "text";
        inputformapagamento.name = "formapagamento";
        inputformapagamento.className = "form-input";
        formapagamento.appendChild(inputformapagamento);

        const tipocontrato= document.createElement("div");
        tipocontrato.setAttribute("role", "tabpanel");
        tipocontrato.id= "plano";
        tipocontrato.className= "tabpanel hidden";
        tabList.appendChild(tipocontrato);

        const h3tipocontrato= document.createElement("h2");
        h3tipocontrato.textContent= "Qual tipo de contrato?";
        tipocontrato.appendChild(h3tipocontrato);

        const separadorcontrato= document.createElement("div");
        separadorcontrato.className= "separador";

        const linhapre= document.createElement("div")
        linhapre.className = "preline"
        const inputPre= document.createElement("input");
        inputPre.type= "radio";
        inputPre.value="PRÉ"
        inputPre.name="tipodecontrato"
        inputPre.className="form-input"
        linhapre.appendChild(inputPre);

        const labelPre=document.createElement('label')
        labelPre.htmlFor="PRÉ"
        labelPre.textContent="PRÉ PAGO"
        linhapre.appendChild(labelPre)
        separadorcontrato.appendChild(linhapre)

        const linhapos= document.createElement("div")
        linhapos.className = "posline"
        const inputPos=document.createElement('input')
        inputPos.type="radio"
        inputPos.value="PÓS PAGO"
        inputPos.name="tipodecontrato"
        inputPos.className="form-input"
        linhapos.appendChild(inputPos)

        const labelPos=document.createElement('label')
        labelPos.htmlFor="POS"
        labelPos.textContent="PÓS PAGO"
        linhapos.appendChild(labelPos)
        separadorcontrato.appendChild(linhapos)
        tipocontrato.appendChild(separadorcontrato)
        tipocontrato.innerHTML+="<br>"

        const carne = document.createElement("div");
        carne.setAttribute("role", "tabpanel");
        carne.id= "carne";
        carne.className= "tabpanel hidden";
        tabList.appendChild(carne);

        const h3carne= document.createElement("h2");
        h3carne.textContent= "Qual tipo do carnê?";
        carne.appendChild(h3carne);

        const separadorcarne= document.createElement("div");
        separadorcarne.className= "separadorcarne";

        const linhafisico= document.createElement("div")
        linhafisico.className = "fisicoline"
        const inputSmart= document.createElement("input");
        inputSmart.type= "radio";
        inputSmart.value="FISICO"
        inputSmart.name="carne"
        inputSmart.className="form-input"
        linhafisico.appendChild(inputSmart);

        const labelFisico=document.createElement('label')
        labelFisico.htmlFor="FISICO"
        labelFisico.textContent="FISICO"
        linhafisico.appendChild(labelFisico)
        separadorcarne.appendChild(linhafisico)

        const linhadigital= document.createElement("div")
        linhadigital.className = "digitalline"
        const inputDigital=document.createElement('input')
        inputDigital.type="radio"
        inputDigital.value="DIGITAL"
        inputDigital.name="carne"
        inputDigital.className="form-input"
        linhadigital.appendChild(inputDigital)

        const labelDigital=document.createElement('label')
        labelDigital.htmlFor="digital"
        labelDigital.textContent="DIGITAL"
        linhadigital.appendChild(labelDigital)
        separadorcarne.appendChild(linhadigital)
        carne.appendChild(separadorcarne)
        carne.innerHTML+="<br>"

        const createRadiovencimento = (value, text) => {
                const container = document.createElement("div");
                container.className = value.toLowerCase();

                const input = document.createElement("input");
                input.type = "radio";
                input.value = value;
                input.name = "vencimento";
                input.className = "form-input";

                const label = document.createElement("label");
                label.htmlFor = value.toUpperCase();
                label.textContent = text.toUpperCase();

                container.appendChild(input);
                container.appendChild(label);

                return container;
        };

        const vencimento = document.createElement("div");
        vencimento.setAttribute("role", "tabpanel");
        vencimento.id = "vencimento";
        vencimento.className = "tabpanel hidden";
        tabList.appendChild(vencimento);

        const h3vencimento = document.createElement("h2");
        h3vencimento.textContent = "Qual a data de vencimento?";
        vencimento.appendChild(h3vencimento);

        const opcoesvencimento = [
            { value: "5", text: "5" },
            { value: "10", text: "10" },
            { value: "15", text: "15" },
            { value: "20", text: "20" },
            { value: "25", text: "25" },
            { value: "30", text: "30" }
        ];

        const separadorvencimento = document.createElement("div");
        separadorvencimento.className = "separador";

        opcoesvencimento.forEach(opcao => {
            const radioInput = createRadiovencimento(opcao.value, opcao.text);
            separadorvencimento.appendChild(radioInput);
        });

        vencimento.appendChild(separadorvencimento);
        vencimento.innerHTML += "<br>";

        const dataInput = document.createElement('div');
        dataInput.setAttribute('role', 'tabpanel');
        dataInput.id = 'dataInput';
        dataInput.className = 'tabpanel hidden';
        tabList.appendChild(dataInput);

        const h3Data = document.createElement('h2');
        h3Data.textContent = 'Qual a data do agendamento:';
        dataInput.appendChild(h3Data);

        const calendarInput = document.createElement('input');
        calendarInput.type = 'date'; // Define o tipo como date para um input de calendário
        calendarInput.name = 'dataSelecionada';
        calendarInput.className = 'form-input';
        dataInput.appendChild(calendarInput);

        const tipoinstalacao= document.createElement("div");
        tipoinstalacao.setAttribute("role", "tabpanel");
        tipoinstalacao.id= "plano";
        tipoinstalacao.className= "tabpanel hidden";
        tabList.appendChild(tipoinstalacao);

        const h3tipoinstalacao= document.createElement("h2");
        h3tipoinstalacao.textContent= "Qual tipo de instalação?";
        tipoinstalacao.appendChild(h3tipoinstalacao);

        const separadorinstalacao= document.createElement("div");
        separadorinstalacao.className= "separador";

        const linhasimples= document.createElement("div")
        linhasimples.className = "presimples"
        const inputSimples= document.createElement("input");
        inputSimples.type= "radio";
        inputSimples.value="SIMPLES"
        inputSimples.name="tipodeinstalacao"
        inputSimples.className="form-input"
        linhasimples.appendChild(inputSimples);

        const labelSimples=document.createElement('label')
        labelSimples.htmlFor="SIMPLES"
        labelSimples.textContent="SIMPLES"
        linhasimples.appendChild(labelSimples)
        separadorinstalacao.appendChild(linhasimples)

        const linhacompleta= document.createElement("div")
        linhacompleta.className = "completa"
        const inputCompleta=document.createElement('input')
        inputCompleta.type="radio"
        inputCompleta.value="COMPLETA"
        inputCompleta.name="tipodeinstalacao"
        inputCompleta.className="form-input"
        linhacompleta.appendChild(inputCompleta)

        const labelCompleta=document.createElement('label')
        labelCompleta.htmlFor="COMPLETA"
        labelCompleta.textContent="COMPLETA"
        linhacompleta.appendChild(labelCompleta)
        separadorinstalacao.appendChild(linhacompleta)
        tipoinstalacao.appendChild(separadorinstalacao)
        tipoinstalacao.innerHTML+="<br>"

        const tipotelha= document.createElement("div");
        tipotelha.setAttribute("role", "tabpanel");
        tipotelha.id= "plano";
        tipotelha.className= "tabpanel hidden";
        tabList.appendChild(tipotelha);

        const h3tipotelha= document.createElement("h2");
        h3tipotelha.textContent= "Qual tipo de telhado?";
        tipotelha.appendChild(h3tipotelha);

        const separadortelhado= document.createElement("div");
        separadortelhado.className= "separador";

        const linhaeternit= document.createElement("div")
        linhaeternit.className = "preeternit"
        const inputEternit= document.createElement("input");
        inputEternit.type= "radio";
        inputEternit.value="ETERNIT"
        inputEternit.name="tipotelhado"
        inputEternit.className="form-input"
        linhaeternit.appendChild(inputEternit);

        const labelEternit=document.createElement('label')
        labelEternit.htmlFor="ETERNIT"
        labelEternit.textContent="ETERNIT"
        linhaeternit.appendChild(labelEternit)
        separadortelhado.appendChild(linhaeternit)

        const linhazinco= document.createElement("div")
        linhazinco.className = "zinco"
        const inputZinco=document.createElement('input')
        inputZinco.type="radio"
        inputZinco.value="zinco"
        inputZinco.name="tipotelhado"
        inputZinco.className="form-input"
        linhazinco.appendChild(inputZinco)

        const labelZinco=document.createElement('label')
        labelZinco.htmlFor="ZINCO"
        labelZinco.textContent="ZINCO"
        linhazinco.appendChild(labelZinco)
        separadortelhado.appendChild(linhazinco)

        const linhapadrao= document.createElement("div")
        linhapadrao.className = "padrao"
        const inputPadrao=document.createElement('input')
        inputPadrao.type="radio"
        inputPadrao.value="padrao"
        inputPadrao.name="tipotelhado"
        inputPadrao.className="form-input"
        linhapadrao.appendChild(inputPadrao)

        const labelPadrao=document.createElement('label')
        labelPadrao.htmlFor="PADRAO"
        labelPadrao.textContent="PADRAO"
        linhapadrao.appendChild(labelPadrao)
        separadortelhado.appendChild(linhapadrao)
        tipotelha.appendChild(separadortelhado)
        tipotelha.innerHTML+="<br>"

        const createRadioTipoCasa = (value, text) => {
    const container = document.createElement("div");
    container.className = value.toLowerCase();

    const input = document.createElement("input");
    input.type = "radio";
    input.value = value;
    input.name = "tipocasa";
    input.className = "form-input";

    const label = document.createElement("label");
    label.htmlFor = value.toUpperCase();
    label.textContent = text.toUpperCase();

    container.appendChild(input);
    container.appendChild(label);

    return container;
};

        const tipocasa = document.createElement("div");
        tipocasa.setAttribute("role", "tabpanel");
        tipocasa.id = "plano";
        tipocasa.className = "tabpanel hidden";
        tabList.appendChild(tipocasa);

        const h3tipocasa = document.createElement("h2");
        h3tipocasa.textContent = "Qual tipo de casa?";
        tipocasa.appendChild(h3tipocasa);

        const tiposCasa = [
            { value: "CAIXOTE", text: "Caixote" },
            { value: "PADRÃO", text: "Padrão" },
            { value: "SOBRADO", text: "Sobrado" },
            { value: "APARTAMENTO", text: "Apartamento" },
            { value: "MANSÃO", text: "Mansão" }
        ];

        const separadortipocasa = document.createElement("div");
        separadortipocasa.className = "separador";

        tiposCasa.forEach(tipo => {
            const radioInput = createRadioTipoCasa(tipo.value, tipo.text);
            separadortipocasa.appendChild(radioInput);
        });

        tipocasa.appendChild(separadortipocasa);
        tipocasa.innerHTML += "<br>";


        const createRadioSubterraneo = (value, text) => {
            const container = document.createElement("div");
            container.className = value.toLowerCase();

            const input = document.createElement("input");
            input.type = "radio";
            input.value = value;
            input.name = "subterraneo";
            input.className = "form-input";

            const label = document.createElement("label");
            label.htmlFor = value.toUpperCase();
            label.textContent = text.toUpperCase();

            container.appendChild(input);
            container.appendChild(label);

            return container;
        };

        const subterraneo = document.createElement("div");
        subterraneo.setAttribute("role", "tabpanel");
        subterraneo.id = "plano";
        subterraneo.className = "tabpanel hidden";
        tabList.appendChild(subterraneo);

        const h3subterraneo = document.createElement("h2");
        h3subterraneo.textContent = "Subterrâneo?";
        subterraneo.appendChild(h3subterraneo);

        const opcoesSubterraneo = [
            { value: "SIM", text: "Sim" },
            { value: "NÃO", text: "Não" }
        ];

        const separadorsubterraneo = document.createElement("div");
        separadorsubterraneo.className = "separador";

        opcoesSubterraneo.forEach(opcao => {
            const radioInput = createRadioSubterraneo(opcao.value, opcao.text);
            separadorsubterraneo.appendChild(radioInput);
        });

        subterraneo.appendChild(separadorsubterraneo);
        subterraneo.innerHTML += "<br>";


        const equipamento = document.createElement('div');
        equipamento.setAttribute('role', 'tabpanel');
        equipamento.id = 'equipamento';
        equipamento.className = 'tabpanel hidden';
        tabList.appendChild(equipamento);

        const h3Equipamento = document.createElement('h2');
        h3Equipamento.textContent = 'Quantos e quais equipamentos vão ser cabeados?';
        equipamento.appendChild(h3Equipamento);

        const textareaEquipamento = document.createElement('textarea');
        textareaEquipamento.name = 'equipamento';
        textareaEquipamento.className = 'form-input';
        equipamento.appendChild(textareaEquipamento);

        const contato = document.createElement("div");
        contato.setAttribute("role", "tabpanel");
        contato.id = "contato";
        contato.className = "tabpanel hidden";
        tabList.appendChild(contato);

        const h3Contato = document.createElement("h2");
        h3Contato.textContent = "Contato do solicitante";
        contato.appendChild(h3Contato);

        const inputContato = document.createElement("input");
        inputContato.type = "text";
        inputContato.name = "contato";
        inputContato.className = "form-input";
        inputContato.placeholder = "( )_________"
        contato.appendChild(inputContato);

        const observacoes = document.createElement('div');
        observacoes.setAttribute('role', 'tabpanel');
        observacoes.id = 'observacoes';
        observacoes.className = 'tabpanel hidden';
        tabList.appendChild(observacoes);

        const h3Observacoes = document.createElement('h2');
        h3Observacoes.textContent = 'Tem alguma observação?';
        observacoes.appendChild(h3Observacoes);

        const textareaObservacoes = document.createElement('textarea');
        textareaObservacoes.name = 'observacoes';
        textareaObservacoes.className = 'form-input';
        observacoes.appendChild(textareaObservacoes);


        const pagination = document.createElement("div");
        pagination.className = "pagination";
        form.appendChild(pagination);

        const prev = document.createElement("a");
        prev.className = "btn hidden";
        prev.id = "prev";
        prev.textContent = "Voltar";
        pagination.appendChild(prev);

        const next = document.createElement("a");
        next.className = "btn";
        next.id = "next";
        next.textContent = "Continuar";
        pagination.appendChild(next);

        const submit = document.createElement("button");
        submit.className = "btn btn-submit hidden";
        submit.id = "submit";
        submit.textContent = "Gerar OS";
        pagination.appendChild(submit);

        modal.appendChild(container);
        // Adiciona o modal à overlay
        overlay.appendChild(modal);
        // Adiciona o overlay ao corpo da página
        document.body.appendChild(overlay);

        const previousButton = document.querySelector('#prev')
        const nextButton = document.querySelector('#next')
        const submitButton = document.querySelector('#submit')
        const tabTargets = document.querySelectorAll('.tab')
        const tabPanels = document.querySelectorAll('.tabpanel')
        const isEmpty = (str) => !str.trim().length
        let currentStep = 0


        validateEntry()


        nextButton.addEventListener('click', (event) => {
            event.preventDefault()


            tabPanels[currentStep].classList.add('hidden')
            tabTargets[currentStep].classList.remove('active')

            tabPanels[currentStep + 1].classList.remove('hidden')
            tabTargets[currentStep + 1].classList.add('active')
            currentStep += 1

            validateEntry()
            updateStatusDisplay()
        })


        previousButton.addEventListener('click', (event) => {
            event.preventDefault()


            tabPanels[currentStep].classList.add('hidden')
            tabTargets[currentStep].classList.remove('active')


            tabPanels[currentStep - 1].classList.remove('hidden')
            tabTargets[currentStep - 1].classList.add('active')
            currentStep -= 1

            nextButton.removeAttribute('disabled')
            updateStatusDisplay()
        })

        function toggleFormulario() {
            if (isFormOpen) {
                overlay.classList.add('hidden'); // Oculta o formulário
                isFormOpen = false; // Define o estado do formulário como minimizado
            } else {
                overlay.classList.remove('hidden'); // Exibe o formulário novamente
                isFormOpen = true; // Define o estado do formulário como aberto
            }
        }

        function updateStatusDisplay() {

            if (currentStep === tabTargets.length - 1) {
                nextButton.classList.add('hidden')
                previousButton.classList.remove('hidden')
                submitButton.classList.remove('hidden')
                validateEntry()


            } else if (currentStep == 0) {
                nextButton.classList.remove('hidden')
                previousButton.classList.add('hidden')
                submitButton.classList.add('hidden')

            } else {
                nextButton.classList.remove('hidden')
                previousButton.classList.remove('hidden')
                submitButton.classList.add('hidden')
            }
        }

        function validateEntry() {

            let input = tabPanels[currentStep].querySelector('.form-input')
            let check = document.querySelectorAll('input[name="checkbox"]:checked');

            nextButton.setAttribute('disabled', true)
            submitButton.setAttribute('disabled', true)

            setButtonPermissions(input)

        }
        //regra quebrada por enquanto
        function setButtonPermissions(input) {

                nextButton.removeAttribute('disabled')
                submitButton.removeAttribute('disabled')
        }


        // Evento de clique no botão de envio
        submit.addEventListener('click', function(e) {
           e.preventDefault();


            const plano = document.querySelector("#plano > input").value || "";
            const valor = document.querySelector("#valor > input").value || "";
            const formaPagamento = document.querySelector("#formapagamento > input").value || "";
            const tipoContrato = document.querySelector('input[name="tipodecontrato"]:checked').value || "";
            const carne = document.querySelector('input[name="carne"]:checked').value || "";
            const vencimento = document.querySelector('input[name="vencimento"]:checked').value || "";
            const dataInput = document.querySelector('#dataInput > input').value;
            const dia = dataInput ? dataInput.split('-').reverse().join('/') : "";
            const tipoInstalacao = document.querySelector('input[name="tipodeinstalacao"]:checked').value || "";
            const tipoTelhado = document.querySelector('input[name="tipotelhado"]:checked').value || "";
            const tipoCasa = document.querySelector('input[name="tipocasa"]:checked').value || "";
            const subterraneo = document.querySelector('input[name="subterraneo"]:checked').value || "";
            const quantidadeEquipamentos = document.querySelector('#equipamento > textarea').value || "";
            const contato = document.querySelector('#contato > input').value || "";
            const observacoes = document.querySelector('#observacoes > textarea').value || "";



            const estruturageraos = `
PLANO:
${plano}

VALOR:
${valor}

FORMA DE PAGAMENTO:
${formaPagamento}

TIPO DE CONTRATO:
${tipoContrato}

CARNÊ:
${carne}

VENCIMENTO:
${vencimento}

DATA DE AGENDAMENTO:
${dia}

TIPO DE INSTALAÇÃO:
${tipoInstalacao}

TIPO DO TELHADO:
${tipoTelhado}

TIPO DE CASA:
${tipoCasa}

SUBTERRANEO:
${subterraneo}

QUANTIDADE DE EQUIPAMENTOS A CABEAR:
${quantidadeEquipamentos}

TELEFONE CONTATO:
${contato}

OBSERVAÇÕES:
${observacoes}
`;

           // Cria um elemento temporário para armazenar o texto formatado
            const tempTextArea = document.createElement("textarea");
            tempTextArea.value = estruturageraos;

            // Anexa o elemento temporário ao corpo do documento
            document.body.appendChild(tempTextArea);

            // Seleciona o texto dentro do elemento temporário
            tempTextArea.select();

            // Copia o texto para a área de transferência
            document.execCommand("copy");

            // Remove o elemento temporário
            document.body.removeChild(tempTextArea);

            document.body.removeChild(overlay);

            swal("O.S COPIADA", "A order de serviço foi copiada com sucesso!", "success");
        });

        var exitb = document.querySelector("body > div.modal-overlay > div > div > div.exitbutton > a");
        exitb.addEventListener('click', function(e) {
            e.preventDefault();

             toggleFormulario()

        });

        isFormOpen = true;
}


})();