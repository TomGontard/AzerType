/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture)

let btnValiderMot = document.getElementById("btnValiderMot")
console.log(btnValiderMot)

let zoneProposition = document.querySelector(".zoneProposition")
console.log(zoneProposition)

let zoneScore = document.querySelector(".zoneScore span")
console.log(zoneScore)

let optionSource = document.querySelectorAll(".optionSource input")
console.log(optionSource)

lancerJeu()