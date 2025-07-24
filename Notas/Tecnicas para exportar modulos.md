| Técnica                          | Sintaxis (Exportar)                              | Sintaxis (Importar)                                 | Caso de uso común                                                    |
|---|---|---|---|
| **Exportación por defecto**      | `export default valor;`                          | `import algo from './modulo.js';`                   | Cuando el módulo exporta solo una cosa principal (función, clase, etc.) |
| **Exportación nombrada**         | `export const x = 1;` o `export function f() {}` | `import { x, f } from './modulo.js';`               | Cuando el módulo exporta múltiples entidades                         |
| **Exportar al final del archivo**| `const x = 1; function f() {}` <br>`export { x, f };` | `import { x, f } from './modulo.js';`          | Agrupar varias exportaciones en una sola línea                       |
| **Importar todo como objeto**    | —                                                | `import * as util from './modulo.js';`              | Cuando quieres agrupar todo bajo un namespace (`util.f()`)          |
| **Renombrar al importar**        | —                                                | `import { x as valorX } from './modulo.js';`        | Evitar conflictos o hacer nombres más claros                         |
| **Renombrar al exportar**        | `const x = 1;` <br>`export { x as valorX };`     | `import { valorX } from './modulo.js';`             | Exponer con un nombre distinto al interno del archivo                |
| **Combinación default + nombrados** | `export default función;` <br>`export const x = 1;` | `import fn, { x } from './modulo.js';`         | Cuando el módulo tiene una principal + otras utilidades secundarias  |
