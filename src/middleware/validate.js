let data = ["body", "params", "query"];

export const validation = (schema) => {
  return (req, res, next) => {
   
    let copy = { ...req.body, ...req.params, ...req.query };

    let checkValidation = schema.validate(copy, { abortEarly: false });

    if (checkValidation.error) {
      const errMessage = checkValidation.error.details.map(
        (err) => err.message
      );
      res.json({ message: "error", errMessage });
    } else {
      next();
    }
  };
};
