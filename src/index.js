const swaggerUi = require('swagger-ui-express');
const express = require('express');
// const { readFile } = require('fs/promises');

const swaggerDocs = require('./swagger.json');

require('express-async-errors');

const errorHandler = require('./app/middlewares/errorHandler');

const PORT = 3000;
const HOST = '0.0.0.0';

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', routes);
app.use(errorHandler);

app.listen(PORT, HOST, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
