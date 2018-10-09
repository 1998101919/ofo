// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0,
  },
  bindcontroltap: function (e) {
    switch (e.controlId) {
      case 1:
        this.movetoCenter()
        break;
      case 2 : 
      if(this.timer){
        wx.navigateBack({
          delta : 1
        })
      }else{
        wx.scanCode({
          success: (res) => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5b3d92478dfeb0124ad1443a/demo/get/password',
              success: (res) => {
                console.log(res)
                wx.hideLoading()
                wx.redirectTo({ //扫码成功跳转
                  url: '../scanResult/index?password=' + res.data.data.password +
                  '&number=' + res.data.data.number, //将数据传送过去
                })
                wx.showToast({
                  title: '获取密码成功',
                  duration: 1000,
                })
              }
            })
          },
          fail: (err) => {
            // console.log(err)
          }
        })
      }
      break;
      case 3 :
      wx.navigateTo({
        url: '../warn/index',
      })
      break;
      case 4 : 
      wx.navigateTo({
        url: '../my/index',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.timer)
    this.timer = options.timer;
    // 设置位置
    wx.getLocation({
        success: (res) => {
          this.setData({
            latitude: res.latitude,
            longitude: res.longitude
          })
        }
      })
      // 设置控件信息
      wx.getSystemInfo({
        success: (res) => {
          // console.log(res)
          this.setData({
            controls: [
              {
                id: 1,
                iconPath: '../../images/location.png',
                position: {
                  width: 50,
                  heigth: 50,
                  left: 20,
                  top:res.windowHeight - 100,
                },
                clickable: true,
              },
              {
                id: 2,
                iconPath: '../../images/use.png',
                position: {
                  width: 100,
                  heigth: 100,
                  left: res.windowWidth / 2 - 50,
                  top: res.windowHeight - 150,
                },
                clickable: true,
              },
              {
                id: 3,
                iconPath: '../../images/warn.png',
                position: {
                  width: 50,
                  heigth: 50,
                  left: res.windowWidth - 80,
                  top: res.windowHeight - 100,
                },
                clickable: true,
              },
              {
                id: 4,
                iconPath: '../../images/avatar.png',
                position: {
                  width: 60,
                  heigth: 60,
                  left: res.windowWidth - 80,
                  top: res.windowHeight - 200,
                },
                clickable: true,
              },
              {
                id: 5,
                iconPath: '../../images/marker.png',
                position: {
                  width: 30,
                  heigth: 40,
                  left: res.windowWidth / 2 - 15,
                  top: res.windowHeight / 2 - 45,
                },
              },
            ]
          })
        },
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
  //通过微信接口创建地图上下文
  onShow: function() {
    this.mapctx = wx.createMapContext('ofo-map')
    this.movetoCenter();
  },
  //回到原点
  movetoCenter : function () {
    this.mapctx.moveToLocation()
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





