const tryCatchWrapper = require("../utils/customWrappers");
const { commonErrorResponse } = require("../utils/customResponse");

const validateRequestInputs = (schema) =>
  tryCatchWrapper((req, res) => {
    const inputData = { ...req.params, ...req.query, ...req.body };

    Object.keys(schema).forEach((key) => {
      const data = inputData[key];
      const schemaInfo = schema[key];

      // 필수값 + 정규식
      if (schemaInfo.required && !schemaInfo.regex.test(data)) {
        throw commonErrorResponse(400, "요청처리 실패. 입력값 오류.");
      }

      // 비필수값 + 기본값
      if (
        !schemaInfo.required &&
        schemaInfo.default &&
        (data === undefined || data === null)
      ) {
        if (key in req.params) {
          req.params[key] = schemaInfo.default;
        } else if (key in req.query) {
          req.query[key] = schemaInfo.default;
        } else if (key in req.body) {
          req.body[key] = schemaInfo.default;
        }
      }
    });
  });

module.exports = validateRequestInputs;
