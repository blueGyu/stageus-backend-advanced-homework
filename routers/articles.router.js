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
} = require("../controllers/articles.controller");
const tryCatchWrapper = require("../utils/customWrappers");

// 게시글 목록 조회(전체, 카테고리)
router.get("/", tryCatchWrapper(getArticleList));

// 게시글 목록 검색
router.get("/search", tryCatchWrapper(getArticleListByKeyword));

// 게시글 카테고리 목록 조회
router.get("/category", tryCatchWrapper(getArticleCategories));

// 게시글 조회
router.get("/:articleId", tryCatchWrapper(getArticle));

// 게시글 쓰기
router.post("/", tryCatchWrapper(createArticle));

// 게시글 수정
router.put("/:articleId", tryCatchWrapper(updateArticle));

// 게시글 삭제
router.delete("/:articleId", tryCatchWrapper(deleteArticle));

// 게시글 좋아요 추가
router.post("/:articleId/likes", tryCatchWrapper(createArticleLike));

// 게시글 좋아요 취소
router.delete("/:articleId/likes-cancel", tryCatchWrapper(deleteArticleLike));

// 게시글 싫어요 추가
router.post("/:articleId/dislikes", tryCatchWrapper(createArticleDislike));

// 게시글 싫어요 취소
router.delete("/:articleId/dislikes-cancel", tryCatchWrapper(deleteArticleDislike));

module.exports = router;
