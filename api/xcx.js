import {request} from "../utils/request"

//获取openid
export function getOpenid(data){
  return request({
    url:"/ml/xcx/getOpenid",
    method:"POST",
    data
  })
}

//首页登陆获取手机号判断是否可以使用系统
export function getPhone(){
  return request({
    url:"/ml/xcx/getPhone",
    method:"POST"
  })
}

