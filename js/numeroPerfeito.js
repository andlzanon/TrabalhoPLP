var botao = document.querySelector("#adicionar-numero");

botao.addEventListener("click", function(event){
	//prefine que evento default de botao de formulario ocorra
	//o evento default e ir para uma outra página
	event.preventDefault();

	//acessa número do form
	var novoNumero = document.getElementById("novo-numero").value;


	//cria Tr da tabela
	var numeroTr = document.createElement("tr");
	//adiciona classe a Tr
	numeroTr.classList.add("numero");
	//cria Td da tabela
	var numeroTd = document.createElement("td");
	//adociona classe a td
	numeroTd.classList.add("info-numero");
	//adiona texto a td
	numeroTd.textContent = novoNumero;
	//adiciona td na tr
	numeroTr.appendChild(numeroTd);

	var perfeitoTd = document.createElement("td");
	perfeitoTd.classList.add("info-perfeito");
	//verifica se numero e perfeito
	var perfeito = ePerfeito(novoNumero);
	perfeitoTd.textContent = perfeito;
	numeroTr.appendChild(perfeitoTd);

	//adiciona Tr com td na tabela
	var tabela = document.querySelector("#tabela-numeros").appendChild(numeroTr);
	//modifica ultimos valores 
	document.querySelector("#numero").textContent = novoNumero;
	document.querySelector("#e-perfeito").textContent = perfeito;

	//limpa form
	document.querySelector("#form-adiciona").reset();
});


/**
ePerfeito:
Verifica se numero passado por parâmetro é perfeito
Se é perfeito retorna "Sim", caso contrário "Não"
**/
function ePerfeito(numero){
	var sum = 0;
	for(var i = 1; i <= numero/2; i++){
		if(numero % i == 0){
			sum = sum + i;
		}
	}

	if(sum == numero){
		return "Sim";
	}
	else{
		return "Não";
	}
}