import express, { Response, Request } from "express";
import routes from "./routes";
import connectToDatabase from "./db/db";

const app = express();

app.use(routes);
app.use(express.json());

connectToDatabase()
  .then(() =>
    app.listen(3333, () => console.log("server is running at port: ", 3333))
  )
  .catch((err) => console.log(err));
