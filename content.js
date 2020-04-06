//---------------------------------------------- SAGE JOURNALS ----------------------------------------------------------

if(window.location.origin=='https://journals.sagepub.com'){
	console.log(window.location.origin);

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


//Buscar DOI
let doi = document.getElementsByClassName('doiWidgetContainer');

	

//Buscar Abstract
let resumo = document.getElementsByClassName('abstractSection abstractInFull');


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

};

//---------------------------------------- LINK SPRINGER ---------------------------------------------------

if(window.location.origin=='https://link.springer.com'){
	console.log(window.location.origin);


//Buscar titulo
let titleSpringer = document.getElementsByClassName('c-article-title u-h1')[0].innerText;
console.log(titleSpringer);

//Buscar ano
let anoSpringer = document.getElementsByClassName('c-article-identifiers__item')[1].innerText;
console.log(anoSpringer);

//Buscar autor
let autorSpringer = document.getElementsByClassName('c-author-list js-etal-collapsed')[0].innerText;
console.log(autorSpringer);
};
