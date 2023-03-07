// pages/login/login.js
import {
    getPhone,
    getOpenid
} from "../../api/xcx.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: 0,
        wxCode: '',
        wxOpenId: '',
        API_RESULT: '',
        prompt: '',
        prompt2: ''

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        wx.login({
            success(res) {
                if (res.code) {
                    console.log(res.code)
                    //发起网络请求
                    getOpenid({
                        code: res.code
                    }).then(res1 => {
                        console.log(res1)
                        if ("openid" in res1) {
                            if(res1.num == 0){
                                const text = "抱歉您暂无权限访问该小程序,请将上述代码发送给管理员,开启权限!"
                                that.setData({
                                    prompt: res1.openid,
                                    prompt2: text
                                })
                            }else{
                                wx.redirectTo({
                                    url: '../lift/category',
                                })
                            }
                            return
                        }
                    })

                }
            }
        })
    },
    //通过绑定手机号登录

    getPhoneNumber(e) {
        getPhone({
            code: e.detail.code
        }).then(res => {
            if (res.data.name.length > 0) {
                wx.showToast({
                    title: '登陆成功,欢迎您' + res.data.name,
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

    //跳转页签
    API_SWITHTAB() {
        if (this.data.API_RESULT == "Y") {
            wx.switchTab({
                url: '../lift/category'
            })
        } else {

            wx.showModal({
                title: '登录失败!',
                content: '未授权用户:' + this.data.wxOpenId,
                complete: (res) => {
                    if (res.cancel) {

                    }

                    if (res.confirm) {

                    }
                }
            })
        }


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