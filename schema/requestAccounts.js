const {
  emailRegex,
  passwordRegex,
  nameRegex,
  phoneRegex,
  indexRegex,
  passwordChangeTockenRegex,
} = require("../constants/regexs");

const createAccountSchema = {
  email: {
    required: true,
    regex: emailRegex,
  },
  password: {
    required: true,
    regex: passwordRegex,
  },
  name: {
    required: true,
    regex: nameRegex,
  },
  phone: {
    required: true,
    regex: phoneRegex,
  },
};

const updateMyAccountSchema = {
  name: {
    required: true,
    regex: nameRegex,
  },
  phone: {
    required: true,
    regex: phoneRegex,
  },
};

const getAccountInfoSchema = {
  accountId: {
    required: true,
    regex: indexRegex,
  },
};

const updateAccountSchema = {
  accountId: {
    required: true,
    regex: indexRegex,
  },
  name: {
    required: true,
    regex: nameRegex,
  },
  phone: {
    required: true,
    regex: phoneRegex,
  },
};

const deleteAccountSchema = {
  accountId: {
    required: true,
    regex: indexRegex,
  },
};

const createSigninTockenSchema = {
  email: {
    required: true,
    regex: emailRegex,
  },
  password: {
    required: true,
    regex: passwordRegex,
  },
};

const getAccountIdSchema = {
  name: {
    required: true,
    regex: nameRegex,
  },
  phone: {
    required: true,
    regex: phoneRegex,
  },
};

const getAccountInfoForPasswordResetSchema = {
  email: {
    required: true,
    regex: emailRegex,
  },
  name: {
    required: true,
    regex: nameRegex,
  },
  phone: {
    required: true,
    regex: phoneRegex,
  },
};

const updateAccountPasswordSchema = {
  tocken: {
    required: true,
    regex: passwordChangeTockenRegex,
  },
  password: {
    required: true,
    regex: passwordRegex,
  },
};

module.exports = {
  createAccountSchema,
  updateMyAccountSchema,
  getAccountInfoSchema,
  updateAccountSchema,
  deleteAccountSchema,
  createSigninTockenSchema,
  getAccountIdSchema,
  getAccountInfoForPasswordResetSchema,
  updateAccountPasswordSchema,
};
