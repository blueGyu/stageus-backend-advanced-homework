const express = require("express");
const router = express.Router();
const validateRequestInputs = require("../middlewares/validateRequestInputs");
const verifyAuthentication = require("../middlewares/verifyAuthenticationHandler");
const verifyAuthorization = require("../middlewares/verifyAuthorizationHandler");
const {
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
} = require("./controller");
const {
  getArticleListSchema,
  getArticleListByKeywordSchema,
  getArticleSchema,
  createArticleSchema,
  updateArticleSchema,
  deleteArticleSchema,
  createArticleLikeSchema,
  deleteArticleLikeSchema,
  createArticleDislikeSchema,
  deleteArticleDislikeSchema,
} = require("./schema");



// 게시글 목록 검색
router.get(
  "/search",
  validateRequestInputs(getArticleListByKeywordSchema),
  getArticleListByKeyword
);

// 게시글 카테고리 목록 조회
router.get("/category", getArticleCategories);

// 게시글 좋아요 추가
router.post(
  "/:articleId/likes",
  verifyAuthentication,
  validateRequestInputs(createArticleLikeSchema),
  verifyAuthorization,
  createArticleLike
);

// 게시글 좋아요 취소
router.delete(
  "/:articleId/likes",
  verifyAuthentication,
  validateRequestInputs(deleteArticleLikeSchema),
  verifyAuthorization,
  deleteArticleLike
);

// 게시글 싫어요 추가
router.post(
  "/:articleId/dislikes",
  verifyAuthentication,
  validateRequestInputs(createArticleDislikeSchema),
  verifyAuthorization,
  createArticleDislike
);

// 게시글 싫어요 취소
router.delete(
  "/:articleId/dislikes",
  verifyAuthentication,
  validateRequestInputs(deleteArticleDislikeSchema),
  verifyAuthorization,
  deleteArticleDislike
);

// 게시글 조회
router.get("/:articleId", validateRequestInputs(getArticleSchema), getArticle);

// 게시글 수정
router.put(
  "/:articleId",
  verifyAuthentication,
  validateRequestInputs(updateArticleSchema),
  verifyAuthorization,
  updateArticle
);

// 게시글 삭제
router.delete(
  "/:articleId",
  verifyAuthentication,
  validateRequestInputs(deleteArticleSchema),
  verifyAuthorization,
  deleteArticle
);

// 게시글 목록 조회(전체, 카테고리)
router.get("/", validateRequestInputs(getArticleListSchema), getArticleList);

// 게시글 쓰기
router.post(
  "/",
  verifyAuthentication,
  validateRequestInputs(createArticleSchema),
  verifyAuthorization,
  createArticle);

module.exports = router;
