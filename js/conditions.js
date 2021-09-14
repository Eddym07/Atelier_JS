console.log("\n##### Exemples de conditions ####### \n");

var isAvailable = false;
// Exemple of a condition with a boolean value
if(isAvailable === true) {
    console.log("Meuble disponible");
 }
 else {
    console.log("Meuble indisponible")
    }

var price = 151;

if(price < 50) {
    console.log("Meuble bas de gamme");
}
else if(price >= 50 && price <= 150) {
    console.log("meuble moyenne gamme");
}
else {
    console.log("Meuble haut de gamme");
}