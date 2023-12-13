import express, { urlencoded } from "express";
import router from "./routes/index.js";
import { db } from "./config/mongoose.js";
const app = express();
const PORT = 3200;

// app.use(urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log("server is running in port :3200"));
app.use("/", router);
