/**
 * 通用接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './axios'; // 导入axios中创建的axios实例

const common = {
    // 获取设备接口
    getGlobalInterface(data) {
        return axios.post(`${base.api}/getpara/shm/realtime`, data);
    }
}

export default common;