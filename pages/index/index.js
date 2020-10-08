//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tasks: [
      {taskName:"Euler's Formula: e^pi i = -1", checked:false, deleted:false},
      {taskName:"Pythagorean Theorem: a^2 + b^2 = c^2", checked:true, deleted:false},
    ],
    currentTaskInput: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Memorization App - Victor',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3f9675',
      animation: {
        duration: 500,
        timingFunc: 'easeIn'
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onDelete:function(e) {
    console.log(e.detail.id)
    this.data.tasks[e.detail.id].deleted = true
    this.setData({
      tasks: this.data.tasks
    })
  },

  onCheck:function(e) {
    console.log(e.detail.id)
    this.data.tasks[e.detail.id].checked = !this.data.tasks[e.detail.id].checked
    this.setData({
      tasks: this.data.tasks
    })
  },

  onTaskNameInput:function(e) {
    console.log(e.detail.value)
    this.setData({
      currentTaskInput:e.detail.value
    })
  },

  onNewTask:function() {
    if(this.data.currentTaskInput != "") {
      this.data.tasks.push({taskName: this.data.currentTaskInput, checked: false, deleted:false})
    }
    this.setData({
      tasks:this.data.tasks
    })
    console.log(this.data.tasks)
  }
})
