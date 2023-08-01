// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)

// 3. Gerar a faixa etária
   
//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso
   

// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;


function calcular (event){
    event.preventDefault();

    let usuario = receberValores();
    let idade = calcularIdade();
    let calassificacao = classificarIdade();
}


function receberValores(){
    let nomeRecebido = document.getElementById("nome").value.trim();
    let anoNascimento = document.getElementById("ano").value.trim();
    let mesNascimento = document.getElementById("mes").value.trim();
    let diaNascimento = document.getElementById("dia").value.trim();

        let dadosUsuario = {
            nome: nomeRecebido,
            ano: anoNascimento,
            mes: mesNascimento,
            dia: diaNascimento,
         }
         console.log(dadosUsuario);
         return dadosUsuario;

    }

function calcularIdade(ano) {
    const dataAtual = new Date ();
    const anoAtual= dataAtual.getFullYear();
    let idade = anoAtual - ano;
    console.log(idade)
    return idade;
    
}   

function classificarIdade (idade){

    if (idade <= 12){
        return "Crianca"
    }else if (idade <=17){
        return "Adolescente"
    }else if (idade <=65){
        return "Adulto"
    }else{
        return "Idoso"
    }
}
