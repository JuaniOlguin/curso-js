//Math es un objeto estatico

/*console.log(Math.E);
console.log(Math.PI);*/

let num = 5;

/*console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(num, 2));//base, exponente
console.log(Math.random()*100);//se puede usar round para que el numero sea entero, se multiplica por el valor cota
//console.log(Math.random()* (max - min)+ min);
console.log(Math.sign(num))//-1 si neg, 0 si 0 y 1 si positivo
console.log(Math.sqrt(num))//raiz cuadrada*/

//Objetos/////////////

const persona = {
    nombre: 'Juan',
    edad: '26',
    hijos: ['Laura', 'Diego', 'Carina', 'Alberto', 'Luis']
}

//console.log(person.name);

for(const key in persona){
    console.log(key);//imprime los nombres de las llaves del objeto
    console.log(persona[key]);//imprime los valores de cada llave del objeto
}

for(const hijo of persona.hijos){
    console.log(hijo);
}

console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, tengo ${persona.hijos.length} hijos y se llaman ${persona.hijos.join(', ')}`);

//Fin Objetos//////////////

//Clases////////////////

class Persona{

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    //sintax metodo != sintax funcion
    saludar(){
        return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    }
}

const juan = new Persona('Juan', 'Garcia', 18);

console.log(juan.saludar());