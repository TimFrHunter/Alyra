const crypto = require("crypto")
const bs58 = require("bs58")
const pubKey = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDJ/lB8+XFMbsl2FsivYlSRTnmZtuFyyEHiFsU1GIGdto8Ik3SJi4r6k60Lot6E8eQHsetbcqXeDuywJP7YQJu/ZtAs4UGm6wGPAInd/8Xc60/Ik7F11Qj0uvYhYc8t6sLLehT4dXu+bgK7NYFq/ju/DbfttCjNIefNeYFd0hY1FcPz2EDZJw0jIwxC2NEPakUswbjL2TJ/AZoXXamm9nmwsFL4yaH6LUuMBvm21+KEsV9QSfnUpo3NL/akBKqPaW5ooV2CgstbtbLddeOQV7K9thNGoEFVYUXc7mlXvN4ME70l78L1DWLUQS0a97JVhxGDdd97laQBCubYfXOfQvwZ bobby@Cryptotux'
const networkType = "00" //0x00 == "00"

let hashSha256 = crypto.createHash('sha256').update(pubKey).digest('hex')
let hash160 = crypto.createHash('ripemd160').update(hashSha256).digest('hex')
let checksum = checksumBitcoin(networkType,hash160)
let hash = Buffer.from(networkType + hash160 + checksum,'hex')
let bitcoinAddr = bs58.encode(hash)

console.log(bitcoinAddr);
console.log(bitcoinAddr.length);



function checksumBitcoin(_networkType, _hash160){
  return crypto.createHash('sha256').update(crypto.createHash('sha256').//doubleHAsh
  update(_networkType + _hash160)// networkType "00" : Mainnet,  "6F" : TestNet
  .digest('hex')).digest('hex')// format Hex
  .substr(0,8);// 1 carac(hexa) = 4 bits = 1/2 Octet, du coup 8 carac hexa = 4 octet
}
