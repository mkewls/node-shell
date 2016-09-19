var command = require('./commands.js')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  // receive space-delimited string
  var dataArr = data.toString().trim().split(' ');
  // Handle user input through command methods
  var cmd = dataArr[0].toString();
  var filename = dataArr.slice(1).join(' ');
  command.userIn(cmd, filename);

  // next prompt
  var timeOut = setTimeout(function() {
  	process.stdout.write('\nprompt > ');
  }, 0);
  if(cmd === 'ls' || cmd === 'cat' || cmd === 'head' || cmd === 'tail') {
  	clearTimeout(timeOut);
  }

});
