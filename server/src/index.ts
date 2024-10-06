import express, { Express } from "express";
import mongoose from "mongoose";

import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/financial-records", financialRecordRouter);

const mongoURI: string = "mongodb://0.0.0.0:27017/expenseTracker";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Failed to connect to DB");
  });

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
