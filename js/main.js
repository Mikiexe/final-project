
// Recogemos el ID del boton que usaremos para vaciar y le añadimos un EventListener.
// Importante hacerlo con un callback a la función
let botonVaciar = document.getElementById("botonVaciar");
botonVaciar.addEventListener("click", () => { vaciarCarrito() });


//Recogemos el Id del elemento carrito para poder interactuar con el mediante el DOM


let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} MB`;


// Declaramos un array con objetos que utilizaremos en nuestra "tienda"
let objetos = [
    {
        id: "item1",
        pesoMb: 40.5
    },
    {
        id: "item2",
        pesoMb: 54.2
    },
    {
        id: "item3",
        pesoMb: 112.3
    },
    {
        id: "item4",
        pesoMb: 405
    },
    {
        id: "item5",
        pesoMb: 405
    },
    {
        id: "item6",
        pesoMb: 405
    },
    {
        id: "item7",
        pesoMb: 405
    },
    {
        id: "item8",
        pesoMb: 405
    },
    {
        id: "item9",
        pesoMb: 405
    },
    {
        id: "item10",
        pesoMb: 405
    },
    {
        id: "item11",
        pesoMb: 405
    },
    {
        id: "item12",
        pesoMb: 405
    },
    {
        id: "item13",
        pesoMb: 405
    },
    {
        id: "item14",
        pesoMb: 405
    },
    {
        id: "item15",
        pesoMb: 405
    },
    {
        id: "item16",
        pesoMb: 405
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


    //Asignamos a la variable data la ID del objeto donde "dropeamos"

    let data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));


    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

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

}