var player1bets = [0,0,0,0]
		
var player2bets = [0,0,0,0]
		
var player3bets = [0,0,0,0]
		
function init() {
		

var c = document.getElementById("cvs")
		
var ctx = c.getContext("2d")
		
var StartButton = document.getElementById("GoButton");
		
var IsInit=true;
		
var result=document.getElementById("textresult");
			
var img = new Image();
			
img.src = 'cockroach.png';
			

img.onload = function(){
				
ctx.drawImage(img,0,0+314/32);
				
ctx.drawImage(img,0,314/4*1+314/32);
				
ctx.drawImage(img,0,314/4*2+314/32);
	ctx.drawImage(img,0,314/4*3+314/32);
				
img.style.left = 100;
			
                       }
			  
ctx.beginPath();
			  
ctx.moveTo(0,314/4);
			  
ctx.lineTo(620,314/4);
			  
ctx.moveTo(0,314/4*2);
	ctx.lineTo(620,314/4*2);
			  
ctx.moveTo(0,314/4*3);
			  
ctx.lineTo(620,314/4*3);
			ctx.stroke();	
			

function RandomInt(min, max) {
				

var r = min + Math.random() * (max - min)
			r = Math.round(r);
				
return r;
			
                             }
			

function Went (roach,current_position){
		ctx.drawImage(img,current_position,(roach-1)*314/4+314/32);
			
                                      }
			

function DrawForm(){
			ctx.beginPath();
				
ctx.clearRect(0, 0, c.width, c.height);
				
ctx.moveTo(0,314/4);
			ctx.lineTo(620,314/4);
				
ctx.moveTo(0,314/4*2);
				
ctx.lineTo(620,314/4*2);
				ctx.moveTo(0,314/4*3);
				
ctx.lineTo(620,314/4*3);
				
ctx.stroke();
			
                   }
			
var Leader=0;
			

function maxposition(RoachPosition1,RoachPosition2,RoachPosition3,RoachPosition4){
				

var max = RoachPosition1;
				
Leader = 1;
				
if (RoachPosition2>max) {max=RoachPosition2; Leader = 2;}
			if (RoachPosition3>max) {max=RoachPosition3; Leader = 3;}
				
if (RoachPosition4>max) {max=RoachPosition4; Leader = 4;}
	return max;
			
                                                                                 }
			

var NotEnd=true;
			
var LeaderPosition=0;
			var RoachPosition1=0
			
var RoachPosition2=0;
			
var RoachPosition3=0;
			
var RoachPosition4=0;
			var won1=0
			
var won2=0;
			
var won3=0;
			

function reset(){
				
ctx.clearRect(0, 0, c.width, c.height);
				
DrawForm();
				
Went(1,0);
				
Went(2,0);
			
Went(3,0);
				
Went(4,0);
				
LeaderPosition=0;
				RoachPosition1=0
				
RoachPosition2=0;
				
RoachPosition3=0;
				RoachPosition4=0;
				
won1=0
				
won2=0;
				
won3=0;
				
NotEnd=true;
			}
			

function ShowResult(){
				
summ=player1bets[0]+player1bets[1]+player1bets[2]+player1bets[3]+player2bets[0]+player2bets[1]+player2bets[2]+player2bets[3]+player3bets[0]+player3bets[1]+player3bets[2]+player3bets[3];
				summ1=player1bets[0]+player2bets[0]+player3bets[0];//сумма ставок по каждому таракану
				
summ2=player1bets[1]+player2bets[1]+player3bets[1];
				
summ3=player1bets[2]+player2bets[2]+player3bets[2];
				
summ4=player1bets[3]+player2bets[3]+player3bets[3];
				
k1=parseFloat(summ/summ1*0.9)//коэффиценты выйгрыша
				k2=parseFloat(summ/summ2*0.9)
				
k3=parseFloat(summ/summ3*0.9)
				
k4=parseFloat(summ/summ4*0.9)
			
switch (Leader){
					
case 1:
						
var won1=parseInt(k1*parseInt(player1bets[0],10),10);
						
var won2=parseInt(k1*parseInt(player2bets[0],10),10);
						
var won3=parseInt(k1*parseInt(player3bets[0],10),10);
					
break
					
case 2:
				var won1=parseInt(k2*player1bets[1],10);
						
var won2=parseInt(k2*player2bets[1],10);
		var won3=parseInt(k2*player3bets[1],10);
					
break
					
case 3:
						
var won1=parseInt(k3*player1bets[2],10);
						
var won2=parseInt(k3*player2bets[2],10);
						
var won3=parseInt(k3*player3bets[2],10);
					
break
		case 4:
						
var won1=parseInt(k4*player1bets[3],10);
						var won2=parseInt(k4*player2bets[3],10);
						
var won3=parseInt(k4*player3bets[3],10);
				break
					
default:
						
break
		}
				
if (!won1) won1=0
				
if (!won2) won2=0
				
if (!won3) won3=0
				result.value="Результаты забега:\nПобедил "+Leader+" таракан\nИгрок1: "+won1+"\nИгрок2: "+won2+"\nИгрок3: "+won3
			
                     }
			
function race(){
				
LeaderPosition = maxposition(RoachPosition1,RoachPosition2,RoachPosition3,RoachPosition4);
			
if (LeaderPosition>=520){
					
NotEnd=false;
					
ShowResult();
				reset();
					
return;
				
                        }
		

DrawForm();
				var RoachSpeed1 = RandomInt(1,20);
				
var RoachSpeed2 = RandomInt(1,20);
				
var RoachSpeed3 = RandomInt(1,20);
				
var RoachSpeed4 = RandomInt(1,20);
				
RoachPosition1=RoachPosition1+RoachSpeed1;
			RoachPosition2=RoachPosition2+RoachSpeed2;
				
RoachPosition3=RoachPosition3+RoachSpeed3;
				RoachPosition4=RoachPosition4+RoachSpeed4;
				
Went(1,RoachPosition1);
				
Went(2,RoachPosition2);
			Went(3,RoachPosition3);
				
Went(4,RoachPosition4);
				
if (NotEnd)
					setTimeout(race, 100);
			
              }
			

var start =  function(){
				
if (!IsInit)
				race();
		  
                       }
			
IsInit=false;
			
StartButton.onclick = start
		
                       }
		

function getbet(){
			var bet=document.getElementById("textbet");
			var radioplayer=document.getElementsByName("player");
			var radiomember=document.getElementsByName("member");
			var newBet=parseInt(document.getElementById("nbet").value,10);
			for (var i = 0; i < radioplayer.length; i++) {
				if (radioplayer[i].checked)
					var currentPlayer = radioplayer[i].value;       
			}
			for (var i = 0; i < radiomember.length; i++) {
				if (radiomember[i].checked)
					var currentMember = radiomember[i].value;       
			}
			if (currentPlayer=="p1"){
					if (currentMember=="m1") player1bets[0]=newBet;
					if (currentMember=="m2") player1bets[1]=newBet;
					if (currentMember=="m3") player1bets[2]=newBet;
					if (currentMember=="m4") player1bets[3]=newBet;}
			if (currentPlayer=="p2"){
					if (currentMember=="m1") player2bets[0]=newBet;
					if (currentMember=="m2") player2bets[1]=newBet;
					if (currentMember=="m3") player2bets[2]=newBet;
					if (currentMember=="m4") player2bets[3]=newBet;}
			if (currentPlayer=="p3"){
					if (currentMember=="m1") player3bets[0]=newBet;
					if (currentMember=="m2") player3bets[1]=newBet;
					if (currentMember=="m3") player3bets[2]=newBet;
					if (currentMember=="m4") player3bets[3]=newBet;}
			bet.value="Текущие ставки:\nИгрок 1:"+player1bets[0]+"\n\t"+player1bets[1]+"\n\t"+player1bets[2]+"\n\t"+player1bets[3]+"\nИгрок 2:"+player2bets[0]+"\n\t"+player2bets[1]+"\n\t"+player2bets[2]+"\n\t"+player2bets[3]+"\nИгрок 3:"+player3bets[0]+"\n\t"+player3bets[1]+"\n\t"+player3bets[2]+"\n\t"+player3bets[3]
				
		}

