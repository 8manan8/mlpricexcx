// pages/lift/keti/keti.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
          model:['ML-PE01','ML-PE02'],
          jifang:['有机房','无机房'],
          index:0,
          guantong_datas:['是','否'],   //是否贯通选项
          guantong_shows:false,
          guantong_indexs:0,             //是否贯通索引
          //载重速度层站
          main_datas:[['630','800','1000'],['1.0','1.5','1.75'],['2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32']],              
          multiArray1: [['ML-PE01', 'ML-PE02','ML-K','ML-WK'], ['有机房', '无机房']],
          multiIndex: [0, 0],
          TEST: [{id:'有机房',model1:'ML-PE01'},
                 {id:'有机房',model1:'ML-PE02'},
                 {id:'有机房',model1:'ML-K'},
                 {id:'无机房',model1:'ML-PE01'},
                 {id:'无机房',model1:'ML-WK'}
                ],
         test1:[['有机房','无机房'],[]],
         youjifang:['ML-PE01','ML-PE02','ML-K'],
         wujifang:['ML-PE01','ML-WK'],
         multiArray: [{
            id: 1,
            label: "有机房",
            children: [{
                id: 2,
                label: "ML-PE01",
                children: [{
                    id: 3,
                    label: "1",
                  },
                  {
                    id: 4,
                    label: "2",
                  },
                  {
                    id: 5,
                    label: "3",
                  },
                ],
              },
              {
                id: 7,
                label: "ML-PE02",
                children: [{
                    id: 8,
                    label: "4",
                  },
                  {
                    id: 9,
                    label: "5",
                  },
                  {
                    id: 10,
                    label: "6",
                  },
                ],
              },
              {
                id: 12,
                label: "ML-K",
                children: [{
                    id: 13,
                    label: "7",
                  },
                  {
                    id: 14,
                    label: "8",
                  },
                  {
                    id: 15,
                    label: "9",
                  },
                ],
              },
            ],
          },
          {
            id: 17,
            label: "无机房",
            children: [{
                id: 18,
                label: "ML-PE01",
                children: [{
                    id: 19,
                    label: "10",
                  },
                  {
                    id: 20,
                    label: "11",
                  },
                ],
              },
              {
                id: 21,
                label: "ML-WK",
                children: [{
                    id: 22,
                    label: "12",
                  },
                  {
                    id: 23,
                    label: "13",
                  },
                ],
              },
            ],
          },
        ],
        multiIndex: [0, 0, 0],
        multiIds: [],
        newArr: []
    },
  // 点击下拉显示框   是否贯通
  guantong_selectTaps() {
    this.setData({
      guantong_shows: !this.data.guantong_shows,
    });
  },
  // 点击下拉列表  是否贯通
   guantong_optionTaps(e) {
    let GT_Indexs = e.currentTarget.dataset.guantong_index; //获取点击的下拉列表的下标
    console.log(GT_Indexs)
    this.setData({
        guantong_indexs: GT_Indexs,
        guantong_shows: !this.data.guantong_shows
    });
 
  },
   /*
     * 测试多列联动选择
     */
    bindMultiPickerChange(e) {
        console.log(this.data.multiIds);
      },
      
      bindMultiPickerColumnChange(e) {
        let data = {
          newArr: this.data.newArr,
          multiIndex: this.data.multiIndex,
          multiIds: this.data.multiIds,
        };
        data.multiIndex[e.detail.column] = e.detail.value;
     
        let searchColumn = () => {
          let arr1 = [];
          let arr2 = [];
          this.data.multiArray.map((v, vk) => {
            if (data.multiIndex[0] === vk) {
              data.multiIds[0] = {
                ...v,
              };
              v.children.map((c, ck) => {
                arr1.push(c.label);
                if (data.multiIndex[1] === ck) {
                  data.multiIds[1] = {
                    ...c,
                  };
                  c.children.map((t, vt) => {
                    arr2.push(t.label);
                    if (data.multiIndex[2] === vt) {
                      data.multiIds[2] = {
                        ...t,
                      };
                    }
                  });
                }
              });
            }
          });
          data.newArr[1] = arr1;
          data.newArr[2] = arr2;
        };
        switch (e.detail.column) {
          case 0:
            // 每次切换还原初始值
            data.multiIndex[1] = 0;
            data.multiIndex[2] = 0;
            // 执行函数处理
            searchColumn();
            break;
          case 1:
            data.multiIndex[2] = 0;
            searchColumn();
            break;
        }
        this.setData(data);
      },
     
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
        let state = {
          arr: [],
          arr1: [],
          arr2: [],
          arr3: [],
          multiIds: []
        }
        this.data.multiArray.map((v, vk) => {
          state.arr1.push(v.label);
          if (this.data.multiIndex[0] === vk) {
            state.multiIds[0] = v;
          }
          if (state.arr2.length <= 0) {
            v.children.map((c, ck) => {
              state.arr2.push(c.label);
              if (this.data.multiIndex[1] === ck) {
                state.multiIds[1] = c;
              }
              if (state.arr3.length <= 0) {
                c.children.map((t, tk) => {
                  state.arr3.push(t.label);
                  if (this.data.multiIndex[2] === tk) {
                    state.multiIds[2] = t;
                  }
                });
              }
            });
          }
        });
        state.arr[0] = state.arr1;
        state.arr[1] = state.arr2;
        state.arr[2] = state.arr3;
        this.setData({
          newArr: state.arr,
          multiIds: state.multiIds,
        });
      },
      /*
     * 测试picker 多列选择
    
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
     */
     /*
     * 测试picker 单列选择
     
    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    */
    /**
     * 生命周期函数--监听页面加载
    
    onLoad(options) {

    },
 */
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