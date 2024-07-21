const motApplication = "Test"
let motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motApplication === motUtilisateur) {
    console.log("Le mot entré est correct.")
} else {
    console.log("Le mot entré est incorrect.")
}