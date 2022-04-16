let contador = 0;
function pedirProductos(){
    let frase = prompt("Ingrese una frase");
    let letra = prompt("Ingrese la letra que desea contar");
    for (var x=0; x<=frase.length; x++){
        if(frase[x] == letra){
            contador=contador+1;
        }
    }

    prompt("La cantidad de veces que la letra \n"+letra+" \naparece en la frase \n"+frase+"\nes: "+contador);
}

pedirProductos();