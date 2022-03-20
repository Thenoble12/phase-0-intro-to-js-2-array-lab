var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
    console.log(cats);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
}

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
}

function appendCat(name){    
    console.log([...cats, name]);
    return [...cats, name]
}

function prependCat(name){
    console.log(name, [...cats]);
    return [name, ...cats]
}

function removeLastCat(){
    console.log(cats.slice(0, 2))
    return cats.slice(0, 2)
}

function removeFirstCat(){
    console.log(cats.slice(1))
    return cats.slice(1)
}