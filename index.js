// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]
function  destructivelyAppendCat(name){
 cats.push('Ralph')
 
}

function destructivelyPrependCat (name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()
}
function appendCat(name ="Broom"){
    let catsOne =[...cats, name]
    return catsOne
    
    

}
function prependCat(name){
    let newArray = [name,...cats]
    return newArray
}

function removeLastCat(){
    let newArray = cats.slice (0,2)
    return  newArray
}
function removeFirstCat(){
    let newArray = cats.slice (1)
    return  newArray
}