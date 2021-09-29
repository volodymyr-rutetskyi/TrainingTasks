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
