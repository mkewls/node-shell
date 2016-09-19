var fs = require('fs');
 // PWD, Date, and Exit
exports.userIn = function(cmd) {
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
    //clearTimeout(timeOut);
  }

};
