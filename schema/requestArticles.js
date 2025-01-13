const {
  indexRegex,
  titleRegex,
  searchTypeRegex,
  contentRegex,
} = require("../constants/regexs");

const getArticleListSchema = {
  category: {
    required: true,
    regex: indexRegex,
  },
};

const getArticleListByKeywordSchema = {
  category: {
    required: true,
    regex: indexRegex,
  },
  type: {
    required: true,
    regex: searchTypeRegex,
  },
  keyword: {
    required: false,
    regex: titleRegex,
    default: "",
  },
};

const getArticleSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
};

const createArticleSchema = {
  accountId: {
    required: true,
    regex: indexRegex,
  },
  category: {
    required: true,
    regex: indexRegex,
  },
  title: {
    required: true,
    regex: titleRegex,
  },
  content: {
    required: false,
    regex: contentRegex,
    default: "",
  },
};

const updateArticleSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
  title: {
    required: true,
    regex: titleRegex,
  },
  content: {
    required: false,
    regex: contentRegex,
    default: "",
  },
};

const deleteArticleSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
};

const createArticleLikeSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
  accountId: {
    required: true,
    regex: indexRegex,
  },
};

const deleteArticleLikeSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
};

const createArticleDislikeSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
  accountId: {
    required: true,
    regex: indexRegex,
  },
};

const deleteArticleDislikeSchema = {
  articleId: {
    required: true,
    regex: indexRegex,
  },
};

module.exports = {
  getArticleListSchema,
  getArticleListByKeywordSchema,
  getArticleSchema,
  createArticleSchema,
  updateArticleSchema,
  deleteArticleSchema,
  createArticleLikeSchema,
  deleteArticleLikeSchema,
  createArticleDislikeSchema,
  deleteArticleDislikeSchema,
};
