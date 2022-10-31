export default {
  /**
   * 指定打包构建入口
   */
  entry: ['src/index.js'],
  /**
   * 指定 cjs 格式的打包方式
   * "rollup" | "babel" | { type, file } | false
   * 下面指定 cjs 的打包方式为 'babel'，同时也代表开启了 cjs 打包
   */
  cjs: 'babel',
  /**
   * 指定 esm 格式的打包方式
   * importLibToEs: 是否在进行 esm 打包时，输出把 import 项里的 /lib/ 转换为 /es/
   */
  esm: { type: 'babel', importLibToEs: true },
  /**
   * 透传配置给 docz，可以有 title、theme、themeConfig 等
   * base
   */
  doc: { base: '/switch' },
  /**
   * 代码 commit 前，开启 eslint 检查，开启 prettier 检查
   */
  // preCommit: {
  //   eslint: true,
  //   prettier: true,
  // },
};
