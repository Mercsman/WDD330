import User, { printName, printAge } from '/test.js'

const user = new User('Bob', 11)
console.log(user)
printName(user)
printAge(user)