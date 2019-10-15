const crypto = require("crypto")

function pseudoHachage (chaine){
    condensat = 0
    for (let i = 0; i < chaine.length; i++) {
        condensat = (condensat + chaine.charCodeAt(i) * 10**(i+1)) % (2**16);
    }
    return condensat 
}

//console.log("Condensat:", pseudoHachage(process.argv[2]))

// 34(modulo7) = 7*4 + 6 modulo:6 
// 12(modulo7) = 7*1 + 5 modulo:5
//-5(modulo6)  = 6 * (-1) + 1 modulo:1
//13^7(modulo7) = modulo:6

function sha256(chaine){//sha2
    return crypto.createHash("sha256").update(chaine).digest('hex')
}

console.log(sha256(process.argv[2]))