var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop("Garfield")
  return kittens
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveFirstKitten(Milo) {
  kittens.shift("Milo")
  return kittens
}
function appendKitten(Ralph) {
var newKittens =  [...kittens, "Ralph"]
  return newKittens
}
