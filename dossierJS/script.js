// On stocke les mots
const mot = ["savon", "devin", "gonfler", "pieux", "Vinaigre", "Homard", "Mangue", "hibou", "phoque", "iguane", "turquoise", "bleu", "fuchsia", "argenté", "poitrine", "cheveux", "femme", "mégaphone"]
// Parmi tout les mots on cree de l'aleatoire
let aleatoire = (Math.floor(Math.random() * (mot.length)))
// Le mot choisi est: 
let WordToGuess = mot[aleatoire]
// Affiche les -- selon le mot 
for (let i = 0; i <= WordToGuess.length; i++) {
    document.getElementById("secret").innerText += "-"

}

// Les vies 
let Chances = 10;
document.getElementById("vies").innerText = "10"

// Fonction pas fini
function lesLettres(lettre) {
    if (WordToGuess.includes(lettre)) {


    }
    // faire perdre les vies
else {
    Chances--
    document.getElementById("vies").innerText=Chances;
}
// else if {
//     WordToGuess===secret 
    //    alert ("Tu as gagné!")
// }

// Defaite
if (Chances = 0) {
    alert("Tu as perdu!")
}




}






// let Victoire=alert ("")



