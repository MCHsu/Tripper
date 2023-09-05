const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/Tripper/",

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("swiper-"),
        },
      }));
  },
});
