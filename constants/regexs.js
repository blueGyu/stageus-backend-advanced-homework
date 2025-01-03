const indexRegex = /^\d+$/;
const nameRegex = /^[ㄱ-힣a-zA-Z0-9]{1,10}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(010|011|017)\d{4}\d{4}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]{2,})(?!.*\s).{8,32}$/;

module.exports = {
  indexRegex,
  nameRegex,
  emailRegex,
  phoneRegex,
  passwordRegex,
};
