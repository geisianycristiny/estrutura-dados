let conjunto = new setInterval([1, 2, 3]);
let iterador = conjunto.values();
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);