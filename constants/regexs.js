const indexRegex = /^\d+$/;
const nameRegex = /^[ㄱ-힣a-zA-Z0-9]{1,10}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(010|011|017)\d{4}\d{4}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]{2,})(?!.*\s).{8,32}$/;
const titleRegex = /^.{1,100}$/;
const contentRegex = /^.{1,1000}$/;
const parentTypeRegex = /^(article|comment)$/;
const queryRegex = /^[a-zA-Z0-9가-힣]{1,10}$/;
const bodyRegex = /^.{1,1000}$/;

module.exports = {
  indexRegex,
  nameRegex,
  emailRegex,
  phoneRegex,
  passwordRegex,
  titleRegex,
  contentRegex,
  parentTypeRegex,
  queryRegex,
  bodyRegex,
};
