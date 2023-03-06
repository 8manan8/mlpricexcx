package com.ml.mlpricexcx.controller;

import com.alibaba.fastjson2.JSONObject;
import com.ml.mlpricexcx.entity.Pub;
import com.ml.mlpricexcx.entity.Result;
import com.ml.mlpricexcx.enums.SysCode;
import com.ml.mlpricexcx.service.XcxService;
import com.ml.mlpricexcx.utils.HttpClientUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;

/**
 * 小程序
 * @author mn
 * @email 964552253@qq.com
 * @create 2023/3/6
 **/
@RestController
@RequestMapping("/ml/xcx")
@PropertySource("classpath:application.properties")
public class XcxController {

    @Autowired
    private XcxService xcxService;
    @Value("${appid}")
    private String appid;
    @Value("${appsecret}")
    private String appsecret;

    //获取access_token的url
    @Value("${xcxapi.accesstokenurl}")
    private String accesstokenurl;

    //获取手机号url
    @Value("${xcxapi.getphoneurl}")
    private String phoneurl;
    /**
     * 测试
     * @return
     */
    @PostMapping("/getTest")
    @CrossOrigin
    public Result getPskhzy(@RequestBody Pub pub, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return Result.success(xcxService.getTest(pub.getA0000()));
    }

    public Object getAccessToken() {
        String url=String.format(accesstokenurl, appid, appsecret);
        String res = HttpClientUtil.doGet(url);
        JSONObject accesstoken = JSONObject.parseObject(res);
        return accesstoken.getString("access_token");
    }
    /**
     * 测试
     * @return
     */
    @PostMapping("/getPhone")
    @CrossOrigin
    public Result getPhone(@RequestBody Pub pub, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        //String url=String.format(phoneurl, getAccessToken());
        //String phonecode = JSONObject.toJSONString(pub);
        //String res = HttpClientUtil.doPost(url,phonecode);
        //JSONObject phone = JSONObject.parseObject(res);
        //if (phone.getInteger("errcode") != 0){
        //    return Result.fail(SysCode.ERROR);
        //}
        //String name = xcxService.getPhone(phone.getJSONObject("phone_info").getString("purePhoneNumber"));
        String name = xcxService.getPhone("15958558379");
        return Result.success(name);
    }


}
