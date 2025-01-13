const express = require("express");
const router = express.Router();
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
const validateRequestInputs = require("../middlewares/validateRequestInputs");
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
} = require("../schema/requestArticles");

// 게시글 목록 조회(전체, 카테고리)
router.get("/", validateRequestInputs(getArticleListSchema), getArticleList);

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
  "/:articleId(\\d)/likes",
  validateRequestInputs(createArticleLikeSchema),
  createArticleLike
);

// 게시글 좋아요 취소
router.delete(
  "/:articleId(\\d)/likes",
  validateRequestInputs(deleteArticleLikeSchema),
  deleteArticleLike
);

// 게시글 싫어요 추가
router.post(
  "/:articleId(\\d)/dislikes",
  validateRequestInputs(createArticleDislikeSchema),
  createArticleDislike
);

// 게시글 싫어요 취소
router.delete(
  "/:articleId(\\d)/dislikes",
  validateRequestInputs(deleteArticleDislikeSchema),
  deleteArticleDislike
);

// 게시글 조회
router.get("/:articleId(\\d)", validateRequestInputs(getArticleSchema), getArticle);

// 게시글 수정
router.put("/:articleId(\\d)", validateRequestInputs(updateArticleSchema), updateArticle);

// 게시글 삭제
router.delete(
  "/:articleId(\\d)",
  validateRequestInputs(deleteArticleSchema),
  deleteArticle
);

// 게시글 쓰기
router.post("/", validateRequestInputs(createArticleSchema), createArticle);

module.exports = router;
