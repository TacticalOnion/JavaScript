| Tipo de Error     | Descripción breve                                             | Sintaxis de uso                             |
|---|---|---|
| `Error           | Clase base para todos los errores                             | `throw new Error("Mensaje de error")`       |
| `TypeError`       | Operación sobre un valor del tipo incorrecto                  | `throw new TypeError("Tipo inválido")`      |
| `ReferenceError`  | Acceso a una variable no definida                             | `throw new ReferenceError("No definido")`   |
| `SyntaxError`     | Error de sintaxis en el código                                | `throw new SyntaxError("Error de sintaxis")`|
| `RangeError`      | Valor fuera de un rango válido                                | `throw new RangeError("Fuera de rango")`    |
| `EvalError`       | Uso incorrecto de `eval()` (poco común hoy)                   | `throw new EvalError("Error de eval")`      |
| `URIError`        | Uso inválido de funciones URI (`decodeURI`, `encodeURI`)     | `throw new URIError("URI malformado")`      |
