//1a. 
const jPDinos = ['Velociraptors', 'Tyrannosaurus Rex', 'Dilophosaurus']

//1b. 
function seeDinos(Velociraptors, ...restDinos){
console.log('Velociraptors');
console.log([...restDinos]);
}
seeDinos(...jPDinos)

//2a. 
const jPCharacters = {
    alanGrant: "Sam Neill",
  ellieSattler: "Laura Dern",
 ianMalcolm: "Jeff Goldblum"
}

//2b.
const seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters)