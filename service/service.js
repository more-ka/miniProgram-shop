const URL = 'http://rap2api.taobao.org/app/mock/7058'

export default function service(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      method: options.methods || 'get',
      url: URL + options.url,
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}