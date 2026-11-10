//OBJETOS 1.registro de un estudiante 2. registro de un producto (inventario producto extra, gestion persona extra, gestion producto extra, gestionar empleado extra, empleado 2 extra)

function inventarioProductos() {
    let nombre = "pc"
    let marca = "aser"
    let cantidad = 5
    let precio = 1000000
    console.log(producto.nombre);

    }

function telefono() {
    const producto = {
        nombre: "telefono",
        marca: "xiaomi",
        cantidad: 1,
        precio: 1000000
    };

    console.log(producto);
}

//constante

function registroestudiante() {
    const estudiante = {
        nombre : "anna",
        apellido : "lopez",
        edad : 19,
        formacion : "arte",
        ficha : "12345",
        correoElectronico : "annalopez1@gmail.com" 
    }
    console.log(estudiante.nombre);
    console.log(estudiante.apellido);
    console.log(estudiante["formacion"]); //los corchetes permiten acceder a la propiedad del objeto en este caso a la propiedad estudiante
    estudiante.edad = 21; //moodificar
    estudiante.ciudad = "bogota"; //agregar
    delete estudiante.correoElectronico; //eliminar
    for ( const dato in estudiante){ //bucle
        alert (estudiante[dato]);
    }
    console.log (estudiante) //muestra todo
}

//gestionar producto (punto 2)

    function productoRegistrar() {
    const producto = {
        codigo: 54321,
        nombre: "arroz",
        categoria: "grano",
        precio: 8000,
        cantidad: 4,

        mostrarInformacion: function() {
            console.log("Codigo: " + this.codigo);
            console.log("Nombre: " + this.nombre);
            console.log("Categoria: " + this.categoria);
            console.log("Precio: " + this.precio);
            console.log("Cantidad: " + this.cantidad);
            console.log("Marca: " + this.marca);
        }
    }
    console.log(producto);

    console.log("Valor total: " + (producto.precio * producto.cantidad)); //calcular total de todo

    producto.precio = 6000;
    producto.cantidad = 10;
    producto.marca = "roa";

    producto.mostrarInformacion();
    console.log(producto);
}

//actividad de ayuda que dio el profe
function gestionPersonas() {
    const persona = {
        nombre : "anna",
        edad : 20,
        genero : "femenino",
        saludar : function(){
        console.log(" Hola, soy " + this.nombre + " y mi edad es: " + this.edad);
        }
}
persona.saludar();

}

function gestionProducto() {
    const producto = {
        nombre : "teclado",
        precio : 320000,
        cantidad : 26,
        mostrarInfo: function producto() {
            console.log (this.nombre);
            console.log (this.precio);
            console.log (this.cantidad);
            console.log(" El valor total del inventario es: " + this.cantidad * this.precio);
        }
    }
producto.mostrarInfo();
}

function empleado2() {
    let nombre,cargo,salarioMensual,diasTrabajados;
    let porcentajeDescuento = 0.04;

    nombre=prompt("Ingrese su nombre");
    cargo =prompt("Ingrese el cargo que ejerce");
    salarioMensual=parseInt(prompt("Ingrese el salario mensual"));
    diasTrabajados=parseInt(prompt("Ingrese los dias trabajados"));
    
    const calcularSalario = function() {
            let salarioDia =  salarioMensual / 30;
            let salarioLimpio =  salarioDia * diasTrabajados;
            console.log("Salario por dias trabajados:" , salarioLimpio);
            return salarioLimpio;
    }

    const calcularDescuento = function (){
        let descuento = calcularSalario() * porcentajeDescuento;
        console.log("Descuento (4%):" , descuento);
        return descuento;
    }
    const calcularTotalPagar = function () {
        let total = calcularSalario() - calcularDescuento();
        alert("El total a pagar sin descuento es:" + calcularSalario());
        alert("El total del descuento es:" + calcularDescuento());
        alert("El total a pagar es:" + total);
        return total;
    }
    calcularTotalPagar();
}




function gestionarEmpleado() {
    const empleado = {
        nombre : "Luis",
        cargo : "gerente",
        salarioMensual : 50000000,
        diasTrabajados : 18,
        porcentajeDescuento : 0.04,
        calcularSalario:function() {
            let salarioDia =  ( this.salarioMensual / 30);
            let salarioLimpio =  (salarioDia * this.diasTrabajados);
            console.log("Salario por dias trabajados:" , salarioLimpio);
            return salarioLimpio;
        },
        calcularDescuento: function(){
            let descuento = (this.calcularSalario() * this.porcentajeDescuento);
            console.log("Descuento (4%):" , descuento);
            return descuento;
        },
        calcularTotalPagar: function () {
            let total = (this.calcularSalario() - this.calcularDescuento());
            console.log("El total a pagar sin descuento es:" + this.calcularSalario);
            console.log("El total del descuento es:" + this.calcularDescuento);
            console.log("El total a pagar es:" + this.calcularTotalPagar);
            return total;
        }
    }

    gestionarEmpleado.calcularTotalPagar();

}

