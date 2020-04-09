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

//Buscar DOI
let doiSpringer = document.getElementsByClassName('u-clearfix c-bibliographic-information__value')[5].innerText;
console.log(doiSpringer);

//Buscar abstract
let abstractSpringer = document.getElementsByClassName('c-article-section__content')[0].innerText;
console.log(abstractSpringer);

//Buscar journal
let journalSpringer = document.getElementsByClassName('c-article-info-details')[0].innerText.slice("Cite this article").replace('Cite this article','');
console.log(journalSpringer);

//Constroi mensagem para o background Springer
let messageSpringer = {
	titulo: titleSpringer,
	ano: anoSpringer,
	autor: autorSpringer,
	doi: doiSpringer,
	resumo: abstractSpringer,
	info: journalSpringer
};

console.log(messageSpringer);

//Envia mensagem springer
chrome.runtime.sendMessage(messageSpringer);


};


//------------------------------------------------------ IEEE ---------------------------------------------


if(window.location.origin=='https://ieeexplore.ieee.org'){
	console.log(window.location.origin);

	//Buscar autor
	let autorIEEE = document.getElementsByClassName('authors-container stats-document-authors-banner-authorsContainer')[0].innerText;


	//Buscar abstract 
	let abstractIEEE = document.getElementsByClassName('abstract-text row')[0].innerText;

	//Buscar titulo
	let titleIEEE = document.getElementsByClassName('document-title')[0].innerText;

	//Buscar DOI
	let doiIEEE = document.getElementsByClassName('u-pb-1 stats-document-abstract-doi')[0].innerText.slice("DOI: ").replace('DOI: ','');

	//Buscar ano
	let anoIEEE = document.getElementsByClassName('u-pb-1 doc-abstract-pubdate')[0].innerText;
	
	//Buscar journal
	let journalIEEE = document.getElementsByClassName('u-pb-1 stats-document-abstract-publishedIn')[0].innerText.slice("Published in: ").replace('Published in: ','');

	//Constroi mensagem para o background Springer
let messageIEEE = {
	titulo: titleIEEE,
	ano: anoIEEE,
	autor: autorIEEE,
	doi: doiIEEE,
	resumo: abstractIEEE,
	info: journalIEEE
};

console.log(messageIEEE);

//Envia mensagem springer
chrome.runtime.sendMessage(messageIEEE);

};
