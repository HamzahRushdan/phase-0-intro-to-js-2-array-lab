// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){cats.push('Ralph');}
function destructivelyPrependCat(){cats.unshift("Bob");}
function destructivelyRemoveLastCat(){cats.pop('Ralph');}
function destructivelyRemoveFirstCat(){cats.shift('Bob');}
function appendCat (){const copyofCats=[...cats,"Broom"];return copyofCats}
function prependCat (){const copyofCats =["Arnold", ...cats];return copyofCats}

function removeLastCat(){const newCats=cats.slice(0, cats.length -1);return newCats}

function removeFirstCat(){
    return cats.slice(1);
}
//function destructivelyAppendCat(name){
//cats.push("Ralph");
//return name   
//}
 
//function destructivelyPrependCat(name, oldArray){
//}
//destructivelyPrependCat("Bob");
