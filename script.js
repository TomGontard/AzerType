let score = 0
let nombreQuestions = 0
let reponse = ""
let liste = []

while (reponse !== "mots" && reponse !== "phrases") {
    reponse = prompt("Voulez-vous jouer avec des mots ou des phrases ?")
}

console.log("Vous avez choisi la liste de " + reponse)

if (reponse === "mots") {
    liste = listeMots
} else {
    liste = listePhrases
}

for (let mot of liste) {
    let motUtilisateur = prompt("Entrez le mot : " + mot)
    if (motUtilisateur === mot) {
        console.log("Le mot entré est correct.")
        score += 1
    } else {
        console.log("Le mot entré est incorrect.")
    }
    nombreQuestions += 1
    retournerMessageScore(score, nombreQuestions)
}

afficherResultat(score, liste.length)