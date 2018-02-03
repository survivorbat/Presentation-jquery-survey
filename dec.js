function kleurChange () {
	var kleur = Math.floor((Math.random() * 10) + 1);
	switch(kleur){
		case 1:
			kleur="red";
			break;
		case 2:
			kleur="yellow";
			break;
		case 3:
			kleur="green";
			break;
		case 4:
			kleur="blue";
			break;
		case 5:
			kleur="orange";
			break;
		case 6:
			kleur="purple";
			break;
		case 7:
			kleur="magenta";
			break;
		case 8:
			kleur="cyan";
			break;
		case 9:
			kleur="pink";
			break;
		case 10:
			kleur="lightgreen";
			break;
	}
	$(".kleurchange").css("color",kleur);
}

$(document).ready(function(){
	setInterval(kleurChange,500);
})