const express = require("express");
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
} = require("../ccontroller/account.controller");
const router = express.Router();

// 회원가입
router.post("/", createAccount);

// 회원 정보 조회
router.get("/:userId", getAccountInfo);

// 회원 정보 수정
router.post("/:userId", updateAccountInfo);

// 회원탈퇴
router.delete("/:userId", deleteAccount);

// 로그인
router.post("/sign-in", createAccountSession);

// 로그아웃
router.delete("/sign-out", deleteAccountSession);

// 아이디 찾기
router.post("/find-id", getAccountId);

// 비밀번호 변경 전 사용자 확인
router.post("/forgot-password", getAccountInfoForPasswordReset);

// 비밀번호 변경
router.patch("/reset-password", updateAccountPassword);

module.exports = router;
