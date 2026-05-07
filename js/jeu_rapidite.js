let points = 0;
let tempsRestant = 60;
let nombreCible = 0;

let intervalNombre;
let intervalTemps;

// Générer les boutons
function genererClavier() {
    const zone = document.getElementById("clavier");

    for (let i = 1; i <= 10; i++) {
        const touche = document.createElement("button");
        touche.textContent = i;

        touche.addEventListener("click", function () {
            verifierChoix(i);
        });

        zone.appendChild(touche);
    }
}

// Vérifier si bon choix
function verifierChoix(valeur) {
    if (valeur === nombreCible) {
        points++;
        document.getElementById("points").textContent = points;

        afficherNouveauNombre(); // correction ici
    }
}

// Changer le nombre
function afficherNouveauNombre() {
    nombreCible = Math.floor(Math.random() * 10) + 1;
    document.getElementById("nombreActuel").textContent = nombreCible;
}

// Gestion du temps
function lancerChrono() {
    intervalTemps = setInterval(() => {
        tempsRestant--;
        document.getElementById("temps").textContent = tempsRestant;

        if (tempsRestant <= 0) {
            terminerJeu();
        }
    }, 1000);
}

// Fin du jeu
function terminerJeu() {
    clearInterval(intervalNombre);
    clearInterval(intervalTemps);

    document.getElementById("nombreActuel").textContent = "";
    document.getElementById("messageFin").textContent =
        "Fin du jeu ! Score final : " + points;
}

// Lancer le jeu
function demarrer() {
    document.getElementById("ecranAccueil").style.display = "none";
    document.getElementById("ecranJeu").style.display = "block";

    genererClavier();

    afficherNouveauNombre();
    intervalNombre = setInterval(afficherNouveauNombre, 500); 

    lancerChrono();
}