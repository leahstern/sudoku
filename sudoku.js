var exports = module.exports = {};

var prompt = require('prompt');

var properties = [
    {
      name: 'line1',
      validator: /\d\d\d\d\d\d\d\d\d/,
      warning: 'Must be a string of 9 integers, 0-9.'
    },
  ];

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Line 1 ' + result.line1);
  console.log('  Line 2: ' + result.line2);
  console.log('  Line 3: ' + result.line3);

});

function onErr(err) {
  console.log(err);
  return 1;
}
