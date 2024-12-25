const express = require("express");
const path = require("path");
const {
  checkAccount,
  createAccount,
  getUserInfo,
  getAccountId,
  getAccountPassword,
} = require("../apis/account.api");
const router = express.Router();

// 로그인
router.post("/signin", checkAccount);

// 회원가입
router.post("/signup", createAccount);

// 내 정보 보기
router.get("/:userId", getUserInfo);

// 아이디 찾기
router.post("/id", getAccountId);

// 비밀번호 찾기
router.post("/password", getAccountPassword);

module.exports = router;
