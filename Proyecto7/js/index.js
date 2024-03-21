
        let resultado = document.getElementById('resultado'); 

        function asignar(valor){
            //ShortHand 
            resultado.value +=valor;
        }

        //Arrow Function se asigna la función a una variable
        let calcular = () => {
            resultado.value = eval(resultado.value); //eval: recibe una cadena y la evalua como una expresion matematica
        }
        // function calcular(){
        //    resultado.value = eval(resultado.value); //eval: recibe una cadena y la evalua como una expresion matematica
        // }


        function limpiar(){
            resultado.value = '';
        }
        
        function cuadrado(){
            resultado.value = Math.pow(resultado.value,2);
        }

        function cubo(){
            resultado.value = Math.pow(resultado.value,3);
        }

        function raiz(){
            resultado.value = Math.sqrt(resultado.value);
        }

        function pi(){
            resultado.value = resultado.value + Math.PI;

        }

        //4 funciones de calculadora cientifica
        //Funciones nombradas (funciones normales)
        //Funcion ARROW (flecha) se asigna la función a una variable