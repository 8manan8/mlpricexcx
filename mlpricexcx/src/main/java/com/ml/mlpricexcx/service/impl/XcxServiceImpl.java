package com.ml.mlpricexcx.service.impl;

import com.ml.mlpricexcx.mapper.XcxDAO;
import com.ml.mlpricexcx.service.XcxService;
import com.ml.mlpricexcx.utils.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author
 * @since 2023-10-26
 */
@Service
public class XcxServiceImpl implements XcxService {

    @Autowired
    private XcxDAO xcxDao;

    @Override
    public Object getTest(String a0000) {
        List<HashMap<String, Object>> list_result = new ArrayList<HashMap<String, Object>>();
        list_result = xcxDao.getTest();
        return list_result;
    }

    @Override
    public String getPhone(String purePhoneNumber) {
        String name = xcxDao.getPhone(purePhoneNumber);
        name = StringUtil.isNull(name);
        return name;
    }

    @Override
    public String getNum(String openid) {
        String num = xcxDao.getNum(openid);
        return num;

    }
}
