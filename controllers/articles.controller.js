const { indexRegex, titleRegex, contentRegex } = require("../constants/regexs");
const { commonSuccessResponse, commonErrorResponse } = require("../utils/customResponse");

// 게시글 목록 조회
const getArticleList = (req, res) => {
  const { category } = req.query;

  // 데이터베이스 조회

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "게시글 목록 조회 결과 없음");

  commonSuccessResponse(res, 200, "게시글 목록 조회 성공", results);
};

// 게시글 목록 검색 조회
const getArticleListByKeyword = (req, res) => {
  const { type, keyword } = req.query;

  if (!indexRegex.test(type))
    throw commonErrorResponse(400, "게시글 검색 실패. 타입을 확인해주세요.");

  // 데이터베이스 조회

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "게시글 검색 결과 없음");

  commonSuccessResponse(res, 200, "게시글 검색 성공", results);
};

// 게시글 카테고리 조회
const getArticleCategories = (req, res) => {
  // 데이터베이스 조회

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "카테고리 목록 조회 결과 없음");

  commonSuccessResponse(res, 200, "카테고리 목록 조회 성공", results);
};

// 게시글 조회
const getArticle = (req, res) => {
  const { articleId } = req.params;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(400, "게시글 조회 실패. 게시글 번호를 확인해주세요.");

  // 데이터베이스 로직

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "게시글 조회 결과 없음");

  commonSuccessResponse(res, 200, "게시글 조회 성공", results);
};

// 신규 게시글 생성
const createArticle = (req, res) => {
  const { accountId, category, title, content } = req.body;

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "신규 게시글 생성 실패. 계정번호를 확인해주세요.");

  if (!indexRegex.test(category))
    throw commonErrorResponse(400, "신규 게시글 생성 실패. 카테고리를 확인해주세요.");

  if (!titleRegex.test(title))
    throw commonErrorResponse(400, "신규 게시글 생성 실패. 제목을 확인해주세요.");

  if (!contentRegex.test(content))
    throw commonErrorResponse(400, "신규 게시글 생성 실패. 내용을 확인해주세요.");

  // 데이터베이스 로직

  commonSuccessResponse(res, 200, "신규 게시글 생성 성공");
};

// 게시글 수정
const updateArticle = (req, res) => {
  const { articleId } = req.params;
  const { title, content } = req.body;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(400, "게시글 수정 실패. 게시글 번호를 확인해주세요.");

  if (!titleRegex.test(title))
    throw commonErrorResponse(400, "게시글 수정 실패. 제목을 확인해주세요.");

  if (!contentRegex.test(content))
    throw commonErrorResponse(400, "게시글 수정 실패. 내용을 확인해주세요.");

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "수정할 게시글 없음");

  commonSuccessResponse(res, 200, "게시글 수정 성공");
};

// 게시글 삭제
const deleteArticle = (req, res) => {
  const { articleId } = req.params;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(400, "게시글 삭제 실패. 게시글 번호를 확인해주세요.");

  // 데이터베이스 로직

  commonSuccessResponse(res, 200, "게시글 삭제 성공");
};

// 게시글 좋아요 추가
const createArticleLike = (req, res) => {
  const { articleId } = req.params;
  const { accountId } = req.body;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(
      400,
      "게시글 좋아요 추가 실패. 게시글 번호를 확인해주세요."
    );

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "게시글 좋아요 추가 실패. 계정번호를 확인해주세요.");

  // 데이터베이스 로직

  if (false)
    throw commonErrorResponse(
      404,
      "게시글 좋아요 추가 실패. 게시글이 존재하지 않습니다."
    );

  commonSuccessResponse(res, 200, "게시글 좋아요 추가 성공");
};

// 게시글 좋아요 취소
const deleteArticleLike = (req, res) => {
  const { articleId } = req.params;
  const { accountId } = req.body;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(
      400,
      "게시글 좋아요 취소 실패. 게시글 번호를 확인해주세요."
    );

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "게시글 좋아요 취소 실패. 계정번호를 확인해주세요.");

  // 데이터베이스 로직

  if (false)
    throw commonErrorResponse(
      404,
      "게시글 좋아요 취소 실패. 게시글이 존재하지 않습니다."
    );

  commonSuccessResponse(res, 200, "게시글 좋아요 취소 성공");
};

// 게시글 싫어요 추가
const createArticleDislike = (req, res) => {
  const { articleId } = req.params;
  const { accountId } = req.body;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(
      400,
      "게시글 싫어요 추가 실패. 게시글 번호를 확인해주세요."
    );

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "게시글 싫어요 추가 실패. 계정번호를 확인해주세요.");

  // 데이터베이스 로직

  if (false)
    throw commonErrorResponse(
      404,
      "게시글 싫어요 추가 실패. 게시글이 존재하지 않습니다."
    );

  commonSuccessResponse(res, 200, "게시글 싫어요 추가 성공");
};

// 게시글 싫어요 취소
const deleteArticleDislike = (req, res) => {
  const { articleId } = req.params;
  const { accountId } = req.body;

  if (!indexRegex.test(articleId))
    throw commonErrorResponse(
      400,
      "게시글 싫어요 취소 실패. 게시글 번호를 확인해주세요."
    );

  if (!indexRegex.test(accountId))
    throw commonErrorResponse(400, "게시글 싫어요 취소 실패. 계정번호를 확인해주세요.");

  // 데이터베이스 로직

  if (false)
    throw commonErrorResponse(
      404,
      "게시글 싫어요 취소 실패. 게시글이 존재하지 않습니다."
    );

  commonSuccessResponse(res, 200, "게시글 싫어요 취소 성공");
};

module.exports = {
  getArticleList,
  getArticleListByKeyword,
  getArticleCategories,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  createArticleLike,
  deleteArticleLike,
  createArticleDislike,
  deleteArticleDislike,
};
