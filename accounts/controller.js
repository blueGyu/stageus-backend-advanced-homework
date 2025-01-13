const {
  indexRegex,
  nameRegex,
  emailRegex,
  phoneRegex,
  passwordRegex,
} = require("../constants/regexs");
const { commonSuccessResponse, commonErrorResponse } = require("../utils/customResponse");
const tryCatchWrapper = require("../utils/customWrappers");

// 신규회원 생성
const createAccount = tryCatchWrapper((req, res) => {
  const { email, password, name, phone } = req.body;

  if (!emailRegex.test(email))
    throw commonErrorResponse(400, "신규 회원 생성 실패. 이메일을 확인해주세요.");

  if (!passwordRegex.test(password))
    throw commonErrorResponse(400, "신규 회원 생성 실패. 비밀번호를 확인해주세요.");

  if (!nameRegex.test(name))
    throw commonErrorResponse(400, "신규 회원 생성 실패. 이름을 확인해주세요.");

  if (!phoneRegex.test(phone))
    throw commonErrorResponse(400, "신규 회원 생성 실패. 전화번호를 확인해주세요.");

  // 데이터베이스 로직

  commonSuccessResponse(res, 200, "신규 회원 생성 성공");
});

// 회원정보 조회
const getAccountInfo = tryCatchWrapper((req, res) => {
  const { accountId } = req.params;

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "회원 정보 조회 실패. 회원번호를 확인해주세요.");

  // 데이터베이스 로직

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "회원 정보 조회 결과 없음");

  commonSuccessResponse(res, 200, "회원 정보 조회 성공", results);
});

// 회원정보 수정
const updateAccountInfo = tryCatchWrapper((req, res) => {
  const { accountId } = req.params;
  const { name, phone } = req.body;

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "회원 정보 수정 실패. 회원번호를 확인해주세요.");

  if (!nameRegex.test(name))
    throw commonErrorResponse(400, "회원 정보 수정 실패. 이름을 확인해주세요.");

  if (!phoneRegex.test(phone))
    throw commonErrorResponse(400, "회원 정보 수정 실패. 전화번호를 확인해주세요.");

  // 데이터베이스 로직

  commonSuccessResponse(res, 200, "회원 정보 수정 성공");
});

// 회원 탈퇴
const deleteAccount = tryCatchWrapper((req, res) => {
  const { accountId } = req.params;

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "회원 탈퇴 실패. 회원번호를 확인해주세요.");

  // 데이터베이스 로직

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "회원 정보 조회 결과 없음");

  commonSuccessResponse(res, 200, "회원 탈퇴 성공");
});

// 로그인
const createAccountSession = tryCatchWrapper((req, res) => {
  const { email, password } = req.body;

  if (!emailRegex.test(email))
    throw commonErrorResponse(400, "로그인 실패. 이메일을 확인해주세요.");

  if (!passwordRegex.test(password))
    throw commonErrorResponse(400, "로그인 실패. 비밀번호를 확인해주세요.");

  // 데이터베이스 로직
  // 세션 또는 토큰 생성 로직

  commonSuccessResponse(res, 200, "로그인 성공");
});

// 로그아웃
const deleteAccountSession = tryCatchWrapper((req, res) => {
  // 헤더에서 세션 또는 바디에서 토큰 확인 로직
  const results = false;
  if (results)
    throw commonErrorResponse(404, "로그아웃 실패. 로그인 정보 확인할 수 없습니다.");

  // 세션 또는 토큰 비활성화 로직

  commonSuccessResponse(res, 200, "로그아웃 성공");
});
// 아이디 찾기
const getAccountId = tryCatchWrapper((req, res) => {
  const { name, phone } = req.body;

  if (!nameRegex.test(name))
    throw commonErrorResponse(400, "아이디 찾기 실패. 이름을 확인해주세요.");

  if (!phoneRegex.test(phone))
    throw commonErrorResponse(400, "아이디 찾기 실패. 전화번호를 확인해주세요.");

  // 데이터베이스 로직

  const results = { email: "test@test.com" };
  if (!results.email)
    throw commonErrorResponse(404, "아이디 찾기 실패. 이름을 확인해주세요.");

  commonSuccessResponse(res, 200, "아이디 찾기 성공", results);
});

// 비밀번호 찾기 - 회원여부 확인
const getAccountInfoForPasswordReset = tryCatchWrapper((req, res) => {
  const { email, name, phone } = req.body;

  if (!emailRegex.test(email))
    throw commonErrorResponse(400, "회원여부 조회 실패. 이메일을 확인해주세요.");

  if (!nameRegex.test(name))
    throw commonErrorResponse(400, "회원여부 조회 실패. 이름을 확인해주세요.");

  if (!phoneRegex.test(phone))
    throw commonErrorResponse(400, "회원여부 조회 실패. 전화번호를 확인해주세요.");

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "회원여부 조회 실패. 회원 정보가 없습니다.");

  // 토근 생성

  commonSuccessResponse(res, 200, "회원여부 확인 성공", {
    reset: true,
    tocken: "aadsf1341qfasdfasd13dsfasdf",
  });
});
// 비밀번호 찾기 - 비밀번호 변경
const updateAccountPassword = tryCatchWrapper((req, res) => {
  const { tocken, password } = req.body;

  // 토큰 확인 로직

  if (false) throw commonErrorResponse(403, "비밀번호 변경 실패. 토큰이 만료되었습니다.");

  if (!passwordRegex.test(password))
    throw commonErrorResponse(400, "비밀번호 변경 실패. 비밀번호를 확인해주세요.");

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "비밀번호 변경 실패. 회원정보가 없습니다.");

  commonSuccessResponse(res, 200, "비밀번호 변경 성공");
});

module.exports = {
  createAccount,
  getAccountInfo,
  updateAccountInfo,
  deleteAccount,
  createAccountSession,
  deleteAccountSession,
  getAccountId,
  getAccountInfoForPasswordReset,
  updateAccountPassword,
};
