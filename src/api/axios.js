/**
 * http配置
 */
import axios from 'axios'
import { Toast } from 'vant';

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 5 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

// http请求拦截器
instance.interceptors.request.use(config => {
    // config.headers['userId'] = sessionStorage.getItem('userId');
    config.headers['userId'] = localStorage.getItem('userId');
    return config
}, error => {
    Toast('请检查您的网络');
    return Promise.reject(error)
})
// http响应拦截器
instance.interceptors.response.use(response => {// 响应成功关闭loading
    if (response.status === 200) {
        if (response.data.state !== 0) {
            Toast(response.data.msg);
        }
        return Promise.resolve(response.data);
    } else {
        Toast("系统异常");
        return Promise.reject(response);
    }
}, error => {
    Toast("请求超时");
    // if (error.response.status) {
    //     switch (error.response.status) {
    //         case 404:
    //             Toast('网络请求不存在');
    //             break;
    //         default:
    //             Toast(error.response.data.msg);
    //     }
    // }
    return Promise.reject(error)
})

export default instance