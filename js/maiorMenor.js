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

	//adiciona Tr com td na tabela
	var tabela = document.querySelector("#tabela-numeros").appendChild(numeroTr);

	//acessa todos os elementos da tabela
	var listaDeNumeros = document.querySelectorAll(".info-numero");
	//maiorMenor e a lista de menorMaior
	var maiorMenor = getMaiorMenor(listaDeNumeros);

	//acessa elementos da tela que receberao os dados de maior e menor numero
	var textoMaiorElem = document.querySelector("#maior");
	var textoMenorElem = document.querySelector("#menor");

	//modifica conteudo
	textoMaiorElem.textContent = maiorMenor[0];
	textoMenorElem.textContent = maiorMenor[1];

	//limpa form
	document.querySelector("#form-adiciona").reset();
});


/**
getMaiorMenor:
listaDeNumeros: parametro de entada que representa os tds das tabelas
return maiorMenor: vetor com primeiro elemento como o maior e segundo elemento como menor
**/
function getMaiorMenor(listaDeNumeros){
	//parseInt parseia a string do text content da td para inteiro
	var maiorMenor = [parseInt(listaDeNumeros[0].textContent), parseInt(listaDeNumeros[0].textContent)];
	//itera pelos tds da table
	for(var i = 0; i < listaDeNumeros.length; i++){
		//acessa valor da td como int
		var valorNum = parseInt(listaDeNumeros[i].textContent);
		//se for maior atualiza primeiro numero
		if(valorNum > maiorMenor[0]){
			maiorMenor[0] = valorNum;
		}
		//se for menor atualiza segundo numero
		if(valorNum < maiorMenor[1]){
			maiorMenor[1] = valorNum;
		}
	}

	return maiorMenor;
}