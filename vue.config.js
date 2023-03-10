const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  {
    transpileDependencies: true,
    // devtool: "source-map",
  },
  {    
    publicPath: "vuex-api-demo-NBAteam-LAKERS",
    base: "vuex-api-demo-NBAteam-LAKERS"
      //process.env.NODE_ENV === "production"
      //  ? "/vuex-api-demo-NBAteam-LAKERS/"
      //  : "/"
  }
);
