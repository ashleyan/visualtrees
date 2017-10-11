// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var io = require('socket.io');
var port = 1234;

// Start the server at port 1234
var server = http.createServer();

server.listen(port);

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function(client){ 
    console.log('Connection to client established');

    // Success!  Now listen to messages to be received
    client.on('message',function(event){ 
        console.log('Received message from client!',event);
    });

    client.on('disconnect',function(){
        clearInterval(interval);
        console.log('Server has disconnected');
    });
});

console.log('Server running at http://127.0.0.1:' + port + '/');




// can make 'cat' and 'hi' represented by variables
// then use them in the above functions to allow client to use
const { exec } = require('child_process');
// anonymous function: doesn't have a name ; only using it once
var x = exec('cat', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
x.stdin.write('hi');
x.stdin.end();

