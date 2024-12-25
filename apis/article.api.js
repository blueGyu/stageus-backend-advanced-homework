const getArticleList = (req, res) => {
  const { category, type, search } = req.query;

  if (category) {
    // 카테고리 쿼리스트링이 있는 경우
    console.log(category);
    // 데이터베이스 로직 - 해당 카데고리 게시글 리스트 검색
    console.log("has category query string");
  } else if (type && search) {
    // 검색 쿼리스트링이 있는 경우
    console.log(type);
    console.log(search);
    // 데이터베이스 로직 - 해당 단어 포함 게시글 리스트 검색
    console.log("has search query string");
  }

  // 없는 경우
  // 데이터베이스 로직 - 전체 게시글 리스트 검색

  // 결과값
  res.json({
    result: "success",
    data: [
      { id: 1, title: "테스트 api", author: "유저1" },
      { id: 2, title: "테스트 api2", author: "유저2" },
    ],
  });
};

const getArticleCategories = (req, res) => {
  // 데이터베이스 로직 - 카테고리 검색

  // 결과값
  res.json({
    result: "success",
    data: [
      { id: 1, name: "공지사항" },
      { id: 2, name: "스테이지어스" },
    ],
  });
};

const getArticle = (req, res) => {
  const { articleId } = req.params;

  if (!articleId) {
    console.log("there is no article id in params");
  }

  // 데이터베이스 로직 - 게시글 검색

  // 결과값
  res.json({
    result: "success",
    data: { id: 1, title: "테스트 api", content: "대충 테스트 api 설명글" },
  });
};

const createArticle = (req, res) => {
  const { title, userId, content } = req.body;

  if (!title) {
    console.log("there is no title in body");
  }

  if (!userId) {
    console.log("there is no author id in body");
  }

  if (!content) {
    console.log("there is no content in body");
  }

  // 멱등키 확인 및 추가 로직

  // 데이터베이스 로직 - 게시글 생성

  // 결과값
  res.status(200).json({ result: "success", message: "success insert new article" });
};

const updateArticle = (req, res) => {
  const { articleId } = req.params;
  const { title, content } = req.body;

  if (!articleId) {
    console.log("there is no article id in params");
  }

  if (!title) {
    console.log("there is no title in body");
  }

  if (!content) {
    console.log("there is no content in body");
  }

  // 데이터베이스 로직 - 게시글 업데이트

  // 결과값
  res
    .status(200)
    .json({ result: "success", message: `success update article id: ${articleId}` });
};

const deleteArticle = (req, res) => {
  const { articleId } = req.params;

  if (!articleId) {
    console.log("there is no article id in params");
  }

  // 데이터베이스 로직 - 해당 아이디 게시글 삭제

  // 결과값
  res
    .status(200)
    .json({ result: "success", message: `success delete article id: ${articleId}` });
};

const updateArticleLikes = (req, res) => {
  const { articleId, userId } = req.params;

  if (!articleId) {
    console.log("there is no article id in params");
  }

  if (!userId) {
    console.log("there is no article id in params");
  }

  // 데이터베이스 로직 - 해당 아이디 게시글 좋아요 인서트 업데이트

  // 결과값
  res.status(200).json({
    result: "success",
    message: `success update article id: ${articleId} likes`,
  });
};

const updateArticleDislikes = (req, res) => {
  const { articleId, userId } = req.params;

  if (!articleId) {
    console.log("there is no article id in params");
  }

  if (!userId) {
    console.log("there is no article id in params");
  }

  // 데이터베이스 로직 - 해당 아이디 게시글 좋아요 취소 업데이트

  // 결과값
  res.status(200).json({
    result: "success",
    message: `success update article id: ${articleId} dislike`,
  });
};

module.exports = {
  getArticleList,
  getArticleCategories,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  updateArticleLikes,
  updateArticleDislikes,
};
