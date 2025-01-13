const express = require("express");
const router = express.Router();
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
const validateRequestInputs = require("../middlewares/validateRequestInputs");
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
} = require("../schema/requestAccounts");

// 로그인
router.post(
  "/sign-in",
  validateRequestInputs(createSigninTockenSchema),
  createSigninTocken
);

// 로그아웃
router.delete("/sign-out", deleteSigninTocken);

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
  "/:accountId(\\d)",
  validateRequestInputs(getAccountInfoSchema),
  getAccountInfo
);

// 회원정보 수정
router.put(
  "/:accountId(\\d)",
  validateRequestInputs(updateAccountSchema),
  updateAccountInfo
);

// 회원탈퇴
router.delete("/:accountId", validateRequestInputs(deleteAccountSchema), deleteAccount);

// 내 회원정보 조회
router.get("/", getMyAccountInfo);

// 회원가입
router.post("/", validateRequestInputs(createAccountSchema), createAccount);

// 내 회원정보 수정
router.put("/", validateRequestInputs(updateMyAccountSchema), updateMyAccount);

// 내 회원계정 탈퇴
router.delete("/", deleteMyAccount);

module.exports = router;
