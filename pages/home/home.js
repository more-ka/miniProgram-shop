import {getBanner,getHotList} from '../../service/api.js'
Page({
  data: {
    banners: [],
    hotList: []
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
  }
})