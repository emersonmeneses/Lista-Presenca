import { gerarRelatorioAPI, listarAlunos } from "./api.js";
import { auth } from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", async () => {

if(document.getElementById("selectAluno")){
const alunos = await listarAlunos();
const select = document.getElementById("selectAluno");

alunos.forEach(a=>{
select.innerHTML += `<option value="${a.id}">${a.nome}</option>`;
});
}

});

window.gerarRelatorio = async function(){

const dataInicio = document.getElementById("dataInicio").value;
const dataFim = document.getElementById("dataFim").value;
const alunoId = document.getElementById("selectAluno").value;

const dados = await gerarRelatorioAPI({dataInicio,dataFim,alunoId});

const container = document.getElementById("resultadoRelatorio");
container.innerHTML="";

dados.forEach(item=>{
container.innerHTML+=`
<div class="card-relatorio">
<h3>${item.nomeAluno}</h3>
<p>Presenças: ${item.presencas}</p>
<p>Ausências: ${item.ausencias}</p>
<p>Total: ${item.total}</p>
</div>
`;
});

}
