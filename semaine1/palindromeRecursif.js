function palindrome(mot){
   
    if(mot.length == 0  || mot.length == 1)
        return true
    else if(mot[0] == mot[mot.length - 1]){
        mot = mot.substr(1, mot.length-2)//mot.length -2 parceque le substr coupe le mot une fois du coup c'est l'ancinne longueur est il faut faire -2
        return palindrome(mot)
    } else
        return false  
  
}

function estPalindrome(chaine){
    console.log("La chaine", chaine, " : ", palindrome(chaine))
}

estPalindrome("A")
estPalindrome("BoB")
estPalindrome("ANOYNA")
if(process.argv[2])
    estPalindrome(process.argv[2])