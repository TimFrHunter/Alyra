function palindrome(chaine) {

    for (let i = 0; i < chaine.length; i++) {
        
        if(chaine[i] == chaine[chaine.length-i -1]){
            console.log(chaine[i])
        }else{
            return false
        }

    }
    return true
}

console.log(palindrome("ANNA"))