let score = 0
let nombreQuestions = 0
let reponse = ""
let liste = []

reponse = choisirPhrasesOuMots()

console.log("Vous avez choisi la liste de " + reponse)

if (reponse === "mots") {
    liste = listeMots
} else {
    liste = listePhrases
}

score = lancerBoucleDeJeu(liste, nombreQuestions)

afficherResultat(score, liste.length)