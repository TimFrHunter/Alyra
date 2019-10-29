/*
Hex to decimal
C921
3210//puissance
1*16^0 + 2*16^1 + 9*16^2 +12*16^3 = 51489

*/

function conversionHexToDeci(hex){
    resultat = 0;
    puissance = hex.length - 1 // la puissance maximale
    for(var caracter of hex){ // Parcours chaque caractere de la chaine hexadecimal 
        dec = parseInt(caracter,16) // conversion hex vers décimal
        //Calcul
        resultat = resultat + (dec * Math.pow(16,puissance))
        //Decrementer la puissance
        puissance-- // puissance = puisssance - 1
        
    }

    return resultat
}

//var resultat = conversionHexToDeci("DA091")
//console.log(resultat)


/*
Decimale to Hex

On divise le decimal par 16.
On recupere le quotient.
On check si il faut convertir (si au dessus de 9 on converti en Lettre)
Et on Boucle avec le reste

*/

function conversionDeciToHex(dec){
   
    var quotient = ""
    var reste = Math.floor(dec / 16)
    //console.log(dec % 16)
    switch(dec % 16){
        case 10 : quotient = 'A'; break;
        case 11 : quotient = 'B'; break;
        case 12 : quotient = 'C'; break;
        case 13 : quotient = 'D'; break;
        case 14 : quotient = 'E'; break;
        case 15 : quotient = 'F'; break; 
        default : quotient = dec % 16
    }
    if(reste > 0)
        quotient = conversionDeciToHex(reste)  +  quotient//permet d'avoir l'ordre correctement
    
    return quotient.toString()     
}       

//console.log(conversionDeciToHex(7562))

function conversionHexLittleIndianToHex(lilHex){//Faut juste inverser l'ordre tout les 2 carac 
    if(lilHex.length% 2 == 1) // impair du copu on rajoute un 0 en debut
    lilHex = '0' + lilHex
    var resultat = '';
    for(var i=lilHex.length-1; i > 0; i-=2){
        resultat += lilHex[i-1]+lilHex[i]
    }
    return resultat
}
//conversionHexLittleIndianToHex('F56404');


function conversionVarIntToDecimal(hex){
    var hex = notationVariable(hex)
    hex = conversionHexLittleIndianToHex(hex)
    return conversionHexToDeci(hex)
}
function notationVariable(hex){
    hex = hex.toLowerCase()
    
    switch(hex.length){
        case 8: hex = 'fd' == hex.substr(0,2) ? hex.substr(2) : hex; break; 
        case 10 : hex = ('fe' == hex.substr(0,2)) ? hex.substr(2) : hex; break;
        case 12 : hex = 'ff' == hex.substr(0,2) ? hex.substr(2) : hex ; break;
    }
    
    return hex
}

//console.log(conversionVarIntToDecimal('fE911d0700'))
