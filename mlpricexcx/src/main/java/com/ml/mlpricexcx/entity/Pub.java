package com.ml.mlpricexcx.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 公共参数
 * @author mn
 * @email 964552253@qq.com
 * @create 2022/3/21
 **/
@Data
@Accessors(chain = true)
public class Pub implements Serializable {
    private static final long serialVersionUID = 1L;


    //@ApiModelProperty(required = false, value = "人员主键ID", name = "人员主键ID", example = "")
    private String a0000;

}
