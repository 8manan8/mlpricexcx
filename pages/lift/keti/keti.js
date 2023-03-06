// pages/lift/keti/keti.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
          HDRL1_check:false,                         //扶手1单选框
          HDRL2_check:false,                         //扶手2单选框 

          xuanpei_amount:0,                         //选配加价合计
          HDRL1_price:0,                            //扶手1价格
          HDRL2_price:0,                            //扶手2价格

          MODEL_S:['ML-PE01','ML-K','ML-WK'],  //梯型
          MODEL_S_shows:false,               //梯型
          MODEL_S_index:0,                  //梯型
          TOTAL_AMOUNT:0,                  //总价
          zh_amount:0,                   //装潢总价      
          JXXH:['ML-J40','ML-J11','ML-J13','ML-J16'],    //轿厢型号
          JXXH_shows:false,             //轿厢型号
          JXXH_index:0,                 //轿厢型号
          JXXH_price:0,                  //轿厢型号加价

          COPTYPE:['COP116H-C','COP111H-C'],  //操纵箱型号
          COPTYPE_shows:false,             //操纵箱型号
          COPTYPE_index:0,                //操纵箱型号
          COPTYPE_price:0,              //操纵箱型号

          currentIndex: 0,             //测试页签布局
          DL:['630KG','800KG','1000KG'], //载重
          DL_shows:false,             //载重
          DL_index:0,                 //载重
          V:['1.0','1.5','1.75'],    //速度
          
          V_shows:false,            //速度
          V_index:0,                //速度
          K:'4350',                //顶层高度
          R:15000,                 //提升高度
          S:1500,                 //底坑深度
          F:['2','3','4','5','6','7','8','9','10'],  //层站
          F_shows:false,             //层站
          F_index:3,                 //层站
          NBLD:['2','3','4','5','6','7','8','9','10'],  //厅门数
          NBLD_shows:false,                          //厅门数
          NBLD_index:3,                              //厅门数
          select_baseprice:0,                      //计算的基价
          baseprice:[{
            "model":"ML-PE01",
            "price":[{"DL":"630KG",
                      "V":"1.0",
                      "F":"2",
                      "price":"144400"
                     },
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"3",
                        "price":"150400"
                     },
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"4",
                        "price":"156400"
                     }
                     ,
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"5",
                        "price":"162400"
                     }
                     ,
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"6",
                        "price":"168400"
                     }
                     ,
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"7",
                        "price":"174400"
                     }
                     ,
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"8",
                        "price":"180400"
                     }
                     ,
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"9",
                        "price":"186400"
                     }
                     ,
                     {"DL":"630KG",
                        "V":"1.0",
                        "F":"10",
                        "price":"192400"
                     } ,
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"2",
                        "price":"146500"
                     }
                     ,
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"3",
                        "price":"152500"
                     }
                     ,
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"4",
                        "price":"158500"
                     } ,
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"5",
                        "price":"164500"
                     },
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"6",
                        "price":"170500"
                     }
                     ,
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"7",
                        "price":"176500"
                     },
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"8",
                        "price":"182500"
                     },
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"9",
                        "price":"188500"
                     }
                     ,
                     {"DL":"800KG",
                        "V":"1.0",
                        "F":"10",
                        "price":"194500"
                     }

                    ]
             },
             {
                "model":"ML-K", 
                "price":[{
                          "DL":"630KG",
                          "V":"1.0",
                          "F":"2",
                          "price":"144400"
                         },
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"3",
                            "price":"150400" 
                         }
                         ,
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"4",
                            "price":"156400" 
                         }
                         ,
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"5",
                            "price":"162400" 
                         }
                         ,
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"6",
                            "price":"168400" 
                         }
                        ]
             }
             ,
             {
                "model":"ML-WK", 
                "price":[{
                          "DL":"630KG",
                          "V":"1.0",
                          "F":"2",
                          "price":"150400"
                         },
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"3",
                            "price":"156400" 
                         }
                         ,
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"4",
                            "price":"162400" 
                         }
                         ,
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"5",
                            "price":"168400" 
                         }
                         ,
                         {
                            "DL":"630KG",
                            "V":"1.0",
                            "F":"6",
                            "price":"174400" 
                         }
                        ]
             }
            ],

          model:['ML-PE01','ML-PE02'],
          jifang:['有机房','无机房'],
          index:0,
          guantong_datas:['否','是'],   //是否贯通选项
          guantong_shows:false,
          guantong_indexs:0,             //是否贯通索引
          //载重速度层站
          main_paras:[['630','800','1000'],['1.0','1.5','1.75'],['2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32']],   
          multiIndex_mainparas: [0, 0, 0],           
          multiArray1: [['ML-PE01', 'ML-PE02','ML-K','ML-WK'], ['有机房', '无机房']],
         // multiIndex: [0, 0],
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
                    label: "客梯",
                  },
                  {
                    id: 4,
                    label: "客梯",
                  },
                  {
                    id: 5,
                    label: "客梯",
                  },
                ],
              },
              {
                id: 7,
                label: "ML-PE02",
                children: [{
                    id: 8,
                    label: "客梯",
                  },
                  {
                    id: 9,
                    label: "客梯",
                  },
                  {
                    id: 10,
                    label: "客梯",
                  },
                ],
              },
              {
                id: 12,
                label: "ML-K",
                children: [{
                    id: 13,
                    label: "客梯",
                  },
                  {
                    id: 14,
                    label: "客梯",
                  },
                  {
                    id: 15,
                    label: "客梯",
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
                    label: "客梯",
                  },
                  {
                    id: 20,
                    label: "客梯",
                  },
                ],
              },
              {
                id: 21,
                label: "ML-WK",
                children: [{
                    id: 22,
                    label: "客梯",
                  },
                  {
                    id: 23,
                    label: "客梯",
                  },
                ],
              },
            ],
          },
        ],
        multiIndex: [0, 0, 0],
        multiIds: [],
        newArr: [],
        multiIds_mainparas: [],
        active: 1
    },
     // 点击下拉显示框   梯型 单选框
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
  
   // 点击下拉列表  载重
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

   //速度
   // 点击下拉列表  速度
   v_selectTaps(){
    this.setData({
      V_shows: !this.data.V_shows
    });
    },
    // 点击下拉列表  速度
     v_optionTaps(e) {
      
      let v_index=e.currentTarget.dataset.vindex1;
      console.log(v_index);
      this.setData({
        V_index: v_index,
        V_shows: !this.data.V_shows,
      });   
      let getV=this.data.V[v_index];
      this.v_get_k(getV);
     },
    
    //速度联动顶层高度、底坑深度 函数
     v_get_k(v1){
        console.log(v1);
       if (v1=='1.0')
       {
        this.setData({
            'K':'4350',
             S:'1500'
        });
       }
        else if(v1=='1.5')
       {
        this.setData({
            'K':'4500',
            S:'1600'
        })
       }
       else if(v1=='1.75')
       {
        this.setData({
            'K':'4550',
            S:'1600'
        });
       }
       else
       {
        this.setData({
            'K':'0',
            S:'0'
        });
       }
      
     },
    //层站
   // 点击下拉列表  层站
   f_selectTaps(){
    this.setData({
      F_shows: !this.data.F_shows
    });
    },
    // 点击下拉列表  层站
     f_optionTaps(e) {
      
      let f_index=e.currentTarget.dataset.findex1;
      console.log(f_index);
      this.setData({
        F_index: f_index,
        NBLD_index:f_index,
        F_shows: !this.data.F_shows,
      });   
       this.f_get_r(this.data.F[f_index]);
     },
    //层站联动提升高度
     f_get_r(f1){

     this.setData({
        R: f1*3000
     });
     },
     //厅门
   // 点击下拉列表  厅门
    nbld_selectTaps(){
    this.setData({
      NBLD_shows: !this.data.NBLD_shows
    });
    },
    // 点击下拉列表  厅门
     nbld_optionTaps(e) {
      
      let nbld1_index=e.currentTarget.dataset.nbldindex1;
      console.log(nbld1_index);
      this.setData({
        NBLD_index: nbld1_index,
        NBLD_shows: !this.data.NBLD_shows,
      });   
       
     },
   /*
     * 测试多列联动选择
     */
    bindMultiPickerChange(e) {
        console.log(this.data.multiIds);
      },
       /*
     * 主参数 多级联动
     */
      bindMultiPickerChange_mainparas(e) {
        console.log(this.data.multiIds);
      },
         /*
     * 主参数 多级联动
     */
      bindMultiPickerColumnChange_mainparas(e){
          //data.multiIndex_mainparas[e.detail.column] = e.detail.value;
        this.setData({
            multiIndex_mainparas: e.detail.value
          }) 
         console.log(e.detail.value);
      
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

    },

    // tab切换开始
  // tab切换开始
  pagechange: function (e) {
    // 通过touch判断，改变tab的下标值
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex;
      //console.log(e.detail.current);
      //console.log(currentPageIndex);
      if(e.detail.current>currentPageIndex){

      currentPageIndex = (currentPageIndex + 1) % 4;
      this.setData({
        currentIndex: currentPageIndex,
      })
      }
      else
      {
        currentPageIndex = (currentPageIndex - 1) % 4;
        this.setData({
          currentIndex: currentPageIndex,
        })
      }
     
      // 拿到当前索引并动态改变
     
    }
  },

  //点击tab时触发
  titleClick: function (e) {
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: e.currentTarget.dataset.idx
    })
  },

// tab切换结束
// tab切换结束

//轿厢型号  开始
// 点击下拉列表  轿厢型号
jxxh_selectTaps(){
    this.setData({
      JXXH_shows: !this.data.JXXH_shows
    });
    },
    // 点击下拉列表  轿厢型号
    jxxh_optionTaps(e) {
      console.log('132');
      let j_index=e.currentTarget.dataset.jxxhindex1;
      console.log(j_index);
      console.log(this.data.JXXH[j_index]);
      
      this.setData({
        JXXH_index: j_index,
        JXXH_shows: !this.data.JXXH_shows
      })
        
      if( this.data.JXXH[j_index]=='ML-J11')
      {
       this.setData({
        JXXH_price:1000,
       
  
       })
      }
      else if( this.data.JXXH[j_index]=='ML-J13')
      {
       this.setData({
        JXXH_price:1300,
       
  
       })
      }
      else if( this.data.JXXH[j_index]=='ML-J16')
      {
       this.setData({
        JXXH_price:1600,
       
  
       })
      }
      else
      {
        this.setData({
            JXXH_price:0,
           

            })

      }
        //装潢价格汇总

        this.zh_totalAmount()

    },
// 轿厢型号 结束

//操纵箱开始   开始

// 点击下拉列表  操纵箱开始
coptype_selectTaps(){
    this.setData({
      COPTYPE_shows: !this.data.COPTYPE_shows
    });
    },
    // 点击下拉列表  操纵箱开始
    coptype_optionTaps(e) {
      console.log('132');
      let c_index=e.currentTarget.dataset.coptypeindex1;
     
      
      this.setData({
        COPTYPE_index: c_index,
        COPTYPE_shows: !this.data.COPTYPE_shows
      })
        
      if( this.data.COPTYPE[c_index]=='COP111H-C')
      {
       this.setData({
        COPTYPE_price:500,
       
  
       })
      }
      else
      {
        this.setData({
            COPTYPE_price:0,
           

            })

      }
         //装潢价格汇总
        this.zh_totalAmount()
 
    },
// 操纵箱型号 结束


//装潢价格汇总函数 开始
   zh_totalAmount(){   
     this.setData({
     zh_amount:this.data.COPTYPE_price+this.data.JXXH_price
     });
   
   },
  //装潢价格汇总函数 结束

       /**
       *  测试选择的数据
       */
      select_paras(e){

        //console.log(e.currentTarget.dataset.test);
        this.base_price(this.data.MODEL_S[this.data.MODEL_S_index],this.data.DL[this.data.DL_index],this.data.V[this.data.V_index],this.data.F[this.data.F_index]);
     
        this.total_amount();
       },

   //基价函数开始
   base_price(model,dl,v,f){
       
       

       let model_length=this.data.baseprice.length;
     
       for (let i=0;i<model_length;i++)
       {
        
         if(this.data.baseprice[i].model==model)
         {
           
            this.setData({
                select_baseprice:0
            });
             let price_length=this.data.baseprice[i].price.length
             for(let j=0;j<price_length;j++)
             {
                
                
                 let dl1=this.data.baseprice[i].price[j].DL;
                 let v1=this.data.baseprice[i].price[j].V;
                 let f1=this.data.baseprice[i].price[j].F;
               
              if(dl1==dl && v1==v && f1==f)
              {
                
                this.setData({
                    select_baseprice:this.data.baseprice[i].price[j].price
                });
             
               return true
              }
           
             }
         }
         else
         {

            this.setData({
                select_baseprice:0
            });
         }
       }
   


   },
 //基价函数结束
 //总价函数  开始
    total_amount()
    {
     this.setData({

        TOTAL_AMOUNT:Number(this.data.zh_amount)  + Number(this.data.select_baseprice) +Number(this.data.xuanpei_amount)
     });

    },
     //总价函数  结束
    // 选配 合计函数
    xuanpei_total()
    {
        this.setData({
        xuanpei_amount:this.data.HDRL1_price+ this.data.HDRL2_price
        })
    },
    // 选配  扶手1单选框
    radiocon1:function(e){  
        this.setData({
            HDRL1_check: !this.data.HDRL1_check
         })
         if(this.data.HDRL1_check==true)
         {
           this.setData({
            HDRL1_price:450

           })
           this.xuanpei_total();
         }
         else
         {
            this.setData({
                HDRL1_price:0   
               })  
               this.xuanpei_total();
         }
       },
        // 选配  扶手2单选框
    radiocon2:function(e){  
        this.setData({
            HDRL2_check: !this.data.HDRL2_check
         })
         if(this.data.HDRL2_check==true)
         {
           this.setData({
            HDRL2_price:450
            

           })
           this.xuanpei_total();
         }
         else
         {
            this.setData({
                HDRL2_price:0   
               })  
               this.xuanpei_total();
         }
       }
    
    
   
})