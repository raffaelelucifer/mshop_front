/** 
 * 项目所有请求接口
 * Created by chen on 2018/8/9.
 */
import {get,post} from './axios.js'


/**
 * 查询产品
 * type 1书籍类,2食品类
 * page 页码
 */
export function productRequest(data){
    return post('/product_get/api/',data);
}

/**
 * 加入购物车
 * cou 商品数量
 * obj 商品的id
 */
export function addintoRequest(data){
    return post('/addinto_cart/api/',data);
}

/**
 * 查看购物车
 */
export function listCartRequest(data){
    return post('/list_cart/api/',data);
}

/**
 * 删除购物车商品
 * "id":5
 */
export function removefromCartRequest(data){
    return post('/removefrom_cart/api/',data);
}

/**
 * 注册
 */
export function registerRequest(data){
    return post('/register/api/',data);
}

/**
 * 登录
 */
export function loginRequest(data){
    return post('/login/api/',data);
}

/**
 * 重置密码接口
 */
export function pwsResetRequest(data){
    return post('/resetpassword/api/',data);
}

/**
 * 忘记密码接口
 */
export function forgetRequest(data){
    return post('/forget/api/',data);
}

/**
 * 下订单接口
 * 没有参数
 * 将购物车的内容写入到订单数据表中
 */
export function addtoOrderRequest(data){
    return post('/addto_order/api/',data);
}

/**
 * 查看当前订单中的内容
 * 没有参数
 */
export function listorderRequest(data){
    return post('/listorder/api/',data);
}

/**
 * 下订单，传入用户名，地址，联系方式三个参数
 * name, addr, phone
 */
export function addtoMyorderRequest(data){
    return post('/addto_myorder/api/',data);
}

/**
 * 查看订单信息
 * 没有参数
 */
export function listmyorderRequest(data){
    return post('/listmyorder/api/',data);
}