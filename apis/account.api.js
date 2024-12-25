const checkAccount = (req, res) => {
  const { id, password } = req.body;

  if (!id) {
    console.log(`there is no id in body`);
  }

  if (!password) {
    console.log(`there is no password in body`);
  }

  // 데이터베이스 로직 - 회원여부 검색

  // 결과값
  res.status(200).json({ result: "success", message: "this account is user" });
};

const createAccount = (req, res) => {
  const { id, password, passwordConfirm, name, phone, email } = req.body;

  if (!id) {
    console.log(`there is no id in body`);
  }

  if (!password) {
    console.log(`there is no password in body`);
  }

  if (!passwordConfirm) {
    console.log(`there is no passwordConfirm in body`);
  }

  if (passwordConfirm !== password) {
    console.log(`passwordComfirm doesnt match with password`);
  }

  if (!name) {
    console.log(`there is no name in body`);
  }

  if (!phone) {
    console.log(`there is no phone in body`);
  }

  if (!email) {
    console.log(`there is no email in body`);
  }

  // 데이터베이스 로직 - 회원가입

  // 결과값
  res.status(200).json({ result: "success", message: "success create user" });
};

const getUserInfo = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    console.log(`there is no user id in params`);
  }

  // 데이터베이스 로직 - 회원정보 검색

  // 결과값
  res.status(200).json({
    result: "success",
    data: { id: 1, name: "유저1", phone: "01012345678", email: "test@stageus.com" },
  });
};

const getAccountId = (req, res) => {
  const { name, phone, email } = req.body;

  if (!name) {
    console.log(`there is no name in body`);
  }

  if (!phone) {
    console.log(`there is no phone in body`);
  }

  if (!email) {
    console.log(`there is no email in body`);
  }

  // 데이터베이스 로직 - 회원 아이디 검색

  // 결과값
  res.status(200).json({ result: "success", data: { id: "test1" } });
};

const getAccountPassword = (req, res) => {
  const { id, name, phone, email } = req.body;

  if (!id) {
    console.log(`there is no id in body`);
  }

  if (!name) {
    console.log(`there is no name in body`);
  }

  if (!phone) {
    console.log(`there is no phone in body`);
  }

  if (!email) {
    console.log(`there is no email in body`);
  }

  // 데이터베이스 로직 - 회원정보 검색

  // 결과값
  res.status(200).json({ result: "success", data: { password: "test1234" } });
};

module.exports = {
  checkAccount,
  createAccount,
  getUserInfo,
  getAccountId,
  getAccountPassword,
};
