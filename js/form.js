let bgpage = chrome.extension.getBackgroundPage();
let objeto = bgpage.word

console.log(objeto);

if (objeto != "coding train") {  

//set valor DOI
$(function () {
  $('#doi').val(objeto.doi);
});

//set valor titulo
$(function () {
  $('#title').val(objeto.titulo);
});

//set valor autor info
$(function () {
  $('#autor').val(objeto.autor);
});

//set valor ano
$(function () {
  $('#ano').val(objeto.ano);
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
}

//preencher campos PDF
if (objeto = "coding train"){
  $.get("http://127.0.0.1:5000/", function(data, status){
  let dataObj = jQuery.parseJSON(data);
  console.log(dataObj);

  //set valor autor
  $(function () {
    $('#autor').val(dataObj.autor);
  });

  //set valor titulo
  $(function () {
  $('#title').val(dataObj.title);
  });

  //set valor info
  $(function () {
  $('#info').val(dataObj.info);
  });

  })
};

$('#submit-btn').click(function(){
	
	swal({
  title: "Saved!",
  text: "You saved this article with success!",
  icon: "success",
  button: "Ok!",
});

});




