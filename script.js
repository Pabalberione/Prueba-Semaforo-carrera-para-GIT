/*const $lucesDelCirculo=document.querySelectorAll('.semaforo-luces');
let contadorDeLuz=0;
console.log($lucesDelCirculo)
const mostrarLuz=()=>{ //Constante declarada por una funcion flecha llamada mostrarLuz
    $lucesDelCirculo[contadorDeLuz].className='semaforo-luces';//En la posicion contadorDeLuz el nombre de la clase va a ser luces-circulo
    contadorDeLuz++;//Se avanza el contador de luz

    if(contadorDeLuz>19) contadorDeLuz=0;//Evaluar que si contador de luz es mayor a 2 el contador vuelve a 0

    const luzActual=$lucesDelCirculo[contadorDeLuz];//En la constante luzActual se almacena la variable $lucesDelCirculo en su posicion contadorDeLuz
    luzActual.classList.add(luzActual.getAttribute('color'));
}

setInterval(mostrarLuz, 1000); //Actualizar cada segundo de tiempo el color del semaforo*/


////////PRUEBA/////////////////////
const $lucesDelCirculoVerde=document.querySelectorAll("span[color='verde']");
const $lucesDelCirculoRojo=document.querySelectorAll("span[color='rojo']");
const $lucesDelCirculoAmarillo=document.querySelectorAll("span[color='amarillo']");
let contadorDeLuz=-1;


var lucesVerdes = Array.from($lucesDelCirculoVerde);
var lucesRojas = Array.from($lucesDelCirculoRojo);
var lucesAmarillas = Array.from($lucesDelCirculoAmarillo);

console.log(lucesVerdes);
console.log(lucesAmarillas);
console.log(lucesRojas);


const mostrarLuz=()=>{ //Constante declarada por una funcion flecha llamada mostrarLuz
     contadorDeLuz++;//Se avanza el contador de luz

    if(contadorDeLuz>19) contadorDeLuz=0;//Evaluar que si contador de luz es mayor a 2 el contador vuelve a 0
    
    const luzActualAmarilla=lucesAmarillas;
    luzActualAmarilla.classList.add(luzActualAmarilla.getAttribute('color'));

    const luzActualroja=lucesRojas[contadorDeLuz];//En la constante luzActual se almacena la variable $lucesDelCirculo en su posicion contadorDeLuz
    luzActualroja.classList.add(luzActualroja.getAttribute('color'));
    
    const luzActual=lucesVerdes[contadorDeLuz];//En la constante luzActual se almacena la variable $lucesDelCirculo en su posicion contadorDeLuz
    luzActual.classList.add(luzActual.getAttribute('color'));
}

setInterval(mostrarLuz, 1000); //Actualizar cada segundo de tiempo el color del semaforo
