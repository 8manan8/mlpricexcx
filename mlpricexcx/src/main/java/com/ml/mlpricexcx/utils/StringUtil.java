package com.ml.mlpricexcx.utils;

import org.springframework.util.StringUtils;

import java.io.*;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;

//import sun.misc.BASE64Decoder;
//import sun.misc.BASE64Encoder;

public class StringUtil {

    public static String getString(Object str) {
        return str == null ? "" : str.toString();
    }

    /**
     * 替换指定标识符为回车换行符
     *
     * @param str
     * @return
     */
    public static String newLineDecoder(String str) {
        if (str == null) {
            return null;
        }

        // 替换回换行符
        String base64ColumnValue = str.replace("[换行标识符]", "\r\n");
        base64ColumnValue = base64ColumnValue.replace("[回车符]", "\r");
        base64ColumnValue = base64ColumnValue.replace("[换行符]", "\n");
        return base64ColumnValue;
    }

    /**
     * 替换回车换行符为指定标识符
     *
     * @param str
     * @return
     */
    public static String newLineEncoder(String str) {

        if (str == null) {
            return null;
        }

        // 替换回换行符
        String base64ColumnValue = str.replace("\r\n", "[换行标识符]");
        base64ColumnValue = base64ColumnValue.replace("\r", "[回车符]");
        base64ColumnValue = base64ColumnValue.replace("\n", "[换行符]");
        return base64ColumnValue;
    }



    /***
     * 判定 字符串是否以文件文件夹形式结尾
     * @param path
     * @return
     */
    public static Boolean pathEnd(String path){
        return path.endsWith("/") || path.endsWith("\\") || path.endsWith(File.separator);
    }

    /***
     * 判定 字符串是否以文件文件夹形式开始
     * @param path
     * @return
     */
    public static Boolean pathStart(String path){
        return path.startsWith("/") || path.startsWith("\\") || path.startsWith(File.separator);
    }


    /**
     * 替换一个字符串中的某些指定字符
     *
     * @param strData     String 原始字符串
     * @param regex       String 要替换的字符串
     * @param replacement String 替代字符串
     * @return String 替换后的字符串
     */
    public static String replaceString(String strData, String regex,
                                       String replacement) {
        if (strData == null) {
            return null;
        }
        int index;
        index = strData.indexOf(regex);
        String strNew = "";
        if (index >= 0) {
            while (index >= 0) {
                strNew += strData.substring(0, index) + replacement;
                strData = strData.substring(index + regex.length());
                index = strData.indexOf(regex);
            }
            strNew += strData;
            return strNew;
        }
        return strData;
    }


    /**
     * 还原字符串中特殊字符 与 encodeXML 功能相反
     *
     * @param xmlString
     * @return
     */
    public static String decodeXML(String xmlString) {
        //&lt; <  小于号
        //&gt; > 大于号
        //&amp; &  和
        //&apos; ' 单引号
        //&quot; " 双引号
        if (xmlString == null || xmlString.length()==0) {
            return xmlString;
        }

        xmlString = replaceString(xmlString, "&lt;", "<");
        xmlString = replaceString(xmlString, "&gt;", ">");
        xmlString = replaceString(xmlString, "&apos;", "'");
        xmlString = replaceString(xmlString, "&quot;", "\"");
        xmlString = replaceString(xmlString, "&amp;", "&");
        xmlString = xmlString.replace("lt;", "<");
        xmlString = xmlString.replace("gt;", ">");
        xmlString = xmlString.replace("apos;", "'");
        xmlString = xmlString.replace("quot;", "\"");
        xmlString = xmlString.replace("amp;", "&");

        xmlString = xmlString.replace("[换行标识符]", "\r\n");
        xmlString = xmlString.replace("[回车符]", "\r");
        xmlString = xmlString.replace("[换行符]", "\n");
        xmlString = xmlString.replace("[空格符]", " ");
        xmlString = xmlString.replace("br", "\n");

        return xmlString;
    }

    //将被转换的< >转义为 lt; gt;的字符串输出，显示不正确 - 弃用
    public static String ReplaceAngleBrackets(String Vals) {
        if (Vals == null) {return "";}
        return Vals.replace("lt;", "<").replace("gt;", ">");
    }

    /**
     * 过滤xml的特殊字符 与 decodeXML 功能相反
     *
     * @param xmlString
     * @return
     */
    public static String encodeXML(String xmlString) {
        //&lt; <  小于号
        //&gt; > 大于号
        //&amp; &  和
        //&apos; ' 单引号
        //&quot; " 双引号
        if (xmlString == null || "".equals(xmlString)) {
            return xmlString;
        }
        xmlString = xmlString.replace("&lt;", "<");
        xmlString = xmlString.replace("&gt;", ">");
        xmlString = xmlString.replace("&amp;", "&");
        xmlString = xmlString.replace("&apos;", "'");
        xmlString = xmlString.replace("&quot;", "\"");
        xmlString = xmlString.replace("\r\n", "[换行标识符]"); // 替换回换行符
        xmlString = xmlString.replace("\r", "[回车符]");
        xmlString = xmlString.replace("\n", "[换行符]");
        xmlString = xmlString.replace(" ", "[空格符]");


        char ch;
        String str;
        StringBuffer buf = new StringBuffer();
        //其他特殊字符
        for (int i = 0; i < xmlString.length(); i++) {
            ch = xmlString.charAt(i);
            if (!isValidChar(ch)) { //检查是否特殊字符串
                continue;
            }
            //str = String.valueOf(ch);
            str = Character.toString(ch);
            if ('<' == ch) {
                str = "&lt;";
            }
            if ('>' == ch) {
                str = "&gt;";
            }
            if ('&' == ch) {
                str = "&amp;";
            }
            if ('\'' == ch) {
                str = "&apos;";
            }
            if ('"' == ch) {
                str = "&quot;";
            }
            buf.append(str);
        }
        return buf.toString();
    }

    /**
     * 是否特殊字符
     *
     * @param ch
     * @return
     */
    public static boolean isValidChar(char ch) {
        int hightByte;
        int lowByte;
        byte[] bytes = (String.valueOf(ch)).getBytes();
        if (bytes.length > 2) { // 错误
            return false;
        }
        if (bytes.length == 1) { // 英文字符
            hightByte = bytes[0];
            if ((hightByte >= 32) && (hightByte <= 126)) {
                return true;
            } else {
                return false;
            }
        }
        if (bytes.length == 2) { // 中文字符
            hightByte = bytes[0] & 0xff;
            lowByte = bytes[1] & 0xff;
            if ((hightByte >= 129 && hightByte <= 254)
                    && (lowByte >= 64 && lowByte <= 254)) { //81 40 - FE FE 转成ascii为： 129 64 - 254 254
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    //判断字符串为空或为空格
    public static boolean isNullOrLen0(String str) {
        if (str == null) {
            return true;
        }
        if ("".equals(str.replace(" ", ""))) {
            return true;
        }
        return false;
    }


    /**
     * 加空格处理
     */
    public static String Space(String Value) {
        String text_Value = "";
        if (Value != null) {
            if (Value.length() == 2) {
                StringBuffer sb = new StringBuffer();
                int length = Value.length();
                for (int i1 = 0; i1 < length; i1++) {
                    if (length - i1 <= 2) { // 防止ArrayIndexOutOfBoundsException
                        sb.append(Value.substring(i1, i1 + 1)).append("  ");
                        sb.append(Value.substring(i1 + 1));
                        break;
                    }
                    sb.append(Value.substring(i1, i1 + 1)).append("  ");
                }
                text_Value = sb.toString();
            } else {
                text_Value = Value;
            }
        }
        return text_Value;
    }


    /**
     * 获取 机构 主键生成方式
     *
     * @param str
     * @return
     */
    public static String getB0111(String str) {
        str = str.toUpperCase();
        String[] key = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A",
                "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
        // 如果个位数不为Z 那么+1
        if (!str.substring(2).equals("Z")) {
            for (int i = 0, j = key.length; i < j; i++) {
                if (key[i].equals(str.substring(2))) {
                    return str.substring(0, 2) + key[i + 1];
                }
            }
        } else {
            // 个位是Z 十位数不是Z,那么十位数+1,个位置变为0
            if (!str.substring(1, 2).equals("Z")) {
                for (int i = 0, j = key.length; i < j; i++) {
                    if (key[i].equals(str.substring(1, 2))) {
                        return str.substring(0, 1) + key[i + 1] + "0";
                    }
                }
            } else {
                // 个位是Z 十位数是Z,那么十位数+1,个位置变为0
                for (int i = 0, j = key.length; i < j; i++) {
                    if (key[i].equals(str.substring(0, 1))) {
                        return key[i + 1] + "00";
                    }
                }
            }
        }
        return null;
    }


    public static Boolean isEmpty(Object text) {
        return text == null || text.toString().length() == 0;
    }

    public static Boolean isNotEmpty(Object text) {
        return !isEmpty(text);
    }

    public static Boolean isEmptyOrNull(Object text) {
        return isEmpty(text) || "null".equals(text);
    }

    /**
     * sysOutRtn 是否日志输出
     */
    public static String sysOutRtn(String info, String sql) {
        System.out.println(info + ":" + sql);
        return sql;
    }
    public static List<HashMap<String, Object>> getLowerKey(List<HashMap<String, Object>> oldList) {
        if (oldList.size()==0){return oldList;}
        List<HashMap<String, Object>> newList = new ArrayList<HashMap<String, Object>>();
        for (HashMap<String, Object> oldMap : oldList) {
            HashMap<String, Object> newMap = new HashMap<String, Object>();
            for (String key : oldMap.keySet()) {
                newMap.put(key.toLowerCase(), oldMap.get(key));
            }
            newList.add(newMap);
        }
        return newList;
    }


}