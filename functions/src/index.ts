import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";
import {
  getAllExpenses,
  getExpenseDetails,
} from "./controller/expenseRequestController";
import { login } from "./controller/authRequestController";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.status(200).send("Hello, Server is up and running!");
});

app.post("/login", login);
app.get("/getAllExpenses", getAllExpenses);
app.get("/getExpenseDetails", getExpenseDetails);

exports.app = functions.https.onRequest(app);
