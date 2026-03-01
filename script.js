function login(){
    document.getElementById("loginTela").style.display = "none";
    document.getElementById("dashboardTela").style.display = "block";
}

function logout(){
    document.getElementById("dashboardTela").style.display = "none";
    document.getElementById("loginTela").style.display = "flex";
}

function toggleSenha(){
    let input = document.getElementById("senha");
    input.type = input.type === "password" ? "text" : "password";
}

function redefinirSenha(){
    alert("Senha padrão enviada para o e-mail cadastrado.");
}

function mostrarSecao(id){
    document.querySelectorAll('.secao').forEach(sec=>{
        sec.classList.remove('ativa');
    });
    document.getElementById(id).classList.add('ativa');
}