
  const chatbotIcon = document.getElementById('chatbot-icon');
  const chatbotBody = document.getElementById('chatbot-body');

  chatbotIcon.addEventListener('click', () => {
    chatbotBody.style.display = chatbotBody.style.display === 'none' ? 'block' : 'none';
  });

  function goToLogin() {
    window.location = 'login.html';
  }

  function goToSolucoes() {
    window.location = 'solucao.html';
  }

  function goToSobreNos() {
    window.location = 'sobre_nos.html';
  }

  function goToFaleConosco() {
    window.location = 'faleConosco.html';
  }

  function goToFaleHome() {
    window.location = 'index.html';
  }

  var estadoAtual = 'inicio';

  function opcao1() {
    divOpcoes.innerHTML = `
        <div id="perguntaBot">🤖 Bot: Qual sua dúvida?</div>
        <div class="opcoes">
          <button onclick="opcao1_1()" id="margin" class="opt">1- a</button>
          <button onclick="opcao2_1()" class="opt">2- b</button>
          <button onclick="opcao3_1()" class="opt">3- c</button>
        </div>
        </div>
        <button id="voltarChat" onclick="voltarBot()">Voltar</button>
          `
  }

  function opcao1_1() {
    divOpcoes.innerHTML = `
              <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
              <div id="RespostaFinalBot"> RESPOSTA 1 </div>
                
                <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
                </div><br>
                <button id="voltarChat" onclick="voltarBot()">Voltar</button>
            `
  }

  function opcao2_1() {
    divOpcoes.innerHTML = `
            <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
            <div id="RespostaFinalBot"> RESPOSTA 2 </div>
            
              <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
              </div><br>
              <button id="voltarChat" onclick="voltarBot()">Voltar</button>
              `
  }

  function opcao3_1() {
    divOpcoes.innerHTML = `
            <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
            <div id="RespostaFinalBot"> RESPOSTA 3 </div>
            
              <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
              </div><br>
              <button id="voltarChat" onclick="voltarBot()">Voltar</button>
          `
  }

  function opcao2() {
    divOpcoes.innerHTML = `
        <div id="perguntaBot">🤖 Bot: Qual o problema?</div>
        <div class="opcoes">
          <button onclick="opcao1_2()" id="margin" class="opt">1- d</button>
          <button onclick="opcao2_2()" class="opt">2- f</button>
          <button onclick="opcao3_2()" class="opt">3- g</button>
        </div>
        </div>
        <button id="voltarChat" onclick="voltarBot()">Voltar</button>
          `
  }

  function opcao1_2() {
    divOpcoes.innerHTML = `
              <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
              <div id="RespostaFinalBot"> RESPOSTA 1 </div>
                
                <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
                </div><br>
                <button id="voltarChat" onclick="voltarBot()">Voltar</button>
            `
  }

  function opcao2_2() {
    divOpcoes.innerHTML = `
            <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
            <div id="RespostaFinalBot"> RESPOSTA 2 </div>
            
              <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
              </div><br>
              <button id="voltarChat" onclick="voltarBot()">Voltar</button>
              `
  }

  function opcao3_2() {
    divOpcoes.innerHTML = `
            <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
            <div id="RespostaFinalBot"> RESPOSTA 3 </div>
            
              <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
              </div><br>
              <button id="voltarChat" onclick="voltarBot()">Voltar</button>
          `
  }

  function opcao3() {
    divOpcoes.innerHTML = `
        <div id="perguntaBot">🤖 Bot: Para qual plano deseja mudar?</div>
        <div class="opcoes">
          <button onclick="opcao1_3()" id="margin" class="opt">1- h</button>
          <button onclick="opcao2_3()" class="opt">2- i</button>
          <button onclick="opcao3_3()" class="opt">3- j</button>
        </div>
        </div>
        <button id="voltarChat" onclick="voltarBot()">Voltar</button>
          `
  }

  function opcao1_3() {
    divOpcoes.innerHTML = `
              <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
              <div id="RespostaFinalBot"> RESPOSTA 1 </div>
                
                <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
                </div><br>
                <button id="voltarChat" onclick="voltarBot()">Voltar</button>
            `
  }

  function opcao2_3() {
    divOpcoes.innerHTML = `
            <div id="perguntaBot">🤖 Bot: Aqui esta a resposta para sua dúvida:</div>
            <div id="RespostaFinalBot"> RESPOSTA 2 </div>
            
              <button id="btNaoRespondida" onclick="TireDuvida()">Não foi respondida?</button>
              </div><br>
            `  
            }