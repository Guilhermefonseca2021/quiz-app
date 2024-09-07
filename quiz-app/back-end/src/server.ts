import express, { Response, Request } from "express";
import routes from "./routes";
import connectToDatabase from "./db/db";
import { config } from "../src/utils/db";

const app = express();

app.use(routes);
app.use(express.json());

connectToDatabase()
  .then(() =>
    app.listen(config.port, () => console.log("server is running at port: ", config.port))
  )
  .catch((err) => console.log(err));
