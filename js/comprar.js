
/**Variables ____________________________________________________________*/

var uSD= 99.14;
var euro= 116.51;
var real= 18.47;

/**Funciones calculos sin impuestos distintas monedas*__________!NO REDONDEA LOS RESULTADOS_________/
/**USD */

var resultadoU=0; 
var cantidadU=0;


function calculosinImpuestoUs(cantidadU, resultadoU){
    var cantidadU= document.getElementById("txtUsd").value;
    var resultadoU= (uSD*cantidadU).toFixed(2);
    return resultadoU;
    }
   /**EU */
   var resultadoEuu=0; 
   var cantidadEuu=0;

   function calculosinImpuestoEu(cantidadEuu, resultadoEuu){
    var cantidadEuu= document.getElementById("txtEu").value;
    var resultadoEuu= (euro*cantidadEuu).toFixed(2);
    return resultadoEuu;
    }

   /**Real */
   var resultadoRel=0; 
   var cantidadRel=0;

   function calculosinImpuestoRel(cantidadRel, resultadoRel){
    var cantidadRel= document.getElementById("txtR").value;
    var resultadoRel= (real*cantidadRel).toFixed(2);
    return resultadoRel;
    }
/**Funciones calculos CON impuestos distintas monedas*__________!NO REDONDEA LOS RESULTADOS_________/
/**USD */
let resultadoIusd=0; 
let cantidadIusd=0;
let impuestoI=1.35;
let totalIu=0;

function calculoconImpuestoUs(cantidadIusd, resultadoIusd, impuestoI,totalIu){
    var cantidadIusd= document.getElementById("txtUsd").value;
    var resultadoIusd= uSD*cantidadIusd;
    var totalIu= (resultadoIusd *impuestoI).toFixed(2);
    return totalIu;
}
/**Euro */
let resultadoIeu=0; 
let cantidadIeu=0;
let totalIeu=0;

function calculoconImpuestoEu(cantidadIeu, resultadoIeu, impuestoI,totalIeu){
    var cantidadIeu= document.getElementById("txtEu").value;
    var resultadoIeu= euro*cantidadIeu;
    var totalIeu= (resultadoIeu *impuestoI).toFixed(2);
    return totalIeu;
}
/**Real */

let resultadoIre=0; 
let cantidadIre=0;
let totalIre=0;

function calculoconImpuestoRe(cantidadIre, resultadoIre, impuestoI,totalIre){
    var cantidadIre= document.getElementById("txtR").value;
    var resultadoIre= real*cantidadIre;
    var totalIre= (resultadoIre *impuestoI).toFixed(2);
    return totalIre;
}




/**Funciones para obtener los valores de los imputs ______________________________________*/

function beUs() {
    var txtUsd = parseFloat(null);
    txtUsd = parseFloat(document.getElementById("txtUsd").value);
        return document.getElementById('cantidadUsd').innerHTML =txtUsd;
      
    }

function beEu() {
    var txtEu = parseFloat(null);
    txtEu = parseFloat(document.getElementById("txtEu").value);
        return document.getElementById('cantidadEu').innerHTML =txtEu;
          
    }

    function beR() {
        var txtR = parseFloat(null);
        txtR = parseFloat(document.getElementById("txtR").value);
            return document.getElementById('cantidadR').innerHTML =txtR;
              
        }


/* Funciones Onclick___________________________________________________________________________*/
 
 var botonA= document.getElementById("botonA")
 var localUsdValueT=0
 
 botonA.onclick=()=>{ 
      botonA.innerHTML="Agregado al carrito";
      cantidadUsd.innerHTML =txtUsd.value;
      sinimpUsd.innerHTML=calculosinImpuestoUs(cantidadU, resultadoU);
      conimpUsd.innerHTML=calculoconImpuestoUs(cantidadIusd, resultadoIusd, impuestoI,totalIu);
      totalAcumulado.innerHTML=parseFloat(conimpUsd.innerHTML)+parseFloat(conimpEu.innerHTML)+parseFloat(conimpR.innerHTML);
      localStorage.setItem("localUsdValueT", JSON.stringify(conimpUsd.innerHTML));

 };

let botonB= document.getElementById("botonB")
botonB.onclick=()=>{ 
    botonB.innerHTML="Agregado al carrito";
    cantidadEu.innerHTML =txtEu.value;
    sinimpEu.innerHTML=calculosinImpuestoEu(cantidadEuu, resultadoEuu);
    conimpEu.innerHTML=calculoconImpuestoEu(cantidadIeu, resultadoIeu, impuestoI,totalIeu);
    totalAcumulado.innerHTML=parseFloat(conimpUsd.innerHTML)+parseFloat(conimpEu.innerHTML)+parseFloat(conimpR.innerHTML);
    localStorage.setItem("localEuValueT", JSON.stringify(conimpEu.innerHTML));
};


let botonC= document.getElementById("botonC")
botonC.onclick=()=>{
     botonC.innerHTML="Agregado al carrito";
    cantidadR.innerHTML =txtR.value
    sinimpR.innerHTML =calculosinImpuestoRel(cantidadRel, resultadoRel);
    conimpR.innerHTML =calculoconImpuestoRe(cantidadIre, resultadoIre, impuestoI,totalIre);
    totalAcumulado.innerHTML=parseFloat(conimpUsd.innerHTML)+parseFloat(conimpEu.innerHTML)+parseFloat(conimpR.innerHTML);
    localStorage.setItem("localRValueT", JSON.stringify(conimpR.innerHTML));
};

