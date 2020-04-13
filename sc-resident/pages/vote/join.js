// pages/vote/join.js
const activityUrl=require('../../config').activityUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityId:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      activityId:options.id
    })
    console.log(options.id)


  },
  submit: function(){
    wx.request({
      url: activityUrl+'vote/findOne',
      method:'POST',
      data:{
        residentUserId:wx.getStorageSync('userInfo').id,
        activityId:this.data.activityId
      },
      success:function(res){
        console.log(res.data)
      }
    })
    wx.showModal({
      title: '提示',
      content: '提交成功',
      showCancel: false,
      confirmText: "确定",
      success: function(res) {
        wx.navigateBack({
          delta: 2
      })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})