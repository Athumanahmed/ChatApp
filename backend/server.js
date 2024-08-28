import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cookieParser from "cookie-parser";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

import { ConnectDB } from "./config/DB.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/messages", MessageRoutes);

app.listen(PORT, () => {
  ConnectDB();
  console.log(`SERVER RUNNING ON PORT ${PORT}`.bgMagenta);
});
