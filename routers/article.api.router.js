const express = require("express");
const path = require("path");
const {
  getArticleList,
  getArticleCategories,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  updateArticleLikes,
  updateArticleDislikes,
} = require("../apis/article.api");
const router = express.Router();

// 게시글 목록 조회(전체, 카테고리, 검색)
router.get("/", getArticleList);

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

// 게시글 좋아요
router.patch("/:articleId/like/:userId", updateArticleLikes);

// 게시글 좋아요 취소
router.patch("/:articleId/dislike/:userId", updateArticleDislikes);

module.exports = router;
