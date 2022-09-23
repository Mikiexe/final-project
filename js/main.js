
let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} MB`;

let objetos = [
    {
        id: "item1",
        pesoMb: 405,
    },
    {},
    {}
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
};