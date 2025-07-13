| Característica       | Array                          | Set                               | Map                                 |
|---|---|---|---|
| Tipo de colección    | Lista ordenada                 | Conjunto de valores únicos        | Pares clave-valor                   |
| Permite duplicados   | Sí ✅                             | No ❌                                | Sí ✅ (pero claves únicas)            |
| Orden de elementos   | Conservado                     | Conservado                         | Conservado                          |
| Acceso por índice    | Sí ✅ (`array[0]`)               | No ❌                                | No ❌(`map.get(key)` en su lugar)    |
| Claves               | Índices numéricos              | ❌No aplica                          | Cualquier tipo (obj, func, etc.)   |
| Iteración            | `for`, `forEach`, `map`, etc. | `forEach`, `for...of`              | `forEach`, `for...of`              |
| Métodos clave        | `push`, `pop`, `map`, `filter`| `add`, `delete`, `has`, `clear`    | `set`, `get`, `has`, `delete`, `clear` |
| Conversión a array   | ❌No necesario                   | `Array.from(set)` o `[...set]`     | `Array.from(map)` o `[...map]`     |
| Uso común            | Listas de datos ordenados      | Eliminar duplicados, colecciones únicas | Diccionarios, lookup tables     |
