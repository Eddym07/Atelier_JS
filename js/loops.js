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

while(i < students.length) {
    console.log(students[i]);
    i++;
}

console.log("\n##### Exemples de boucles 3 ##### \n");

for(var j = 0; j < students.length; j++)  {
    console.log(students[j]);
}