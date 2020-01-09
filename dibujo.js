var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);  //sin parentesis deja al escuchador que llame a la funciona solo cuando de click, si la funcion tiene  () se ejecuta inmediatament

var d = document.getElementById ("dibujito");
var lienzo = d.getContext ("2d");
var ancho = d.with;
var alto = d.hight;




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial, yinicial);
    lienzo.lineTo (xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{

    var lineas = parseInt (texto.value);
    alert ("lineas:" + lineas);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA"
    var espacio = ancho / lineas;

    for (l=0; l < lineas ; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);

        dibujarLinea (colorcito, 0,yi,xf,300);
        console.log ("linea "+ l);
    }

  //  do {
  //      x1 = 10 * (l+1);
  //      y1 = 10* (l+1);
  //      dibujarLinea (colorcito, x1,0,300,y1);
  //      l++;
  //  } while (l< lineas);

     dibujarLinea (colorcito,1,1,1,299);
     dibujarLinea (colorcito,1,299,299,299);
}
