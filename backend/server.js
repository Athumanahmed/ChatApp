const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/DB");
const cors = require("cors");

const app = express();
// Allow all origins and methods (for development, refine for production)
// app.use(cors());
const PORT = process.env.PORT || 8000;
dotenv.config();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(PORT, () => {
  connectDB();
  console.log(`SERVER STARTED ON PORT ${PORT}..`.cyan);
});
