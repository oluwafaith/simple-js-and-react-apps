  import joi from "joi";

  function signupSchema(data) {
      const schemaData = joi.object({
          email: joi.string().email().lowercase().required(),
          password: joi.string().min(2).required(),
          user_token: joi.string(),
          is_active: joi.boolean(),
      });
      return schemaData.validate(data);
  }

export default signupSchema;
    // "type": "module",