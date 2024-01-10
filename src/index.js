const app = require('./app/app');

const port = process.env.PORT;

app.listen(port, () => {
    console.log('Servidor escuchando en http://localhost:' + port);
});