const express = require("express");
const branchRoutes = require("./routes/branch.router.js");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const _config = require("./config/config");
const ErrorHandler = require("./middlewares/errorHandler.middleware.js");
const app = express();
const PORT = _config.port || 3000;
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Branch Directory API",
      version: "1.0.0",
      description: "API to search, sort, and paginate branches",
    },
  },
  apis: ["./routes/*.js"],
};
app.use(cors());
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use("/api/branches", branchRoutes);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
