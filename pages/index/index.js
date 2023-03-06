// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    HW:0,                     //井道宽度
    HD:0,                     //井道深度
    MODEL_S:['ML-PE01','ML-K','ML-H'],  //梯型
    MODEL_S_shows:false,        //梯型
    MODEL_S_index:0,            //梯型
    currentIndex: 0,             //测试页签
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  //获取输入的井道宽度
  HWInput:function(e){
    this.setData({
        HW: e.detail.value
      })
  },
//获取输入的井道深度
  HDInput:function(e){
    this.setData({
        HD: e.detail.value
      })
  },
  loginBtnClick(){
    let HW1=Number(this.data.HW)*0.7
    let HD1=Number(this.data.HD)*0.8
    wx.showModal({
      title: '建议轿厢尺寸',
      content: '井道宽度:' +HW1 +';' +'\r\n' +
               '井道深度:'+HD1,
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
  },
  //梯型下拉框
  model_s_selectTaps() {
    this.setData({
      MODEL_S_shows: !this.data.MODEL_S_shows,
    });
  },
  // 点击下拉列表  梯型
   model_s_optionTaps(e) {
    let MS_Indexs = e.currentTarget.dataset.modelsindex; //获取点击的下拉列表的下标
     
    this.setData({
        MODEL_S_index: MS_Indexs,
        MODEL_S_shows: !this.data.MODEL_S_shows
    });
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
   // tab切换开始
   pagechange: function (e) {
    // 通过touch判断，改变tab的下标值
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex;
      currentPageIndex = (currentPageIndex + 1) % 2;
      // 拿到当前索引并动态改变
      this.setData({
        currentIndex: currentPageIndex,
      })
    }
  },

  //点击tab时触发
  titleClick: function (e) {
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: e.currentTarget.dataset.idx
    })
  }

// tab切换结束
})
