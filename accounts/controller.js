const { commonErrorResponse } = require("../utils/customResponse");
const tryCatchWrapper = require("../utils/customWrappers");

const getMyAccountInfo = tryCatchWrapper((req, res) => {
  // 토큰확인

  // 데이터베이스 로직

  const result = {};
  if (result) throw commonErrorResponse(404, "회원 정보 조회 결과 없음");

  res.status(200).json({ message: "요청 처리 성공" });
});

// 신규회원 생성
const createAccount = tryCatchWrapper((req, res) => {
  const { email, password, name, phone } = req.body;

  // 데이터베이스 로직

  res.status(200).json({ message: "요청 처리 성공" });
});

const updateMyAccount = tryCatchWrapper((req, res) => {
  // 토큰확인
  const { name, phone } = req.body;

  // 데이터베이스 로직

  res.status(200).json({ message: "요청 처리 성공" });
});

const deleteMyAccount = tryCatchWrapper((req, res) => {
  // 토큰확인

  // 데이터베이스 로직

  res.status(200).json({ message: "요청 처리 성공" });
});

// 회원정보 조회
const getAccountInfo = tryCatchWrapper((req, res) => {
  const { accountId } = req.params;

  // 데이터베이스 로직

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "회원 정보 조회 결과 없음");

  res.status(200).json({ message: "요청 처리 성공", results });
});

// 회원정보 수정
const updateAccountInfo = tryCatchWrapper((req, res) => {
  const { accountId } = req.params;
  const { name, phone } = req.body;

  // 데이터베이스 로직

  res.status(200).json({ message: "요청 처리 성공" });
});

// 회원 탈퇴
const deleteAccount = tryCatchWrapper((req, res) => {
  const { accountId } = req.params;

  // 데이터베이스 로직

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "회원 정보 조회 결과 없음");

  res.status(200).json({ message: "요청 처리 성공" });
});

// 로그인
const createSigninTocken = tryCatchWrapper((req, res) => {
  const { email, password } = req.body;

  // 데이터베이스 로직
  if (false) throw commonErrorResponse(404, "요청처리 실패. 조회 결과 없음")

  // 가짜 세션 생성
  req.session.account = {accountId: 1, role: "user"}

  res.status(200).json({ message: "요청 처리 성공" });
});

// 로그아웃
const deleteSigninTocken = tryCatchWrapper((req, res) => {
  console.log(req.session)
  req.session.destroy(err => {
    if (err) throw commonErrorResponse(500, "서버 에러")
    res.clearCookie('session-cookie');
    res.status(200).json({ message: "요청 처리 성공" });
  })
});

// 아이디 찾기
const getAccountId = tryCatchWrapper((req, res) => {
  const { name, phone } = req.body;

  // 데이터베이스 로직

  const results = { email: "test@test.com" };
  if (!results.email)
    throw commonErrorResponse(404, "아이디 찾기 실패. 이름을 확인해주세요.");

  res.status(200).json({ message: "요청 처리 성공", results });
});

// 비밀번호 찾기 - 회원여부 확인
const getAccountInfoForPasswordReset = tryCatchWrapper((req, res) => {
  const { email, name, phone } = req.body;

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "회원여부 조회 실패. 회원 정보가 없습니다.");

  // 토근 생성

  res.status(200).json({ message: "요청 처리 성공" });
});

// 비밀번호 찾기 - 비밀번호 변경
const updateAccountPassword = tryCatchWrapper((req, res) => {
  const { tocken, password } = req.body;

  // 토큰 확인 로직

  if (false) throw commonErrorResponse(403, "비밀번호 변경 실패. 토큰이 만료되었습니다.");

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "비밀번호 변경 실패. 회원정보가 없습니다.");

  res.status(200).json({ message: "요청 처리 성공" });
});

module.exports = {
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
};
