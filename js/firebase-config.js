import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
apiKey: "SUA_KEY",
authDomain: "SEU_DOMINIO",
projectId: "SEU_ID",
storageBucket: "SEU_BUCKET",
messagingSenderId: "X",
appId: "X"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);