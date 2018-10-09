// page/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      userName: '',
      nickName: '未登录'
    },
    btnType: 'primary',
    btnName: '登录'
  },
  login: function() {
    if (this.data.btnName === '登录') {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.setData({
                  userInfo: {
                    userName: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                  },
                  btnName: '退出登录',
                  btnType: 'warn'
                })
                wx.setStorage({
                  key: 'userInfo',
                  data : {
                    userInfo : {
                      userName: res.userInfo.avatarUrl,
                      nickName: res.userInfo.nickName
                    },
                    btnName: '退出登录',
                    btnType: 'warn'
                  }
                })
            }
          })

        }
      })
    } else {
      wx.removeStorage({
        key: 'userInfo',
        success: (res) => {
          console.log(res)
        },
      }),
      this.setData({
        userInfo: {
          userName: '',
          nickName: '未登录',
        },
        btnName: '登录',
        btnType: 'primary'
      })
    }
  },
  clickWallet : function () {
    wx.navigateTo({
      url: '../wallet/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      wx.getStorage({
        key : 'userInfo',
        success : (res) => {
          console.log(res)
          this.setData({
            userInfo: {
              userName: res.data.userInfo.userName,
              nickName: res.data.userInfo.nickName,
            },
            btnName: res.data.btnName,
            btnType: res.data.btnType
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})