const express = require("express");
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
const router = express.Router();

// 게시글 목록 조회(전체, 카테고리)
router.get("/", getArticleList);

// 게시글 목록 검색
router.get("/search", getArticleListByKeyword);

// 게시글 카테고리 목록 조회
router.get("/category", getArticleCategories);

// 게시글 조회
router.get("/:articleId", getArticle);

// 게시글 쓰기
router.post("/", createArticle);

// 게시글 수정
router.put("/:articleId", updateArticle);

// 게시글 삭제
router.delete("/:articleId", deleteArticle);

// 게시글 좋아요 추가
router.post("/:articleId/likes", createArticleLike);

// 게시글 좋아요 취소
router.delete("/:articleId/likes-cancel", deleteArticleLike);

// 게시글 싫어요 추가
router.post("/:articleId/dislikes", createArticleDislike);

// 게시글 싫어요 취소
router.delete("/:articleId/dislikes-cancel", deleteArticleDislike);

module.exports = router;
