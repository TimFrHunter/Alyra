/*******************************************************************************
  *
  *   Init Arbre
  *
  ******************************************************************************/

let arbre = {
  value: "A",
  left: {
    value: "B",
    left:{
      value: "C",
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: "D",
    left: {
      value: "E",
      left: null,
      right: {
        value: "F",
        left : null,
        right : null
      }
    },
    right: {
      value: "G",
      left: null,
      right: null
    }
  }
}



/*******************************************************************************
  *
  *   Définir la méthode pour trouver une valeur donnée
  *   dans un arbre binaire de recherche
  *
  ******************************************************************************/

/*
fct getValPrefixe( arbre, valeurRecherchée)// propriété: value, left,right
  Boucle : Pour Chaque propriétés dans l'objet arbre
    Si : la propriété = value
      Si : la propriété value = la valeurRecherchée
        message : trouvé
        on arrete de chercher en renvoyant la valeur 1
      SiNon :
        message : affiche la valeur du noeud sur laquelle on est tombée en parcourant l'objet arbre
      Si : Fin
    SiNonSi : la propriété est differente de value et que ça valeur est differente de null
        on appel la fct getValPrefixe(noeud, valeurRecherchée)  avec le noeud qui correspond a la propriété left ou right non null
        Si : la fonction renvoie 1 on la retourne aussi
        Si : Fin
    Si : Fin
  Boucle : Fin

*/
//Du coup j'ai utilisé la methode de parcours: Préfixe
function getValPrefixe(arbre, val){
  for(key in arbre){
    if(key == "value"){
      if(arbre[key] == val){
        console.log("trouvé:" ,arbre[key])
        return 1;
      }else{
        console.log("noeud:", arbre[key])
      }
    }else if(key != "value" && arbre[key] !== null){
      if(getValPrefixe(arbre[key],val) === 1)
        return 1;
    }
  }
}






/*******************************************************************************
  *
  *   Écrire la méthode pour afficher l’arbre selon un parcours infixe
  *
  ******************************************************************************/
function parcoursInfixe(arbre){
  if(arbre.left !== null){
    parcoursInfixe(arbre.left)
  }
  console.log(arbre.value)
  if(arbre.right !== null){
    parcoursInfixe(arbre.right)
  }
}



/*******************************************************************************
  *
  *   Écrire la méthode pour supprimer un noeud
  *
  ******************************************************************************/
function suppression(arbre,val){
  for(key in arbre){
    if(key == "value" && arbre[key] == val){
      console.log("Suppression de:" ,arbre[key])
      if(arbre.left === null && arbre.right === null){
        console.log("Type de suppression:  suppression simple car le noeud est une feuille ")//cas1
        delete arbre.left
        delete arbre.right
        delete arbre.value
      }else if(arbre.left !== null && arbre.right === null){
        console.log("Type de suppression: remplacement par enfant Gauche car noeud a un enfant")//cas2
        let tmpL = arbre.left
        delete arbre
        remplace(arbre,tmpL)
      }else if (arbre.left === null && arbre.right !== null){
        console.log("Type de suppression: remplacement par enfant Droit car noeud a un enfant")//cas2
        let tmpR = arbre.right
        delete arbre
        remplace(arbre,tmpR)
      }else if (arbre.left !== null && arbre.right !== null) { //le plus a gauche du noeud de droite // cas3
        console.log("Type de suppression: Le noeud à deux enfants, le plus à gauche du noeud de droite" )
        let noeud = getLeft(arbre.right)
        let tmpVal = noeud.value
        suppression(arbre,noeud.value)
        arbre.value = tmpVal
      }
      return 1;
    }else if(key != "value" && arbre[key] !== null){//parcours recursif de type Préfixe
      if(suppression(arbre[key],val) === 1)
        return 1;
    }
  }
}

function getLeft(noeud){
  if(noeud.left !== null)
    return getLeft(noeud.left);
  else
    return noeud
}
function remplace(noeud,tmp){
  noeud.left = tmp.left
  noeud.right = tmp.right
  noeud.value = tmp.value
}

/*******************************************************************************
  *
  *   Tester les fonctions
  *
  ******************************************************************************/
// Ps: j'ai pas de verif du coup faut mettre des valeurs correctes svp

getValPrefixe(arbre,'G')

parcoursInfixe(arbre)

suppression(arbre,'A')
console.log(arbre)//vaut mieux le garder pour voir le resultat du nouvel arbre apres ça suppression
