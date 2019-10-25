/**
 * 
 *  Convertir un nombre en little endian
 *
*/

/* 
    fonctionnement:
        Decimal vers Hexa
        Hexa on le retourne (little endian)
        On ajoute la notation variable

*/
//number en hex puis switch de sens le hex par octet

function conversion(dec){//renvoie hexadécimal depuis un decimal 
    dec = dec.toString()
    var quotient = ""
    //il faut trouver la puissance juste inferieur ou egale la decimale
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
        quotient = conversion(reste)  +  quotient//permet d'avoir l'ordre correctement
    
    return quotient.toString()  
}

function reverse(hex){
    if(hex.length% 2 == 1) // impair du copu on rajoute un 0 en debut
        hex = '0' + hex
    var resultat = '';
    for(var i=hex.length-1; i > 0; i-=2){
        resultat += hex[i-1]+hex[i]
    }
    return resultat
   
}

function notationVariable(hex){
    var entete = '';
    switch(hex.length){
        case 6 : entete = 'FD'; break; 
        case 8 : entete = 'FE'; break;
        case 10 : entete = 'FF'; break;
    }
    return '0x'+ entete + hex
}
function main(decimal){
    var res = conversion(decimal)
    console.log("Conversion Décimal vers HexaDécimal : ",decimal,'->', res);
    res = reverse(res)
    console.log('Conversion en Little endian : ',res)
    res = notationVariable(res)
    console.log('Ajout Notation variable : ',res)
}

main(466321)
