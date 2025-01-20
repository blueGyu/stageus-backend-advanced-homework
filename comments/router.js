const express = require("express");
const router = express.Router();
const validateRequestInputs = require("../middlewares/validateRequestInputs");
const verifyAuthentication = require("../middlewares/verifyAuthenticationHandler");
const verifyAuthorization = require("../middlewares/verifyAuthorizationHandler");
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

const {
  getCommentSchema,
  createCommentSchema,
  updateCommentSchema,
  deleteCommentSchema,
  createCommentLikeSchema,
  deleteCommentLikeSchema,
  createCommentDislikeSchema,
  deleteCommentDislikeSchema,
} = require("./schema");

// 댓글 좋아요 추가
router.post(
  "/:commentId(\\d)/likes",
  verifyAuthentication,
  validateRequestInputs(createCommentLikeSchema),
  verifyAuthorization,
  createCommentLike
);

// 댓글 좋아요 최소
router.delete(
  "/:commentId(\\d)/likes",
  verifyAuthentication,
  validateRequestInputs(deleteCommentLikeSchema),
  verifyAuthorization,
  deleteCommentLike
);

// 댓글 싫어요 추가
router.post(
  "/:commentId/dislikes",
  verifyAuthentication,
  validateRequestInputs(createCommentDislikeSchema),
  verifyAuthorization,
  createCommentDislike
);

// 댓글 싫어요 취소
router.delete(
  "/:commentId/dislikes",
  verifyAuthentication,
  validateRequestInputs(deleteCommentDislikeSchema),
  verifyAuthorization,
  deleteCommentDislike
);

// 댓글 수정
router.put(
  "/:commentId",
  verifyAuthentication,
  validateRequestInputs(updateCommentSchema),
  verifyAuthorization,
  updateComment)
;

// 댓글 삭제
router.delete(
  "/:commentId",
  verifyAuthentication,
  validateRequestInputs(deleteCommentSchema),
  verifyAuthorization,
  deleteComment
);

// 댓글 조회
router.get("/", validateRequestInputs(getCommentSchema), getCommentList);

// 댓글 쓰기
router.post(
  "/",
  verifyAuthentication,
  validateRequestInputs(createCommentSchema),
  verifyAuthorization,
  createComment
);

module.exports = router;
