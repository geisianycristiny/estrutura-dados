let fila = [1, 2, 3];
fila.toArray =function() {
    return this.slice();
};
let arrayfila = fila.toArray();
console.log(arrayfila);