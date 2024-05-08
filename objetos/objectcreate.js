const personPrototype = {
    greet: function() {
        console.log('Ola, meu nome e ${this,name}');
    
    }
};

const objWanderson = Object.create(personPrototype);
objWanderson.name = "wanderson";
objWanderson.greet();