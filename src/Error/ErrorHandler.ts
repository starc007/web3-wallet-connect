export const ErrorHandler = (error: any) => {
  let msg = "";
  if (error.code === 4001) {
    msg = "Request rejected. Please accept to continue.";
  } else if (error.code === 4100) {
    msg = "Account is inaccessible. Please unlock your account.";
  } else if (error.code === 4902) {
    msg = "Network is not supported. Please add the network manually.";
  } else if (error.code === -32002) {
    msg =
      "Network switch request is already pending, please approve the request on your wallet.";
  } else if (error.code === "SERVER_ERROR") {
    msg = "Please switch network in your wallet manually.";
  } else {
    msg = "error: " + error.message || "Something is wrong. Try reloading!";
  }
  return msg;
};
