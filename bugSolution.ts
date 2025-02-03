function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return persons.map(person => greeter(person));
}

let user = ["Jane User", "John User"];

console.log(greeterArray(user)); // Correct!