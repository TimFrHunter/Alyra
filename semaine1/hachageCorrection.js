const crypto = require('crypto')

function doubleHachage(entree){
    entreeBuffer = Buffer.from(entree)
    hash = crypto.createHash("sha256").update(entreeBuffer).digest()
    doubleHash = crypto.createHash("sha256").update(hash).digest()
    return doubleHash
}

function cleDeVerification(message){
    hash = crypto.createHash("sha256").update(message).digest('hex')
    cle = hash.substring(0,8)
    return cle
}
message = process.argv[2]
console.log(message, " ->", cleDeVerification(message))

function verification(message, cle){
    return (cleDeVerification(message) == cle)
}

console.log('Verification', verification(message,cle))