const express = require("express");
const router = express.Router();
const validateRequestInputs = require("../middlewares/validateRequestInputs");
const verifyAuthentication = require("../middlewares/verifyAuthenticationHandler");
const verifyAuthorization = require("../middlewares/verifyAuthorizationHandler");
const {
  getMyAccountInfo,
  createAccount,
  updateMyAccount,
  deleteMyAccount,
  getAccountInfo,
  updateAccountInfo,
  deleteAccount,
  createSigninTocken,
  deleteSigninTocken,
  getAccountId,
  getAccountInfoForPasswordReset,
  updateAccountPassword,
} = require("./controller");
const {
  createAccountSchema,
  updateMyAccountSchema,
  getAccountInfoSchema,
  updateAccountSchema,
  deleteAccountSchema,
  createSigninTockenSchema,
  getAccountIdSchema,
  getAccountInfoForPasswordResetSchema,
  updateAccountPasswordSchema,
} = require("./schema");

// 로그인
router.post(
  "/sign-in",
  validateRequestInputs(createSigninTockenSchema),
  createSigninTocken
);

// 로그아웃
router.delete("/sign-out", verifyAuthentication, deleteSigninTocken);

// 아이디 찾기
router.post("/find-id", validateRequestInputs(getAccountIdSchema), getAccountId);

// 비밀번호 찾기 - 회원여부 확인
router.post(
  "/forgot-password",
  validateRequestInputs(getAccountInfoForPasswordResetSchema),
  getAccountInfoForPasswordReset
);

// 비밀번호 찾기 - 비밀번호 변경
router.put(
  "/reset-password",
  validateRequestInputs(updateAccountPasswordSchema),
  updateAccountPassword
);

// 회원정보 조회
router.get(
  "/:accountId",
  verifyAuthentication,
  validateRequestInputs(getAccountInfoSchema),
  verifyAuthorization,
  getAccountInfo
);

// 회원정보 수정
router.put(
  "/:accountId",
  verifyAuthentication,
  validateRequestInputs(updateAccountSchema),
  verifyAuthorization,
  updateAccountInfo
);

// 회원탈퇴
router.delete(
  "/:accountId",
  verifyAuthentication,
  validateRequestInputs(deleteAccountSchema),
  verifyAuthorization,
  deleteAccount
);

// 내 회원정보 조회
router.get("/", verifyAuthentication, verifyAuthorization, getMyAccountInfo,);

// 신규 회원 생성
router.post(
  "/",
  verifyAuthentication,
  validateRequestInputs(createAccountSchema),
  verifyAuthorization,
  createAccount
);

// 내 회원정보 수정
router.put(
  "/",
  verifyAuthentication,
  validateRequestInputs(updateMyAccountSchema),
  verifyAuthorization,
  updateMyAccount);

// 내 회원계정 탈퇴
router.delete("/", verifyAuthentication, verifyAuthorization, deleteMyAccount);

module.exports = router;
