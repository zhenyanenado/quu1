var a,b,c;
var num1 = 1;
var num2 = 1;

var g7 = document.getElementById('grid7').innerHTML='WOMEN';
var g8 = document.getElementById('grid8').innerHTML='MEN';


function zvet(){

	var links = document.getElementsByTagName('a');

	for(var u=0; u<=4; u++){

		links[u].onmouseover = function(){
			this.style.background='black';

		}

		links[u].onmouseout = function(){
			this.style.background=null;
		}

	}

}

zvet();


for(var t=5; t<=6; t++){

	var grid = document.getElementById('grid');
	grid[t] = document.getElementById('grid'+t);

		grid[t].onmouseover = function(){
			this.style.width = '450px';
		}
		grid[t].onmouseout = function(){
			this.style.width = null;
		}

}



var time1 = setTimeout(function(){

	document.getElementById('grid1').style.height = '700px';


}, 1000);



var time2 = setTimeout(function(){

		document.getElementById('link1').style.opacity=1;

}, 300);


var time3 = setTimeout(function(){

		document.getElementById('link2').style.opacity=1;

}, 500);



var time4 = setTimeout(function(){

		document.getElementById('link3').style.opacity=1;

}, 800);

var intNumber = setInterval(function(){

	if(num1 && num2 <=2020){
		num1++; num2++;
	}

	for(var p=1; p<=5; p++){
		document.getElementById('link'+p).innerHTML = 'collection' + num1+'/'+num2;
	}

},1)


var time5 = setTimeout(function(){

		document.getElementById('link4').style.opacity=1;

}, 1100);

var time6 = setTimeout(function(){

		document.getElementById('link5').style.opacity=1;

		document.getElementById('grid2').style.top = '50px';


		document.getElementById('inp1').style.top='100px';
		document.getElementById('inp2').style.top='100px';

		document.getElementById('inp1').style.opacity=1;
		document.getElementById('inp2').style.opacity=1;

}, 1500);


var time7 = setTimeout(function(){

	document.getElementById('dress').style.opacity=1;
	document.getElementById('dress').style.height='500px';

}, 2000);

var numSlide = 5;

var intSlide = setInterval(function(){

	document.getElementById('grid'+numSlide).style.width='450px';

	if(numSlide<=5){
		numSlide++;
	}

}, 2500);

var timeSlider = setTimeout(function(){

	for(var w=5; w<=6; w++){

		document.getElementById('grid'+w).style.width=null;

	}

}, 7000);

var opacTimer = setTimeout(function(){

	for(var e=4; e<=6; e++){
		document.getElementById('grid'+e).style.opacity=1;
	}

}, 2000);

var opacSevE = setTimeout(function(){

	for(var y=7; y<=8; y++){

		document.getElementById('grid'+y).style.opacity=1;

	}

}, 4000);