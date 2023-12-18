const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/routes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swaggerOptions");
const connectToDatabase = require("./Database/db");
const db = connectToDatabase();
const cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.json());

// Initialize swagger-jsdoc
const specs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", routes);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
