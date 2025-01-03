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
} = require("../controllers/comments.controller");
const tryCatchWrapper = require("../utils/customWrappers");

// 댓글 조회
router.get("/", tryCatchWrapper(getCommentList));

// 댓글 쓰기
router.post("/", tryCatchWrapper(createComment));

// 댓글 수정
router.put("/:commentId", tryCatchWrapper(updateComment));

// 댓글 삭제
router.delete("/:commentId", tryCatchWrapper(deleteComment));

// 댓글 좋아요 추가
router.post("/:commentId/likes", tryCatchWrapper(createCommentLike));

// 댓글 좋아요 최소
router.delete("/:commentId/likes-cancel", tryCatchWrapper(deleteCommentLike));

// 댓글 싫어요 추가
router.post("/:commentId/dislikes", tryCatchWrapper(createCommentDislike));

// 댓글 싫어요 취소
router.delete("/:commentId/dislikes-cancel", tryCatchWrapper(deleteCommentDislike));

module.exports = router;
