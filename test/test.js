var stdin = require("../index");

stdin(function(err, data) {
  if(err)
    console.error(err);
  else
    process.stdout.write("stdin: " + data);
});
