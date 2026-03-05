import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const btnLogin = document.getElementById("btnLogin");
const mensagem = document.getElementById("mensagem");
const toggleSenha = document.getElementById("toggleSenha");
const esqueciSenha = document.getElementById("esqueciSenha");


// 👁 Mostrar / Ocultar senha
toggleSenha.addEventListener("click", () => {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    toggleSenha.textContent = "🙈";
  } else {
    senhaInput.type = "password";
    toggleSenha.textContent = "👁";
  }
});


// 🔐 Login
btnLogin.addEventListener("click", async () => {

  const email = emailInput.value;
  const senha = senhaInput.value;

  if (!email || !senha) {
    mensagem.textContent = "Preencha email e senha.";
    return;
  }

  // Ativar carregamento
  btnLogin.disabled = true;
  btnLogin.textContent = "Carregando...";

  try {
    await signInWithEmailAndPassword(auth, email, senha);

    mensagem.style.color = "green";
    mensagem.textContent = "Login realizado com sucesso!";

    // Redirecionar (se quiser)
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } catch (error) {

    mensagem.style.color = "red";

    if (error.code === "auth/user-not-found") {
      mensagem.textContent = "Usuário não encontrado.";
    } else if (error.code === "auth/wrong-password") {
      mensagem.textContent = "Senha incorreta.";
    } else if (error.code === "auth/invalid-email") {
      mensagem.textContent = "Email inválido.";
    } else {
      mensagem.textContent = "Erro ao fazer login.";
    }

  } finally {
    btnLogin.disabled = false;
    btnLogin.textContent = "Acessar";
  }

});


// 🔄 Esqueci senha
esqueciSenha.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = emailInput.value;

  if (!email) {
    mensagem.style.color = "red";
    mensagem.textContent = "Digite seu email para redefinir a senha.";
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    mensagem.style.color = "green";
    mensagem.textContent = "Email de redefinição enviado!";
  } catch (error) {
    mensagem.style.color = "red";
    mensagem.textContent = "Erro ao enviar email.";
  }
});