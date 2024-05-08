const person = {
    name: "Ryan",
    age: 11,
    citty: "Cuiaba"
};
Object.freeze(person);
person.age = 31;
console.log(person);