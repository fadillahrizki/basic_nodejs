import express from "express";
import Routes from "./routes/Routes.js";
import UserRoutes from "./routes/UserRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

mongoose.connect('mongodb://localhost:27017/basics_nodejs');

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(Routes);
app.use(UserRoutes);
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));