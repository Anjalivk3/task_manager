const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const taskRoutes = require("./routes/task.routes");
dotenv.config();

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);



app.listen(process.env.PORT, () => {
  console.log(`TaskManager Server is running on port ${process.env.PORT}`);
});
