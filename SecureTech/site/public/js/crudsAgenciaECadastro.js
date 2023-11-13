function validarSessao() {
    // aguardar();

    var email = sessionStorage.email_Funcionario;
    var nome = sessionStorage.nome_Funcionario;
    var id = sessionStorage.id_funcionario_Funcionario;
    var idAgencia = sessionStorage.fkAgencia_Funcionario;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && id != null && idAgencia != null) {
         window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        
    } else {
        window.location = "../login.html";
    }
    
}

function cadastrarATM() {
    var modeloVar = modelo.value;
    var soVar = so.value;
    var processadorVar = processador.value;
    var ramVar = ram.value;
    var qtdDiscosVar = qtd_discos.value;
    var fabricanteVar = ram.value;
    var codigoAgenciaVar = Agencia.value;

    // erro_modelo.innerHTML = "";
    // erro_so.innerHTML = "";
    // erro_processador.innerHTML = "";
    // erro_ram.innerHTML = "";
    // erro_qtdDiscos.innerHTML = "";
    // erro_fabricante.innerHTML = "";
    // erro_Agencia.innerHTML = "";

    if (modeloVar == "" || soVar == "" || processadorVar == "" || ramVar == "" || qtdDiscosVar == "" || fabricanteVar == "" || codigoAgenciaVar == "") {
        alert("Preencha os campos vazios")

    } else {
          if (codigoAgenciaVar == '0121') {
            codigoAgenciaVar = 1
            
        } else if (codigoAgenciaVar == '0242') {
            codigoAgenciaVar = 2
        }
    }
    fetch("/usuarios/cadastrarATM", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            modeloServer: modeloVar,
            soServer: soVar,
            processadorServer: processadorVar,
            ramServer: ramVar,
            qtdDiscosServer: qtdDiscosVar,
            fabricanteServer: fabricanteVar,
            codigoAgenciaServer: codigoAgenciaVar
        })
    })

}


function cadastrarAgencia() {
    // Obtenha os valores dos campos
    const NAgencia = document.getElementById('NAgencia_input').value;
    const CEP = document.getElementById('cep_input').value;
    const numero = document.getElementById('numero_input').value;

    // Obtenha o idUsuario da sessionStorage
    const idUsuario = sessionStorage.id_usuario;

    // Se o idUsuario não estiver presente, faça o tratamento necessário
    if (!idUsuario) {
        console.error("ID do usuário não encontrado na sessionStorage");
        return;
    }

    // Verifique se os campos não estão vazios
    if (!NAgencia || !CEP || !numero) {
        alert("Preencha todos os campos obrigatórios");
        return; // Saia da função se algum campo estiver vazio
    }

    // Crie um objeto com os dados a serem enviados para o servidor
    const dados = {
        NAgenciaServer: NAgencia,
        CEPServer: CEP,
        numeroServer: numero,
        idUsuarioServer: idUsuario
        // Adicione outras propriedades se necessário
    };

    // Faça uma solicitação POST para o servidor
    fetch('/usuarios/cadastrarAgencia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        // Adicione o código para lidar com a resposta do servidor, se necessário
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}