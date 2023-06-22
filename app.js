import * as http from 'node:http'

const server = http.createServer((request, response) => {

    response.status = 200;
    response.statusMessage = "OK";
    response.header("Content-Type", "text/plain");
    response.write("Hello, World!");
    response.end();
});


server.listen(3000, hostname, () => {
    console.log('Сервер запущен по адресу http://127.0.01:3000');
  });