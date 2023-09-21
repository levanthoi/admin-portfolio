export function getRouterPage(path: string): string {
  // 获取page数据后面数据
  const pageIndex = path.indexOf('pages') + 5;
  // 文件后缀
  const lastIndex = path.lastIndexOf('.');
  // 去除pages和文件后缀
  let result = path.substring(pageIndex, lastIndex);

  // 如果是首页则直接返回/
  if (result === '/index') return '/';

  // 如果结尾是index则去除
  if (result.includes('index')) {
    const indexIdx = result.lastIndexOf('index') + 5;
    if (indexIdx === result.length) {
      result = result.substring(0, result.length - 6);
    }
  }

  return result;
}
