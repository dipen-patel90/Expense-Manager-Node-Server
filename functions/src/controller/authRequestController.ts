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

export { successResponse, failResponse };
