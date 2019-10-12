import {getBanner,getHotList} from '../../service/api.js'
Page({
  data: {
    banners: [],
    hotList: [],
    showBackTop: false
  },
  onLoad: function() {
    getBanner().then((res) => {
      this.setData({
        banners:res.data.lists
      })
    }),
    getHotList().then((res) => {
      this.setData({
        hotList:res.data.lists
      })
    })
  },
  onReachBottom(){
    getHotList().then((res) => {
      this.setData({
        hotList: this.data.hotList.concat(res.data.lists)
      })
    })
  },
  onPageScroll(options){
    let temp = options.scrollTop>500
    if(temp!==this.data.showBackTop)
    console.log('111')
    this.setData({
        showBackTop: options.scrollTop>500
    })
  }
})