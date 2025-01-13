const express = require("express");
const router = express.Router();
const {
  getCommentList,
  createComment,
  updateComment,
  deleteComment,
  createCommentLike,
  deleteCommentLike,
  createCommentDislike,
  deleteCommentDislike,
} = require("./controller");

// 댓글 조회
router.get("/", getCommentList);

// 댓글 쓰기
router.post("/", createComment);

// 댓글 수정
router.put("/:commentId", updateComment);

// 댓글 삭제
router.delete("/:commentId", deleteComment);

// 댓글 좋아요 추가
router.post("/:commentId/likes", createCommentLike);

// 댓글 좋아요 최소
router.delete("/:commentId/likes-cancel", deleteCommentLike);

// 댓글 싫어요 추가
router.post("/:commentId/dislikes", createCommentDislike);

// 댓글 싫어요 취소
router.delete("/:commentId/dislikes-cancel", deleteCommentDislike);

module.exports = router;
