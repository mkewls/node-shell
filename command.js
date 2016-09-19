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
};
