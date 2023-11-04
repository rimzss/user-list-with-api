const express = require("express");
const cors = require("cors");

const { logger } = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");

const PORT = 8008;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// api/users
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server is listening at ${PORT} port`));
