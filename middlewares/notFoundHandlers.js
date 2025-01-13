const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "요청처리 실패. 조회 결과 없음." });
};

module.exports = notFoundHandler;
