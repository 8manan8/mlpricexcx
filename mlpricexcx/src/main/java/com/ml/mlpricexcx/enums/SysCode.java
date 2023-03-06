package com.ml.mlpricexcx.enums;

/**
 * 枚举
 *  系统请求状态码
 */

public enum SysCode {

    SUCCESS(200,"成功"),

    USERNAME_OR_PASSWORD_ERROR(11201,"用户名或密码错误"),
    NOINTERFACE(11400, "接口不存在"),
    FAIL(11300, "业务错误"),
    //错误
    ZDRW_NAME(11601, "任务名称已存在"),

    REPEAT_ERROR(11408,"新密码和旧密码重复"),
    REPEAT_REPEAT(11409,"两次输入的密码不同"),
    NODATA(11301, "业务失败-没有数据"),
    DATA_ERROR(11302,"考核暂未开启 不能对人员进行评价"),
    APPKEY_EMPTY(11401,"appkey或appsecret为空"),
    APPKEY_ERROR(11402,"appkey或appsecret不正确"),
    TOKEN_EMPTY(11403,"token为空,请先登录"),
    TOKEN_ERROR(11404,"token值不正确或已经过期,请重新登录"),
    USERID_ERROR(11405,"登录信息与token信息不匹配,非法请求请确认"),
    SERVICEURL_ERROR(11406,"没有访问此服务的权限或地址地址,请确认"),
    API_RATELIMIT(11407,"访问次数受限"),
    //异常
    ERROR(11500, "接口异常"),
    SIGN_PARAM_EMPTY(11501,"签名参数为空或缺失"),
    SIGN_TIMESTAMP_EXPIRE(11502,"请求已过期"),
    SIGN_ERROR(11503,"非法请求,验签失败"),
    //限流
    REQUEST_LIMIT(11504,"请求超时"),
    PARAM_ERROR(11505,"参数错误"),
    RESULT_TOO_LARGE(11506,"返回结果过多"),
    DATE_PARAM_ERROR(11507,"日期参数格式错误"),
    USER_ERROR(11504,"用户名或密码错误"),
    A0184_PASSWD_NULL(11504,"身份证或密码为空"),
    A0184_DOUBLE(11507,"账号已存在"),
    LOGINNAME_ERROR(11506, "用户已存在"),
    ROLE_ERROR(11505,"没有访问权限"),
    LOGONFAILTIMES_ERROR(11504,"密码输入错误次数过多,请稍后重试");

    //修改密码
//	REPEAT_ERROR(11408,"输入密码重复");

    private int code;
    private String codemsg;

    SysCode(int code, String name){
        this.code=code;
        this.codemsg=name;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getCodemsg() {
        return codemsg;
    }

    public void setCodemsg(String codemsg) {
        this.codemsg = codemsg;
    }

}
