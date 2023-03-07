const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  {
    transpileDependencies: true,
    // devtool: "source-map",
  },
  {
    publicPath: "/vuex-api-demo-NBAteam-LAKERS/",
  }
);
