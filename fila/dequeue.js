let fila = [1, 2, 3];

Array.prototype = function(){
    return this.shift();
};
console.log(filha.dequeve());
console.log(fila);