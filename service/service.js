export default function service(options){
  return new Promise((resolve, reject)=>{
    wx.request({
      method: options.methods || 'get',
      url: options.url,
      data: options.data,
      success: function(res){
        resolve(res)
      },
      fail: function(err){
        reject(err)
      }
    })
  })
}