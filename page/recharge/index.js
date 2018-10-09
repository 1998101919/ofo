// page/recharge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money : null,
  },
  getValue : function (e) {
    this.setData({
      money : e.detail.value
    })
  },
  recharge : function () {
    if (this.data.money <= 0 || isNaN(this.data.money)){
        wx.showToast({
          title: '充值失败',
        })
      }else{
        wx.getStorage({
          key: 'money',
          success: (res) => {
            console.log(parseInt(res.data) + parseInt(this.data.money))
            wx.setStorage({
              key: 'money',
              data: parseInt(res.data) + parseInt(this.data.money)
            })
          },
          fail : (err) => {
            wx.setStorage({
              key: 'money',
              data: this.data.money,
            })
          }
        }),
        wx.navigateBack({
          delta : 1
        })
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '充值'
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