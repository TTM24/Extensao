//---------------------------------------------- SAGE JOURNALS ----------------------------------------------------------

//Buscar titulo pagina
let title = document.getElementsByClassName('publicationContentTitle');

for (let item of title) {
    console.log(item.innerText);
}

//Buscar autor
let autor = document.getElementsByClassName('hlFld-ContribAuthor');


//Buscar Ano
let data = document.getElementsByClassName('publicationContentEpubDate dates');

//Buscar Informação
let info = document.getElementsByClassName('Article information');

console.log(data[0].innerText);

//Buscar DOI
let doi = document.getElementsByClassName('doiWidgetContainer');

	

//Buscar Abstract
let resumo = document.getElementsByClassName('abstractSection abstractInFull');

console.log(resumo[0].innerText);

//Constroi mensagem para o background
let message = {
	titulo: title[0].innerText,
	autor: autor[0].innerText,
	autor_info: autor[1].innerText,
	ano: data[0].innerText,
	resumo: resumo[0].innerText,
	doi: doi[0].innerText,
	info: info[0].innerText
};

console.log(message);


//Envia mensagem
chrome.runtime.sendMessage(message);

//---------------------------------------------------------- PAPERS SSRN -------------------------------------------

//Buscar titulo document.getElementsByTagName('h1')[0].innerText;

//Buscar


