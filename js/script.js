import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const btnLogin = document.querySelector("button");
  const emailInput = document.querySelectorAll("input")[0];
  const senhaInput = document.querySelectorAll("input")[1];
  const linkEsqueci = document.querySelector("a");

  // LOGIN
  btnLogin.addEventListener("click", async () => {
    const email = emailInput.value;
    const senha = senhaInput.value;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Login realizado com sucesso!");
      window.location.href = "home.html"; // próxima tela
    } catch (error) {
      alert("Erro: " + error.message);
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
