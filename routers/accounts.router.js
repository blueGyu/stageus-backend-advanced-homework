const express = require("express");
const router = express.Router();
const {
  createAccount,
  getAccountInfo,
  updateAccountInfo,
  deleteAccount,
  createAccountSession,
  deleteAccountSession,
  getAccountId,
  getAccountInfoForPasswordReset,
  updateAccountPassword,
} = require("../controllers/accounts.controller");
const tryCatchWrapper = require("../utils/customWrappers");

// 회원가입
router.post("/", tryCatchWrapper(createAccount));

// 로그인
router.post("/sign-in", tryCatchWrapper(createAccountSession));

// 로그아웃
router.delete("/sign-out", tryCatchWrapper(deleteAccountSession));

// 회원정보 조회
router.get("/:accountId", tryCatchWrapper(getAccountInfo));

// 회원정보 수정
router.put("/:accountId", tryCatchWrapper(updateAccountInfo));

// 회원탈퇴
router.delete("/:accountId", tryCatchWrapper(deleteAccount));

// 아이디 찾기
router.post("/find-id", tryCatchWrapper(getAccountId));

// 비밀번호 찾기 - 회원여부 확인
router.post("/forgot-password", tryCatchWrapper(getAccountInfoForPasswordReset));

// 비밀번호 찾기 - 비밀번호 변경
router.patch("/reset-password", tryCatchWrapper(updateAccountPassword));

module.exports = router;
