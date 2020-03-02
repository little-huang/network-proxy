let cmd = require('node-cmd');
  
cmd.run('touch example.created.file');
  
cmd.get(
  'ls',
  function(err, data, stderr){
    console.log('the current dir contains these files :\n\n',data)
  }
);