import {db, auth} from "./firebase-config.js"
import {collection, addDoc, getDocs} from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

window.abrirMenu = function(){

const menu = document.getElementById("menuLateral")

if(menu.style.left === "0px"){
menu.style.left = "-250px"
}else{
menu.style.left = "0px"
}

}

window.cadastrarAluno = async function(){

const nome = document.getElementById("nomeAluno").value
const nasc = document.getElementById("nascimento").value
const sexo = document.getElementById("sexo").value
const resp = document.getElementById("responsavel").value
const obs = document.getElementById("observacaoAluno").value

await addDoc(collection(db,"alunos"),{

nome,
nasc,
sexo,
resp,
obs,
professor:auth.currentUser.uid

})

alert("Aluno cadastrado")

listarAlunos()

}

async function listarAlunos(){

const lista = document.getElementById("listaAlunos")

lista.innerHTML=""

const querySnapshot = await getDocs(collection(db,"alunos"))

querySnapshot.forEach(doc=>{

const aluno = doc.data()

lista.innerHTML += `

<div class="card-aluno">

<img src="assets/img/default-user.png">

<h4>${aluno.nome}</h4>

<div class="presenca">

<button class="presente">P</button>

<button class="falta">F</button>

</div>

</div>

`

})

}

listarAlunos()