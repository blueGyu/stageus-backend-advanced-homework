const tryCatchWrapper = require("../utils/customWrappers");
const { commonErrorResponse } = require("../utils/customResponse");

const verifyAuthorizationHandler = tryCatchWrapper((req, res, next) => {
  if ( req.session.account.role === "admin" && req.session.account ) {
    next();
    return;
  }

  if ( req.body.accountId !== req.session.account.accountId && req.session.account )
    throw commonErrorResponse(403, "요청처리 실패. 권한 없음");

  next();
});

module.exports = verifyAuthorizationHandler;