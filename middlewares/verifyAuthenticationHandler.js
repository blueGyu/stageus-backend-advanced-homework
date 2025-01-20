const tryCatchWrapper = require("../utils/customWrappers");
const { commonErrorResponse } = require("../utils/customResponse");

const verifyAuthenticationHandler = tryCatchWrapper((req, res, next) => {
  if ( !req.session.account ) throw commonErrorResponse(401, "요청처리 실패. 로그인 필요.");

  next();
});

module.exports = verifyAuthenticationHandler;