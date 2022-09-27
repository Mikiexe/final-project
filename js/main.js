
// Recogemos el ID del boton que usaremos para vaciar y le añadimos un EventListener.
// Importante hacerlo con un callback a la función
let botonVaciar = document.getElementById("botonVaciar");
botonVaciar.addEventListener("click", () => { vaciarCarrito() });

//Recogemos el Id del elemento totalCarrito para poder interactuar con el mediante el DOM


let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} MB`;



let arrayCarrito = [

    {
        nombre: "Instagram",
        cantidad: 0,
        posicion: 0
    },
    {
        nombre: "Behance",
        cantidad: 0,
        posicion: 1
    },
    {
        nombre: "Github",
        cantidad: 0,
        posicion: 2
    },
    {
        nombre: "LoveApp",
        cantidad: 0,
        posicion: 3
    },
    {
        nombre: "iCloud",
        cantidad: 0,
        posicion: 4
    },
    {
        nombre: "TikTok",
        cantidad: 0,
        posicion: 5
    },
    {
        nombre: "LinkedIn",
        cantidad: 0,
        posicion: 6
    },
    {
        nombre: "Messenger",
        cantidad: 0,
        posicion: 7
    },
    {
        nombre: "Twitter",
        cantidad: 0,
        posicion: 8
    },
    {
        nombre: "Telegram",
        cantidad: 0,
        posicion: 9
    },
    {
        nombre: "Pinterest",
        cantidad: 0,
        posicion: 10
    },
    {
        nombre: "Skype",
        cantidad: 0,
        posicion: 11
    },

];

//               NOTA 26/09/22 
// He creado un Array de objetos fuera de la función porque me da problemas a la hora de crearla dentro de la función
// Ahora toca refinar la función para que actualice la cantidad de objetos que hemos metido dentro de la cesta
// Tendré que comprobar si la cantidad es 0 y sumarle 1. Si ya existe el objeto, restrinjo a la función addElement con un if()




const getPosition = (elementToFind, arrayElements) => {

    let i;
    for (i = 0; i < arrayElements.length; i += 1) {

        if (arrayElements[i] === elementToFind) {
            return i;
        }

    }
    console.log(i);
    return null; //not found
}


const carritoPush = (nameTxt) => {

    let posicion = 0;

    switch (nameTxt) {
        case "Instagram":
            posicion = 0;
            break;
        case "BeHance":
            posicion = 1;
            break;
    }


    if (arrayCarrito.some(nombre => nombre.nombre === nameTxt)) {

        arrayCarrito[posicion].cantidad++;
        console.log(arrayCarrito[0].cantidad);
    }
    // console.log(arrayCarrito[0].cantidad);


}


const addItemElement = (nameTxt) => {

    // Recogemos el div existente Item-list-right para poder insertarle el recien creado div newElement
    let itemListright = document.getElementById("itemListRight");

    // Creamos un elemento p para realizarle un append del contenido de nameTxt
    let textElement = document.createElement("p");
    textElement.append(nameTxt);


    // Creamos un elemento nuevo div padre y le asignamos los estilos css predefinidos. 
    // Lo indexamos dentro de la clase itemListRight.
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "item-list");
    itemListright.appendChild(newElement);


    //Crea ambos divs relativos al nombre de la app y la cantidad que hemos insertado
    let innerDiv1 = document.createElement("div");
    innerDiv1.setAttribute("class", "item-list-name");
    newElement.appendChild(innerDiv1);

    //Indexamos el nombre de la app dentro del div innerDiv1 que corresponde al nombre
    innerDiv1.append(textElement);


    let innerDiv2 = document.createElement("div");
    innerDiv2.setAttribute("class", "item-list-qty");
    newElement.appendChild(innerDiv2);


}



// Declaramos un array con objetos que utilizaremos en nuestra "tienda"
let objetos = [
    {
        id: "item1",
        pesoMb: 40.5,
        nombre: "Instagram"
    },
    {
        id: "item2",
        pesoMb: 54.2,
        nombre: "BeHance"
    },
    {
        id: "item3",
        pesoMb: 112.3,
        nombre: "GitHub"
    },
    {
        id: "item4",
        pesoMb: 405,
        nombre: "LoveApp"

    },
    {
        id: "item5",
        pesoMb: 405,
        nombre: "iCloud"
    },
    {
        id: "item6",
        pesoMb: 405,
        nombre: "TikTok"
    },
    {
        id: "item7",
        pesoMb: 405,
        nombre: "LinkedIn"
    },
    {
        id: "item8",
        pesoMb: 405,
        nombre: "Messenger"
    },
    {
        id: "item9",
        pesoMb: 405,
        nombre: "Twitter"
    },
    {
        id: "item10",
        pesoMb: 405,
        nombre: "Telegram"
    },
    {
        id: "item11",
        pesoMb: 405,
        nombre: "Pinterest"
    },
    {
        id: "item12",
        pesoMb: 405,
        nombre: "Skype"
    },
    {
        id: "item13",
        pesoMb: 405,
        nombre: "VikApp"
    },
    {
        id: "item14",
        pesoMb: 405,
        nombre: "VSCode"
    },
    {
        id: "item15",
        pesoMb: 405,
        nombre: "Translate App"
    },
    {
        id: "item16",
        pesoMb: 405,
        nombre: "YouTube"
    }
];




const drag = (ev) => {

    //Convierte a texto la ID del objeto que estemos arrastrando
    ev.dataTransfer.setData("text", ev.target.id);

    console.log("arrastrando...", ev.target.id);
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
    addItemElement(objetoDeseo.nombre);


    carritoPush(objetoDeseo.nombre);
    // console.log(arrayCarrito);

    //Asignamos a la variable data la ID del objeto donde "dropeamos"

    // ev.target.appendChild(document.getElementById(data));






    console.log("soltando...", objetoDeseo.pesoMb);


    //Importante cambiar objetoDeseo.variable por el nombre que le asignamos dentro del objeto
    precioTotal += objetoDeseo.pesoMb;

    totalCarrito.innerHTML = `${precioTotal} MB`;

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