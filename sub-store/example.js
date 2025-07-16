// 示例:
// 脚本操作器
// 1. 后端版本(>2.14.88):
$server.name = 'prefix-' + $server.name
$server.ecn = true
$server['test-url'] = 'http://1.0.0.1/generate_204'
// 2. 操作函数
function operator(proxies, targetPlatform, context) {
  return proxies.map(proxy => {
    // 在此处更改代理信息

    return proxy;
  });
}

// 脚本过滤器
// 1. 后端版本(>2.14.119):
const port = Number($server.port)
return [80].includes(port)

// 2. 过滤函数
function filter(proxies, targetPlatform) {
  return proxies.map(proxy => {
    // 如果当前代理被选中，则返回 true

    return true;
  });
}