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
} = require("./controller");

// 회원가입
router.post("/", createAccount);

// 로그인
router.post("/sign-in", createAccountSession);

// 로그아웃
router.delete("/sign-out", deleteAccountSession);

// 회원정보 조회
router.get("/:accountId", getAccountInfo);

// 회원정보 수정
router.put("/:accountId", updateAccountInfo);

// 회원탈퇴
router.delete("/:accountId", deleteAccount);

// 아이디 찾기
router.post("/find-id", getAccountId);

// 비밀번호 찾기 - 회원여부 확인
router.post("/forgot-password", getAccountInfoForPasswordReset);

// 비밀번호 찾기 - 비밀번호 변경
router.patch("/reset-password", updateAccountPassword);

module.exports = router;
