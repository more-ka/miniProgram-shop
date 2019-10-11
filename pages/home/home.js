import {getBanner} from '../../service/api.js'
Page({
  data: {
    banners: []
  },
  onLoad: function() {
    getBanner().then((res) => {
      this.setData({
        banners:res.data.lists
      })
    })
  }
})