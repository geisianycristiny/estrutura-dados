let fila = [];
fila.isEmpty = function() {
    return this.length === 0;
};
fila.enquete = function(item) {
    this.push(item);
};
console.log(fila.isEmpty())
fila.enqueve(1);
console.log(fila.isEmpty());