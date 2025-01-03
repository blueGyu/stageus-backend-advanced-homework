// 댓글 조회
const getCommentList = (req, res) => {
  const articleId = req.params;

  if (!articleId) {
    console.log(`there is no article id in params`);
  }

  // 데이터베이스 로직 - 해당 게시글에 속한 댓글 검색

  // 결과값
  res.status(200).json({
    result: "success",
    data: [
      { id: 1, content: "테스트1 댓글", userId: 1, username: "유저1" },
      { id: 2, content: "테스트2 댓글", userId: 2, username: "유저2" },
    ],
  });
};

// 댓글 쓰기
const createComment = (req, res) => {
  const { content, userId } = req.body;

  if (!content) {
    console.log(`there is no content in body`);
  }

  if (!userId) {
    console.log(`there is no userId in body`);
  }

  // 멱등키 조회 및 추가 로직

  // 데이터베이스 로직 - 댓글 생성

  // 결과값
  res.status(200).json({ result: "success", message: "success create comment" });
};

// 댓글 수정
const updateComment = (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  if (!commentId) {
    console.log(`there is no comment id in params`);
  }

  if (!content) {
    console.log(`there is no content in body`);
  }

  // 데이터베이스 로직 - 댓글 수정

  // 결과값
  res.status(200).json({ result: "success", message: "success update comment" });
};

// 댓글 삭제
const deleteComment = (req, res) => {
  const { commentId } = req.params;

  if (!commentId) {
    console.log(`there is no comment id in params`);
  }

  // 데이터베이스 로직 - 댓글 삭제

  // 결과값
  res.status(200).json({ result: "success", message: "success delete comment" });
};

// 댓글 좋아요
const updateCommentLikes = (req, res) => {
  const { commentId } = req.params;

  if (!commentId) {
    console.log(`there is no comment id in params`);
  }

  // 데이터베이스 로직 - 댓글 좋아요 업데이트

  // 결과값
  res.status(200).json({ result: "success", message: "success update comment likes" });
};

// 댓글 좋아요 취소
const updateCommentDislikes = (req, res) => {
  const { commentId } = req.params;

  if (!commentId) {
    console.log(`there is no comment id in params`);
  }

  // 데이터베이스 로직 - 댓글 좋아요 취소 업데이트

  // 결과값
  res.status(200).json({ result: "success", message: "success update comment dislikes" });
};

module.exports = {
  getCommentList,
  createComment,
  updateComment,
  deleteComment,
  updateCommentLikes,
  updateCommentDislikes,
};
