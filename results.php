<!DOCTYPE html5>
<html>
<head>
	<meta http-equiv="refresh" content="4" >
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Resultaten</title>
	<style>
	tr:nth-child(even) {background: #CCCCFF}
	tr:nth-child(odd) {background: #EEEEFF}
</style>
</head>
<body>
<?php
	if(isset($_POST['button'])){
		$file = fopen("resultaten.html","w");
		fwrite($file,"");
		fclose($file);
		?>
		<Script>window.location.replace("results.php");</script>
		<?php
	}
?>

<form action="results.php" method="post">
<input value="clear" type="submit" name="button"></form><br>
<table>
	<thead>
		<tr><th>Tijd:</th><th>Result:</th><th>Naam:</th></tr>
	</thead>
	<tbody>
	<?php include "resultaten.html"; ?>
	</tbody>
</table>
</body>
</html>