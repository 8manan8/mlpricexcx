package com.ml.mlpricexcx.service.impl;

import com.ml.mlpricexcx.mapper.XcxDAO;
import com.ml.mlpricexcx.service.XcxService;
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
public class XcxEServiceImpl implements XcxService {

    @Autowired
    private XcxDAO xcxDao;

    @Override
    public Object getTest(String a0000) {
        List<HashMap<String, Object>> list_result = new ArrayList<HashMap<String, Object>>();
        list_result = xcxDao.getTest();
        return list_result;
    }
}
