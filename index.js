// Write your solution
const cats=["Milo", "Otis", "Garfield"];

function destructivelyPrependscat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
   return cats.shift(name);
}

function appendCat(name){
   return [...cats,name];
}
appendCat("Broom");

    function prependCat(name) {
     return [name,...cats] ;  
}
prependCat("Arnold");

function removeLastCat(name){
    return cats.slice(0,cats.length-1);
}

function removeFirstCat(name){
    return cats.slice(1);
}








