// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var io = require('socket.io');
var port = 1234;

// Start the server at port 1234
var server = http.createServer();

// Wait for a connection
server.listen(port);

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// To allow for use of command line
const { exec } = require('child_process');

// Add a connect listener
socket.on('connection', function(client){ 
    console.log('Connection to client established');

    // Receive code from client to create tree
    client.on('code',function(event){ 
        console.log('Received message from client!', event);
        
        var command = "../prob-seq -i _ --stb-output _";
        var x = exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              socket.emit('error', stderr);
              return;
            }
            console.log(`stdout: ${stdout}`);
            socket.emit('tree', stdout);
            console.log(`stderr: ${stderr}`);
        });
        x.stdin.write(event);
        x.stdin.end();
    });

    // Receive code from client to do sampling
    client.on('samples',function(event){
      console.log('Received message from client!', event);
        
        var command = "../prob-seq -i _ --sample 5";
        var x = exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              socket.emit('error', stderr);
              return;
            }
            console.log(`stdout: ${stdout}`);
            socket.emit('samples', stdout);
            console.log(`stderr: ${stderr}`);
        });
        x.stdin.write(event);
        x.stdin.end();
    });

    // Disconnect
    client.on('disconnect',function(){
        clearInterval(interval);
        console.log('Server has disconnected');
    });
});

console.log('Server running at http://127.0.0.1:' + port + '/');