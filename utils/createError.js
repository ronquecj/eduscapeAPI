const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  console.log(err);
  return err;
};

export default createError;
