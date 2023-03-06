package com.ml.mlpricexcx.entity;

import com.ml.mlpricexcx.enums.SysCode;
import lombok.Data;

/**
 * 接口通用返回类
 *
 * @author admin
 */

@Data
//@ApiModel(description ="公共出参")
public class Result implements java.io.Serializable  {
    @Override
    public String toString() {
        return "{" +
                "success=" + success +
                ", errorcode=" + errorcode +
                ", errormsg='" + errormsg + '\'' +
                ", data=" + data +
                ", successMessage=" + successMessage +
                '}';
    }

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    //@ApiModelProperty(example="true",name = "是否成功")
    private boolean success; // 业务状态码，默认为true
    //@ApiModelProperty(example="200",name = "错误码")
    private int errorcode;
    //@ApiModelProperty(example="成功",name = "错误信息")
    private String errormsg = "";
    //@ApiModelProperty(name = "数据包体json")
    private Object data;
    //@ApiModelProperty(name = "成功信息")
    private Object successMessage;

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }

    //@ApiModelProperty(name = "Object")
    private Object object;


    public void setData(Object data) {
        this.data = data;
    }

    public Object getData() {
        return data;
    }

    public Object getSuccessMessage() {
        return successMessage;
    }

    public void setSuccessMessage(Object successMessage) {
        this.successMessage = successMessage;
    }

    public int getErrorcode() {
        return errorcode;
    }

    public void setErrorcode(int errorcode) {
        this.errorcode = errorcode;
    }

    public String getErrormsg() {
        return errormsg;
    }

    public void setErrormsg(String errormsg) {
        this.errormsg = errormsg;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }



//	public Result(){
//         Result dto1=new Result();
//         dto1.setSuccess(true);
//         dto1.setErrorcode(SysCode.SUCCESS.getCode());
//         dto1.setErrormsg(SysCode.SUCCESS.getCodemsg());
//
//	}


    public static Result success(String successMessage, Object data) {
        Result dto = new Result();
        dto.setSuccess(true);
        dto.setErrorcode(SysCode.SUCCESS.getCode());
        dto.setErrormsg(SysCode.SUCCESS.getCodemsg());
        dto.setData(data);
        dto.setSuccessMessage(successMessage);
        return dto;
    }

    public static Result success(Object data) {
        Result dto = new Result();
        dto.setSuccess(true);
        dto.setErrorcode(SysCode.SUCCESS.getCode());
        dto.setErrormsg(SysCode.SUCCESS.getCodemsg());
        dto.setData(data);
        return dto;
    }


    /**
     * 错误返回
     * @param
     * @param
     * @return
     */
    public static Result fail(){
        return fail(SysCode.ERROR);
    }

    public static Result fail(SysCode syscode){
        return fail(syscode,syscode.getCodemsg());
    }

    public static Result fail(SysCode syscode, String message){
        Result dto = new Result();
        dto.setSuccess(false);
        dto.setErrorcode(syscode.getCode());
        dto.setErrormsg(message);
        dto.setData(message);
        return dto;
    }

    public static Result fail(Object object, String message){
        Result dto = new Result();
        dto.setSuccess(false);
        dto.setObject(object);
        dto.setErrormsg(message);
        return dto;
    }
    public static Result success() {
        Result dto = new Result();
        dto.setSuccess(true);
        dto.setErrorcode(SysCode.SUCCESS.getCode());
        dto.setErrormsg(SysCode.SUCCESS.getCodemsg());
        return dto;
    }

}
