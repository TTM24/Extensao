<?php
	if(isset($_POST['insert'])){

	$reviewer=$_POST['reviewer'];
	$doi=$_POST['doi'];
	$title=$_POST['title'];
	$autor_info=$_POST['autor_info'];
	//$autor=$_POST['autor'];
	$info=$_POST['info'];
	$abstract=$_POST['abstract'];
	$review=$_POST['rating'];


	$conn = new mysqli("localhost", "root", "", "projetoptsi") or die ("error in connection");


//add review e autor
	$query = "INSERT INTO artigo(reviewer,doi,title,autor_info,info,abstract,review) Values ('{$reviewer}', '{$doi}', '{$title}', '{$autor_info}', '{$info}', '{$abstract}', '{$review}')";

	if($conn->query($query)){
		echo "Data Saved";
	}else{
		echo "Error data not saved";
	}

	$conn->close();

}


?>