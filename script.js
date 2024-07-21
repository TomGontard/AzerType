const mots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0

for (let mot of mots) {
    let motUtilisateur = prompt("Entrez le mot : " + mot)
    if (motUtilisateur === mot) {
        console.log("Le mot entré est correct.")
        score += 1
    } else {
        console.log("Le mot entré est incorrect.")
    }
    if (score > 1) {
        console.log("Vous avez " + score + " points.")
    } else {
        console.log("Vous avez " + score + " point.")
    }
}

console.log("Vous avez eu " + score + " points au total.")