console.log('background a correr');

//recebe mensagem background
chrome.runtime.onMessage.addListener(receiver);

window.word = "coding train";

//funcão receiver
function receiver (request, sender, sendResponse) {
	console.log(request);
	word = request;
}
