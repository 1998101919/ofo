// page/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputDefaultValue : {
      num : 0,
      desc : '',
    },
    checkboxChange : [],
    btnColor : '#f2f2f2',
    urls: [],
    actionText: "拍照/相册",
    itemsValue : [
      {
      value : '私锁使用',
      checked: false,
      color: '#b9dd08'
    },
      {
        value: '违规乱停',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '扫码坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '链条坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '轮胎坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '刹车坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '密码不对',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '其他故障',
        checked: false,
        color: '#b9dd08'
      },
    ]
  },
  //改变属性
  checkboxChange : function (e) {
    let val = e.detail.value;
    if(val.length == ''){
        this.setData({
          checkboxChange : null,
          btnColor : '#f2f2f2'
        })
    }else{
        this.setData({
          checkboxChange : val,
          btnColor : '#b9dd08'
        })
    }
  },
//相机拍摄
  bindCamera : function () {
    wx.chooseImage({
      success: (res) => {
        let img = res.tempFilePaths;
        for(let prop of img){
          this.data.urls.push(prop)
        }
        this.setData({
          urls : this.data.urls
        })
        if(img.length > 0){
          this.setData({
            actionText : '+'
          })
        }
      },
    })
  },
  //小图标删除
  del : function (e) {
    let index = e.target.dataset.index;
    let _urls = this.data.urls;
    _urls.splice(index,1)
    this.setData({
      urls : _urls
    })
    if(_urls.length <= 0){
      this.setData({
        actionText : '拍摄/相机'
      })
    }
  },
  //改变num属性
  numberChange : function (e) {
    this.setData({
      inputDefaultValue : {
        num: e.detail.value,
        desc: this.data.inputDefaultValue.desc
      }
    })
  },
  //改变desc属性
  descChange: function (e) {
    this.setData({
      inputDefaultValue: {
        num: this.data.inputDefault.num,
        desc : e.detail.value
      }
    })
  },
  //点击按钮触发
  submit : function () {
    if (this.data.checkboxChange.length > 0 && this.data.urls.length > 0){
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b3d92478dfeb0124ad1443a/demo/get/submit#!method=get',
      success : (res) => {
        wx.showToast({
          title: '提交成功',
        })
      }
    })
    }else{
      wx.showModal({
        title: '请填写完整的信息',
        content: '',
        success : (res) => {
          if(res.confirm){

          }else{
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
    
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