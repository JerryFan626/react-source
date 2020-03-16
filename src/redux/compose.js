/**
 * 源码里面最有意思，竟然最开始是重载的变量数
 * 估计是为了提高一点点性能
 * @param  {...any} fns
 */

function compose(...fns) {
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

export default compose;
