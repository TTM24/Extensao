let bgpage = chrome.extension.getBackgroundPage();
let objeto = bgpage.word

console.log(objeto);

//set valor DOI
$(function () {
  $('#doi').val(objeto.doi);
});

//set valor titulo
$(function () {
  $('#title').val(objeto.titulo);
});

//set valor autor
$(function () {
  $('#autor').val(objeto.autor);
});

//set valor autor info
$(function () {
  $('#autor_info').val(objeto.autor_info);
});

//set valor info
$(function () {
  $('#info').val(objeto.info);
});

//set valor asbract
$(function () {
  $('#abstract').val(objeto.resumo);
});

//Lê avaliação
$("input:radio[name='rating']").change(function () {
    let rating = $('input[name="rating"]:checked').val();
    console.log(rating);

});

$('#submit-btn').click(function(){
	
	swal({
  title: "Saved!",
  text: "You saved this article with success!",
  icon: "success",
  button: "Ok!",
});


});



