var fs = require('fs');
var path = require('path');
 // PWD, Date, and Exit
exports.userIn = function(cmd, filename) {
  if (cmd === 'pwd') {
    return process.stdout.write(process.cwd());
  }
  if (cmd === 'date') {
    var intDate = new Date();
    var stringDate = intDate.toUTCString();
    return process.stdout.write(stringDate);
  }
  if (cmd === 'exit') {
    return process.exit();
  }
  if (cmd === 'ls') {
    //checks for errors
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
      })
    process.stdout.write('prompt > ');
    });
  }
  if (cmd === 'echo') {
    if (filename === '$PATH') {
      process.stdout.write(process.env.PATH)
    } else {
      process.stdout.write(args);
    }
  }
  if (cmd === 'cat') {
    fs.readFile(filename, (err, data) => {
      if (err) { throw err; };
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    });
  }
  if (cmd === 'head') {
    fs.readFile(filename, (err, data) => {
      if (err) { throw err; };
      var objKeys = Object.keys(data);
      var objArr = [];
      for (key of objKeys) {
        objArr.push(data[key]);
      }
      var firstTwo = objArr.slice(0, 2).join(' ');
      process.stdout.write(firstTwo);
      process.stdout.write('prompt > ');
    })
  }

};
