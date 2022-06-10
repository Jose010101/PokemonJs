var vidaOP=200;
var vidaALI=200; 
var pkmj1,pkmj2;
var tipo1,tipo2;
var tackleCont=35;
var scratchCont=35;
var watergunCont=25;
var emberCont=25;
var vinewhipCont=25;
var pokebolaCont=3;
var shiny, shinyOP;
var ataqueOP;
var accuracyinimigo, accuracy;
var sp, spinimigo;
var interatq, intervalovoltar;





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ataque 1
function ataque1PkmAli(){
    
     accuracy=Math.floor(Math.random()*10);
    //Squirtle Atq 1 Início
    if (pkmj1=="Squirtle") {

        if (vidaOP<=0){
            alert("You won the battle!");
            document.location.reload(true);
        }
        else if(vidaALI<=0){
            alert ("You lose the battle!");
            document.location.reload(true);
        }
 else if (tackleCont<1){
      
           alert("Your pokemon don't have pp to use this attack!");
    
        document.getElementById('ataque1').disabled="true";

    } 
else if (accuracy==0){
    alert(pkmj1+" ally missed the attack!");
    interatq=setTimeout(ataqueOponente,1000) 
}
else{
    alert(pkmj1+" ally used Tackle!");
        tackleCont=tackleCont-1;
        vidaOP=vidaOP-45;
        document.getElementById('vida-oponente').style.width= vidaOP+ "px";
       tackle()
       
       interatq=setTimeout(ataqueOponente,1000)
}

    }
    //Squirtle Atq 1 fim
    

    //Charmander Atq 1 Início
    else if (pkmj1=="Charmander"){
   
     if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }
    
   else  if (scratchCont<1){
         alert("Your pokemon don't have pp to use this attack!")
        document.getElementById('ataque1').disabled=true;
    }

    else if (accuracy==0){
        alert(pkmj1+" ally missed the attack!");
        interatq=setTimeout(ataqueOponente,1000)
    }
    
    else {
        alert(pkmj1+" ally used Scratch!");
        scratch()
    scratchCont=scratchCont-1;
        vidaOP= vidaOP-40;
        document.getElementById('vida-oponente').style.width= vidaOP+ "px";
        interatq=setTimeout(ataqueOponente,1000)

    }
    

    }
    //Charmander Atq 1 fim

    //Bulbasaur Atq1 Início
    else {

        if (vidaOP<=0){
            alert("You won the battle!");
            document.location.reload(true);
        }
        else if(vidaALI<=0){
            alert ("You lose the battle!");
            document.location.reload(true);
        }

   else if (scratchCont<1){
        alert("Your pokemon don't have pp to use this attack!")
        document.getElementById('ataque1').disabled=true;
    }

    else if (accuracy==0){
        alert(pkmj1+" ally missed the attack!");
        interatq=setTimeout(ataqueOponente,1000)
    }

    else{
        alert(pkmj1+" ally used Scratch!");
        scratch()
        vidaOP= vidaOP-40;
        scratchCont=scratchCont-1;
        document.getElementById('vida-oponente').style.width= vidaOP+ "px";
        interatq=setTimeout(ataqueOponente,1000)

    }

    }
    //Bulbasaur Atq 1 Fim

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ataque 3
function ataque3PkmAli(){
    
    //Squirtle Atq 3 Início
    if (pkmj1==="Squirtle") {
        
        if (vidaOP<=0){
            alert("You won the battle!");
            document.location.reload(true);
        }
        else if(vidaALI<=0){
            alert ("You lose the battle!");
            document.location.reload(true);
        }
        
else if (pkmj2=="Bulbasaur"){
    alert(pkmj1+ " used Water Gun!");
    watergunCont=watergunCont-1;
    vidaOP= vidaOP-30;
    document.getElementById('vida-oponente').style.width= vidaOP+ "px"; 
    WaterGun()
setTimeout(() => {
    alert("It's not very effective...")
}, 1500);

interatq=setTimeout(ataqueOponente,2000); 


setTimeout(naoefetivo,1300);

}


else if(watergunCont<1){
    alert("Your pokemon don't have pp to use this attack!");
    document.getElementById('ataque3').disabled=true;
} 
else{
    alert(pkmj1+ " used Water Gun!");
    watergunCont=watergunCont-1;
    vidaOP= vidaOP-63;
    document.getElementById('vida-oponente').style.width= vidaOP+ "px";
    WaterGun()
setTimeout(() => {
    alert("Super effective");
}, 1500); 

setTimeout(efetivo,1300);

interatq=setTimeout(ataqueOponente,2000);  
}


}
//Squirtle Atq3 Fim


//Charmander Atq3 Início
else if (pkmj1=="Charmander") {

    if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }

else if (pkmj2=="Bulbasaur"){
    alert(pkmj1+ " used Ember!");
    emberCont=emberCont-1;
    vidaOP= vidaOP-63;
    document.getElementById('vida-oponente').style.width= vidaOP+ "px";
    Ember()
setTimeout(() => {
    alert("Super effective!");
}, 1500); 
setTimeout(efetivo,1300);


interatq=setTimeout(ataqueOponente,1700); 
   




}
else if(emberCont<1){
    alert("Your pokemon don't have pp to use this attack!");
    document.getElementById('ataque3').disabled=true; 
}

else{
    alert(pkmj1+ " used Ember!");
    emberCont=emberCont-1;
    vidaOP= vidaOP-30;
    document.getElementById('vida-oponente').style.width= vidaOP+ "px";
    Ember()
setTimeout(() => {
    alert("It's not very effective...");
}, 1500);

setTimeout(naoefetivo,1200);

interatq=setTimeout(ataqueOponente,1700); 


}


}
//Charmander Atq3 Fim

//Bulbasaur
else{
    
    if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }

   else if (pkmj2=="Squirtle"){
        alert(pkmj1+ " used Vine Whip");
        vinewhipCont=vinewhipCont-1;
        setTimeout(() => {
            vidaOP=vidaOP-63;
        document.getElementById('vida-oponente').style.width= vidaOP+ "px";
        }, 500);
        VineWhip()
    setTimeout(() => {
        alert("Super effective!");
    }, 1000);

    setTimeout(efetivo,700);

    interatq=setTimeout(ataqueOponente,1300);  

    }
    
   else if(vinewhipCont<1){
        alert("Your pokemon don't have pp to use this attack!");
        document.getElementById('ataque3').disabled=true; 
    }

    else{
        alert(pkmj1+ " used Vine Whip");
        vinewhipCont=vinewhipCont-1;
        setTimeout(() => {
            vidaOP=vidaOP-30;
        document.getElementById('vida-oponente').style.width= vidaOP+ "px";
        }, 500);
        VineWhip()
    setTimeout(() => {
        alert("It's not very effective...")
    }, 1000);

    setTimeout(naoefetivo,700);

    interatq=setTimeout(ataqueOponente,1300);  

    }


}

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Nome


//Ocultar

document.getElementById('campo-batalha').style.display="none";

//Selecionar


document.getElementById('escolha2').style.display="none";
document.getElementById('EscolhaOP').style.display="none";
document.getElementById('PokemonOPEscolha').style.display="none";
document.getElementById('Iniciar').style.display="none";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EscolhaPokemon1

function CharmanderJ1(){
    shiny=Math.floor(Math.random()*10);
   

    if (shiny==0){
        pkmj1="Charmander";
        var audio= new Audio ("");
            audio.src="crys/charmander.ogg";
           audio.play("");
    
        document.getElementById('CharmanderJ2').style.display="none";
        document.getElementById('BulbasaurJ1').style.display="none";
        document.getElementById('SquirtleJ1').style.display="none";
    
        document.getElementById('escolha2').style.display="";
        document.getElementById('EscolhaOP').style.display="";
        document.getElementById('PokemonOPEscolha').style.display="";
    
        document.getElementById('CharmanderJ1').src="sprites frente/CharmanderShiny.gif";
    
        document.getElementById('info-nome-ali').innerHTML=pkmj1;
        document.getElementById('meuPokemon').src="sprites costa/CharmanderShiny.gif";
        document.getElementById('ataque1').innerHTML="Scratch";
        document.getElementById('ataque2').innerHTML="-";
        document.getElementById('ataque3').innerHTML="Ember";
        document.getElementById('ataque3').style.color="red";
        document.getElementById('Fara').innerHTML="Charmander do?";
        document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
    }

    else{
        pkmj1="Charmander";
        var audio= new Audio ("");
            audio.src="crys/charmander.ogg";
           audio.play("");
    
        document.getElementById('CharmanderJ2').style.display="none";
        document.getElementById('BulbasaurJ1').style.display="none";
        document.getElementById('SquirtleJ1').style.display="none";
    
        document.getElementById('escolha2').style.display="";
        document.getElementById('EscolhaOP').style.display="";
        document.getElementById('PokemonOPEscolha').style.display="";
    
        document.getElementById('CharmanderJ1').src="sprites frente/Charmander.gif";
    
        document.getElementById('info-nome-ali').innerHTML=pkmj1;
        document.getElementById('meuPokemon').src="sprites costa/Charmander.gif";
        document.getElementById('ataque1').innerHTML="Scratch";
        document.getElementById('ataque2').innerHTML="-";
        document.getElementById('ataque3').innerHTML="Ember";
        document.getElementById('ataque3').style.color="red";
        document.getElementById('Fara').innerHTML="Charmander do?";
        document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
    }
    
}
function BulbasaurJ1(){
    shiny=Math.floor(Math.random() *10);

   if (shiny==0){
    pkmj1="Bulbasaur";
    var audio= new Audio ("");
        audio.src="crys/bulbasaur.ogg";
       audio.play("");
      

    document.getElementById('CharmanderJ1').style.display="none";
    document.getElementById('SquirtleJ1').style.display="none";


    document.getElementById('BulbasaurJ2').style.display="none";

    document.getElementById('escolha2').style.display="";
    document.getElementById('EscolhaOP').style.display="";
    document.getElementById('PokemonOPEscolha').style.display="";
   
    document.getElementById('BulbasaurJ1').src="sprites frente/BulbaShiny.gif";

    document.getElementById('info-nome-ali').innerHTML=pkmj1;
    document.getElementById('meuPokemon').src="sprites costa/BulbaShiny.gif";
    document.getElementById('ataque1').innerHTML="Scratch";
    document.getElementById('ataque2').innerHTML="-";
    document.getElementById('ataque3').innerHTML="Vine Whip";
    document.getElementById('ataque3').style.color="Green";
    document.getElementById('Fara').innerHTML="Bulbasaur do?";
    document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
   }
    else{
        pkmj1="Bulbasaur";
        var audio= new Audio ("");
            audio.src="crys/bulbasaur.ogg";
           audio.play("");
          
    
        document.getElementById('CharmanderJ1').style.display="none";
        document.getElementById('SquirtleJ1').style.display="none";
    
        document.getElementById('BulbasaurJ2').style.display="none";
    
        document.getElementById('escolha2').style.display="";
        document.getElementById('EscolhaOP').style.display="";
        document.getElementById('PokemonOPEscolha').style.display="";
       
        document.getElementById('BulbasaurJ1').src="sprites frente/Bulbasaur.gif";
    
        document.getElementById('info-nome-ali').innerHTML=pkmj1;
        document.getElementById('meuPokemon').src="sprites costa/Bulbasaur.png";
        document.getElementById('ataque1').innerHTML="Scratch";
        document.getElementById('ataque2').innerHTML="-";
        document.getElementById('ataque3').innerHTML="Vine Whip";
        document.getElementById('ataque3').style.color="Green";
        document.getElementById('Fara').innerHTML="Bulbasaur do?";
        document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
    }
}
function SquirtleJ1(){
    shiny=Math.floor(Math.random()*10);

   if (shiny==0){
    pkmj1="Squirtle";
    var audio= new Audio ("");
        audio.src="crys/squirtle.ogg";
       audio.play("");

    document.getElementById('CharmanderJ1').style.display="none";
    document.getElementById('BulbasaurJ1').style.display="none";

    document.getElementById('SquirtleJ2').style.display="none";
    document.getElementById('escolha2').style.display="";
document.getElementById('EscolhaOP').style.display="";
document.getElementById('PokemonOPEscolha').style.display="";
    
document.getElementById('SquirtleJ1').src="sprites frente/SquirtleShiny.gif";

    document.getElementById('info-nome-ali').innerHTML=pkmj1;
    document.getElementById('meuPokemon').src="sprites costa/SquirtleShiny.gif";
    document.getElementById('ataque1').innerHTML="Tackle";
    document.getElementById('ataque2').innerHTML="-";
    document.getElementById('ataque3').innerHTML="Water Gun";
    document.getElementById('ataque3').style.color="cornflowerblue";
    document.getElementById('Fara').innerHTML="Squirtle do?";
    document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
   }
   else{
    pkmj1="Squirtle";
    var audio= new Audio ("");
        audio.src="crys/squirtle.ogg";
       audio.play("");

    document.getElementById('CharmanderJ1').style.display="none";
    document.getElementById('BulbasaurJ1').style.display="none";

    document.getElementById('SquirtleJ2').style.display="none";
    document.getElementById('escolha2').style.display="";
document.getElementById('EscolhaOP').style.display="";
document.getElementById('PokemonOPEscolha').style.display="";
    
document.getElementById('SquirtleJ1').src="sprites frente/Squirtle.gif";

    document.getElementById('info-nome-ali').innerHTML=pkmj1;
    document.getElementById('meuPokemon').src="sprites costa/Squirtle.gif";
    document.getElementById('ataque1').innerHTML="Tackle";
    document.getElementById('ataque2').innerHTML="-";
    document.getElementById('ataque3').innerHTML="Water Gun";
    document.getElementById('ataque3').style.color="cornflowerblue";
    document.getElementById('Fara').innerHTML="Squirtle do?";
    document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
   }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Aparecer

 function aparecer(){
    
    

    document.getElementById('campo-batalha').style.display="";
    document.getElementById('opcao').style.display="none";
    var audio= new Audio('')
    audio.src="audios/Batalha1.mp3";
    audio.play();
    audio.loop=true;
    audio.volume=0.1;

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EscolhaPokemon2

function CharmanderJ2(){
    shinyOP=Math.floor(Math.random()*10);

    
if (shinyOP==0){

    pkmj2="Charmander";

var audio= new Audio ("");
        audio.src="crys/charmander.ogg";
       audio.play("");
       audio.volume=1;

       document.getElementById('CharmanderJ2').src="sprites frente/CharmanderShiny.gif";

document.getElementById('info-nome-op').innerHTML=pkmj2;
document.getElementById('PokemonOP').src="sprites frente/CharmanderShiny.gif";
document.getElementById('BulbasaurJ2').style.display="none";
document.getElementById('SquirtleJ2').style.display="none";
document.getElementById('Iniciar').style.display="";
}

else{
    pkmj2="Charmander";
    var audio= new Audio ("");
            audio.src="crys/charmander.ogg";
           audio.play("");
           audio.volume=1;
    
           document.getElementById('CharmanderJ2').src="sprites frente/Charmander.gif";

    document.getElementById('info-nome-op').innerHTML=pkmj2;
    document.getElementById('PokemonOP').src="sprites frente/Charmander.gif";
    document.getElementById('BulbasaurJ2').style.display="none";
    document.getElementById('SquirtleJ2').style.display="none";
    document.getElementById('Iniciar').style.display="";
}


}

function BulbasaurJ2(){
    shinyOP=Math.floor(Math.random()*10);
    
    if (shinyOP==0){
        pkmj2="Bulbasaur";
    var audio= new Audio ("");
    audio.src="crys/bulbasaur.ogg";
   audio.play("");
   audio.volume=1;

   document.getElementById('BulbasaurJ2').src="sprites frente/BulbaShiny.gif";

    document.getElementById('info-nome-op').innerHTML=pkmj2;
    document.getElementById('PokemonOP').src="sprites frente/BulbaShiny.gif";
    document.getElementById('CharmanderJ2').style.display="none";
    document.getElementById('SquirtleJ2').style.display="none";
    document.getElementById('Iniciar').style.display="";
    }
    else{
        pkmj2="Bulbasaur";
    var audio= new Audio ("");
    audio.src="crys/bulbasaur.ogg";
   audio.play("");
   audio.volume=1;

   document.getElementById('BulbasaurJ2').src="sprites frente/Bulbasaur.gif";

    document.getElementById('info-nome-op').innerHTML=pkmj2;
    document.getElementById('PokemonOP').src="sprites frente/Bulbasaur.gif";
    document.getElementById('CharmanderJ2').style.display="none";
    document.getElementById('SquirtleJ2').style.display="none";
    document.getElementById('Iniciar').style.display="";
    }

    

    

}
function SquirtleJ2(){
    shinyOP=Math.floor(Math.random()*10);


    if (shinyOP==0){
        pkmj2="Squirtle"; 
    var audio= new Audio ("");
        audio.src="crys/squirtle.ogg";
       audio.play("");
       audio.volume=1;

       document.getElementById('SquirtleJ2').src="sprites frente/SquirtleShiny.gif"

    document.getElementById('info-nome-op').innerHTML=pkmj2;
    document.getElementById('PokemonOP').src="sprites frente/SquirtleShiny.gif";
    document.getElementById('CharmanderJ2').style.display="none";
    document.getElementById('BulbasaurJ2').style.display="none";
    document.getElementById('Iniciar').style.display="";
    }

    else{
        pkmj2="Squirtle"; 
    var audio= new Audio ("");
        audio.src="crys/squirtle.ogg";
       audio.play("");
       audio.volume=1;

       document.getElementById('SquirtleJ2').src="sprites frente/Squirtle.gif";
       
    document.getElementById('info-nome-op').innerHTML=pkmj2;
    document.getElementById('PokemonOP').src="sprites frente/Squirtle.gif";
    document.getElementById('CharmanderJ2').style.display="none";
    document.getElementById('BulbasaurJ2').style.display="none";
    document.getElementById('Iniciar').style.display="";
    }


    

    

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('ataque1').style.display="none";
document.getElementById('ataque2').style.display="none";
document.getElementById('ataque3').style.display="none";
document.getElementById('ataque4').style.display="none";
document.getElementById('PP').style.display="none";
document.getElementById('PPInfo').style.display="none";
document.getElementById('AtqTipo').style.display="none";





function Fight(){
    document.getElementById('ataque1').style.display="";
    document.getElementById('ataque2').style.display="";
    document.getElementById('ataque3').style.display="";
    document.getElementById('ataque4').style.display="";
    document.getElementById('PP').style.display="";
document.getElementById('PPInfo').style.display="";
document.getElementById('AtqTipo').style.display="";

    document.getElementById('Fight').style.display="none"
    document.getElementById('Bag').style.display="none"
    document.getElementById('PokemonTroca').style.display="none"
    document.getElementById('Run').style.display="none"
    document.getElementById('Oque').style.display="none";
    document.getElementById('Fara').style.display="none";
    
}

function Bag(){
alert("You don't have any itens to use!")
}

function Pokemon(){
alert("You don't have another Pokemon to use!");
}

function Run(){
    alert("You can't run from battle!");
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Info1(){
    
        document.getElementById('PP').style.display="";
    document.getElementById('PPInfo').style.display="";
    document.getElementById('AtqTipo').style.display="";
    
    if (pkmj1=="Squirtle"){
        document.getElementById('PP').innerHTML="PP";
        document.getElementById('PPInfo').innerHTML=tackleCont;
        document.getElementById('AtqTipo').innerHTML="Type/Normal";
    }

    if (pkmj1==="Charmander"){
        document.getElementById('PP').innerHTML="PP";
        document.getElementById('PPInfo').innerHTML=scratchCont;
        document.getElementById('AtqTipo').innerHTML="Type/Normal";
    }
    if (pkmj1==="Bulbasaur"){
        document.getElementById('PP').innerHTML="PP";
        document.getElementById('PPInfo').innerHTML=scratchCont;
        document.getElementById('AtqTipo').innerHTML="Type/Normal";
    }
    
}

function sumirInfo1(){
   
    
    
    document.getElementById('PP').style.display="none";
document.getElementById('PPInfo').style.display="none";
document.getElementById('AtqTipo').style.display="none";
}

function Info3(){
    document.getElementById('PP').style.display="";
    document.getElementById('PPInfo').style.display="";
    document.getElementById('AtqTipo').style.display="";
    if (pkmj1==="Squirtle"){
        document.getElementById('PP').innerHTML="PP";
        document.getElementById('PPInfo').innerHTML=watergunCont
        document.getElementById('AtqTipo').innerHTML="Type/Water";
    }

    if (pkmj1==="Charmander"){
        document.getElementById('PP').innerHTML="PP";
        document.getElementById('PPInfo').innerHTML=emberCont;
        document.getElementById('AtqTipo').innerHTML="Type/Fire";
    }
    if (pkmj1==="Bulbasaur"){
        document.getElementById('PP').innerHTML="PP";
        document.getElementById('PPInfo').innerHTML=vinewhipCont;
        document.getElementById('AtqTipo').innerHTML="Type/Grass";
    }

}
function sumirInfo2(){
    document.getElementById('PP').style.display="none";
document.getElementById('PPInfo').style.display="none";
document.getElementById('AtqTipo').style.display="none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo
//Ataque Inimigo

function ataque1PkmInimigo(){
    
accuracyinimigo=Math.floor(Math.random()*10)
    //Squirtle Atq 1 Início
    if (pkmj2=="Squirtle") {
          
        if (vidaOP<=0){
            alert("You won the battle!");
            document.location.reload(true);
        }
        else if(vidaALI<=0){
            alert ("You lose the battle!");
            document.location.reload(true);
        }

   else if(accuracyinimigo==0){
        alert(pkmj2+ "enemy attack missed!");
        setTimeout(reload,600); 
    }


  else{
      
alert(pkmj2+ " enemy used Tackle!");
      
    
        
    vidaALI=vidaALI-40;
    tackle()
    document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
    document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
   
    setTimeout(reload,600); 

  }

    }
    //Squirtle Atq 1 fim
    

    //Charmander Atq 1 Início
   else if (pkmj2=="Charmander"){

    if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }

  else  if(accuracyinimigo==0){
        alert(pkmj2+ "enemy attack missed!");

        setTimeout(reload,600); 
    }

    
   else{
        alert(pkmj2 + " used Scratch!");
        scratch()
        vidaALI=vidaALI-40;
         document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
         document.getElementById('vidanumero').innerHTML=vidaALI+"/200";

         setTimeout(reload,600); 
    }
    }
    //Charmander Atq 1 fim

    //Bulbasaur Atq1 Início
   else {
   
    if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }


  else  if(accuracyinimigo==0){
        alert(pkmj2+ "enemy attack missed!");

        setTimeout(reload,600); 
    }

   else{
    alert(pkmj2 + " used Scratch!");
    scratch()
    vidaALI=vidaALI-40;
     document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
     document.getElementById('vidanumero').innerHTML=vidaALI+"/200";


     setTimeout(reload,600); 
   }

    }
    //Bulbasaur Atq 1 Fim
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ataque 3
function ataque3PkmInimigo(){
    
    //Squirtle Atq 3 Início
    if (pkmj2=="Squirtle") {

        if (vidaOP<=0){
            alert("You won the battle!");
            document.location.reload(true);
        }
        else if(vidaALI<=0){
            alert ("You lose the battle!");
            document.location.reload(true);
        }

     
 else if (pkmj1=="Bulbasaur"){
    alert(pkmj2+ " enemy used Water Gun!");
    vidaALI=vidaALI-30;
     document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px"; 
     document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
     WaterGun()
setTimeout(() => {
    alert("It's not very effective...")
}, 1500); 

setTimeout(reload,1700); 

setTimeout(naoefetivo,1300);

}
 else {
    alert(pkmj2+ " enemy used Water Gun!");
    vidaALI=vidaALI-63;
     document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
     document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
     WaterGun()
setTimeout(() => {
    alert("Super effective!");
}, 1500); 

setTimeout(efetivo,1300);

setTimeout(reload,1900);  
}


}
//Squirtle Atq3 Fim


//Charmander Atq3 Início
else if (pkmj2=="Charmander") {
    
    if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }


 else if (pkmj1=="Bulbasaur"){
    alert(pkmj2+ " enemy used Ember!");
    vidaALI=vidaALI-63;
     document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
     document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
     Ember()
setTimeout(() => {
    alert("Super effective!");
}, 1500); 


setTimeout(efetivo,1300);



setTimeout(reload,1700);



}
 else {
    alert(pkmj2+ " enemy used Ember!");
    vidaALI=vidaALI-30;
     document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
     document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
     Ember()
setTimeout(() => {
    alert("It's not very effective...");
}, 1500);

setTimeout(naoefetivo,1200);

setTimeout(reload,1700);

}


}
//Charmander Atq3 Fim

//Bulbasaur
else {
    
    if (vidaOP<=0){
        alert("You won the battle!");
        document.location.reload(true);
    }
    else if(vidaALI<=0){
        alert ("You lose the battle!");
        document.location.reload(true);
    }

   else if (pkmj1=="Squirtle"){
        alert(pkmj2+ " enemy used Vine Whip");
        setTimeout(() => {
            vidaALI=vidaALI-63;
         document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
         document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
        }, 500);
        VineWhip()
    setTimeout(() => {
        alert("Super effective!");
    }, 1000);

    setTimeout(efetivo,700);

    setTimeout(reload,1200);
    
    }



    else {
       

        alert(pkmj2+ " enemy used Vine Whip");
        setTimeout(() => {
            vidaALI=vidaALI-30;
         document.getElementById('vida-meu-pkm').style.width= vidaALI+ "px";
         document.getElementById('vidanumero').innerHTML=vidaALI+"/200";
        }, 500);
        VineWhip()
    setTimeout(() => {
        alert("It's not very effective...")
    }, 1000);

    setTimeout(naoefetivo,700);

    setTimeout(reload,1200);
    

    }
   
  

}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ataqueOponente(){
    ataqueOP= Math.floor(Math.random()*3);

    if (ataqueOP==0){
        ataque1PkmInimigo();
    }
    else {
        ataque3PkmInimigo();
    }
}


//
function reload(){
    document.getElementById('ataque1').style.display="none";
    document.getElementById('ataque2').style.display="none";
    document.getElementById('ataque3').style.display="none";
    document.getElementById('ataque4').style.display="none";
    document.getElementById('Oque').style.display="";
    document.getElementById('Fara').style.display="";
    document.getElementById('Fight').style.display="";
    document.getElementById('PokemonTroca').style.display="";
    document.getElementById('Run').style.display="";
    document.getElementById('Bag').style.display="";
    document.getElementById('PP').style.display="none";
    document.getElementById('PPInfo').style.display="none";
    document.getElementById('AtqTipo').style.display="none";
}
//
//
function efetivo(){
    var audio= new Audio('');
    audio.src="audios/hit-super-effective.mp3";
audio.play();
}
function naoefetivo(){
    var audio= new Audio('');
    audio.src="audios/Hit Weak Not Very Effective.mp3";
audio.play();
}






//sons de ataques
function tackle(){
    var audio= new Audio ("");
    audio.src="audios/Tackle.mp3";
   audio.play("");
}

function scratch(){
    var audio= new Audio('');
    audio.src="audios/Scratch.mp3";
audio.play();
}

function Ember(){
    var audio= new Audio('');
    audio.src="audios/Ember.mp3";
audio.play();
}

function WaterGun(){
    var audio= new Audio('');
    audio.src="audios/Water Gun.mp3";
audio.play();
}

function VineWhip(){
    var audio= new Audio('')
    audio.src="audios/Vine Whip.mp3";
    audio.play();
}





 



















