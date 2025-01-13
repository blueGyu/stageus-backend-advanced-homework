const { commonErrorResponse } = require("../utils/customResponse");
const tryCatchWrapper = require("../utils/customWrappers");

// 댓글 목록 조회
const getCommentList = tryCatchWrapper((req, res) => {
  const { articleId } = req.query;

  // 데이터베이스 로직

  const results = [];
  if (results.length < 1) throw commonErrorResponse(404, "댓글 목록 조회 결과 없음");

  res.status(200).json({
    message: "요청 처리 성공",
    results,
  });
});

// 신규 댓글 생성
const createComment = tryCatchWrapper((req, res) => {
  const { parentType, parentId, accountId, content } = req.body;

  // 데이터베이스 로직

  if (false)
    throw commonErrorResponse(
      404,
      "신규 댓글 생성 실패. 게시글 또는 상위 댓글이 없습니다."
    );

  res.status(200).json({
    message: "요청 처리 성공",
  });
});

// 댓글 수정
const updateComment = tryCatchWrapper((req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  // 데이터베이스 로직

  if (false)
    throw commonErrorResponse(404, "댓글 수정 실패. 게시글 또는 상위 댓글이 없습니다.");

  res.status(200).json({
    message: "요청 처리 성공",
  });
});

// 댓글 삭제
const deleteComment = tryCatchWrapper((req, res) => {
  const { commentId } = req.params;

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "댓글 삭제 실패. 댓글이 없습니다.");

  res.status(200).json({
    message: "요청 처리 성공",
  });
});

// 댓글 좋아요 추가
const createCommentLike = tryCatchWrapper((req, res) => {
  const { commentId } = req.params;
  const { accountId } = req.body;

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "댓글 좋아요 추가 실패. 댓글이 없습니다.");

  res.status(200).json({
    message: "요청 처리 성공",
  });
});
// 댓글 좋아요 취소
const deleteCommentLike = tryCatchWrapper((req, res) => {
  const { commentId } = req.params;
  const { accountId } = req.body;

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "댓글 좋아요 취소 실패. 댓글이 없습니다.");

  res.status(200).json({
    message: "요청 처리 성공",
  });
});

// 댓글 싫어요 추가
const createCommentDislike = tryCatchWrapper((req, res) => {
  const { commentId } = req.params;
  const { accountId } = req.body;

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "댓글 싫어요 추가 실패. 댓글이 없습니다.");

  res.status(200).json({
    message: "요청 처리 성공",
  });
});

// 댓글 싫어요 취소
const deleteCommentDislike = tryCatchWrapper((req, res) => {
  const { commentId } = req.params;
  const { accountId } = req.body;

  // 데이터베이스 로직

  if (false) throw commonErrorResponse(404, "댓글 싫어요 취소 실패. 댓글이 없습니다.");

  res.status(200).json({
    message: "요청 처리 성공",
  });
});

module.exports = {
  getCommentList,
  createComment,
  updateComment,
  deleteComment,
  createCommentLike,
  deleteCommentLike,
  createCommentDislike,
  deleteCommentDislike,
};
