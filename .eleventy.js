module.exports = function(eleventyConfig) {
  // 1. 直接复制静态资源到输出目录
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("base.css");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");

  // 2. 告诉系统内容存放在哪里
  return {
    dir: {
      input: ".",
      output: "_site",
      data: "_data"
    },
    // 使用 Nunjucks 作为模板引擎（因为它最像 HTML）
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
