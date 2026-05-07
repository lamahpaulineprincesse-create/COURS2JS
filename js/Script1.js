document.write('Bonjour tout le monde....' + '<br/>')

let nombre1 = 12
const pi = 3.14
let nom = 'Capi'

//lES TABLEAUX
console.log(nombre1)
console.log(pi)

document.write('<br/>' + nombre1)
document.write('<br/>' + pi)
document.write('<br/>' + nom + '<br/>') 

const capital = ["Conakry", "Dakar", "Moscou", "Paris"]
const valeur = [1,2,3,4,5]

document.write('<br/>' + capital[0])
document.write('<br/>' + capital[1])
document.write('<br/>' + capital[2])
document.write('<br/>' + capital[3] + '<br/>')

//LES OBJETS
const Personne = {
    nom: 'Lamah',
    prenom:'Pauline Princesse',
    age: 30
}

document.write('<br/>' + Personne.nom)
document.write('<br/>' + Personne.prenom)
document.write('<br/>' + Personne.age + '<br/>')
//LES CONDITIONS
if (Personne.nom == 'Lamah'){
    document.write('<br/>' + 'c\'est Lamah')
}
else if(Personne.prenom == 'Pauline Princesse'){
    document.write('<br/>' + "c'est Pauline Princesse")
}
else {
    document.write('<br/>' + "ce n'est ni Lamah ni Pauline Princesse")
}

//LES BOUCLES

for(let i = 0; i<12; i++){
    document.write('<br/>' + i)
}