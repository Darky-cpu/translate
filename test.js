const Translate = require("./src/Translate");

var options = {
  text: 'Hello World!'
}

Translate(options, function(err, data) {
  console.log(data);
});
