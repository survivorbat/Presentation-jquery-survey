var vraag1 = {"vraag":"Waar komt het woord terrorisme vandaan?","antwoord1":"Het Latijn","antwoord2":"Het Grieks","antwoord3":"Het Engels"};
var vraag2 = {"vraag":"In welk dreigingsniveau bevindt Nederland zich momenteel?","antwoord1":"Kritiek","antwoord2":"Substantieel","antwoord3":"Beperkt"};
var vraag3 = {"vraag":"Wat houdt het dreigingsniveau 'Substantieel' in?","antwoord1":"Het is niet waarschijnlijk dat in Nederland een terroristische aanslag plaatsvindt","antwoord2":"Een terroristische aanslag in Nederland is op handen","antwoord3":"De kans op een terroristische aanslag in Nederland is reëel"};
var vraag4 = {"vraag":"In welk jaar is terreurorganisatie Islamitische Staat ontstaan?","antwoord1":"2003","antwoord2":"2006","antwoord3":"2011"};
var vraag5 = {"vraag":"Waardoor ontstaat terrorisme?","antwoord1":"Geloofsovertuigingen","antwoord2":"Idealisme","antwoord3":"Alle bovenstaande"};
var vraag6 = {"vraag":"Waar ligt het Baskenland?","antwoord1":"In Noorwegen en Spanje","antwoord2":"In Spanje en Frankrijk","antwoord3":"In Turkijë en Griekenland"};
var vraag7 = {"vraag":"Hoeveel dreigingsniveaus zijn er in Nederland?","antwoord1":"4","antwoord2":"5","antwoord3":"6"};
var vraag8 = {"vraag":"Wat is <b>GEEN</b> taak van <u>ons</u> Nationaal Centrum Terrorismebestrijding","antwoord1":"Het voorkomen van aanslagen","antwoord2":"Het vroeg onderkennen van radicalisering","antwoord3":"Het voorkomen van aanslagen op Donald Trump"};
var vraag9 = {"vraag":"Wie is een voormalige leider van de ETA?","antwoord1":"Gaizka Vaneto","antwoord2":"Gutxi Ramiro","antwoord3":"Mikel Irastorza"};
var vraag10 = {"vraag":"Wie is een voormalige leider van de IRA?","antwoord1":"Michael Collins","antwoord2":"Jack Homan","antwoord3":"George Davik"};
var vraag11= {"vraag":"Wat is de tegenwoordige naam van de terreurgroep Islamitische Staat in Nederland?","antwoord1":"ISIS","antwoord2":"ISIL","antwoord3":"IS"};
var vraag12 = {"vraag":"Wie is de grondlegger van 'The war on terror'?","antwoord1":"Oud-president Bill Clinton","antwoord2":"Oud-president George Herbert Walker Bush","antwoord3":"Oud-president George Walker Bush"};
var vraag13 = {"vraag":"Welke aanslag had als gevolg dat de 'oorlog tegen het terrorisme' werd afgekondigd?","antwoord1":"De aanslagen op de luchthaven in Brussel","antwoord2":"De bomaanslagen op het World Trace Center in 1993","antwoord3":"De aanslagen van 11 september 2001 in New York"};
var vraag14 = {"vraag":"Welke terroristische organisatie heeft voor de meeste doden gezorgd in West-Europa tussen 1970 en nu?","antwoord1":"IRA","antwoord2":"Al Qaida","antwoord3":"IS"};
var vraag15 = {"vraag":"Welke terroristische aanslag heeft de meeste doden tot gevolg gehad in West-Europa?","antwoord1":"Terreuraanslagen in Parijs (2015)","antwoord2":"Bomaanslag op treinen in Madrid (2004)","antwoord3":"Bomaanslagen in metro London (2005)"};
var vraag16 = {"vraag":"Welk motief was het meest voorkomend bij aanslagen in West-Europa tussen 1970 en nu","antwoord1":"Religieus Islamitisch","antwoord2":"Seperatistisch","antwoord3":"Extreem rechts"};
var vraag17 = {"vraag":"Wat is het enige land dat ooit veroordeeld is voor staatsterrorisme?","antwoord1":"De Verenigde Staten","antwoord2":"Israël","antwoord3":"Lybië"};
var vraag18 = {"vraag":"Wie is de huidige leider van Al-Qaida","antwoord1":"Bin Laden","antwoord2":"Al-Zawahiri","antwoord3":"Baghadi"};
var vraag19 = {"vraag":"Wat is de benaming voor de bloederige tijd tussen 1970 en 1990 waarin IRA veel aanslagen pleegde in het Verenigd Koninkrijk?","antwoord1":"The Struggles","antwoord2":"The Fuss","antwoord3":"The Troubles"};
var vraag20 = {"vraag":"De ETA strijdt voor de onafhankelijkheid van welk gebied?","antwoord1":"Baskenland","antwoord2":"Noord-Ierland","antwoord3":"Pruisen"};


var vraagnummer=0;
var nummer=1;
var pQ = [];

function generateQ(nummer,vraagnummer) {
	var qnummer=vraagnummer.replace("vraag","");
	vraagnummer = eval(vraagnummer);
	return "<p class='formtext'>Vraag "+nummer+": "+vraagnummer.vraag+"</p><input type='radio' name='v"+nummer+"' value='A' required>A. "+vraagnummer.antwoord1+"<br><input type='radio' name='v"+nummer+"' value='B' required>B. "+vraagnummer.antwoord2+"<br><input type='radio' name='v"+nummer+"' value='C' required>C. "+vraagnummer.antwoord3+"<input type='hidden' name='q"+nummer+"' value='"+qnummer+"'><br>";
	
}

function addQ (){
	var vraagnummer = "vraag"+Math.floor((Math.random()*20)+ 1);
	if(pQ.indexOf(vraagnummer)!=-1){
		addQ();
	} else {
	pQ.push(vraagnummer);
	var question = generateQ(nummer,vraagnummer);
	$("#questions").append(question);
	}
}

function start() {
	nummer=0;
	for(var i=0;i<8;i++){
		nummer++
		addQ();
	}
	
}

$(document).ready(function(){
	start();
	$("#results").hide();
	$("#facade").hide();
	$("#results").fadeIn(1500);
})