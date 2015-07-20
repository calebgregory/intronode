var fs = require('fs');

module.exports = function() {
  print();
  process.exit(1);
};

function print() {
  var options = {encoding: 'utf-8'};
  var msg = fs.readFileSync('./app/help_message.txt', options);
  process.stdout.write(msg);
};

