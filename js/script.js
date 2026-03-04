import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const btnLogin = document.getElementById("btnLogin");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const linkEsqueci = document.getElementById("esqueciSenha");
  const text = btnLogin.querySelector(".btn-text");
  const spinner = btnLogin.querySelector(".spinner");

  // LOGIN
  btnLogin.addEventListener("click", async () => {

    const email = emailInput.value;
    const senha = senhaInput.value;

    if (!email || !senha) {
      alert("Preencha email e senha.");
      return;
    }

    // Mostra spinner
    text.style.display = "none";
    spinner.style.display = "block";
    btnLogin.disabled = true;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "painel.html";
    } catch (error) {

      alert("Erro: " + error.message);

      // Volta botão ao normal
      text.style.display = "inline";
      spinner.style.display = "none";
      btnLogin.disabled = false;
    }
  });

  // ESQUECI SENHA
  linkEsqueci.addEventListener("click", async (e) => {
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
