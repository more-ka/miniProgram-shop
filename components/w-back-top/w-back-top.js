// components/w-back-top/w-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    distance: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backTopClick() {
      console.log('111111111')
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})