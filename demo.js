let jonSnowHealth = 100
let strHealth = String(jonSnowHealth)
jonSnowHealth = jonSnowHealth +''

jonSnowHealth = Boolean(jonSnowHealth)
jonSnowHealth = Number(jonSnowHealth)
console.log(typeof jonSnowHealth)


let myWinner = 'John is the winner';
myWinner = myWinner.replace('John', 'Danny')
if (myWinner.includes('John')) {
    console.log(myWinner)
}
//camelCase (used in JS)
//PascalCase
//kebab-case
//snake_case

let mySplitStr = myWinner.split("")
console.log(mySplitStr)
let myAlmostKebabStr = mySplitStr.join('-')
console.log(myAlmostKebabStr)
let myKebabStr = myAlmostKebabStr.toLowerCase()

//const myKebabCaseStr = myWinner.split("").join("-").toLowerCase()
const myKebabCaseStr = myWinner.toLowerCase().replaceAll ('', '-')
console.log({myKebabCaseStr})


const isJonAlive = () => {
    if(jonSnowHealth > 100) {
        console.log('Jon is alive')
    }

else {
    console.log('Jon is dead')
}}
isJonAlive() 

function attackJon(damage) {
    jonSnowHealth = jonSnowHealth - damage
    isJonAlive()
}

attackJon(30)
//isJonAlive() 
attackJon(10)
//isJonAlive() 
//console.log(jonSnowHealth)