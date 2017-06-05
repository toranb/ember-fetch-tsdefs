# type defs for ember-fetch

## install

open the tsconfig.json file and add this to your paths

```js
{
  "compilerOptions": {
    "target": "es2015",
    "module": "es2015",
    "moduleResolution": "node",
    "paths": {
      "app/*": ["app/*"],
      "fetch": ["node_modules/ember-fetch-tsdefs/index.d.ts"]
    }
  },
  "include": [
    "**/*.ts"
  ]
}
```
