function greetPerson(greet = "Welcome", name = "Guest") {
    const greetingMessage = `${greet}, ${name}`
    return greetingMessage
}
const greeting = greetPerson('Hello', 'Pavardenis')
console.log (greeting);