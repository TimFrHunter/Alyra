var crypto = require('crypto')

function minage(block, cible){
    nonce=0;
    while(1){
        hash = hachage(block+nonce)
        if(parseInt(hash.substr(0,8),16) < cible){
            console.log("trouvé: ", hash, "nonce : ", nonce)
            return 1
        }
        nonce++;    
    }
}

function hachage(val){
    return crypto.createHash("sha256").update(val.toString(2)).digest('hex')
}""

minage(358976,2000)
