// pages/lift/huoti/huoti.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        ht_amount:0,               //货梯价格
        MODEL_S:['ML-H','ML-WH'],  //梯型
        MODEL_S_shows:false,               //梯型
        MODEL_S_index:0,                  //梯型
        TOTAL_AMOUNT:0,                  //总价

        DL:['2000KG','3000KG','4000KG'], //载重
        DL_shows:false,             //载重
        DL_index:0,                 //载重
        V:['0.5','1.0'],    //速度
          
        V_shows:false,            //速度
        V_index:0,                //速度
        baseprice:[
                    {
                    "model":'ML-H',
                    "price":[
                              
                             {"DL":"2000KG",
                             "V":"0.5",
                             "price":"137800"
                             },
                             {"DL":"3000KG",
                             "V":"0.5",
                             "price":"179600"
                             },
                             
                             {"DL":"4000KG",
                             "V":"0.5",
                             "price":"189600"
                             },
                            
                             {"DL":"2000KG",
                             "V":"1.0",
                             "price":"137800"
                             },
                             {"DL":"3000KG",
                             "V":"1.0",
                             "price":"179600"
                             },
                             
                             {"DL":"4000KG",
                             "V":"1.0",
                             "price":"189600"
                             }
                            ]
                    },
                    {
                        "model":'ML-WH',
                        "price":[
                                   
                                 {"DL":"2000KG",
                                 "V":"0.5",
                                 "price":"137800"
                                 },
                                 {"DL":"3000KG",
                                 "V":"0.5",
                                 "price":"179600"
                                 },
                                 {"DL":"4000KG",
                                 "V":"0.5",
                                 "price":"189600"
                                 },
                                
                                 {"DL":"2000KG",
                                 "V":"1.0",
                                 "price":"137800"
                                 },
                                 {"DL":"3000KG",
                                 "V":"1.0",
                                 "price":"179600"
                                 },
                                 {"DL":"4000KG",
                                 "V":"1.0",
                                 "price":"189600"
                                 }
                                ]
                        }

                  ]

    },
    get_amount(){
      let model1=this.data.MODEL_S[this.data.MODEL_S_index]
      let v1=this.data.V[this.data.V_index]
      let dl1=this.data.DL[this.data.DL_index]
      let model_length=this.data.baseprice.length
      for(let i=0;i<model_length;i++)
      {
     
        if(this.data.baseprice[i].model==model1)
        {
       
            this.setData({
                TOTAL_AMOUNT:0                 //总价
                
            });
            let price_length=this.data.baseprice[i].price.length
            for(let j=0;j<price_length;j++)
            {
              
                let dl2=this.data.baseprice[i].price[j].DL;
                let v2=this.data.baseprice[i].price[j].V;
             
               if(dl1==dl2 && v1==v2)
               {
           
                this.setData({
                    TOTAL_AMOUNT:this.data.baseprice[i].price[j].price
                });
                return true;
               }
            }
        }
        else
        {
            this.setData({
                TOTAL_AMOUNT:0
            });  
        }  
      }

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
      // 载重下拉框
      dl_selectTaps(){
        this.setData({
          DL_shows: !this.data.DL_shows
        });
        },
        // 点击下拉列表  载重
        dl_optionTaps(e) {
          console.log('132');
          let z_index=e.currentTarget.dataset.dlindex1;
          console.log(z_index);
          this.setData({
            DL_index: z_index,
            DL_shows: !this.data.DL_shows
       
          });   
         },
         //速度 下拉框
         v_selectTaps(){
            this.setData({
              V_shows: !this.data.V_shows
            });
            },
            // 点击下拉列表  速度
             v_optionTaps(e) {
              
              let v_index=e.currentTarget.dataset.vindex1;
               
              this.setData({
                V_index: v_index,
                V_shows: !this.data.V_shows,
              });   

             },
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