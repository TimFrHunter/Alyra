const crypto = require('crypto')

//condensat de condensat

function condensat(chaine){
    return sha256(sha256(chaine))
}

function sha256(chaine){//sha2
    return crypto.createHash("sha256").update(chaine).digest('hex')
}

console.log("condensat:",condensat(process.argv[2]))



const key = Buffer.from('d8f549aa','hex')
//get clé en coupant les 4 premiers octets du hash/condensat
//1 carac hexa correspond a 4 bits du coup  2 hexa == 8bits == 1octet et il faut donc couper les 8 carac hexa
function getHashKey(hash){
    return Buffer.from(hash.substr(0,8),'hex');//return key
}
let hashKey = getHashKey(condensat(process.argv[2]))
console.log("key:", hashKey, " et ",key," est-elle correcte ?", hashKey == key ? 'oui' : 'non')


// Fonction qui donne la chaine dont le hash commence par 66

function t(hash){// à faire
    if(hash.substr(0,2) == 66){
        return chaine
    }
    
}