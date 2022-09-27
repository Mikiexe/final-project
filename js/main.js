
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

let cantidadTotal = 0;
let totalCantidadP = document.getElementById("id-cantidad");



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

    if (objetos[posicion].cantidad == 0) {

        objetos[posicion].cantidad++;
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


        textQty.setAttribute("id", "id-cantidad");
        textQty.append(objetos[posicion].cantidad);
        innerDiv2.appendChild(textQty);

    }
    else if (objetos[posicion].cantidad !== 0) {

        // let nuevaCantidad = objetos[posicion].cantidad++;
        // console.log("sumamos valor a cantidad. Ahora vale:  " + objetos[posicion].cantidad)

        // innerDiv2.innerHTML = "";
        // textQty.innerHTML = "";
        // console.log(innerDiv2.innerHTML);
    }
}


const refreshQty = (posicionArray, cantidad) => {

    console.log(posicionArray)
    console.log("Cantidad prefuncion: " + cantidad);


    let nuevoCantidad = objetos[posicionArray].cantidad++;
    console.log("cantidad postfunction: " + nuevoCantidad);

}


// Declaramos un array con objetos que utilizaremos en nuestra "tienda"
let objetos = [
    {
        id: "item1",
        pesoMb: 40.5,
        nombre: "Instagram",
        position: 0,
        added: false,
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
        pesoMb: 405,
        nombre: "LoveApp",
        position: 3,
        cantidad: 0

    },
    {
        id: "item5",
        pesoMb: 405,
        nombre: "iCloud",
        position: 4,
        cantidad: 0
    },
    {
        id: "item6",
        pesoMb: 405,
        nombre: "TikTok",
        position: 5,
        cantidad: 0
    },
    {
        id: "item7",
        pesoMb: 405,
        nombre: "LinkedIn",
        position: 6,
        cantidad: 0
    },
    {
        id: "item8",
        pesoMb: 405,
        nombre: "Messenger",
        position: 7,
        cantidad: 0
    },
    {
        id: "item9",
        pesoMb: 405,
        nombre: "Twitter",
        position: 8,
        cantidad: 0
    },
    {
        id: "item10",
        pesoMb: 405,
        nombre: "Telegram",
        position: 9,
        cantidad: 0
    },
    {
        id: "item11",
        pesoMb: 405,
        nombre: "Pinterest",
        position: 10,
        cantidad: 0
    },
    {
        id: "item12",
        pesoMb: 405,
        nombre: "Skype",
        position: 11,
        cantidad: 0
    },
    {
        id: "item13",
        pesoMb: 405,
        nombre: "VikApp",
        position: 12,
        cantidad: 0
    },
    {
        id: "item14",
        pesoMb: 405,
        nombre: "VSCode",
        position: 13,
        cantidad: 0
    },
    {
        id: "item15",
        pesoMb: 405,
        nombre: "Translate App",
        position: 14,
        cantidad: 0
    },
    {
        id: "item16",
        pesoMb: 405,
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


    // carritoPush(objetoDeseo.nombre, objetoDeseo.position);

    // console.log("soltando...", objetoDeseo.pesoMb);


    //Importante cambiar objetoDeseo.variable por el nombre que le asignamos dentro del objeto
    precioTotal += objetoDeseo.pesoMb;
    totalCarrito.innerHTML = `${precioTotal} MB`;

    // cantidadTotal += objetos[objetos.position].cantidad;
    // totalCantidadP.innerHTML = `${cantidadTotal}`; 

    // console.log(document.getElementById("id-cantidad"));


    refreshQty(objetoDeseo.position, objetoDeseo.cantidad);


    if (precioTotal > 1024) {

        let precioTotalGB = precioTotal / 1024;
        totalCarrito.innerHTML = `${Math.round((precioTotalGB + Number.EPSILON) * 100) / 100} GB`;
    }
};


const vaciarCarrito = () => {

    precioTotal = 0;
    totalCarrito.innerHTML = `${precioTotal} MB`;

    document.getElementById("itemListRight").innerHTML = "";

}