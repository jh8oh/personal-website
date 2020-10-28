module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Ji Ho Oh";
      return args;
    });
  },
};
