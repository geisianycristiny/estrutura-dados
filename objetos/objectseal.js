const person = {
    name: "wanderson",
    age: 40,
    city: "Cuiaba"
};
Object.seal(person);
person.age = 31;
person.gender = "masculino";
console.log(person);