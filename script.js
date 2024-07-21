const mots = ["Premier", "Deuxieme", "Troisieme"]


for (let mot of mots) {
    let motUtilisateur = prompt("Entrez le mot : " + mot)
    if (motUtilisateur === mot) {
        console.log("Le mot entré est correct.")
    } else {
        console.log("Le mot entré est incorrect.")
    }
}