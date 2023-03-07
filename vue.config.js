const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  {
    transpileDependencies: true,
    // devtool: "source-map",
  },
  {
    publicPath:
      process.env.NODE_ENV === "production"
        ? "/vuex-api-demo-NBAteam-LAKERS/"
        : "/"
  }
);
