import { Request, Response } from "express";
import { failResponse, successResponse } from "./authRequestController";

const expenses = [
  {
    id: "1",
    type: "Grocery",
    date: "01-Apr-2023",
    amount: "15",
    description: "Grocery from RIMI",
  },
  {
    id: "2",
    type: "Lunch",
    date: "03-Apr-2023",
    amount: "20",
    description: "Lunch at Lido",
  },
  {
    id: "3",
    type: "Utility",
    date: "20-Apr-2023",
    amount: "35",
    description: "Electricity + Water",
  },
  {
    id: "4",
    type: "General",
    date: "03-May-2023",
    amount: "200",
    description: "Bank account opening charges",
  },
  {
    id: "5",
    type: "Vegetable",
    date: "25-May-2023",
    amount: "7",
    description: "From central market",
  },
  {
    id: "6",
    type: "Grocery",
    date: "26-May-2023",
    amount: "13",
    description: "Grocery from Maxima",
  },
];

const getAllExpenses = async (request: Request, resp: Response) => {
  console.log("getAllExpenses: start ");
  try {
    console.log("getAllExpenses: finish ");

    return resp
      .status(200)
      .json(successResponse("Get all Expenses.", { resources: expenses }));
  } catch (error: any) {
    console.log("getAllExpenses: exception " + error);
    return resp.status(500).send(failResponse(error.message));
  }
};

const getExpenseDetails = async (request: Request, resp: Response) => {
  console.log("getExpenseDetails: start ");
  try {
    const requestedId = request.query.id;
    console.log(requestedId);

    const expense = expenses.find((element) => element.id == requestedId);

    console.log("getExpenseDetails: finish ");
    return resp
      .status(200)
      .json(successResponse("Get Expense Details.", { resources: expense }));
  } catch (error: any) {
    console.log("getExpenseDetails: exception " + error);
    return resp.status(500).send(failResponse(error.message));
  }
};

export { getAllExpenses, getExpenseDetails };
