function calculadora(){


var cadena="";
var cadenaAux="";
var operator;
var teclas = document.getElementsByClassName("tecla");

/*generalizando animacion de boton*/
for (var i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("mousedown",function(){
    this.style.webkitTransform = "scale(0.93)";
  });
  teclas[i].addEventListener("mouseup",function(){
    this.style.webkitTransform = "scale(1)";
  });
}

/*eventos a cada elemento*/
document.getElementById("on").addEventListener("click", function(){
  putOnScreen("0");
  cadenaAux="";
  cadena="";
});
document.getElementById("sign").addEventListener("click", function(){
  var n = parseInt(cadena);
  var nn = n*-1;
  cadena=nn;
  putOnScreen();

});

/*EVETOS OPERACIONES*/
document.getElementById("mas").addEventListener("click", function(){
  preOperation(1); display.textContent = "+";
});
document.getElementById("menos").addEventListener("click", function(){
  preOperation(2); display.textContent = "-";
});
document.getElementById("por").addEventListener("click", function(){
  preOperation(3);display.textContent = "*";
});
document.getElementById("dividido").addEventListener("click", function(){
  preOperation(4); display.textContent = "/";
});

document.getElementById("igual").addEventListener("click", function(){
  operation(operator,parseFloat(cadenaAux),parseFloat(cadena));
  putOnScreen(cadenaAux);
});

/*EVENTOS NUMEROS*/
document.getElementById("punto").addEventListener("click", function(){
  validate(".");
});
document.getElementById("1").addEventListener("click", function(){
  validate("1");
});
document.getElementById("2").addEventListener("click", function(){
  validate("2");
});
document.getElementById("3").addEventListener("click", function(){
  validate("3");
});
document.getElementById("4").addEventListener("click", function(){
  validate("4");
});
document.getElementById("5").addEventListener("click", function(){
  validate("5");
});
document.getElementById("6").addEventListener("click", function(){
  validate("6");
});
document.getElementById("7").addEventListener("click", function(){
  validate("7");
});
document.getElementById("8").addEventListener("click", function(){
  validate("8");
});
document.getElementById("9").addEventListener("click", function(){
  validate("9");
});
document.getElementById("0").addEventListener("click", function(){
  validate("0");
});
var display = document.getElementById("display");

/*generalizando operaciones*/
var preOperation = function(c){

 if (cadenaAux=="") {
   cadenaAux=cadena;
 }
 operator = c;
 cadena="";
 putOnScreen();

};

var operation = function(c,pCantidad,sCantidad){

var cad;

  switch (c) {
    case 1:
    cad = pCantidad + sCantidad;
      break;
    case 2:
      cad = pCantidad - sCantidad;
      break;
    case 3:
      cad = pCantidad * sCantidad;
      break;
    case 4:
      cad = pCantidad / sCantidad;
      break;
  }

cadenaAux = cad.toString();
};



/*funcion auxiliar actualizar la pantalla es algo repetitivo asi que lo generalice*/
var putOnScreen = function(c){
  if (c) {
    display.textContent = c.slice(0,10);
  }else{
    display.textContent = cadena.slice(0,10);
  }
};

/*funcion auxiliar validar el largo de cadena es algo repetitivo lo generalice y aisle*/
var  validate = function(c){

  if (cadena.length>=9) {/*primer condicional: la cadena no puede llevar mas de 10 caracteres*/
    return;
  }else{
    if (cadena=="0"&&c.includes("0")) {/*segundo condicional: valido si la cadena esta vacia y si se ingresa 0*/
      putOnScreen("0");
      return;
    }else{
      if (c.includes(".")) {/*tercer condicional: valido si se ingresa un punto*/
        if (cadena=="0") {
          cadena="0.";
        }else{
          if (!cadena.includes(".")) {/*cuarto condicional: valido si la cadena ya tiene un punto*/
            cadena+=c;
          }else{
            return;
          }
        }
      }else{
        cadena+=c;
      }
    }

  }
  putOnScreen();
};
}
calculadora();
