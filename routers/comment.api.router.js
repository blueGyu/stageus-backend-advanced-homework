const express = require("express");
const path = require("path");
const {
  getCommentList,
  createComment,
  updateComment,
  deleteComment,
  updateCommentLikes,
  updateCommentDislikes,
} = require("../apis/comment.api");
const router = express.Router();

// 댓글 조회
router.get("/:articleId", getCommentList);

// 댓글 쓰기
router.post("/", createComment);

// 댓글 수정
router.patch("/:commentId", updateComment);

// 댓글 삭제
router.delete("/:commentId", deleteComment);

// 댓글 좋아요
router.put("/like/:commentId", updateCommentLikes);

// 댓글 좋아요 취소
router.patch("/dislike/:commentId", updateCommentDislikes);

module.exports = router;
