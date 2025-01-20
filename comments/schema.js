const { indexRegex, parentTypeRegex, contentRegex } = require("../constants/regexs");

const getCommentSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
};

const createCommentSchema = {
  parentType: {
    required: true,
    regex: parentTypeRegex,
  },
  parentId: {
    required: true,
    regex: indexRegex,
  },
  accountId: {
    required: true,
    regex: indexRegex,
  },
  content: {
    required: true,
    regex: contentRegex,
  },
};

const updateCommentSchema = {
  commentId: {
    required: true,
    regex: indexRegex,
  },
  content: {
    required: true,
    regex: contentRegex,
  },
};

const deleteCommentSchema = {
  commentId: {
    required: true,
    regex: indexRegex,
  },
};

const createCommentLikeSchema = {
  commentId: {
    required: true,
    regex: indexRegex,
  },
  accountId: {
    required: true,
    regex: indexRegex,
  },
};

const deleteCommentLikeSchema = {
  commentId: {
    required: true,
    regex: indexRegex,
  },
};

const createCommentDislikeSchema = {
  commentId: {
    required: true,
    regex: indexRegex,
  },
  accountId: {
    required: true,
    regex: indexRegex,
  },
};

const deleteCommentDislikeSchema = {
  commentId: {
    required: true,
    regex: indexRegex,
  },
};

module.exports = {
  getCommentSchema,
  createCommentSchema,
  updateCommentSchema,
  deleteCommentSchema,
  createCommentLikeSchema,
  deleteCommentLikeSchema,
  createCommentDislikeSchema,
  deleteCommentDislikeSchema,
};
