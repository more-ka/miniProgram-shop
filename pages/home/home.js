// pages/home/home.js
// 注册一个页面
// 页面也有自己的生命周期函数
import request from '../../service/service.js'
Page({
  // 页面的初始数据
  data: {
    list: [],
    imagePath: '',
    iaActive: ''
  },
  // 监听页面的生命周期函数
  // 页面加载出来时
  onLoad: function(options) {
    // 原生的方式发送网络请求
    // this.get_data_native()
    // 封装request请求
    request({
      methods: 'post',
      url: 'http://httpbin.org/post',
      data: {
        name: 'monkeySun',
        age: 5000
      }
    }).then(res => {
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_data_native() {
  // get请求无参数
    // wx.request({
    //   url: 'http://httpbin.org',
    //   success: function(res) {
    //     console.log(res)
    //   }.bind(this),
    // })
  // get请求带参数
    // wx.request({
    //   url: 'http://httpbin.org',
    //   data:{
    //     name: 'monkeySun',
    //     name: 5000
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }.bind(this),
    // })
  // post请求带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'monkeySun',
    //     age: 5000
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }.bind(this),
    // })
  }
})