import * as api from './util';

// 生成二维码接口
export function getCode() {
  return api.get('/books/promote/yards');
}

// 推广用户列表
export function getPromote(data) {
  return api.get('/books/promote/page',data);
}

// 个人中心
export function personalCenter(data) {
  return api.get('/books/user/personalCenter',data);
}

// 上传图片
export function uploadImg(data) {
  return api.post('/books/user/upload',data);
}

// 退出登录
export function quit(data) {
  return api.get('/books/user/quit',data);
}

// 签到
export function signIn(data) {
  return api.get('/books/user/signIn',data);
}
