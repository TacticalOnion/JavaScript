| Extensión | Significado             | Tipo de módulo     | Caso de uso común                                                   |
|---|---|---|---|
| `.js`     | Archivo JavaScript estándar | Depende de `"type"` en `package.json` (`module` o `commonjs`) | Uso general. Puede actuar como ESM o CommonJS según configuración.  |
| `.mjs`    | Módulo ECMAScript       | ESM (ECMAScript Module) | Para usar `import`/`export` sin depender de `package.json`. Ideal para proyectos ESM. |
| `.cjs`    | CommonJS                | CommonJS           | Para usar `require()` y `module.exports` incluso si `"type": "module"` está definido. |
| `.ts`     | TypeScript              | ESM o CommonJS     | Código JavaScript con tipado. Requiere transpilación con TypeScript. |
| `.jsx`    | JavaScript + JSX        | ESM (usualmente)   | Para proyectos React: permite escribir componentes con sintaxis JSX. |
| `.tsx`    | TypeScript + JSX        | ESM (usualmente)   | Para proyectos React con TypeScript y JSX.                          |
