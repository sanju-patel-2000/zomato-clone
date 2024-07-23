import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import { loginUser, registerUser } from "./controllers/userController.js";

// app config
const app = express();
const port = 4000;

// database connection
connectDb();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.post("/register", registerUser);
app.post("/login",loginUser)

app.get("/", (req, res) => {
  res.send("app is working");
});

// localhost server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
