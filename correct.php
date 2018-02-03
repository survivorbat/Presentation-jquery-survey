<h2>Resultaten:</h2>
<script>
	$(document).ready(function(){
		$("#facade").fadeIn(1500);
		var timer=30;
		setInterval(function(){
			$("#countdown").empty();
			$("#countdown").append(timer);
			timer--
			if(timer<0){
				window.location = "index.php";
			}
		},1000)
	})
</script>
<?php
function addRes($res) {
	$file = fopen("resultaten.html","a+");
	$res = $res/8*100;
	if($res>=75){
		$res="<span style='color:green'>".$res."</span>";
	} else {
		$res="<span style='color:red'>".$res."</span>";
	}
	$update = "<tr><td>".date("H").":".date("i").":".date("s")."</td><td><b>".$res."</b></td><td>".$_POST['naam']."</td></tr>"."\n";
	fwrite($file,$update);
	fclose($file);
}
	///Answers
	$al=["A" /*1*/,"B"/*2*/,"C"/*3*/,"B"/*4*/,"C"/*5*/,"B"/*6*/,"B"/*7*/,"C"/*8*/,"C"/*9*/,"A"/*10*/,"C"/*11*/,"C"/*12*/,"C"/*13*/,"A"/*14*/,"B"/*15*/,"B"/*16*/,"C"/*17*/,"B"/*18*/,"C"/*19*/,"A" /*20*/];
	//////
	$tot=0;
	for($i=1;$i<9;$i++){
		$qn = $_POST["q$i"];
		$qn = $qn-1;
		$ans = $al["$qn"];
		if($ans===$_POST["v$i"]){ $vstat="goed"; $color="green"; $tot++;} else { $vstat="fout"; $color="red";}
		?>
			<span style='color:<?php echo $color;?>'>Vraag <?php echo $i; ?>: <?php echo $vstat ?></span><br>
		<?php
	}
	addRes($tot);
	echo "<br><hr>Je hebt ".$tot." van de 8 vragen goed beantwoord. Dit betekent dat je ".$tot/0.08 ."% van de vragen goed beantwoord hebt.";
	if($tot/8*100>=75){
		echo "<b><br><br><span style='color:#40FF00'>Gefeliciteerd! 75% of hoger is genoeg om een prijs te ontvangen! Vraag een van de leerlingen achter het kraampje om een prijs.</span>";
	} else {
		echo "<b><span style='color:#FF0000'><br><br>Helaas! :( Je hebt minder dan 75% goed wat inhoudt dat je niet in aanmerking komt tot een prijs. Als je wilt kun je het nog een keer proberen.</span></b>";
	}
?>
<br><br>
<center>Je hebt nog <span style="color:red;font-weight:bold"id="countdown">30</span> seconden totdat de quiz herladen wordt!<br><br><a href="index.php" style="color:white;">Herstart de quiz!</a></center><br><br>