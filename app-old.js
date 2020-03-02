const http = require('http');


http.createServer((req, resp) =>{
    resp.writeHead(200, {'Content-Type': 'application/json'});

    let salida ={
        nombre: 'Alvaro',
        Apellido: 'Trigo Martin',
        Edad: 42
    };
    
    resp.write(JSON.stringify(salida));
    resp.end();
} ).listen(8080);

console.log("Escuchando en el puerto 8080");