const crypto = require("crypto")
class ArbreDeMerkle {
    constructor(feuilles){
        this.feuilles = feuilles
        this.arbre = [[]]

        for(let f of this.feuilles){//init
            this.arbre[0].push(this.hashageChaine(f))
        }
        //this.profondeurMax = Math.ceil(Math.log2(this.feuilles.length))
        for(let i = 0;this.arbre[i].length > 1; i++){
            this.arbre[i+1] = []
            for(let j=0; j<this.arbre[i].length;j+=2){
                this.arbre[i].push(this.hashage(this.arbre[i][j],this.arbre[i][j+1]))
            }
        }
    }

    

    affichage(){
        console.log(this.feuilles)
        console.log(this.arbre)

    }

    hashageChaine(chaine){
        return crypto.createHash("sha256").update(Buffer.from(chaine),'utf8').digest()
    }

    hashage(a,b){
//        console.log(a,'---',b)
        let concatenation = []
        if(concatenation === undefined)
            concatenation = a
        else
            concatenation = Buffer.concat([a,b])    
        return crypto.createHash("sha256").update(concatenation,'utf8').digest()
    }

  /*  boucle(){
        for(var hashIdx in this.arbre){ 
            for(var key in this.arbre[hashIdx]){
                if(key % 2 == 0){//comme ça au prochain tour on prend pas le key+1// saute un tour
                    //console.log(this.arbre[hashIdx][parseInt(key) + 1])
                    this.arbre[hashIdx].push(this.hashage(this.arbre[hashIdx][key], this.arbre[hashIdx][parseInt(key)+1]))
                }
            }
            
        }
    }*/

}


erable = new ArbreDeMerkle(["AA","BB","CC","DD"])

//erable.boucle();
erable.affichage()
