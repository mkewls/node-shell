var command = require('./commands.js')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  // Handle user input through command methods
  command.userIn(cmd);

  // next prompt
  var timeOut = setTimeout(function() {
  	process.stdout.write('\nprompt > ');
  }, 0);
  if(cmd === 'ls') {
  	clearTimeout(timeOut);
  }

});
