import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const btnLogin = document.getElementById("btnLogin");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  btnLogin.addEventListener("click", async () => {

    const email = emailInput.value;
    const senha = senhaInput.value;

    if (!email || !senha) {
      alert("Preencha email e senha.");
      return;
    }

    // 🔵 MOSTRAR CARREGANDO
    btnLogin.disabled = true;
    btnLogin.querySelector(".btn-text").textContent = "Entrando...";
    btnLogin.querySelector(".spinner").style.display = "inline-block";

    try {
      await signInWithEmailAndPassword(auth, email, senha);

      window.location.href = "painel.html";

    } catch (error) {

      alert("Erro: " + error.message);

      // 🔴 VOLTA AO NORMAL SE DER ERRO
      btnLogin.disabled = false;
      btnLogin.querySelector(".btn-text").textContent = "Login";
      btnLogin.querySelector(".spinner").style.display = "none";
    }

  });

});
