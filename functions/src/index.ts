import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";
import { getAllExpenses } from "./controller/expenseRequestController";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.status(200).send("Hello, Server is up and running!");
});

app.get("/getAllExpenses", getAllExpenses);

exports.app = functions.https.onRequest(app);
