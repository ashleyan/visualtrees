// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var io = require('socket.io');
var port = 1234;
//var z; //************ CHECK ****************//

// Start the server at port 1234
var server = http.createServer();

server.listen(port);

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// exec function
const { exec } = require('child_process');

// Add a connect listener
socket.on('connection', function(client){ 
    console.log('Connection to client established');

    // Success!  Now listen to messages to be received
    client.on('message',function(event){ 
        console.log('Received message from client!',event);
        
        var command = "../prob-seq -i _ --stb-output _";
        var x = exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            // send message to client
            socket.emit('message', stdout);
            console.log(`stderr: ${stderr}`);
        });
        x.stdin.write(event);
        x.stdin.end();

    });

    client.on('disconnect',function(){
        clearInterval(interval);
        console.log('Server has disconnected');
    });
});

console.log('Server running at http://127.0.0.1:' + port + '/');
