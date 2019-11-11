/**
 * 接口域名的管理
 */
const base = {
    api: ''
}
// 环境的切换
if (process.env.NODE_ENV == 'development') {
    base.api = 'http://183.233.186.20:8148';
    // base.api = 'http://crm.harmonye.cn:88';

}
else {
    base.api = 'http://183.233.186.20:8148';
}

export default base;