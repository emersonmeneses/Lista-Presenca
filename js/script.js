import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const toggleSenha = document.getElementById("toggleSenha");
  const resetSenha = document.getElementById("resetSenha");

  // 👁 MOSTRAR / OCULTAR SENHA
  toggleSenha.addEventListener("click", () => {
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  });

  // 🔐 LOGIN
  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    if (!email || !senha) {
      alert("Preencha email e senha");
      return;
    }

    btnText.style.display = "none";
    spinner.style.display = "inline-block";
    loginBtn.disabled = true;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "painel.html";
    } catch (error) {
      alert("Erro: " + error.message);
    }

    btnText.style.display = "inline";
    spinner.style.display = "none";
    loginBtn.disabled = false;
  });

  // 🔁 RESET SENHA
  resetSenha.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = emailInput.value;

    if (!email) {
      alert("Digite seu email primeiro.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Email de recuperação enviado!");
    } catch (error) {
      alert("Erro: " + error.message);
    }
  });

});
