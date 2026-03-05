import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuração do Firebase (COPIE DO SITE E COLE AQUI)
const firebaseConfig = {
  apiKey: "AIzaSyCRwjKJyWu54ip_lnFK_2cIot0Zpnairnk",
  authDomain: "lista-presenca-5f611.firebaseapp.com",
  projectId: "lista-presenca-5f611",
  storageBucket: "lista-presenca-5f611.firebasestorage.app",
  messagingSenderId: "502952841131",
  appId: "1:502952841131:web:bfc803e771ecc2bcd94cee",
  measurementId: "G-JD3T2FHKBT"
};

// Inicializa
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
