let bgpage = chrome.extension.getBackgroundPage();
let objeto = bgpage.word

console.log(objeto);

$('#selectArticle').change(function () {
  if($('#selectArticle').val() == "Web Article") {

    console.log("WebArticle");
  
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

  if($('#selectArticle').val() == "PDF"){

    $('#reviewer').val("");
    $('#doi').val("");
    $('#title').val("");
    $('#autor').val("");
    $('#ano').val("");
    $('#info').val("");
    $('#abstract').val("");

    console.log("PDF");
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
  
    //Lê avaliação
  $("input:radio[name='rating']").change(function () {
    let rating = $('input[name="rating"]:checked').val();
    console.log(rating);
  
  });
  }



});

$('#submit-btn').click(function(){
	
	swal({
  title: "Saved!",
  text: "You saved this article with success!",
  icon: "success",
  button: "Ok!",
});



});




