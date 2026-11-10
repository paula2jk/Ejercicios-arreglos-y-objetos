//arreglos: 1. Lista de estudiantes 2.Administracion de producto 3. Eliminacion de elementos 4.Busqueda de estudiantes 5.Analisis de numero (aprendices extra)


function saludarAprendices(){
    let aprendices = ['juan_Cedeño' , 'jhonatan_Gaitán' , 'julian_Vargas' , 'yen_Montoya' , 'evelyn_Quiñones' , 'juan_Alayon' , 'santiago_Rojas' , 'andres_Martinez' , 'juan_Tinoco' , 'kevin_Pulgar' , ' mariana_Virgues' , 'julian_Robles' , 'juan_Luna' , ' julián_Sierra' , 'juan_Amarillo' , 'richard_Arias' , 'felipe_Leon' , 'esteban_Barbosa' , 'juan_Montoya' , 'erika_Escobar' , 'erith_Gómez' , 'paula_Triana' , 'juan_Hoyos' , 'felipe_Guillen' , 'angely_González' , 'santiago_Triviño'];

    for (let i = 0; i <aprendices.length; i++){
    console.log("Hola " + aprendices[i]);
    }
}


function listaEstudiantes() {
let estudiantes = ["Ana", "Carlos", "Maria", "Luis", "Sofia"];

console.log("arreglo completo:");
console.log(estudiantes);

console.log("primer estudiante:");
console.log(estudiantes[0]);

console.log("tercer estudiante:");
console.log(estudiantes[2]);

console.log("ultimo estudiante:");
console.log(estudiantes[estudiantes.length - 1]);

console.log("cantidad de estudiantes:");
console.log(estudiantes.length);

console.log("listado con posiciones:");
for (let i = 0; i < estudiantes.length; i++) {
  console.log("posicion " + i + ": " + estudiantes[i]);
}

let nuevo = prompt("Escribe el nombre del nuevo estudiante:");
estudiantes.push(nuevo);

console.log("Nueva cantidad de estudiantes:");
console.log(estudiantes.length);

let buscar = prompt("¿Que estudiante quieres buscar?");
if (estudiantes.includes(buscar)) {
  console.log("Si esta registrado");
} else {
  console.log("No esta registrado");
}

console.log("Listado actualizado:");
console.log(estudiantes);
}

function administracionProductos() {
    let productos =["arroz" , "cafe" , "leche" , "azucar" , "sal"];
    console.log("Productos ingresados y registrados");
    console.log(productos);

    productos[1] = "aceite";
    console.log("El segundo producto fue modificado");
    console.log(productos);

    productos.push("harina");
    console.log("Se agrego un nuevo producto al final");
    console.log(productos);

    productos.unshift("sal");
    console.log("Se agrego un nuevo producto al comienzo");
    console.log(productos);

    console.log("Arreglo actualizado");
    console.log(productos);

    let buscar= prompt("Escriba el nombre del producto para saber si esta ingresado:");
    //let registrado= productos.includes(buscar);

   // console.log(registrado);

    if( productos.includes(buscar)){
        let posicion = productos.indexOf(buscar);

        alert(" El producto " + buscar + " esta registrado ");
        alert(" Esta en la posicion: " + posicion);
    } else {
        alert (" El producto " + buscar + " no esta registrado ");
    } 

    let posicionModificar = prompt("Escribe la posicion del producto que quieras modificar o cambiar");
    let nuevoNombre = prompt("Escribe el nombre del nuevo producto que quieras ingresar wapx");

    productos[posicionModificar] = nuevoNombre;
    alert(" El producto modificado esta en la posicion " + posicionModificar + " : ");
    console.log (productos);

    productos.pop();
    // quita el ultimo elemento 

    console.log ("Se elimino el ultimo producto:");
    console.log(productos);

    alert(" Cantidad de productos disponibles: " + productos.length);
    alert(" El listado final es: ");
    alert(productos);
}

function eliminarElementos() {
    let ciudades=["Bogota" , "Medellin" , "Cali" , "Barranquilla" , "Cartagena" , "Bucaramanga"];

    ciudades.pop();
    //se elimina el ultimo
     console.log ("Se elimino la ultima ciudad");
     console.log(ciudades);

     ciudades.shift();
     //elimina la primera ciudad
     console.log("Se elimino la primera ciudad");
     console.log(ciudades);

     ciudades.splice( 2 , 1);
     //elimina la ciudad de la posicion que le puse
     console.log("Se elimina la ciudad en la posicion 2");
     console.log(ciudades);

    ciudades.push("Pereira");
    ciudades.push("Manizales");
    console.log("Se agregaron dos nuevas ciudades al final al final");
    console.log(ciudades);

    alert("La cantidad de ciudades que hay es:" + ciudades.length );

    console.log("Listado de ciudades:")
    for(let i = 0; i < ciudades.length; i++) {
        console.log ((i + 1) + "." + ciudades [i]);
    }
    let buscar= prompt("Escribe el nombre de una ciudad para saber si ya esta registrada:")
    let posicion =ciudades.indexOf(buscar);

    if (posicion !== - 1){
       
        alert(" La ciudad " + buscar + " esta registrada ");
        alert(" Esta en la posicion: " + posicion);
    } else {
        alert (" La ciudad " + buscar + " no esta registrada ");
    } 

}

function buscarEstudiantes() { 
    let estudiantes = ["Ana", "Carlos", "Maria", "Juan", "Laura", "Pedro", "Sofia", "Diego"];

    let nombre = prompt("Escribe el nombre de un estudiante:");
    let esta = estudiantes.includes(nombre);
    let posicion = estudiantes.indexOf(nombre);

    if (esta) {
        console.log("El estudiante " + nombre + " Si esta registrado ");
        console.log("Está en la posición: " + posicion );
    } else {
        console.log("El estudiante " + nombre + " No esta registrado ");
    }

    //Se busca nuevamente
    let nombre2 = prompt("Escribe otro nombre de estudiante:");
    let esta2 = estudiantes.includes(nombre2);
    let posicion2 = estudiantes.indexOf(nombre2);

    if (esta2) {
        console.log("El estudiante " + nombre2 + " Si esta registrado ");
        console.log("Esta en la posicion: " + posicion2);
    } else {
        console.log("El estudiante " + nombre2 + " No esta registrado ");
    }

    //Nombres que inicien por la misma letras, que poseas esa similitud

    let letra = prompt("Escribe una letra:");
    let contador = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i][0] === letra) {
            contador++;
        }
    }
    console.log("Estos estudiantes: " + contador + " tienen en comun que su nombre inicia con esta letra igual: " + letra);

    console.log("Listado de estudiantes:");
    for (let i = 0; i < estudiantes.length; i++) {
        console.log((i + 1) + ". " + estudiantes[i]);
    }

    let nuevo = prompt("Escribe un nombre nuevo:");
    if (estudiantes.includes(nuevo) === false) {
        estudiantes.push(nuevo);
        console.log("Se agrego: " + nuevo);
    } else {
        console.log("Ese nombre ya esta registrado");
    }

    console.log("Listado actualizado:");
    console.log(estudiantes);
    console.log("Cantidad total: " + estudiantes.length);
}


function analizarNumeros() {
    let numeros = [5, -3, 8, 0, 12, -7, 4, 9, -1, 6];

    console.log("Números del arreglo:");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    console.log("La suma es: " + suma);

    let promedio = suma / numeros.length;
    console.log("El promedio es: " + promedio);


    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log("Pares: " + pares);
    console.log("Impares: " + impares);

    let mayor = numeros[0];
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);


    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }
    console.log("Los numeros positivos que se encuentran son: " + positivos);
    console.log("Los numeros negativos que se encuentran son: " + negativos);
    console.log("Los numeros que son iguales a cero siendo asi neutros son: " + ceros);

    console.log("Números mayores que el promedio:");
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > promedio) {
            console.log(numeros[i]);
        }
    }

    let buscar = prompt("Escribe un numero para buscar:");
    buscar = Number(buscar);

    if (numeros.includes(buscar)) {
        console.log("El numero pedido para buscar" + buscar + " Si se encuentra");
    } else {
        console.log("El numero pedido para buscar " + buscar + " No se encuentra");
    }

    // Orden inverso
    console.log("Los numeros anteriores en un orden inverso seria:");
    console.log(numeros.reverse());

    // Ordenar de menor a mayor
    numeros.sort(function(a, b) {
        return a - b;
    });
    console.log("Los numeros ordenados de menor a mayor son:");
    console.log(numeros);
}
