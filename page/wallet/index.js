// page/wallet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money : 0,
    ticket : 2
  },
  recharge : function () {
    wx.navigateTo({
      url: '../recharge/index',
    })
  },
  ticket : function () {
    wx.showModal({
      title: `你现在有2张用车卷`,
    })
  },
  money: function () {
    wx.showModal({
      title: `99元押金,退款`,
    })
  },
  about: function () {
    wx.showModal({
      title: `让世界没有陌生的角落,我们已服务21个国家,超过2亿人`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.getStorage({
      key: 'money',
      success: (res) => {
        console.log(res)
        this.setData({
          money: res.data
        })
      },
    })
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