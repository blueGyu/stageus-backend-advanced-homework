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
const validateRequestInputs = require("../middlewares/validateRequestInputs");
const {
  getCommentSchema,
  createCommentSchema,
  updateCommentSchema,
  deleteCommentSchema,
  createCommentLikeSchema,
  deleteCommentLikeSchema,
  createCommentDislikeSchema,
  deleteCommentDislikeSchema,
} = require("../schema/requestComments");

// 댓글 좋아요 추가
router.post(
  "/:commentId(\\d)/likes",
  validateRequestInputs(createCommentLikeSchema),
  createCommentLike
);

// 댓글 좋아요 최소
router.delete(
  "/:commentId(\\d)/likes",
  validateRequestInputs(deleteCommentLikeSchema),
  deleteCommentLike
);

// 댓글 싫어요 추가
router.post(
  "/:commentId(\\d)/dislikes",
  validateRequestInputs(createCommentDislikeSchema),
  createCommentDislike
);

// 댓글 싫어요 취소
router.delete(
  "/:commentId(\\d)/dislikes",
  validateRequestInputs(deleteCommentDislikeSchema),
  deleteCommentDislike
);

// 댓글 수정
router.put("/:commentId(\\d)", validateRequestInputs(updateCommentSchema), updateComment);

// 댓글 삭제
router.delete(
  "/:commentId(\\d)",
  validateRequestInputs(deleteCommentSchema),
  deleteComment
);

// 댓글 조회
router.get("/", validateRequestInputs(getCommentSchema), getCommentList);

// 댓글 쓰기
router.post("/", validateRequestInputs(createCommentSchema), createComment);

module.exports = router;
