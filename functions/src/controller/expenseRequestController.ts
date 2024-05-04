import { Request, Response } from "express";
import { failResponse, successResponse } from "./authRequestController";

const getAllExpenses = async (request: Request, resp: Response) => {
  console.log("getAllExpenses: start ");
  try {
    console.log("getAllExpenses: finish ");

    return resp
      .status(200)
      .json(successResponse("Get all Expenses.", { resources: null }));
  } catch (error: any) {
    console.log("getAllExpenses: exception " + error);
    return resp.status(500).send(failResponse(error.message));
  }
};

export { getAllExpenses as getAllExpenses };
