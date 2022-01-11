const carrito1= document.getElementById("carrito1");
if (localStorage.getItem("localUsdValueT") === null) {
    carrito1.innerText=0;
  }else {
carrito1.innerText=JSON.parse(localStorage.getItem("localUsdValueT"));
  };

const carrito2= document.getElementById("carrito2");
if (localStorage.getItem("localEuValueT") === null) {
    carrito2.innerText=0;
}else{
carrito2.innerText=JSON.parse(localStorage.getItem("localEuValueT"));
};


const carrito3= document.getElementById("carrito3");
if (localStorage.getItem("localRValueT") === null) {
    carrito3.innerText=0;
}else{
carrito3.innerText=JSON.parse(localStorage.getItem("localRValueT"));
};

//** Total Carrito________________________________________________________________*/

const total= document.getElementById("total");

total.innerText= (parseFloat(carrito1.innerText)+parseFloat(carrito2.innerText)+parseFloat(carrito3.innerText)).toFixed(2);



//** Vaciar Carrito________________________________________________________________*/

var botonA= document.getElementById("botonVaciar")
 var localUsdValueT=0
 
 botonVaciar.onclick=()=>{ 
    carrito1.innerText=0;
    carrito2.innerText=0;
    carrito3.innerText=0;
    total.innerText=0;
    
    if(localStorage) { 

        localStorage.clear()  
     } 

 };
