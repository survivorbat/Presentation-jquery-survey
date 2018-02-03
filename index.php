<!DOCTYPE html>
<html>
	<head>
		<title>PWS presentatie</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="jquery.js"></script>
		<script src="main.js"></script>
		<script src="dec.js"></script>
		<meta charset="utf-8" /> 
	</head>
	<body>
	<div id="facade"></div>
	<?php
		if(isset($_POST['submitbutton'])){?>
			<div id="results">
				<?php
					include "correct.php"; 
				?>
			</div>
		<?php }
	?>
		<div id="content">
			<div id="content_text">
				<h1>
					Test uw kennis over Terrorisme!
				</h1>
				<h3><i>
					<span style="font-size:25px;"class="kleurchange">En maak kans op een prijs!</span>
				</i></h3>
				Weet u hoe het zit met terrorisme in Nederland? Wat hebben deze 2 scholieren allemaal onderzocht? Wat hebben we allemaal beschreven in het verslag? Doe de quiz en misschien maakt u kans op een prijs!<br><hr>
				<form action="index.php" method="POST" class="form"><br>
					Uw naam: <input type="text" name="naam" placeholder="Uw naam"  size="40" required>
					<div id="questions"></div><br>
					<input type="Submit" value="Klaar" name="submitbutton">
				</form>
			</div>
		</div>
	</body>
</html> 