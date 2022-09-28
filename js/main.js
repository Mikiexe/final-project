
// Recogemos el ID del boton que usaremos para vaciar y le añadimos un EventListener.
// Importante hacerlo con un callback a la función
let botonVaciar = document.getElementById("botonVaciar");
botonVaciar.addEventListener("click", () => { vaciarCarrito() });

//Recogemos el Id del elemento totalCarrito para poder interactuar con el mediante el DOM


//              NOTA 27/09/22
// He creado una función para refrescar los valores llamada refreshQty() que pasa dos parametros para saber que incrementar
// He reducido 2 arrays a uno general, el original. El otro no era necesario, la funcionalidad se mantiene con uno
// Las variables totalCantidadP son para identificar las etiquetas <p> con el id-cantidad y poder refrescar los datos (aun sin incorporar)
// 


let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} MB`;

// let cantidadTotal = 0;
// let totalCantidadP = document.getElementById("id-cantidad");



//               NOTA 26/09/22 
// He creado un Array de objetos fuera de la función porque me da problemas a la hora de crearla dentro de la función
// Ahora toca refinar la función para que actualice la cantidad de objetos que hemos metido dentro de la cesta
// Tendré que comprobar si la cantidad es 0 y sumarle 1. Si ya existe el objeto, restrinjo a la función addElement con un if()
// 


const addItemElement = (nameTxt, posicion) => {

    // Recogemos el div existente Item-list-right para poder insertarle el recien creado div newElement
    let itemListright = document.getElementById("itemListRight");
    let textQty = document.createElement("p");
    let innerDiv2 = document.createElement("div");



    if ((document.getElementById("id-cantidad-" + nameTxt) === null)) {
        console.log(console.log("Si es null aparecera esto y estaré creando este componente"));
        objetos[posicion].cantidad++;

    } else {
        console.log(document.getElementById("id-cantidad-" + nameTxt).innerHTML);
        console.log("esta es la cantidad de " + nameTxt + ": " + objetos[posicion].cantidad);
        document.getElementById("id-cantidad-" + nameTxt).innerHTML = objetos[posicion].cantidad;
    }

    if (document.getElementById("id-cantidad-" + nameTxt) === null) {

        // console.log("La cantidad de aplicacion es: " + objetos[posicion].cantidad);

        // Creamos un elemento nuevo div padre y le asignamos los estilos css predefinidos. 
        // Lo indexamos dentro de la clase itemListRight.
        let newElement = document.createElement("div");
        newElement.setAttribute("class", "item-list");
        itemListright.appendChild(newElement);


        //Crea ambos divs relativos al nombre de la app y la cantidad que hemos insertado
        let innerDiv1 = document.createElement("div");
        innerDiv1.setAttribute("class", "item-list-name");
        newElement.appendChild(innerDiv1);


        // Creamos un elemento p para realizarle un append del contenido de nameTxt
        //Indexamos el nombre de la app dentro del div innerDiv1 que corresponde al nombre
        let textElement = document.createElement("p");
        textElement.append(nameTxt);
        innerDiv1.appendChild(textElement);


        innerDiv2.setAttribute("class", "item-list-qty");
        newElement.appendChild(innerDiv2);


        textQty.setAttribute("id", ("id-cantidad-" + nameTxt));
        console.log(textQty);

        textQty.append(objetos[posicion].cantidad);
        innerDiv2.appendChild(textQty);
        console.log(objetos[posicion].cantidad);

    }

}



// Declaramos un array con objetos que utilizaremos en nuestra "tienda"
let objetos = [
    {
        id: "item1",
        pesoMb: 40.5,
        nombre: "Instagram",
        position: 0,
        cantidad: 0
    },
    {
        id: "item2",
        pesoMb: 54.2,
        nombre: "BeHance",
        position: 1,
        cantidad: 0
    },
    {
        id: "item3",
        pesoMb: 112.3,
        nombre: "GitHub",
        position: 2,
        cantidad: 0
    },
    {
        id: "item4",
        pesoMb: 182.5,
        nombre: "LoveApp",
        position: 3,
        cantidad: 0

    },
    {
        id: "item5",
        pesoMb: 332,
        nombre: "iCloud",
        position: 4,
        cantidad: 0
    },
    {
        id: "item6",
        pesoMb: 250,
        nombre: "TikTok",
        position: 5,
        cantidad: 0
    },
    {
        id: "item7",
        pesoMb: 167,
        nombre: "LinkedIn",
        position: 6,
        cantidad: 0
    },
    {
        id: "item8",
        pesoMb: 50,
        nombre: "Messenger",
        position: 7,
        cantidad: 0
    },
    {
        id: "item9",
        pesoMb: 391,
        nombre: "Twitter",
        position: 8,
        cantidad: 0
    },
    {
        id: "item10",
        pesoMb: 60,
        nombre: "Telegram",
        position: 9,
        cantidad: 0
    },
    {
        id: "item11",
        pesoMb: 104.5,
        nombre: "Pinterest",
        position: 10,
        cantidad: 0
    },
    {
        id: "item12",
        pesoMb: 32,
        nombre: "Skype",
        position: 11,
        cantidad: 0
    },
    {
        id: "item13",
        pesoMb: 87,
        nombre: "VikApp",
        position: 12,
        cantidad: 0
    },
    {
        id: "item14",
        pesoMb: 993,
        nombre: "VSCode",
        position: 13,
        cantidad: 0
    },
    {
        id: "item15",
        pesoMb: 850,
        nombre: "Translate App",
        position: 14,
        cantidad: 0
    },
    {
        id: "item16",
        pesoMb: 715,
        nombre: "YouTube",
        position: 15,
        cantidad: 0
    }
];




const drag = (ev) => {

    //Convierte a texto la ID del objeto que estemos arrastrando
    ev.dataTransfer.setData("text", ev.target.id);

    // console.log("arrastrando...", ev.target.id);
};

const allowDrop = (ev) => {
    ev.preventDefault();

};


const drop = (ev) => {


    //Desactivamos los ajustes predefinidos de drag para que nos permita soltar
    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");

    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });



    //Función custom para añadir elementos con el método DOM
    addItemElement(objetoDeseo.nombre, objetoDeseo.position);


    //Importante cambiar objetoDeseo.variable por el nombre que le asignamos dentro del objeto

    
    
    if (document.getElementById("id-cantidad-" + objetoDeseo.nombre).innerHTML != 0) {
        objetos[objetoDeseo.position].cantidad++;
        console.log(objetos[objetoDeseo.cantidad]);
    }
    else {
        objetos[objetoDeseo.position].cantidad++;
        
    }
    console.log(document.getElementById("id-cantidad-" + objetoDeseo.nombre));
    
    

    // Suma de MB y GB
    precioTotal += objetoDeseo.pesoMb;
    totalCarrito.innerHTML = `${precioTotal} MB`;

    if (precioTotal > 1024) {

        let precioTotalGB = precioTotal / 1024;
        totalCarrito.innerHTML = `${Math.round((precioTotalGB + Number.EPSILON) * 100) / 100} GB`;
    }
};


const vaciarCarrito = () => {

    for (let cuantos of objetos) {
        cuantos.cantidad = 0;
    }

    precioTotal = 0;
    totalCarrito.innerHTML = `${precioTotal} MB`;

    document.getElementById("itemListRight").innerHTML = "";

}