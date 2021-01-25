const request = require("request");
const { Languages } = require("./languages");

module.exports = function(options, func) {
    var suffix = options.suffix || 'com';
    var suffixes = ["com", "cn", "fr", "de"];
    
    if (!suffixes.includes(suffix)) new Error();
    
    var to = options.to || 'auto';
    var from = options.from || 'auto';
    var text = options.text;
    
    to = to.toLowerCase();
    from = from.toLowerCase();
    
    if (!to || !from || !text) new Error();
    
    if (!Languages.includes(to) || !Languages.includes(from)) new Error();
    
    text = text.replace(/\\/g, " ");
    
    var data = {
      suffix: null,
      client: 'gtx',
      url: 'https://translate.googleapis.',
      event: '/translate_a/single?client=',
      to: 'tl=' + to,
      sl: 'sl=' + from,
      dt: '&dt=t&q=',
      text: encodeURIComponent(text)
    }
    
    data.suffix = suffix.toLowerCase();
    var url = data.url + data.suffix + data.event + data.client + '&' + data.sl + '&' + data.to + data.dt + data.text;
    
    var returns = {
      text: null,
      from: {
        lang: null,
        text: null
      }
    };
    request(url, function(err, res, body) {
      if (err) func(err, null);
      body = eval(body);
      console.log(body);
      returns = {
        text: body[0][0][0],
        from: {
          lang: body[2],
          text: body[0][0][1]
        }
      }
      func(null, returns);
    });
  }
