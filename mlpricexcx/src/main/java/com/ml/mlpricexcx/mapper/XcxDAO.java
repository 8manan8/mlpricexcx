package com.ml.mlpricexcx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author  
 * @since 2021-10-25
 */
@Mapper
public interface XcxDAO extends BaseMapper {

    List<HashMap<String, Object>> getTest();
}
