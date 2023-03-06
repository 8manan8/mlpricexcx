// pages/login/login.js
import {getPhone} from "../../api/xcx.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
          phone:0,
          wxCode:'',
          wxOpenId:'',
          API_RESULT:''

    },
   //通过绑定手机号登录
 
   getPhoneNumber (e) {
    console.log(e)
    console.log(e.detail.code)
    getPhone({
        code: e.detail.code
    }).then(res=>{
        if(res.data.name.length > 0){
            wx.showToast({
                title: '登陆成功,欢迎您'+ res.data.name,
                icon: 'success',
                duration: 2000
              })
        }
        wx.showToast({
            title: '登陆失败,您的手机号没有权限访问该小程序',
            icon: 'fail',
            duration: 2000
          })
    })
    },


　　getPhoneNumber1: function (e) {
    var ivObj = e.detail.iv
    var telObj = e.detail.encryptedData
    var codeObj = "";
    var that = this;
    //------执行Login---------
    wx.login({
     success: res => {
      console.log('code转换', res.code);
       
  
 　　　　　　//用code传给服务器调换session_key
      wx.request({
       url: 'https://你的接口文件路径', //接口地址
       data: {
        appid: "wxf835c55e460f7c8b",
        secret: "dcb70f9f05f865890ac7f6ce4f0c64f8",
        code: res.code,
        encryptedData: telObj,
        iv: ivObj
       },
       success: function (res) {
        phoneObj = res.data.phoneNumber;
        console.log("手机号=", phoneObj)
        wx.setStorage({  //存储数据并准备发送给下一页使用
         key: "phoneObj",
         data: res.data.phoneNumber,
        })
       }
      })
  
      //-----------------是否授权，授权通过进入主页面，授权拒绝则停留在登陆界面
      if (e.detail.errMsg == 'getPhoneNumber:user deny') { //用户点击拒绝
       wx.navigateTo({
        url: '../lift/category',
       })
      } else { //允许授权执行跳转
      //navigateTo  不能挑战 tabbar页签
       wx.switchTab({
         url: '../lift/category',
       })

      }
     }
    });
 },
 

　getPhoneNumber2: function (e){
        
        // ====== 【获取Code】
        wx.login({
            success: (res) => {
                console.log(res);
                this.setData({
                    wxCode: res.code,
                })
                // ====== 【获取OpenId】
                let m_code = this.data.wxCode; // 获取code
                let m_AppId = "wxf835c55e460f7c8b"; // appid
                let m_mi = "dcb70f9f05f865890ac7f6ce4f0c64f8"; // 小程序密钥
                console.log("m_code:" + m_code);
                let url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + m_AppId + "&secret=" + m_mi + "&js_code=" + m_code + "&grant_type=authorization_code";
                console.log(url);
                wx.request({
                    url: url,
                    success: (res) => {
                        console.log(res);
                        this.setData({
                            wxOpenId: res.data.openid

                        })
                      
                        //获取到你的openid
                        console.log("====openID=======");
                        console.log(this.data.wxOpenId);
                        //调用API接口
                        this.GETAPI();
                    }
                })
            }
        })
 
    
   },
   //调用API接口
   GETAPI(){
 //API接口
 let url1='https://api.zjml.cc:9011/API/VALUES/?type=1&id=' + this.data.wxOpenId ;
   
    
     wx.request({
         url: url1,
         success: (res) => {
          
          console.log(res.data);
          this.setData({

            API_RESULT:res.data
          })
          //跳转页签
          this.API_SWITHTAB();
          //获取到你的openid
          //console.log("====openID=======");
          //console.log(this.data.wxOpenId);
           }
       })

   },
   //跳转页签
   API_SWITHTAB(){
    if(this.data.API_RESULT=="Y")
    {
        wx.switchTab({
        url: '../lift/category'
      })
    }
    else
    {

       wx.showModal({
       title: '登录失败!',
       content: '未授权用户:'+this.data.wxOpenId,
       complete: (res) => {
         if (res.cancel) {
           
         }
     
         if (res.confirm) {
           
         }
       }
     })
    }


   },
/*
   public function getUserMobile($appid){
    $post = Request::post();
    //获取手机凭证
    $data['openid'] = $post['openid'];
    $data['session_key'] = $post['session_key'];
    $result = $this->decryptData($post['encryptedData'],$post['iv'],$data,$appid,$data['session_key']);
    if ($result == 0) {
        return [code=>0,mag=>'成功',data=>$result]
    }
    return [code=>-1,mag=>'失败']
},
*/
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})