// components/test-comp/test-comp.js
const myBehavior = require('../../behavior/my-behavior.js')
Component({
  options: {
    multipleSlots: true
  },
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 1,
    some: {
      obj: {
        name:'wanghuahua',
        age: 18
      },
      arr: ['lol', 'cf', 'dnf']
    }
  },
  // 监听
  observers: {
    'num, max': function(num, max) {
      console.log(num)
      console.log(max)
    },
    'max': function(newval){
      console.log(newval)
    },
    'some': function(newval) {
      console.log('some:',newval)
    },
    'some.obj': function(newVal) {
      console.log('some.obj:',newVal)
    },
    'some.obj.name': function(newval) {
      console.log('some.obj.name',newval)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    add() {
      // this.setData({'some.name': {obj: {name: 'wanghuahua', age: 18}}})
      // this.setData({'some.obj.name': 'liminghua'})

      this.setData({num: this.data.num+1})
      // 验证子传父
      this.setData({max: this.properties.max+1})
      this.triggerEvent('editMax',{value: this.properties.max})
      // this._showNum()
    },
    _showNum() {
      wx.showToast({
        title: `目前数值为： ${this.data.num}`,
      })
    },
    verify() {
      console.log(this.data)
      console.log(this.properties)
      console.log(this.data === this.properties)
    }
  }
})
