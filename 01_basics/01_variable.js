const accountId = 144553
let accountEmail = "hi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 throws an error
/*
prefered not to use var
because of issue in block scope and functional scope
*/
accountEmail = "hello@gmail.com"
accountPassword = "22321"
accountCity = "Mumbai"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])