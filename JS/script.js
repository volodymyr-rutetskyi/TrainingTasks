// recursion
function factorial(x) {
    for(let i=x-1;i>0;i--)
        x*=i
    return x
}

function recursionFactorial(x) {
    if(x>1)
        return x*recursionFactorial(x-1)
    else return x
}

// class extension
const person = {
    name: 'Volodymyr',
    greeting: function() {
        return `hello, my name is ${this.name}.`
    }
}

const student = {
    __proto__: person,
    university: 'ZSTU',
    greeting: function() {
        return this.__proto__.greeting() + `I am a student in ${this.university}.`
    }
}

// calling a function in different contexts
function speak() {
    if(this.hasOwnProperty('language'))
        console.log(`i can speak ${this.language}`)
    else 
        console.log('i cannot speak')
}

const englishman = {
    name: 'Bryce',
    language: 'English',
    speak: speak
}

const ukrainian = {
    name: 'Volodymyr',
    language: 'Ukrainian',
    speak: speak
}

const dog = {
    name: 'Rex',
    speak: speak
}

englishman.speak()
ukrainian.speak()
dog.speak()

// module patters

function BankCard() {
    const owner =  "Volodymyr"
    const bank = "Monobank"
    const cardNumber = "0880 0660 0440 0220"
    let PIN = 1111
    let balance = 840
    
    return {
        withdraw: function(props) {
            if(balance > props.amount) {
                if((props.amount > 50 && PIN == props.PIN) || props.amount <= 50) {
                    balance -= props.amount
                    return `Success! Current balance: ${balance}`
                } else return `Impossible make the operation`
            }
        },
        checkBalance: function(props) {
            if(props.PIN == PIN) {
                return `Balance: ${balance}`
            } else return "Incorrect PIN"
        }
    }
}

const myBankCard = BankCard()
console.log(myBankCard)