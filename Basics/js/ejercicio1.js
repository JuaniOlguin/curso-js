class Libro{
    constructor(titulo, autor, anio, genero){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.genero = genero
    }

    devolverInfo(){
        return `La informacion del libro es: 
            Titulo: ${this.titulo}
            Autor: ${this.autor}
            Año: ${this.anio}
            Genero: ${this.genero}`
    }
}

let libros = [];

while(libros.length < 3){
    
    let titulo = prompt('Ingrese titulo del libro');
    let autor = prompt(' Ingrese autor del libro');
    let anio = prompt('Ingrese año del libro');
    let genero = prompt('Ingrese genero del libro').toLowerCase();
    
    if(titulo != '' && autor != '' && anio != '' && !isNaN(anio) && anio.length == 4 && (genero == 'aventura' || genero == 'terror' || genero == 'fantasia')){
        libros.push(new Libro(titulo, autor, anio, genero));
    }
}

const mostrarLibros = () => {
    console.log(libros);
}

mostrarLibros();

for(let i=0; i < libros.length; i++){
    console.log(libros[i].devolverInfo());
}