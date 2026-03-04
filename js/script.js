import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    loginBtn.innerText = "Carregando...";
    loginBtn.disabled = true;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "painel.html";
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }

    loginBtn.innerText = "Entrar";
    loginBtn.disabled = false;
  });

});
