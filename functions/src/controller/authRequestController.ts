import { Request, Response } from "express";
import { IsDefined, validate } from "class-validator";
import { Expose, plainToClass } from "class-transformer";

// Login Request -Start
enum LoginState {
  VALID_USER = "Login success",
  USER_NOT_FOUND = "User not found",
  PASSWORD_INCORRECT = "Incorrect Password",
  MORE_THAN_ONE_ACCOUNT = "Something went wrong. More than one account exists.",
  PLEASE_TRY_AGAIN = "Something went wrong. Please try again",
}

// Login RQ
class LoginRQDto {
  @IsDefined()
  @Expose()
  username: string;
  @IsDefined()
  @Expose()
  password: string;
}

const login = async (request: Request, resp: Response) => {
  console.log("login: start ");
  try {
    const conversionResult = await validateAndConvert(LoginRQDto, request.body);

    if (conversionResult.error) {
      return resp.status(500).send(failResponse(conversionResult.error));
    }
    console.log("login: conversion pass");

    const { username, password } = conversionResult.data;
    let loginState = "";
    const userObject = {
      username: "",
      password: "",
      name: "",
    };

    if (username.length >= 3 && password.length >= 3) {
      loginState = LoginState.VALID_USER;

      userObject.username = username;
      userObject.password = password;
      userObject.name = username;
    } else {
      loginState = LoginState.USER_NOT_FOUND;
    }
    console.log("login: finish ");

    return resp.status(200).json(successResponse(loginState, userObject));
  } catch (error: any) {
    console.log("login: exception " + error);
    return resp.status(500).send(failResponse(error.message));
  }
};

// Function to create success response object
const successResponse = function (msg: string, response: any) {
  return {
    status: 200,
    message: msg,
    data: response,
  };
};

// Function to create success response object
const failResponse = function (msg: string) {
  return {
    status: 500,
    message: msg,
  };
};

class ValidationResult {
  data: any;
  error: any;
}

async function validateAndConvert(classToConvert: any, body: string) {
  const result = new ValidationResult();
  result.data = plainToClass(classToConvert, body);
  await validate(result.data, { skipMissingProperties: true }).then(
    (errors) => {
      // errors is an array of validation errors
      // TODO Need to correct below loop
      if (errors.length > 0) {
        // const errorTexts = [];
        // for (const errorItem of errors) {
        //   if (errorItem.constraints) {
        //     errorTexts.push(errorItem.constraints);
        //   }
        //   if (errorItem.children) {
        //     for (const errorChildren of errorItem.children) {
        //       if (errorChildren.constraints) {
        //         errorTexts.push(errorChildren.constraints);
        //       }

        //       if (errorChildren.children) {
        //         for (const errorSubChild of errorChildren.children) {
        //           if (errorSubChild.constraints) {
        //             errorTexts.push(errorSubChild.constraints);
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
        // result.error = errorTexts;
        result.error = errors.toString();
        console.log("validateAndConvert: error: " + errors);
        return result;
      } else {
        return result;
      }
    }
  );
  return result;
}

export { login, successResponse, failResponse };
