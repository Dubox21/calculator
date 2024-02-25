import Big from 'big.js';
import Operators from './Operators';
import isNumber from './isNumber';

export default function Operations(state, nameButton) {

    if (nameButton === "AC") { //para reiniciar el value
        return {
            total: null,
            next: null,
            operator: null
        }
    }

    if (isNumber(nameButton)) { //verifica si nameButton es un número
        //Si nameButton es "0" y el state state.next también es "0", devuelve un objeto vacío.
        if (nameButton === "0" && state.next === "0") return {}
        if (state.operator) { //verifica si hay un operador almacenado en el state state. Esto indica que se ha seleccionado un operador para realizar una operación.
            //verifica si hay algo almacenado en la propiedad next del state state. Si state.next ya contiene algún valor, significa que se ha ingresado un número previamente y se está construyendo un segundo número.
            if (state.next) return { next: state.next + nameButton }
            return { next: nameButton }
        }
        if (state.next) { //verifica si hay algún valor presente en la variable state.next. Esto indica que ya se ha ingresado un número anteriormente.
            const next = state.next === "0" ? nameButton : state.next + nameButton
            return { next, total: null }
        }
        return { next: nameButton, total: null } //next contendrá el valor de nameButton, total: Esta propiedad se establece en null. Esto significa que total no contiene ningún valor en este momento
    }

    if (nameButton === "%") { //Esta línea verifica si el botón presionado es el botón de porcentaje "%".

        if (state.operator && state.next) { //verifica si ya hay un operador seleccionado (state.operator) y si también hay un número ingresado (state.next).

            const result = Operators(state.total, state.next, state.operator) //Si ambas condiciones se cumplen, se calcula el resultado de la operación utilizando la función Operators con los valores presentes
            const percentage = Big(result).div(Big("100")).toFixed(0); //Después de obtener el resultado de la operación, se calcula el porcentaje dividiendo el resultado entre 100 utilizando Big.js
            const totalWithPercentage = Big(state.total).plus(percentage).toFixed(0); //Finalmente, se suma el porcentaje al total actual. Se utiliza Big.js para crear un objeto Big con el total actual (state.total), luego se le suma el porcentaje calculado en el paso anterior utilizando el método plus() de Big.js

            return {
                total: totalWithPercentage, //El resultado de la operación se divide por 100 utilizando Big("100") para obtener el porcentaje del resultado, y luego se convierte a una cadena de texto utilizando toString(). Este valor se asigna a total
                next: null,
                operator: null,
            }
        } if (state.next) { // verifica si hay un valor válido en state.next
            return {
                next: Big(state.next).div(Big("100")).toString(),
            }
        }

        return {};  //si no hay un valor válido en state.next, se devuelve un objeto vacío {}
    }

    if (nameButton === ".") {
        if (state.next) {
            if (state.next.includes(".")) return {} //Esta condición verifica si el número actual en state.next ya contiene un punto decimal.
            return { next: state.next + "." }
        }
        return { next: "0." } //establece state.next en "0.", lo que significa que el usuario ha empezado a ingresar un nuevo número que comienza con "0."
    }

    if (nameButton === "=") { //verifica si el botón presionado es el botón de igual.
        if (state.next && state.operator) {
            return {
                total: Operators(state.total, state.next, state.operator),
                next: null,
                operator: null
            }
        }
        return {}
    }

    if (nameButton === "+/-") {
        if (state.next) return { next: (-1 * parseFloat(state.next).toString()) } //Si hay un número en state.next, se convierte el valor de state.next a un número flotante (parseFloat(state.next)), luego se multiplica por -1 para cambiar el signo
        if (state.total) return { total: -1 * parseFloat(state.total).toString() }
        return {}
    }

    if (state.operator) { //verifica si ya hay un operador almacenado en el state state
        return {
            total: Operators(state.next, state.total, state.operator), // Esto se hace para calcular el resultado de la operación anterior antes de continuar con la nueva operación.
            next: null,
            operator: nameButton
        }
    }

    //verifica si state.next no está definido o es igual a null, undefined
    if (!state.next) return { operator: nameButton }

    return {
        total: state.next, //Aquí, se asigna el valor actual de state.next a la propiedad total
        next: null, //Esto indica que no hay ningún número ingresado actualmente. se hace para preparar next para la entrada de un nuevo número después de realizar esta operación.
        operator: nameButton // Finalmente, se asigna el valor de nameButton a la propiedad operator
    }
}