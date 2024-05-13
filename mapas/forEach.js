let mapa = new mapa();
mapa.set('chave1', 'valor');
mapa.set('chave2', 'valor2');

mapa.forEach((valor, chave)=> {
    console.log('${chave} -> ${valor}');
});