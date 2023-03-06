package com.ml.mlpricexcx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author  
 * @since 2023-3-6
 */
@Mapper
public interface XcxDAO extends BaseMapper {

    List<HashMap<String, Object>> getTest();

    String getPhone(@Param("purePhoneNumber") String purePhoneNumber);
}
