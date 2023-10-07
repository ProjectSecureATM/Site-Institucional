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
    var qtdDiscosVar = qtdDiscos.value;
    var fabricanteVar = ram.value;
    var codigoAgenciaVar = Agencia.value;

    erro_modelo.innerHTML = "";
    erro_so.innerHTML = "";
    erro_processador.innerHTML = "";
    erro_ram.innerHTML = "";
    erro_qtdDiscos.innerHTML = "";
    erro_fabricante.innerHTML = "";
    erro_Agencia.innerHTML = "";

    if (modeloVar == "" || soVar == "" || processadorVar == "" || ramVar == "" || qtdDiscosVar == "" || fabricanteVar == "" || codigoAgencuaVar == "") {
        alert("Preencha os campos vazios")

    } else {
          if (codigoAgenciaVar == '0121') {
            codigoVar = 1
            
        } else if (codigoAgenciaVar == '0242') {
            codigoVar = 2
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
            qtdDiscosaServer: qtdDiscosVar,
            fabricanteServer: fabricanteVar,
            codigoAgenciaServer: codigoAgenciaVar
        })
    })

}


function cadastrarAgencia(){
    var NAgenciaVar = NAgencia.value;
    var qtdATMVar = QtdATM.value;
    var codigEmpVar = Empresa.value;

    erro_NAgencia.innerHTML = "";
    erro_qtdATM.innerHTML = "";
    erro_Empresa.innerHTML = "";

    if ( NAgenciaVar == "" || qtdATMVar == "" ||  codigEmpVar == "") {
        alert("Preencha os campos vazios")

    } else {
          if (codigoEmpVar == '0101') {
            codigoVar = 1
            
        } else if (codigoEmpVar == '0202') {
            codigoVar = 2
        }
    }
    fetch("/usuarios/cadastrarAgencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            NAgenciaServer: NAgenciaVar,
            qtdATMServer: qtdATMVar,
            codigEmpServer: codigEmpVar
        })
    })

}