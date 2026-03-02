const API = "http://localhost:8080/api";

export async function loginAPI(data){
return fetch(`${API}/auth/login`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
}).then(r=>r.json());
}

export async function listarAlunos(){
return fetch(`${API}/alunos`,{
headers:{Authorization:"Bearer "+localStorage.getItem("token")}
}).then(r=>r.json());
}

export async function salvarAlunoBackend(aluno){
return fetch(`${API}/alunos`,{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:"Bearer "+localStorage.getItem("token")
},
body:JSON.stringify(aluno)
}).then(r=>r.json());
}

export async function atualizarAluno(id, aluno){
return fetch(`${API}/alunos/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json",
Authorization:"Bearer "+localStorage.getItem("token")
},
body:JSON.stringify(aluno)
}).then(r=>r.json());
}
export async function gerarRelatorioAPI(filtros){
return fetch(`http://localhost:8080/api/relatorios`,{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:"Bearer "+localStorage.getItem("token")
},
body:JSON.stringify(filtros)
}).then(r=>r.json());
}