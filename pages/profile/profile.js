// pages/profile/profile.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // methods
  async getUserInfo() {
    const res = await wx.p.request({
      url: 'https://www.fastmock.site/mock/ab640732cd952a3946966c679d352e5c/api/userInfo',
      method: 'GET'
    })
    console.log(res);
  },
  handleEdit(e) {
    console.log(e)
    if (e.target.dataset.step==1) {
      this.setAge(e.target.dataset.step)
    } else {
      this.setName(e.target.dataset.step)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['name', 'age', 'getNum'],
      actions: ['setName','setAge']
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
    this.storeBindings.destroyStoreBindings()
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