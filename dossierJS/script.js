// On stocke les mots
const mot = ["savon", "devin", "gonfler", "pieux", "Vinaigre", "Homard", "Mangue", "hibou", "phoque", "iguane", "turquoise", "bleu", "fuchsia", "argenté", "poitrine", "cheveux", "femme", "mégaphone"]
// Parmi tout les mots on cree de l'aleatoire
let aleatoire = (Math.floor(Math.random() * (mot.length)))
// Le mot choisi est: 
let WordToGuess = mot[aleatoire]
// censé prendre la longueur du mot mais PREND LA LONGUEUR DU TABLEAU
for (let i = 0; i <= mot.length; i++) {
    document.getElementById("secret").innerText += "-"

}


let Chances = 10;
document.getElementById("vies").innerText = "10"


function lesLettres(lettre) {
    if (WordToGuess.includes(lettre)) {


    }
else {
    Chances--
    document.getElementById("vies")
}
if (Chances = 0) {
    alert("Tu as perdu!")
}




}






// let Victoire=alert ("")



