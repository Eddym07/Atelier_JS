console.log("\##### Exemples de boucles 1 ##### \n");

// While loop exemple 1
var i = 0;

while (i <= 10) {
    console.log("Tour de boucle : " + i);
    i++;
}

console.log("\n##### Exemples de boucles 2 ##### \n");

// While loop exemple 2
var i = 0;

var students = [
    "Théo",
    "Louis",
    "Cécile",
    "Chloé",
    "Brandon",
    "Timoté"
];

// while(i < students.length) {
//     console.log(students[i]);
//     i++;
// }

// console.log("\n##### Exemples de boucles 3 ##### \n");

// for(var j = 0; j < students.length; j++)  {
//     console.log(students[j]);
// }

for(var student of students) {
    console.log(student);
}
for(var index in students) {
    console.log(index)
}

for(var index in students) {
    console.log(student);
}

for(var index in students) {
    console.log("Etudiant numéro : " + (parseInt(index) + 1) + students[index]);
}

var human = {
    "name" : "Henry",
    "age" : 45,
    "sexe" : "male",
    "country" : "France"
};

for(var key in human) {
    console.log(key + " : " + human[key]);
}