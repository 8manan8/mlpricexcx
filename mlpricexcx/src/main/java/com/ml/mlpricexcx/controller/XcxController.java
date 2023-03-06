package com.ml.mlpricexcx.controller;

import com.ml.mlpricexcx.entity.Pub;
import com.ml.mlpricexcx.entity.Result;
import com.ml.mlpricexcx.service.XcxService;
import org.springframework.beans.factory.annotation.Autowired;
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
public class XcxController {

    @Autowired
    private XcxService xcxService;

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


}
