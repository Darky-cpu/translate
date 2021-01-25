# Google Translate

# Installation

```
npm install g-translate
```

# Usages

### Import files

```js
const Translate = require("g-translate");
```

### Translate

```js
const options = {
  text: 'Text here',
  to: 'zh',
  from: 'en'
}

Translate(options, function(err, data) {
  if (err) throw err;
  console.log(data.text); // 在这打字
  console.log(data.from.lang); // English
  console.log(data.from.text); // Text here
});
```
