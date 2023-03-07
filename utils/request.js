const baseURL = 'http://127.0.0.1:9011';
// const baseURL = 'https://api.zjml.cc:9011';

export function request(params){
  
  let dataObj = params.data || {};
  let headerObj = {			
    'content-type': 'application/json'    
  }
  
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + params.url,
      method:params.method || "GET",
      data:dataObj,
      header:headerObj,
      success:res=>{
          if(res.data.success){
              resolve(res.data.data);
          }else{
              reject(res);
              wx.showToast({
                title: res.data.errMsg,
                mask:true,
                type:'error'
              })
          }
      },
      // fail:err=>{
        // reject(err)
      // }
    })
  })
}