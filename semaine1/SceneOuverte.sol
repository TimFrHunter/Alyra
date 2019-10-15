pragma solidity 0.5.11;
//0x2cB6aBF610642512Bee97bD94046E213f61a44F2
contract SceneOuverte {
    
    string[12] passagesArtistes;

    uint creneauxLibres = 12;
    uint tour = 0;

    
    function sInscrire(string memory nomDArtiste) public { 
        if(creneauxLibres > 0){
            passagesArtistes[12-creneauxLibres] = nomDArtiste;
            creneauxLibres = creneauxLibres - 1;// creneauxLibres -= 1;
        }
        
    }
    
    function passageArtisteSuivant() public {
        tour++;
    }
    
    function getTour() public view returns(uint){
        return tour;
    }

    function artisteEnCours() public view returns(string memory){
        return passagesArtistes[tour-1];
    }

}
